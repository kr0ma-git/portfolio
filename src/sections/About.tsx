import { motion } from "framer-motion";
import profileVideo from "/public/videos/lb-cmp-ladybug-sample-5lrc01689.mp4";

const list = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

const line = {
  hidden: {
    opacity: 0,
    y: 6,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
};

export default function About() {
  return (
    <section id="about" className="relative py-32 md:px-10">
      {/* Background top black gradient */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 z-10 h-13"
        style={{
          background: "linear-gradient(to top, transparent, var(--color-bg))",
        }}
      />

      <div className="pointer-events-none absolute opacity-5 md:scale-400 scale-900 sm:translate-y-100 md:translate-x-170 md:-translate-y-10 translate-y-100">
        <img src="/public/images/stars2.png" alt="Stars" />
      </div>

      <div className="max-w-5xl mx-auto px-6 pt-15">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.h2
            variants={line}
            className="font-display tracking-widest mb-8 text-2xl text-text"
          >
            About
          </motion.h2>

          <motion.p
            variants={line}
            className="max-w-2xl text-base leading-relaxed text-muted"
          >
            I'm an Information Technology student at the University of San
            Carlos with a strong interest in software development and web
            technologies. I enjoy building practical projects, learning new
            technologies, and turning ideas into functional and user-friendly
            applications. I'm continuously developing my skills across both
            frontend and backend development while exploring different areas of
            IT. Also a practitioner of audio/visual arts.
          </motion.p>
        </motion.div>

        <div className="mt-16 grid overflow-hidden rounded-2xl border border-white/10 md:grid-cols-2 shadow-gray-700 shadow-md">
          <video
            src={profileVideo}
            autoPlay
            muted
            loop
            playsInline
            className="h-64 w-full object-cover md:h-full"
          />

          {/* Terminal */}
          <motion.div
            variants={list}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="bg-black/80 p-6 font-mono text-1xl md:pl-10 md:p-8"
          >
            <motion.p variants={line} className="text-muted">
              $ whoami
            </motion.p>

            <motion.p variants={line} className="mt-2 text-text">
              wayne-kousuke-yano
            </motion.p>

            <motion.p variants={line} className="mt-6 text-muted">
              $ cat about.txt
            </motion.p>

            <motion.p variants={line} className="mt-2 text-text">
              IT Student @ University of San Carlos
            </motion.p>

            <motion.p variants={line} className="text-text">
              Software Developer
            </motion.p>

            <motion.p variants={line} className="text-text">
              Frontend + Backend
            </motion.p>

            <motion.p variants={line} className="text-text">
              Audio / Visual Artist
            </motion.p>

            <motion.p variants={line} className="mt-6 text-muted">
              $ interests
            </motion.p>

            <motion.p variants={line} className="mt-2 text-accent">
              &gt; Web Development
            </motion.p>

            <motion.p variants={line} className="text-accent">
              &gt; Creative Technology
            </motion.p>

            <motion.p variants={line} className="text-accent">
              &gt; Audio / Visual Arts
            </motion.p>

            <motion.p variants={line} className="text-accent">
              &gt; Learning new things
            </motion.p>

            <motion.p variants={line} className="mt-6 text-muted">
              $ status
            </motion.p>

            <motion.p variants={line} className="mt-2 text-accent">
              [██████████████████░░] idling...
            </motion.p>

            <motion.p variants={line} className="mt-15 text-muted">
              $ <span className="animate-pulse">_</span>
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
