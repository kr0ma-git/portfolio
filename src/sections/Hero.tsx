import { motion } from "framer-motion";
import Grain from "../components/Grain";

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
      className="relative flex min-h-[calc(100vh+5rem)] items-center overflow-hidden"
    >
      {/* ShaderGradient background */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <Grain />
      </div>

      {/* Background bottom black gradient */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-13"
        style={{
          background:
            "linear-gradient(to bottom, transparent, var(--color-bg))",
        }}
      />

      {/* Invisisble Marker */}
      <div id="mark" className="absolute top-30"></div>

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="z-10 mx-auto mb-30 max-w-5xl px-6 md:px-10"
      >
        <motion.h1
          variants={line}
          className="font-display tracking-wider text-7xl leading-[1.05] text-text md:text-7xl"
        >
          Wayne Yano
        </motion.h1>

        <motion.p
          variants={line}
          className="mt-6 max-w-md text-center mx-auto text-base leading-relaxed text-white"
        >
          Software Developer. Based in Cebu, Philippines.
        </motion.p>
      </motion.div>
    </section>
  );
}
