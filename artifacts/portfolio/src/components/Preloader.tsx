import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const blinks = [
  { word: "नमस्ते", sub: "Namaste" },
  { word: "Hello", sub: "welcome" },
];

const BLINK_DURATION = 2000; // ms each greeting is shown

export default function Preloader({ onDone }: { onDone: () => void }) {
  const [index, setIndex] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (index < blinks.length - 1) {
      const t = setTimeout(() => setIndex((i) => i + 1), BLINK_DURATION);
      return () => clearTimeout(t);
    } else {
      // Last blink shown — hold for 2s then exit
      const t = setTimeout(() => setDone(true), 2000);
      return () => clearTimeout(t);
    }
  }, [index]);

  return (
    <AnimatePresence onExitComplete={onDone}>
      {!done && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.65, ease: "easeInOut" } }}
          className="fixed inset-0 z-[9999] bg-[#07090f] flex flex-col items-center justify-center"
        >
          {/* Main greeting */}
          <div className="relative flex flex-col items-center gap-3">
            <AnimatePresence mode="wait">
              <motion.h1
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.18, ease: "easeInOut" }}
                className="text-6xl md:text-8xl lg:text-9xl font-black text-white tracking-tight leading-none select-none"
                style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "-0.02em" }}
              >
                {blinks[index].word}
              </motion.h1>
            </AnimatePresence>

            {/* Sub-label */}
            <AnimatePresence mode="wait">
              <motion.span
                key={`sub-${index}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.18 }}
                className="text-sm md:text-base font-medium tracking-[0.25em] uppercase text-white/35 select-none"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                {blinks[index].sub}
              </motion.span>
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
