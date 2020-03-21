import React from 'react';
import { Image, Label } from '../atoms'; // TODO: organism importing atoms?
import styled from 'styled-components';
import SketchLogo from '../assets/sketch-logo.svg';

type TitleProps = {
  text: string;
};

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1%;
  .title__logo {
    width: 1.5vw;
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

export const DocumentTitle = ({ text = '' }: TitleProps) => (
  <TitleContainer className="title">
    <Image src={SketchLogo} className="title__logo" />
    <Label text={text} isBold={true} className="title__label" />
  </TitleContainer>
);
