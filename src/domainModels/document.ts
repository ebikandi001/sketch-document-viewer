// TODO recheck after getting query-result
import { Artboard } from './artboard';

export type Document = {
  shortId: string;
  name: string;
  artboards: Artboard[];
  numArtboards: number;
}