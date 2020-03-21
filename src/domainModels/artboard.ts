type Picture = {
  url: string;
  height: string;
};

type File = Picture & {
  scale: number;
};

export type Artboard = {
  id: number;
  name: string;
  files: File[];
};

export type SimplifiedArtboard = {
  id: number;
  name: string;
  picture: Picture;
};
