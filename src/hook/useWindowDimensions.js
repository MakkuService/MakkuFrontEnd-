import { useState, useEffect } from 'react';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;

  return { width, height };
}

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

const visibleCardsNumbers = {
  1280: { cards: 3 },
  960: { cards: 2 },
  480: { cards: 1 },
};

export function getVisualProps({width}) {
  let point = 0;

  if (width > 1280) {
    point = 1280;
  } else if (width > 959) {
    point = 960;
  } else {
    point = 480;
  }

  return visibleCardsNumbers[point];
}
