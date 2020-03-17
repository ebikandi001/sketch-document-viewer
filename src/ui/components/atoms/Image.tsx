import React from 'react';
export type ImageProps = {
  src: string;
  alt: string;
};

export const Image = (props: any) => <img src={props.src} alt={props.alt} />;
