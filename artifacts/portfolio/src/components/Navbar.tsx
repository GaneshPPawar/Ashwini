import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 40);
      const ids = ["home", "about", "experience", "projects", "skills", "contact"];
      for (const id of [...ids].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border/40 py-3 shadow-md shadow-black/20"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-4 md:px-5 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => scrollTo(e, "#home")}
          className="flex items-center gap-3 group select-none"
        >
          {/* Animated monogram ring */}
          <div className="relative w-10 h-10 shrink-0">
            <svg
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10"
              style={{ animation: "logo-ring-spin 8s linear infinite" }}
            >
              <circle
                cx="20" cy="20" r="18"
                stroke="#c9a96e"
                strokeWidth="0.8"
                strokeOpacity="0.4"
                strokeDasharray="2 4"
              />
              <circle
                cx="20" cy="20" r="18"
                stroke="#c9a96e"
                strokeWidth="1.5"
                strokeOpacity="0.9"
                strokeDasharray="12 44"
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span
                className="text-[13px] font-bold leading-none"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: "#c9a96e",
                  animation: "logo-pulse-gold 3s ease-in-out infinite",
                }}
              >
                AS
              </span>
            </div>
          </div>

          {/* Name block */}
          <div className="flex flex-col leading-none gap-[2px]">
            <span
              className="text-[17px] font-bold tracking-wide"
              style={{ fontFamily: "'Playfair Display', serif", color: "#f0ece3" }}
            >
              Ashwini
            </span>
            <span
              className="text-[10px] font-light tracking-[0.22em] uppercase"
              style={{ fontFamily: "'DM Sans', sans-serif", color: "#c9a96e" }}
            >
              Sonawane
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollTo(e, link.href)}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 bg-primary/10 rounded-lg border-b-2 border-primary"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Resume button */}
        <div className="hidden md:flex">
          <a
            href="/Ashwini_Sonwane_Resume.pdf"
            download
            className="inline-flex items-center gap-2 px-5 py-2 border border-primary/50 text-primary text-sm font-semibold rounded-lg hover:bg-primary hover:text-primary-foreground transition-all"
          >
            <Download className="w-4 h-4" /> Resume
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground p-2 rounded-lg hover:bg-card transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden absolute top-full left-0 w-full bg-card/95 backdrop-blur-xl border-b border-border shadow-xl p-6 flex flex-col gap-5"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollTo(e, link.href)}
                className="text-base font-medium text-muted-foreground hover:text-primary transition-colors py-1"
              >
                {link.name}
              </a>
            ))}
            <a
              href="/Ashwini_Sonwane_Resume.pdf"
              download
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 border border-primary/50 text-primary text-sm font-semibold rounded-lg"
            >
              <Download className="w-4 h-4" /> Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
