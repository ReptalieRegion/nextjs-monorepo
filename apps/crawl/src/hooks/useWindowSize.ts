import { useCallback, useEffect, useState } from "react";

export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    windowInnerWidth: innerWidth,
    windowInnerHeight: innerHeight,
  });

  const windowResizeHandler = useCallback(() => {
    setWindowSize({
      windowInnerWidth: innerWidth,
      windowInnerHeight: innerHeight,
    });
  }, []);

  useEffect(() => {
    window.addEventListener("resize", windowResizeHandler);

    return () => {
      window.removeEventListener("resize", windowResizeHandler);
    };
  }, []);

  return windowSize;
}
