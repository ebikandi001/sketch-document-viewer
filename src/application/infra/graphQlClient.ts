import ApolloClient, { gql } from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
import IQueriable from './IQueriable';
import { Document } from 'domainModels';

type DocumentCollection = {
  [key: string]: Document;
};

export class GraphQlClient implements IQueriable {
  private client: ApolloClient<any>;
  private documents: DocumentCollection;

  constructor() {
    // We'll add a cache layer to client just in case. Review if needed.
    const cache = new InMemoryCache({
      dataIdFromObject: (elem: any) => elem.shortId, // TODO review type
    });

    this.client = new ApolloClient({
      uri: 'https://graphql.sketch.cloud/api', // TODO set the endpoint in an .env file
      cache,
    });

    this.documents = {};
  }

  private storeDocumentInCollection(document: Document) {
    this.documents[document.shortId] = document;
  }

  // For simplicity we'll think that the document has been fetched already
  public getNextArtboard(name: string) {
    return {} as any;
  }

  // TODO
  public getPreviousArtboard(name: string) {
    return {} as any;
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
        artboards: document.artboards.entries,
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
