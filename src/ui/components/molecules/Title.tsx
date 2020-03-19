import React from 'react';
import { Image, Label } from '../atoms';
import styled from 'styled-components';
import SketchLogo from '../assets/sketch-logo.svg';

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  & > .title__logo {
    margin: 0 2% 0 2%;
    max-width: 1.5em;
    height: auto;
  }
  & > .title__label {
    margin-left: 2%;
    text-align: left;
  }
`;

export const Title = () => (
  <TitleContainer className="title">
    <Image src={SketchLogo} className="title__logo" />
    <Label text="Title" isBold={true} className="title__label" />
  </TitleContainer>
);
