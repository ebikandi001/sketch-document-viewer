// TODO recheck after getting query-result
import { SimplifiedArtboard } from './artboard';

export type Document = {
  shortId: string;
  name: string;
  artboards: SimplifiedArtboard[];
  numArtboards: number;
};
