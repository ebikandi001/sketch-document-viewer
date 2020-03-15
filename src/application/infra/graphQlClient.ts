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

  // TODO pass shortId as arg for different documents
  public async getDocumentByShortId(): Promise<Document | any> { // Hijacking ApolloQueryResultType as any

    try {
      const result = await this.client.query({
        query: gql`
          {
            share(shortId: "Y8wDM") {
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
        name: document.name,
        artboards: document.artboards.entries,
      };

      return modeledDocument;
    } catch (e) {
      console.warn('[GraphQl]: getDocumentByShortId went wrong', e);
      return {};
    }
  }
}
