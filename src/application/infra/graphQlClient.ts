import ApolloClient, { gql } from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
import IQueriable from './IQueriable';
import { Document, Artboard } from 'domainModels';

export class GraphQlClient implements IQueriable {
  private client: ApolloClient<any>;
  private cachedDocument: Document;

  constructor() {
    // We'll add a cache layer to client just in case. Review if needed.
    const cache = new InMemoryCache({
      dataIdFromObject: (elem: any) => elem.shortId, // TODO review type
    });

    this.client = new ApolloClient({
      uri: 'https://graphql.sketch.cloud/api', // TODO set the endpoint in an .env file
      cache,
    });

    this.cachedDocument = {} as any; // TODO review type
  }

  private storeDocumentInCollection(document: Document) {
    this.cachedDocument = document;
  }

  // For simplicity we'll think that the document has been fetched already
  public getNextArtboard(artboardId: number) {
    const index =
      artboardId === this.cachedDocument.numArtboards - 1 ? 0 : artboardId + 1;

    return this.cachedDocument.artboards[index];
  }

  public getPreviousArtboard(artboardId: number) {
    const index =
      artboardId === 0 ? this.cachedDocument.numArtboards - 1 : artboardId - 1;

    return this.cachedDocument.artboards[index];
  }

  public async getDocumentByShortId(
    id: string = 'Y8wDM'
  ): Promise<Document | any> {
    // Hijacking ApolloQueryResultType as any
    try {
      const result = await this.client.query({
        query: gql`
          {
            share(shortId: "${id}") {
              shortId
              version {
                document {
                  name
                  artboards {
                    entries {
                      name
                      isArtboard
                      files {
                        url
                        height
                        width
                        scale
                        thumbnails {
                          url
                          height
                          width
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        `,
      });

      const { document } = result.data.share.version;

      const modeledDocument = {
        shortId: id,
        name: document.name,
        artboards: document.artboards.entries.map(
          (item: Artboard, index: number) => ({
            id: index,
            ...item,
          })
        ),
        numArtboards: document.artboards.entries.length,
      };

      this.storeDocumentInCollection(modeledDocument);

      return modeledDocument;
    } catch (e) {
      console.warn('[GraphQl]: getDocumentByShortId went wrong', e);
      return {};
    }
  }
}
