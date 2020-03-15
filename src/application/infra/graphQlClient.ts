import ApolloClient, { gql, ApolloLink } from 'apollo-boost';
import IQueriable from './IQueriable';
import { Document } from 'domainModels';

// const query = gql`{
//   share(shortId: "Y8wDM") {
//     shortId
//     version {
//       document {
//         name
//         artboards {
//           entries {
//             name
//             isArtboard
//             files {
//               url
//               height
//               width
//               scale
//               thumbnails {
//                 url
//                 height
//                 width
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// }`;

// TODO pass shortId as arg for different documents
// export const graphQlGetDocumentsQuery = () => client.query({ query });

export class GraphQlClient implements IQueriable {
  private client: ApolloClient<any>;

  constructor() {
    this.client = new ApolloClient({
      uri: 'https://graphql.sketch.cloud/api', // TODO set the endpoint in an .env file
    });
  }

  // TODO pass shortId as arg for different documents
  public getDocumentByShortId(): Document {
    // await client.query({ query })
    return {
      name: "mockeed-doc",
      artboards: [],
    };
  }
};
