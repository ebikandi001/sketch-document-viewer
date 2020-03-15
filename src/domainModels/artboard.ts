// TODO recheck after getting query-result
type Thumbnail = {
  url: string;
  height: string;
  width: string;
};

type File = Thumbnail & {
  scale: string;
  thumbnails: Thumbnail[];
};

export type Artboard = {
  name: string;
  isArtboard: boolean;
  files: File[];
};
