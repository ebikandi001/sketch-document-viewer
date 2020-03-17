import React from 'react';
import { Image, Label } from '../atoms';
import styled from 'styled-components';
import SketchLogo from '../assets/sketch-logo.svg';

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  & > img {
    margin: 0 2% 0 2%;
    max-width: 1.5em;
    height: auto;
  }
  & > label {
    text-align: left;
  }
`;

export const Title = () => (
  <TitleContainer>
    <Image src={SketchLogo} />
    <Label text="Title" isBold={true} />
  </TitleContainer>
);
