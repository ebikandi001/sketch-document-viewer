import { Document, Artboard } from 'domainModels';

export default interface IQueriable {
  getDocumentByShortId: (id: string) => Promise<Document>;

  getNextArtboard: (name: string) => Artboard;

  getPreviousArtboard: (name: string) => Artboard;
}
