import React from 'react';
import styled from 'styled-components';
import { useAspectRatio } from './useAspectRatio';

type AspectRatioProps = {
  width: string;
  height: string;
};

// TODO check types
type LayoutProps = {
  header: any;
  content: any;
};

const Grid = styled.div`
  display: grid;
  height: 100%;
  justify-items: center;
  justify-content: center;
  .layout {
    background-color: white;
    align-self: center;
    width: ${(props: AspectRatioProps) => props.width};
    height: ${(props: AspectRatioProps) => props.height};
    display: grid;
    grid-template-rows: 7% 93%;
    align-items: stretch;
    .layout__header {
      background-color: rgba(247, 247, 247, 1);
    }
    .layout__content {
      background-image: linear-gradient(rgba(235, 235, 235, 1), white);
      box-shadow: 0px 1px 8px #999999 inset;
      overflow-x: hidden;
    }
  }
`;

export const Layout = ({ header, content }: LayoutProps) => {
  const { width, height } = useAspectRatio();

  return (
    <Grid width={width} height={height}>
      <div className="layout">
        <div className="layout__header">{header || 'Place header here'}</div>
        <div className="layout__content">{content || 'Place content here'}</div>
      </div>
    </Grid>
  );
};
