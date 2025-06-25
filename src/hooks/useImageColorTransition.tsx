
import { useEffect, useRef, useState } from "react";

export const useImageColorTransition = () => {
  const [isColored, setIsColored] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const image = imageRef.current;
    if (!image) return;

    // Intersection Observer to reset to black and white when out of view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // If image is not intersecting (out of view) and was colored, reset to black and white
          if (!entry.isIntersecting && isColored) {
            setIsColored(false);
          }
        });
      },
      { 
        threshold: 0.1, // Reset when 90% of image is out of view
        rootMargin: '0px'
      }
    );

    observer.observe(image);

    return () => {
      observer.unobserve(image);
    };
  }, [isColored]);

  const handleImageClick = () => {
    setIsColored(true);
  };

  return {
    imageRef,
    isColored,
    handleImageClick,
    imageClassName: `transition-all duration-700 ${isColored ? '' : 'grayscale'}`
  };
};
