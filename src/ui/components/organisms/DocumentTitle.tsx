import React from 'react';
import { Image, Label } from '../atoms'; // TODO: organism importing atoms?
import styled from 'styled-components';
import SketchLogo from '../assets/sketch-logo.svg';

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1%;
  .title__logo {
    max-width: 1.5em;
    height: auto;
    img {
      vertical-align: middle;
    }
  }
  .title__label {
    margin-left: 3%;
    text-align: left;
  }
`;

export const DocumentTitle = () => (
  <TitleContainer className="title">
    <Image src={SketchLogo} className="title__logo" />
    <Label text="Title" isBold={true} className="title__label" />
  </TitleContainer>
);
