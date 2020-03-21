import ApolloClient, { gql } from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
import IDocumentRepository from './IDocumentRepository';
import { Document, Artboard } from 'domainModels';

export class GraphQlClient implements IDocumentRepository {
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

    this.cachedDocument = {} as any; // TODO review any
  }

  // TODO review any
  private modelDataToDocument(data: any): Document {
    const getPicture = (artboard: Artboard) => {
      const pic = artboard.files.find(file => file.scale === 1) || {
        url: '',
        height: 0,
      };

      return {
        src: pic.url,
        imgHeight: pic.height,
      };
    };

    const { document } = data.share.version;

    return {
      shortId: data.share.shortId,
      name: document.name,
      artboards: document.artboards.entries.map(
        (item: Artboard, index: number) => ({
          id: index,
          name: item.name,
          picture: getPicture(item),
        })
      ),
      numArtboards: document.artboards.entries.length,
    };
  }

  public getArtboard(artboardId: number) {
    return this.cachedDocument.artboards[artboardId];
  }

  // For simplicity we'll think that the document has been fetched already
  public getNextArtboard(artboardId: number) {
    return artboardId === this.cachedDocument.numArtboards - 1
      ? 0
      : artboardId + 1;
  }

  public getPreviousArtboard(artboardId: number) {
    return artboardId === 0
      ? this.cachedDocument.numArtboards - 1
      : artboardId - 1;
  }

  public async getDocumentByShortId(id: string): Promise<Document | any> {
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

      const modeledDocument = this.modelDataToDocument(result.data);

      this.cachedDocument = modeledDocument;

      return modeledDocument;
    } catch (e) {
      console.warn('[GraphQl]: getDocumentByShortId went wrong', e);
      return {};
    }
  }
}
