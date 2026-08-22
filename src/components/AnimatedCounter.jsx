import { useRef, useEffect } from "react";
import { useInView, animate } from "framer-motion";

export const AnimatedCounter = ({ from = 0, to, suffix = "" }) => {
  const nodeRef = useRef(null);
  // Triggers animation when the element comes into the viewport
  const isInView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(from, to, {
        duration: 2, // 2 seconds animation
        ease: "easeOut",
        onUpdate(value) {
          if (nodeRef.current) {
            nodeRef.current.textContent = Math.round(value) + suffix;
          }
        }
      });
      return () => controls.stop();
    }
  }, [from, to, suffix, isInView]);

  return <span ref={nodeRef}>{from}{suffix}</span>;
};