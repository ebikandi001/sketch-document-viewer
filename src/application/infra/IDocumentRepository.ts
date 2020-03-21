import { Document, SimplifiedArtboard } from 'domainModels';

export default interface IDocumentRepository {
  getDocumentByShortId: (id: string) => Promise<Document>;

  getArtboard: (artboardId: number) => SimplifiedArtboard;

  getNextArtboard: (artboardId: number) => number;

  getPreviousArtboard: (artboardId: number) => number;
}
