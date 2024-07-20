import { useState, useEffect, useRef, RefObject } from "react";

export function useIntersectionObserver(options: IntersectionObserverInit): {
  ref: RefObject<HTMLDivElement>;
  isIntersecting: boolean;
} {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [options]);

  return { ref, isIntersecting };
}
