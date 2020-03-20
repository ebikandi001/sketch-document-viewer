import { Document, Artboard } from 'domainModels';

export default interface IDocumentRepository {
  getDocumentByShortId: (id: string) => Promise<Document>;

  getNextArtboard: (artboardId: number) => Artboard;

  getPreviousArtboard: (artboardId: number) => Artboard;
}
