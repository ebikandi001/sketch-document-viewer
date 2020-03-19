import React from 'react';
export type ImageProps = {
  src: string;
  alt: string;
  onClick?: () => {};
};

export const Image = ({ src, alt, onClick }: any) => {
  const handleClick = (...args: any[]) => {
    try {
      onClick(args);
    } catch (e) {
      console.error('[Image]: Bad onClick', e);
    }
  };

  return <img src={src} alt={alt} onClick={handleClick} />;
};
