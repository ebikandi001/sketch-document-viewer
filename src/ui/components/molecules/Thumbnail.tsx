import React from 'react';
import styled from 'styled-components';
import { Label, Image } from '../atoms';
import { Link } from 'react-router-dom';

export type ThumbnailProps = { picture: any; name: string; id: number };

const ThumbnailContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 1%;
  cursor: pointer;

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

export const Thumbnail = (props: ThumbnailProps) => {
  return (
    <ThumbnailContainer className="artboard">
      <Link to={`/artboard/${props.id}`} className="artboard__image">
        <Image src={props.picture.src} />
      </Link>
      <Label text={props.name} className="artboard__label" />
    </ThumbnailContainer>
  );
};
