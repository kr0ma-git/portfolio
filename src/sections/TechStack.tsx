import { motion } from "framer-motion";
import { techStackIcons } from "@/constants/const";
import TechIcon from "@/components/Models/TechLogos/TechIcons";

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

const TechStack = () => {
  return (
    // Note: no max-w/mx-auto here anymore -- the section itself now spans
    // the full page width, so the backdrop's `inset-0` covers that full
    // width naturally instead of getting clipped by a narrow centered box.
    // `overflow-hidden` here (not on a wrapper elsewhere) is what contains
    // the gradient cleanly within this section's own top/bottom edges.
    <section id="techstack" className="relative isolate mt-35 py-32">
      <div className="pointer-events-none absolute opacity-5">
        <img src="/public/images/untitled3.png" alt="TechStack Background" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-13"
          style={{
            background:
              "linear-gradient(to bottom, transparent, var(--color-bg))",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 z-10 h-13"
          style={{
            background: "linear-gradient(to top, transparent, var(--color-bg))",
          }}
        />
      </div>

      {/* <div className="absolute opacity-5 md:scale-80 scale-500 md:translate-x-170 md:-translate-y-95 translate-y-100">
        <img src="/public/images/stars2.png" alt="Stars" />
      </div> */}

      {/* max-w-5xl/mx-auto/px-* moved here from the section -- this is what
          keeps your actual content centered and readable, same as before. */}
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="flex-col justify-items-end"
        >
          <motion.h2
            variants={line}
            className="font-display tracking-widest mb-8 text-2xl text-text"
          >
            Tech Stack
          </motion.h2>
          <motion.p
            variants={line}
            className="max-w-2xl text-base leading-relaxed text-muted"
          >
            Technologies that I work with
          </motion.p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="flex-col-center"
        >
          <div className="tech-grid">
            {techStackIcons.map((icon) => (
              <div
                key={icon.name}
                className="card-border shadow-muted tech-card overflow-hidden group xl:rounded-full rounded-lg relative"
              >
                <div className="tech-card-animated-bg" />
                <div className="tech-card-content">
                  <div className="tech-icon-wrapper">
                    <TechIcon model={icon} />
                  </div>
                  <div className="padding-x w-full">
                    <p>{icon.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* <a href="https://github.com/kr0ma-git" target="_blank">
          <motion.p
            variants={line}
            className="text-accent underline text-center font-auxiliary text-1xl mt-30"
          >
            See more here...
          </motion.p>
        </a> */}
      </div>
    </section>
  );
};

export default TechStack;
