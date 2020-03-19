import React from 'react';
import styled from 'styled-components';
import { Label, LabelProps, Image, ImageProps } from '../atoms';

const ArtboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 40vh;
  width: 20vw;
  padding: 2vh 2vw;
  .artboard__image {
    flex-grow: 1;
    vertical-align: middle;
    max-width: 100%;
    height: auto;
  }

  .artboard__label {
    bottom: 1vh;
  }
`;

type ArtboardProps = { image: ImageProps; label: LabelProps };

export const Artboard = (props: ArtboardProps) => (
  <ArtboardContainer className="artboard">
    <Image {...props.image} className="artboard__image" />
    <Label {...props.label} className="artboard__label" />
  </ArtboardContainer>
);
