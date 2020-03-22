import React from 'react';
import { Image, Label } from '../atoms'; // TODO: organism importing atoms?
import styled from 'styled-components';
import SketchLogo from '../assets/sketch-logo.svg';
import { Link } from 'react-router-dom';
import { ComponentStyleProps } from '../theme';

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
  .title__link {
    width: 25%;
    flex-shrink: 1;
    text-decoration: none;

    .title__label {
      font-size: ${(props: ComponentStyleProps) => props.theme?.font.sizes.big};
      cursor: pointer;
      &:hover {
        font-weight: bold;
      }
    }
  }
`;

export const DocumentTitle = ({ text, link }: TitleProps) => (
  <TitleContainer className="title">
    <Image src={SketchLogo} className="title__logo" />
    <Label text={text} isBold={true} className="title__label" />
    {link ? (
      <Link to={link} className="title__link">
        <Label text="Go for another document!" className="title__label" />
      </Link>
    ) : null}
  </TitleContainer>
);
