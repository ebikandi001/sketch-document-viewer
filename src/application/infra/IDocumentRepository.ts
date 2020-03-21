import { Document, SimplifiedArtboard } from 'domainModels';

export default interface IDocumentRepository {
  getDocumentByShortId: (id: string) => Promise<Document>;

  getNextArtboard: (artboardId: number) => number;

  getPreviousArtboard: (artboardId: number) => number;
}
