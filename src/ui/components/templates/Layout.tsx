import React, { useState, useEffect } from 'react';
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
  width: string;
  height: string;
};

const FlexColumn = styled.div`
  display: flex:
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
`;

const LayoutContent = styled.div`
  background-color: white;
  border: solid green;
  width: ${(props: LayoutProps) => props.width};
  height: ${(props: LayoutProps) => props.height};
`;

const getAspectRatio = ({ windowWidth, windowHeight }: any) => {
  const RATIO = 1.6;
  const aspectWidth = windowHeight * RATIO;

  if (aspectWidth > windowWidth) {
    return {
      width: `${windowWidth}px`,
      height: `${windowWidth / RATIO}px`,
    };
  } else {
    return {
      width: `${aspectWidth}px`,
      height: `${windowHeight}px`,
    };
  }
};

export const Layout = () => {
  const size = useWindowSize();
  const { width, height } = getAspectRatio(size);

  return (
    <FlexColumn>
      <LayoutContent className="layout" width={width} height={height} />
    </FlexColumn>
  );
};
