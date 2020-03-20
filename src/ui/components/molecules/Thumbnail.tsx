import React from 'react';
import styled from 'styled-components';
import { Label, LabelProps, Image, ImageProps } from '../atoms';

export type ThumbnailProps = { image: ImageProps; label: LabelProps };

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
  }
`;

export const Thumbnail = (props: ThumbnailProps) => (
  <ThumbnailContainer className="artboard">
    <Image {...props.image} className="artboard__image" />
    <Label {...props.label} className="artboard__label" />
  </ThumbnailContainer>
);
