import React from 'react';
import { Image, Label } from '../atoms'; // TODO: organism importing atoms?
import styled from 'styled-components';
import SketchLogo from '../assets/sketch-logo.svg';
import { Link } from 'react-router-dom';

type TitleProps = {
  text: string;
  link?: string;
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
    flex-grow: 1;
    padding-left: 3%;
    text-align: left;
  }
  .link {
    flex-shrink: 1;
    text-decoration: none;
    color: grey;
  }
`;

export const DocumentTitle = ({ text, link }: TitleProps) => (
  <TitleContainer className="title">
    <Image src={SketchLogo} className="title__logo" />
    <Label text={text} isBold={true} className="title__label" />
    {link ? (
      <Link to={link} className="link">
        Go for another one!
      </Link>
    ) : null}
  </TitleContainer>
);
