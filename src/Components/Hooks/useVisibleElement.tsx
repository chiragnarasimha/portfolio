import { useEffect, useRef, useState } from "react";

/**
 * This is the implementation of intersection observer as a react hook
 * @type {Object} options: Parameters to be used by the intersection observer
 * @property {Object} options.root: The element that is used as the viewport for checking visibility of the target
 * @property {Object} options.rootMargin: This set of values serves to grow or shrink each side of the root element's bounding box before computing intersections, similar to those of margin in CSS
 * @property {Object} options.threshold: Either a single number or an array of numbers which indicate at what percentage of target's visibility the observer's callback should be executed. Ranges from 0 to 1, where 1 means every pixel is visible in the viewport
 * @returns {Object} Object
 * @returns containerRef: The reference to the DOM element
 * @returns isVisible: Whether the DOM element is visible or not
 *
 */
const useVisibleElement = (options) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const callbackFunction = (entries) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [containerRef, options]);

  return [containerRef, isVisible];
};

export default useVisibleElement;
