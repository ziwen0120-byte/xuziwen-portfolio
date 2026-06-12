import { useEffect, useRef } from "react";

export default function BorderGlow({ as: Component = "div", className = "", children, onPointerEnter, onPointerMove, onPointerLeave, ...props }) {
  const elementRef = useRef(null);
  const frameRef = useRef(0);

  useEffect(
    () => () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    },
    [],
  );

  const updateGlowPosition = (event) => {
    const element = elementRef.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    if (frameRef.current) cancelAnimationFrame(frameRef.current);
    frameRef.current = requestAnimationFrame(() => {
      element.style.setProperty("--border-glow-x", `${x}px`);
      element.style.setProperty("--border-glow-y", `${y}px`);
    });
  };

  const handlePointerEnter = (event) => {
    elementRef.current?.style.setProperty("--border-glow-opacity", "1");
    updateGlowPosition(event);
    onPointerEnter?.(event);
  };

  const handlePointerMove = (event) => {
    updateGlowPosition(event);
    onPointerMove?.(event);
  };

  const handlePointerLeave = (event) => {
    elementRef.current?.style.setProperty("--border-glow-opacity", "0.38");
    onPointerLeave?.(event);
  };

  return (
    <Component
      ref={elementRef}
      className={`border-glow ${className}`}
      onPointerEnter={handlePointerEnter}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      {...props}
    >
      {children}
    </Component>
  );
}
