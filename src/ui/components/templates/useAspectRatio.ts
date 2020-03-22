/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';

export const useAspectRatio = () => {
  const isClient = typeof window === 'object';
  function getSize() {
    return {
      windowWidth: isClient ? window.innerWidth : 0,
      windowHeight: isClient ? window.innerHeight : 0,
    };
  }

  const getAspectRatio = () => {
    const { windowWidth, windowHeight } = getSize();
    const RATIO = 1.4;
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

  const [aspectRatio, setAspectRatio] = useState(getAspectRatio);

  useEffect(() => {
    if (!isClient) {
      return undefined;
    }

    function handleResize() {
      setAspectRatio(getAspectRatio());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return aspectRatio;
};
