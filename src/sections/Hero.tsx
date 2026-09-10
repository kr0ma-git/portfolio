import { motion } from "framer-motion";

// One orchestrated load-in: each line steps in slightly after the last.
// This is the single "boldness" moment for the page -- everything else
// (nav links, list hovers) reacts to the user instead of animating on its own.
const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const line = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Gradient-mesh backdrop. Swap this for a colir.space export (as a
          background-image) once you have one you like -- the radial stack
          below is just a placeholder in the same cool/muted palette. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 20% 20%, color-mix(in srgb, var(--color-accent) 18%, transparent), transparent), " +
            "radial-gradient(50% 40% at 85% 70%, color-mix(in srgb, var(--color-accent-dim) 25%, transparent), transparent)",
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto max-w-5xl px-6 md:px-10"
      >
        <motion.h1
          variants={line}
          className="font-display text-5xl leading-[1.05] tracking-tight text-text md:text-7xl"
        >
          Wayne Yano
        </motion.h1>
        <motion.p
          variants={line}
          className="mt-6 max-w-md text-base leading-relaxed text-muted"
        >
          Software Developer. Based in Cebu, Philippines.
        </motion.p>
      </motion.div>
    </section>
  );
}
