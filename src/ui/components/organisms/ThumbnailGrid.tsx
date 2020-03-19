import React from 'react';
import styled from 'styled-components';
import { Thumbnail, ThumbnailProps } from '../molecules';

type ThumbnailGridProps = {
  items: ThumbnailProps[];
};

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  justify-items: center;
  justify-content: center;
  align-items: start;
  gap: 30px;
  padding: 20px;
`;

export const ThumbnailGrid = ({ items }: ThumbnailGridProps) => (
  <GridContainer>
    {items.map((itemProps, index) => (
      <Thumbnail {...itemProps} key={index} />
    ))}
  </GridContainer>
);
