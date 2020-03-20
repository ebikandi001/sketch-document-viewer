import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

// Credits: https://usehooks.com/useWindowSize/
const useWindowSize = () => {
  const isClient = typeof window === 'object';

  function getSize() {
    return {
      windowWidth: isClient ? window.innerWidth - 10 : undefined,
      windowHeight: isClient ? window.innerHeight - 10 : undefined,
    };
  }

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    if (!isClient) {
      return undefined;
    }

    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return windowSize;
};
// ------------------

type LayoutProps = {
  width: number;
  height: number;
};

const Content = styled.div`
  border: solid green;
  width: ${({ width }: LayoutProps) => `${width}px`};
  height: ${({ height }: LayoutProps) => `${height}px`};
`;

const getAspectRatio = ({ windowWidth, windowHeight }: any) => {
  const RATIO = 1.6;
  const aspectWidth = windowHeight * RATIO;
  if (aspectWidth > windowWidth) {
    console.log('NKO zabalei');
    return {
      width: windowWidth,
      height: windowWidth / RATIO,
    };
  } else {
    console.log('NKO alt');
    return {
      width: aspectWidth,
      height: windowHeight,
    };
  }
};

export const Layout = () => {
  const size = useWindowSize();
  const { width, height } = getAspectRatio(size);

  return <Content width={width} height={height} />;
};
