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

const LayoutContent = styled.div`
  background-color: white;
  border: solid green;
  align-self: center;
  width: ${(props: LayoutProps) => props.width};
  height: ${(props: LayoutProps) => props.height};
`;

export const Layout = () => {
  const { width, height } = useAspectRatio();

  return (
    <Grid>
      <LayoutContent className="layout" width={width} height={height} />
    </Grid>
  );
};
