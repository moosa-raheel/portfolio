// useLenis.js
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

const useLenis = () => {
  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      lerp: 0.1, // this controls the smoothness of the scrolling (lower is smoother)
      duration: 1.2, // smooth scrolling duration
    });

    // Update Lenis on each animation frame
    const animate = (time) => {
      lenis.raf(time);
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    // Clean up when component unmounts
    return () => {
      lenis.destroy();
    };
  }, []);
};

export default useLenis;
