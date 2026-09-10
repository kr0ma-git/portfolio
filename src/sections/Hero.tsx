import { motion } from "framer-motion";
import Grain from "./Grain";

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
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* ShaderGradient background */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <Grain />
      </div>

      {/* Gradient-mesh backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(60% 50% at 20% 20%, color-mix(in srgb, var(--color-accent) 18%, transparent), transparent), " +
            "radial-gradient(50% 40% at 85% 70%, color-mix(in srgb, var(--color-accent-dim) 25%, transparent), transparent)",
        }}
      />

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto max-w-5xl px-6 md:px-10"
      >
        <motion.h1
          variants={line}
          className="font-display text-7xl leading-[1.05] tracking-tight text-text md:text-7xl"
        >
          Wayne Yano
        </motion.h1>

        <motion.p
          variants={line}
          className="mt-6 max-w-md text-base leading-relaxed text-white"
        >
          Software Developer. Based in Cebu, Philippines.
        </motion.p>
      </motion.div>
    </section>
  );
}
