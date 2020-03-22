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
  height: 90%; // fallback for FF
  height: min(90%, ${(props: ArtboardStyleProps) => props.imgHeight}px);
  text-align: center;
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
