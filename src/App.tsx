import { GL } from "@/components/gl"
import { FloatingNavbar } from "@/components/ui/floating-navbar"
import { HeroSection } from "@/components/ui/hero-section"
import { SkillsSection } from "@/components/ui/skills-section"
import { ProjectsSection } from "./components/ui/projects-section"
import { AboutSection } from "@/components/ui/about-section"
import { ContactSection } from "@/components/ui/contact-section"
import { useEffect, useRef } from "react"
import { Footer } from "@/components/ui/footer"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MentionsLegales from "@/components/ui/mentions-legales";

export default function App() {
  return (
    <BrowserRouter basename="/Webfolio/">
      <Routes>
        <Route
          path="/"
          element={
            <MainApp />
          }
        />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
      </Routes>
    </BrowserRouter>
  );
}

function MainApp() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const aboutSectionRef = useRef<HTMLDivElement>(null);
  const contactSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    // Désactive le scroll horizontal sur mobile
    const isDesktop = () => window.innerWidth >= 1024;
    let handleWheel: ((e: WheelEvent) => void) | null = null;

    function updateScrollMode() {
      const container = scrollContainerRef.current;
      if (!container) return;
      if (isDesktop()) {
        // Active le scroll horizontal
        handleWheel = (e: WheelEvent) => {
          const c = scrollContainerRef.current;
          if (!c) return;
          const delta = e.deltaY;
          const currentScroll = c.scrollLeft;
          const containerWidth = c.offsetWidth;
          const currentSection = Math.round(currentScroll / containerWidth);

          if (currentSection === 3 && aboutSectionRef.current) {
            const aboutSection = aboutSectionRef.current;
            const isAtTop = aboutSection.scrollTop === 0;
            const isAtBottom = aboutSection.scrollTop + aboutSection.clientHeight >= aboutSection.scrollHeight - 1;

            if (delta > 0 && !isAtBottom) return;
            if (delta < 0 && !isAtTop) return;
            if (delta < 0 && isAtTop) {
              e.preventDefault();
              c.scrollTo({ left: 2 * containerWidth, behavior: "smooth" });
              return;
            }
            if (delta > 0 && isAtBottom) {
              e.preventDefault();
              c.scrollTo({ left: 4 * containerWidth, behavior: "smooth" });
              return;
            }
          }

          if (currentSection === 4 && contactSectionRef.current) {
            const contactSection = contactSectionRef.current;
            const isAtTop = contactSection.scrollTop === 0;
            const isAtBottom = contactSection.scrollTop + contactSection.clientHeight >= contactSection.scrollHeight - 1;
            if (delta > 0 && !isAtBottom) return;
            if (delta < 0 && !isAtTop) return;
            if (delta < 0 && isAtTop) {
              e.preventDefault();
              c.scrollTo({ left: 3 * containerWidth, behavior: "smooth" });
              return;
            }
            if (delta > 0 && isAtBottom) {
              e.preventDefault();
              return;
            }
          }

          e.preventDefault();
          if (Math.abs(delta) > 10) {
            let targetSection = currentSection;
            if (delta > 0) {
              targetSection = Math.min(currentSection + 1, 4);
            } else {
              targetSection = Math.max(currentSection - 1, 0);
            }
            c.scrollTo({ left: targetSection * containerWidth, behavior: "smooth" });
          }
        };
        container.addEventListener("wheel", handleWheel, { passive: false });
        container.style.overflowX = "auto";
        container.style.overflowY = "hidden";
        container.classList.add("snap-x", "snap-mandatory");
        container.classList.remove("snap-y");
      } else {
        // Active le scroll vertical
        if (handleWheel) container.removeEventListener("wheel", handleWheel);
        container.style.overflowX = "hidden";
        container.style.overflowY = "auto";
        container.classList.remove("snap-x", "snap-mandatory");
        container.classList.add("snap-y");
      }
    }

    updateScrollMode();
    window.addEventListener("resize", updateScrollMode);
    return () => {
      const container = scrollContainerRef.current;
      if (handleWheel && container) container.removeEventListener("wheel", handleWheel);
      window.removeEventListener("resize", updateScrollMode);
    };
  }, []);

  return (
    <main className="relative h-screen overflow-hidden">
      <GL />

      <div className="fixed inset-0 z-[5] bg-black/20" />

      <FloatingNavbar />

      <div
        ref={scrollContainerRef}
        className="relative z-10 flex h-screen w-full lg:flex-row flex-col lg:overflow-x-auto lg:overflow-y-hidden overflow-y-auto overflow-x-hidden scroll-smooth lg:snap-x lg:snap-mandatory"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <style>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        <HeroSection />

        <SkillsSection />

        <ProjectsSection />

        <AboutSection ref={aboutSectionRef} />

        <ContactSection ref={contactSectionRef} />
      </div>
      <Footer />
    </main>
  );
}
