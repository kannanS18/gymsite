import { useEffect, useRef, useState } from "react";

export function useSnapAnimation() {
  const ref = useRef();
  const [state, setState] = useState("hidden"); // "hidden", "visible", "out"

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio >= 0.3) {
          setState("visible"); // reconstruct from dust
        } else {
          setState("out"); // disintegrate to dust
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return [ref, state];
}