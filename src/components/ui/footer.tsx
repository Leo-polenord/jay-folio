import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export function Footer() {
  const [visible, setVisible] = useState(false);
  const contactRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // On cherche la section contact dans le DOM
    contactRef.current = document.getElementById("contact") as HTMLElement;
    if (!contactRef.current) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );
    observer.observe(contactRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <footer
      className={`fixed left-0 right-0 bottom-0 z-50 transition-transform duration-500 ${visible ? "translate-y-0" : "translate-y-full"} bg-background/80 border-t border-border backdrop-blur-md shadow-lg`}
    >
      <div className="max-w-4xl mx-auto py-3 px-4 flex items-center justify-between text-muted-foreground text-xs">
        <span>© {new Date().getFullYear()} Léo-Paul Jay</span>
        <Link to="/mentions-legales" className="hover:underline">Mentions légales</Link>
      </div>
    </footer>
  );
}
