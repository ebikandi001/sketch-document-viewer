import React from 'react';
import styled from 'styled-components';
import { Label, LabelProps, Image, ImageProps } from '../atoms';

const ArtBoardContainer = styled.div`
  & > img {
    vertical-align: middle;
  }

  & > label {
    bottom: 1vh;
  }
`;

type ArtBoardProps = { image: LabelProps; label: ImageProps };

export const ArtBoard = (props: ArtBoardProps) => (
  <ArtBoardContainer>
    <Image {...props.image} />
    <Label {...props.label} />
  </ArtBoardContainer>
);
