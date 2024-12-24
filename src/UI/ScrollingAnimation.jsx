import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const ScrollingAnimation = ({ children }) => {
  const animationRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(animationRef.current, {
      transform: "translatex(0)",
      opacity: 1,
      duration: 0.5,
      // stagger: 0.2,
      scrollTrigger: {
        scroller: "body",
        trigger: ".animation",
        markers: true,
        start: "top 80%",
        end: "center",
      },
    });
  }, []);

  return (
    <div className="w-full overflow-x-hidden">
      <div ref={animationRef} className="animation translate-x-36 opacity-0">
        {children}
      </div>
    </div>
  );
};

export default ScrollingAnimation;
