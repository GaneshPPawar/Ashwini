import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import WhyHireMe from "@/components/WhyHireMe";
import Contact from "@/components/Contact";
import Preloader from "@/components/Preloader";

export default function Home() {
  const [preloaderDone, setPreloaderDone] = useState(false);

  return (
    <>
      <Preloader onDone={() => setPreloaderDone(true)} />

      <AnimatePresence>
        {preloaderDone && (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="min-h-[100dvh] bg-background text-foreground flex flex-col"
          >
            <Navbar />
            <main className="flex-1">
              <Hero />
              <About />
              <Experience />
              <Projects />
              <WhyHireMe />
              <Contact />
            </main>

            <footer className="border-t border-border/50 py-8">
              <div className="max-w-screen-xl mx-auto px-4 md:px-5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
                <span style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  © 2025 <span className="text-foreground font-semibold">Ashwini Sonawane</span>. All rights reserved.
                </span>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "12px" }}>
                  Built with React + Framer Motion
                </span>
              </div>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
