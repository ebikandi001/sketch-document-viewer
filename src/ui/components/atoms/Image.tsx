import React from 'react';
import styled from 'styled-components';
import { ComponentStyleProps } from '../theme';

export type ImageProps = ComponentStyleProps & {
  src: string;
  alt?: string;
};

const ImageContainer = styled.div`
  img {
    max-width: 100%;
    height: auto;
  }
`;

export const Image = ({ className, src, alt = '' }: ImageProps) => (
  <ImageContainer className={className}>
    <img src={src} alt={alt} />
  </ImageContainer>
);
