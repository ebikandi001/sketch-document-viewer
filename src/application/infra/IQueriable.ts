import { Document, Artboard } from 'domainModels';

export default interface IQueriable {
  getDocumentByShortId: (id: string) => Promise<Document>;

  getNextArtboard: (artboardId: number) => Artboard;

  getPreviousArtboard: (artboardId: number) => Artboard;
}
