import { Document } from '../../domainModels';

export default interface IDocumentRepository {
  getDocumentByShortId: (id: string) => Promise<Document>;
}
