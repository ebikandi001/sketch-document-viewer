import { Document } from 'domainModels';

export default interface IQueriable {
  getDocumentByShortId: () => Document;
};