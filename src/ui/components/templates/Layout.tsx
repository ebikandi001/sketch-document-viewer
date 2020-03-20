import React from 'react';
import styled from 'styled-components';
import { useAspectRatio } from './useAspectRatio';

type LayoutProps = {
  width: string;
  height: string;
};

const Grid = styled.div`
  display: grid;
  height: 100%;
  justify-items: center;
  justify-content: center;
`;

const LayoutAspectRatio = styled.div`
  background-color: white;
  align-self: center;
  width: ${(props: LayoutProps) => props.width};
  height: ${(props: LayoutProps) => props.height};
  display: grid;
  grid-template-rows: 7% 93%;
  align-items: stretch;
  .layout__header {
    background-color: rgba(247, 247, 247, 1);
  }
  .layout__content {
    background-image: linear-gradient(rgba(235, 235, 235, 1), white);
    box-shadow: 0px 1px 8px #999999 inset;
  }
`;

export const Layout = () => {
  const { width, height } = useAspectRatio();

  return (
    <Grid>
      <LayoutAspectRatio className="layout" width={width} height={height}>
        <div className="layout__header" />
        <div className="layout__content" />
      </LayoutAspectRatio>
    </Grid>
  );
};
