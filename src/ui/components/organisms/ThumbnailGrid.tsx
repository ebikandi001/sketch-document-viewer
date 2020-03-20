import React from 'react';
import styled from 'styled-components';
import { Thumbnail, ThumbnailProps } from '../molecules';

type ThumbnailGridProps = {
  items: ThumbnailProps[];
};

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 20vh));
  justify-items: center;
  justify-content: space-evenly;
  align-items: start;
  gap: 1%;
  padding: 1%;
`;

export const ThumbnailGrid = ({ items }: ThumbnailGridProps) => (
  <GridContainer>
    {items.map((itemProps, index) => (
      <Thumbnail {...itemProps} key={index} />
    ))}
  </GridContainer>
);
