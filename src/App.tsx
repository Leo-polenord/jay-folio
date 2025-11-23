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
    <BrowserRouter>
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

    const handleWheel = (e: WheelEvent) => {
      const delta = e.deltaY;
      const currentScroll = scrollContainer.scrollLeft;
      const containerWidth = scrollContainer.offsetWidth;
      const currentSection = Math.round(currentScroll / containerWidth);

      if (currentSection === 3 && aboutSectionRef.current) {
        const aboutSection = aboutSectionRef.current;
        const isAtTop = aboutSection.scrollTop === 0;
        const isAtBottom = aboutSection.scrollTop + aboutSection.clientHeight >= aboutSection.scrollHeight - 1;

        if (delta > 0 && !isAtBottom) {
          return;
        }

        if (delta < 0 && !isAtTop) {
          return;
        }

        if (delta < 0 && isAtTop) {
          e.preventDefault();
          scrollContainer.scrollTo({
            left: 2 * containerWidth,
            behavior: "smooth",
          });
          return;
        }

        if (delta > 0 && isAtBottom) {
          e.preventDefault();
          scrollContainer.scrollTo({
            left: 4 * containerWidth,
            behavior: "smooth",
          });
          return;
        }
      }

      if (currentSection === 4 && contactSectionRef.current) {
        const contactSection = contactSectionRef.current;
        const isAtTop = contactSection.scrollTop === 0;
        const isAtBottom = contactSection.scrollTop + contactSection.clientHeight >= contactSection.scrollHeight - 1;

        if (delta > 0 && !isAtBottom) {
          return;
        }

        if (delta < 0 && !isAtTop) {
          return;
        }

        if (delta < 0 && isAtTop) {
          e.preventDefault();
          scrollContainer.scrollTo({
            left: 3 * containerWidth,
            behavior: "smooth",
          });
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

        scrollContainer.scrollTo({
          left: targetSection * containerWidth,
          behavior: "smooth",
        });
      }
    };

    scrollContainer.addEventListener("wheel", handleWheel, { passive: false });
    return () => scrollContainer.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <main className="relative h-screen overflow-hidden">
      <GL />

      <div className="fixed inset-0 z-[5] bg-black/20" />

      <FloatingNavbar />

      <div
        ref={scrollContainerRef}
        className="relative z-10 flex h-screen w-full overflow-x-auto overflow-y-hidden scroll-smooth snap-x snap-mandatory"
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
