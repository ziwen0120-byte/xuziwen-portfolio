import { useMemo, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const splitToChars = (line) =>
  Array.from(line).map((character, index) => (
    <span className="char" aria-hidden="true" key={`${character}-${index}`}>
      {character === " " ? "\u00a0" : character}
    </span>
  ));

export default function ScrollFloat({
  as: HeadingTag = "h1",
  lines,
  label,
  className = "",
  startProgress = 0,
  endProgress = 0.2,
  triggerSelector = ".hero",
  initialVisible = false,
}) {
  const rootRef = useRef(null);
  const lineRefs = useRef([]);

  const safeLines = useMemo(() => lines || [], [lines]);

  useGSAP(
    () => {
      const root = rootRef.current;
      if (!root) return undefined;

      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const chars = gsap.utils.toArray(".scroll-float-text .char", root);
      const linesEls = lineRefs.current.filter(Boolean);
      const trigger = root.closest(triggerSelector) || root;
      const getHeroScrollDistance = () => Math.max(trigger.offsetHeight - window.innerHeight, window.innerHeight);
      const getStart = () => Math.max(0, getHeroScrollDistance() * startProgress);
      const getEnd = () => Math.max(getStart() + 220, getHeroScrollDistance() * endProgress);

      gsap.set(chars, {
        opacity: initialVisible ? 1 : 0,
        yPercent: initialVisible ? 0 : 118,
        scaleY: initialVisible ? 1 : 1.85,
        scaleX: initialVisible ? 1 : 0.76,
        rotationZ: 0,
        transformOrigin: "50% 0%",
        force3D: true,
      });

      gsap.set(linesEls, {
        y: initialVisible ? 0 : 20,
        opacity: initialVisible ? 1 : 0.82,
      });

      if (prefersReducedMotion) return undefined;

      const floatTween = gsap.to(chars, {
        yPercent: initialVisible ? -12 : 0,
        opacity: initialVisible ? 0.86 : 1,
        scaleY: 1,
        scaleX: 1,
        rotationZ: 0,
        stagger: {
          each: 0.012,
          from: "center",
        },
        ease: "back.inOut(1.7)",
        scrollTrigger: {
          trigger,
          start: getStart,
          end: getEnd,
          scrub: 0.7,
          invalidateOnRefresh: true,
          refreshPriority: 0,
          onUpdate: (self) => {
            linesEls.forEach((line, index) => {
              const offset = initialVisible
                ? self.progress * (index === 0 ? -8 : -6)
                : (1 - self.progress) * (index === 0 ? 20 : 12);
              gsap.set(line, {
                y: offset,
                opacity: initialVisible ? 1 - self.progress * 0.12 : Math.max(0.82, self.progress),
              });
            });
          },
        },
      });

      return () => {
        floatTween.kill();
      };
    },
    { dependencies: [startProgress, endProgress, triggerSelector, initialVisible], scope: rootRef, revertOnUpdate: true },
  );

  return (
    <HeadingTag ref={rootRef} className={`scroll-float ${className}`} data-scroll-float aria-label={label || safeLines.join(" ")}>
      {safeLines.map((line, lineIndex) => (
        <span
          className="hero-line scroll-float-text"
          key={line}
          ref={(node) => {
            lineRefs.current[lineIndex] = node;
          }}
        >
          {splitToChars(line)}
        </span>
      ))}
    </HeadingTag>
  );
}
