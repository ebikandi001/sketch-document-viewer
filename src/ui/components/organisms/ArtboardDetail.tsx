import React from 'react';
import styled from 'styled-components';
import { Image } from '../atoms';

type ArtboardProps = ArtboardStyleProps & {
  src: string;
};

type ArtboardStyleProps = {
  imgHeight: string;
};

const ArtboardContainer = styled.div`
  padding: 2%;
  height: min(100%, ${(props: ArtboardStyleProps) => props.imgHeight}px);
  .artboard__img {
    height: 100%;
    img {
      height: 100%;
    }
  }
`;

export const ArtboardDetail = (props: ArtboardProps) => {
  return (
    <ArtboardContainer className="artboard" imgHeight={props.imgHeight}>
      <Image className="artboard__img" src={props.src} />
    </ArtboardContainer>
  );
};
