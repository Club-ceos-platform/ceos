import { useState, useEffect } from "react";

type windowSize = {
  width: number | undefined;
  height: number | undefined;
};

type windowDimensions = {
  windowSize: windowSize;
  isMobile: boolean;
  isDesktop: boolean;
};

export function useWindow(): windowDimensions {
  const [windowSize, setWindowSize] = useState<windowSize>({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile: boolean =
    typeof windowSize.width === "number" && windowSize.width < 768;
  const isDesktop: boolean =
    typeof windowSize.width === "number" && windowSize.width >= 768;

  return { windowSize, isMobile, isDesktop };
}
