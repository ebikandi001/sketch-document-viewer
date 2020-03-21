import React from 'react';
import styled from 'styled-components';
import { Label, Image } from '../atoms';

export type ThumbnailProps = { picture: any; name: string };

const ThumbnailContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 1%;
  .artboard__image {
    flex-grow: 1;
    vertical-align: middle;
    max-width: 100%;
    height: auto;
  }

  .artboard__label {
    bottom: 1%;
    text-align: center;
  }
`;

export const Thumbnail = (props: ThumbnailProps) => (
  <ThumbnailContainer className="artboard">
    <Image src={props.picture.src} className="artboard__image" />
    <Label text={props.name} className="artboard__label" />
  </ThumbnailContainer>
);
