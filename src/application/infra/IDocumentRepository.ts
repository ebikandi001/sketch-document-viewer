import { Document, SimplifiedArtboard } from 'domainModels';

export default interface IDocumentRepository {
  getDocumentByShortId: (id: string) => Promise<Document>;

  getNextArtboard: (artboardId: number) => SimplifiedArtboard;

  getPreviousArtboard: (artboardId: number) => SimplifiedArtboard;
}
