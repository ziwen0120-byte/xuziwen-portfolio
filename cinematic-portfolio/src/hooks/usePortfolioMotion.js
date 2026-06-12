import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function usePortfolioMotion(scopeRef) {
  useGSAP(
    () => {
      const root = scopeRef.current;
      if (!root) return undefined;

      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const mm = gsap.matchMedia();
      const cleanupFns = [];

      mm.add(
        {
          reduceMotion: "(prefers-reduced-motion: reduce)",
          desktop: "(min-width: 1025px)",
          compact: "(max-width: 1024px)",
          touch: "(hover: none)",
        },
        (context) => {
          const { reduceMotion, desktop, touch } = context.conditions;

          const loader = root.querySelector("#loader");
          const loaderProgress = root.querySelector("#loaderProgress");
          const loaderText = root.querySelector("#loaderText");

          if (loaderProgress && loaderText) {
            const loadingState = { value: 0 };
            gsap.to(loadingState, {
              value: 100,
              duration: reduceMotion ? 0.1 : 1.15,
              ease: "power2.inOut",
              onUpdate: () => {
                const value = Math.round(loadingState.value);
                loaderProgress.style.width = `${value}%`;
                loaderText.textContent = `${value}%`;
              },
              onComplete: () => loader?.classList.add("is-hidden"),
            });
          }

          const intro = gsap.timeline({
            defaults: { duration: reduceMotion ? 0 : 0.9, ease: "power4.out" },
          });

          intro
            .addLabel("start")
            .from(".nav", { y: -28, autoAlpha: 0 }, "start+=0.15")
            .from(".hero-line", { yPercent: 112, stagger: 0.08 }, "start+=0.3");

          const video = root.querySelector("#scrollVideo");
          const stage = root.querySelector("#videoStage");
          const overlays = root.querySelector("#heroOverlays");
          const blocks = gsap.utils.toArray(".hero-block");
          const nav = root.querySelector(".nav");
          const heroCard = root.querySelector(".hero-card");
          const scrollCue = root.querySelector(".scroll-cue");
          const metricsSection = root.querySelector(".metrics");
          const clampProgress = gsap.utils.clamp(0, 1);
          let maxScroll = 1;
          let targetTime = 0;
          let seeking = false;
          let frameId = 0;
          let navFrameId = 0;
          let frameActive = true;

          const getHeroCardSmallVars = () => ({
            "--hero-card-width": desktop ? "360px" : "360px",
            "--hero-card-avatar": desktop ? "78px" : "64px",
            "--hero-card-gap": desktop ? "16px" : "12px",
            "--hero-card-padding": desktop ? "16px" : "14px",
            "--hero-card-eyebrow-size": desktop ? "11px" : "10px",
            "--hero-card-name-size": desktop ? "22px" : "20px",
            "--hero-card-body-size": desktop ? "13px" : "12px",
            "--hero-card-body-line": desktop ? "1.7" : "1.55",
          });

          const getHeroCardIntroVars = () => ({
            ...getHeroCardSmallVars(),
            "--hero-card-width": desktop ? "532px" : "360px",
            "--hero-card-avatar": desktop ? "112px" : "64px",
            "--hero-card-gap": desktop ? "22px" : "12px",
            "--hero-card-padding": desktop ? "24px" : "14px",
            "--hero-card-eyebrow-size": desktop ? "12px" : "10px",
            "--hero-card-name-size": desktop ? "30px" : "20px",
            "--hero-card-body-size": desktop ? "16px" : "12px",
            "--hero-card-body-line": desktop ? "1.72" : "1.55",
            x: desktop ? -Math.min(window.innerWidth * 0.12, 220) : 0,
            y: desktop ? -Math.min(Math.max(window.innerHeight * 0.46 - 207, 230), 390) : 0,
          });

          const syncMax = () => {
            maxScroll = Math.max((stage?.offsetHeight || window.innerHeight) - window.innerHeight, 1);
          };

          const syncNavState = () => {
            if (!nav) return;

            const metricsTop = metricsSection?.getBoundingClientRect().top ?? Number.POSITIVE_INFINITY;
            const hasStartedNarrativeScroll = window.scrollY > Math.min(window.innerHeight * 0.08, 96);
            const shouldRestoreForMetrics = metricsTop <= Math.min(window.innerHeight * 0.34, 460);

            nav.classList.toggle("is-scattered", desktop && hasStartedNarrativeScroll && !shouldRestoreForMetrics);
          };

          const requestNavState = () => {
            if (navFrameId) return;
            navFrameId = requestAnimationFrame(() => {
              navFrameId = 0;
              syncNavState();
            });
          };

          const syncVideo = () => {
            if (!video || !stage) return;
            const progress = clampProgress(window.scrollY / maxScroll);
            if (video.duration) targetTime = progress * video.duration;

            blocks.forEach((block) => {
              const active = progress >= Number(block.dataset.start) && progress <= Number(block.dataset.end);
              block.classList.toggle("is-active", active);
            });

            const pastHero = window.scrollY >= maxScroll - 1;
            syncNavState();
            overlays?.classList.toggle("is-hidden", pastHero);
            heroCard?.classList.toggle("is-past-hero", pastHero);
            scrollCue?.classList.toggle("is-past-hero", pastHero);
          };

          const renderVideoFrame = () => {
            if (!frameActive) return;

            if (video?.readyState >= 2 && !seeking && video.duration && Math.abs(video.currentTime - targetTime) > 0.045) {
              seeking = true;
              try {
                video.currentTime = targetTime;
              } catch {
                seeking = false;
              }
            }

            frameId = requestAnimationFrame(renderVideoFrame);
          };

          const handleSeeked = () => {
            seeking = false;
          };

          const handleLoadedMetadata = () => {
            syncMax();
            syncVideo();
            ScrollTrigger.refresh();
          };

          video?.pause();
          video?.addEventListener("seeked", handleSeeked);
          video?.addEventListener("loadedmetadata", handleLoadedMetadata);
          cleanupFns.push(() => {
            video?.removeEventListener("seeked", handleSeeked);
            video?.removeEventListener("loadedmetadata", handleLoadedMetadata);
            window.removeEventListener("scroll", requestNavState);
            window.removeEventListener("resize", requestNavState);
            nav?.classList.remove("is-scattered");
            frameActive = false;
            if (frameId) cancelAnimationFrame(frameId);
            if (navFrameId) cancelAnimationFrame(navFrameId);
          });

          window.addEventListener("scroll", requestNavState, { passive: true });
          window.addEventListener("resize", requestNavState);
          syncMax();
          syncVideo();
          if (!reduceMotion) frameId = requestAnimationFrame(renderVideoFrame);

          ScrollTrigger.create({
            trigger: ".hero",
            start: "top top",
            end: "bottom bottom",
            scrub: true,
            refreshPriority: 0,
            onUpdate: syncVideo,
            onRefresh: () => {
              syncMax();
              syncVideo();
            },
          });

          if (heroCard && !reduceMotion) {
            gsap.fromTo(heroCard, getHeroCardIntroVars(), {
              ...getHeroCardSmallVars(),
              x: 0,
              y: 0,
              ease: "none",
              scrollTrigger: {
                trigger: ".hero",
                start: "top top",
                end: () => `+=${Math.max(window.innerHeight * 0.8, 620)}`,
                scrub: 0.8,
                invalidateOnRefresh: true,
                refreshPriority: 0,
              },
            });
          }

          ScrollTrigger.batch(".reveal", {
            start: "top 84%",
            once: true,
            interval: 0.08,
            batchMax: desktop ? 6 : 3,
            onEnter: (batch) => {
              gsap.to(batch, {
                autoAlpha: 1,
                y: 0,
                duration: reduceMotion ? 0 : 0.85,
                stagger: 0.08,
              });
            },
          });

          if (desktop) {
            const track = root.querySelector("#methodTrack");
            if (track) {
              const distance = () => Math.max(0, track.scrollWidth - window.innerWidth);
              gsap.to(track, {
                x: () => -distance(),
                ease: "none",
                scrollTrigger: {
                  trigger: ".method",
                  start: "top top",
                  end: () => `+=${distance()}`,
                  pin: ".method__pin",
                  scrub: 1,
                  invalidateOnRefresh: true,
                  refreshPriority: 1,
                },
              });
            }
          }

          if (!touch && !reduceMotion) {
            gsap.utils.toArray(".project-card").forEach((card) => {
              const rotateXTo = gsap.quickTo(card, "rotationX", { duration: 0.35, ease: "power2.out" });
              const rotateYTo = gsap.quickTo(card, "rotationY", { duration: 0.35, ease: "power2.out" });
              const handleMove = (event) => {
                const rect = card.getBoundingClientRect();
                rotateYTo(((event.clientX - rect.left) / rect.width - 0.5) * 5);
                rotateXTo(((event.clientY - rect.top) / rect.height - 0.5) * -5);
              };
              const handleLeave = () => {
                rotateXTo(0);
                rotateYTo(0);
              };

              card.addEventListener("mousemove", handleMove);
              card.addEventListener("mouseleave", handleLeave);
              cleanupFns.push(() => {
                card.removeEventListener("mousemove", handleMove);
                card.removeEventListener("mouseleave", handleLeave);
              });
            });
          }

          const refresh = () => ScrollTrigger.refresh();
          window.addEventListener("load", refresh, { once: true });
          requestAnimationFrame(refresh);
          cleanupFns.push(() => window.removeEventListener("load", refresh));

          return () => {
            cleanupFns.splice(0).forEach((cleanup) => cleanup());
          };
        },
      );

      return () => {
        cleanupFns.splice(0).forEach((cleanup) => cleanup());
        mm.revert();
      };
    },
    { scope: scopeRef },
  );
}
