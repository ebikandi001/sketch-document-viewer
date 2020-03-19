import React from 'react';
import styled from 'styled-components';
import { ComponentStyleProps } from '../theme';

export type ImageProps = ComponentStyleProps & {
  src: string;
  alt?: string;
  onClick?: any;
};

const ImageContainer = styled.div`
  img {
    max-width: 100%;
    height: auto;
    &.clickable {
      cursor: ${({ onClick }: any) => (onClick ? 'pointer' : 'auto')};
    }
  }
`;

export const Image = ({ className, src, alt = '', onClick }: ImageProps) => {
  const handleClick = (...args: any[]) => {
    try {
      onClick(args);
    } catch (e) {
      console.warn('[Image]: Bad onClick', e);
    }
  };

  return (
    <ImageContainer onClick={handleClick} className={className}>
      <img src={src} alt={alt} className={onClick ? 'clickable' : ''} />
    </ImageContainer>
  );
};
