import { useCallback, useRef, useState } from "react";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import ProjectModal from "./components/ProjectModal";
import { AICapability, About, Contact, Method, Metrics, Work } from "./components/Sections";
import usePortfolioMotion from "./hooks/usePortfolioMotion";

export default function App() {
  const appRef = useRef(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeProjectImage, setActiveProjectImage] = useState("");

  usePortfolioMotion(appRef);

  const navigateTo = useCallback(
    (target) => (event) => {
      event.preventDefault();
      setMobileOpen(false);

      const element = document.querySelector(target);
      if (!element) return;

      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      element.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth" });
    },
    [],
  );

  return (
    <div ref={appRef}>
      <div id="loader" className="loader" aria-live="polite" aria-busy="true">
        <div className="loader__mark">ZW</div>
        <div className="loader__bar">
          <span id="loaderProgress" />
        </div>
        <p id="loaderText">0%</p>
      </div>

      <Nav mobileOpen={mobileOpen} onToggleMobile={() => setMobileOpen((open) => !open)} onNavigate={navigateTo} />

      <main id="top">
        <Hero onNavigate={navigateTo} />
        <Metrics />
        <Method />
        <AICapability />
        <Work onSelectProject={setActiveProjectImage} />
        <About />
        <Contact />
      </main>

      <ProjectModal image={activeProjectImage} onClose={() => setActiveProjectImage("")} />
    </div>
  );
}
