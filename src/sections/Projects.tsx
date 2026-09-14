import { motion } from "framer-motion";
import CardPreview from "../components/Card/CardPreview";
import { Portrait } from "@/components/Card/OrbitCardStack";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../constants/const";

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

const deck = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative mx-auto h-auto mt-35 max-w-5xl px-6"
    >
      <div className="pointer-events-none absolute z-10 md:right-60 translate-y-100 sm:translate-y-10 sm:scale-100 scale-200 w-dvw h-dvh">
        <img
          src="/images/lb-cmp-ladybug-sample-7etc04874.png"
          alt="Statue Image"
          className="h-full w-max object-none opacity-5"
        />
      </div>

      <motion.h2
        variants={line}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="font-display tracking-widest mb-8 text-2xl text-text text-center"
      >
        Projects
      </motion.h2>

      <motion.div
        variants={list}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="cursor-default mx-auto max-w-[40%] md:max-w-[15%] border-b-2 border-white"
      >
        <motion.p
          variants={line}
          className="text-white text-center font-auxiliary text-1xl"
        >
          Pick your poison ♠
        </motion.p>
      </motion.div>

      {/* Desktop Cards */}
      <motion.div
        variants={deck}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="relative hidden md:inline"
      >
        <CardPreview />
      </motion.div>

      {/* Mobile Cards */}
      <div className="grid grid-cols-1 md:hidden place-items-center gap-5 my-20">
        {projects.map((item, index) => (
          <div>
            <article
              key={`${item.name}-${index}`}
              role="listitem"
              tabIndex={0}
              className="
                left-1/2 top-1/2 w-[min(78vw,21rem)] origin-bottom cursor-pointer rounded-[1.9rem] border border-black/10 bg-[#e9e6df] p-4 text-[#141414] outline-none,
                transition-[transform] ease-[cubic-bezier(.2,.8,.2,1)] focus-visible:ring-2 focus-visible:ring-zinc-950/30 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              <div className="relative">
                <Portrait item={item} />
                <a href={item.link} target="_blank">
                  <span className="absolute right-3 top-3 grid size-11 place-items-center rounded-full bg-zinc-950 text-white shadow-lg shadow-black/20">
                    <ArrowUpRight className="size-4" aria-hidden />
                  </span>
                </a>
              </div>
              <div className="px-2 pb-2 pt-6">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-zinc-500">
                  {item.role}
                </p>
                <h3 className="mt-2 text-[2rem] font-semibold leading-none tracking-[-0.04em] text-zinc-950">
                  {item.name}
                </h3>
                <p className="mt-4 max-w-[17rem] text-[0.98rem] font-medium leading-[1.42] tracking-[-0.01em] text-zinc-700">
                  {item.description}
                </p>
                <div className="mt-5 border-t border-black/10 pt-4 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-zinc-500">
                  {item.stat ?? "Profile"}
                </div>
              </div>
            </article>
          </div>
        ))}
      </div>

      <motion.p
        variants={line}
        className="text-white text-center font-auxiliary text-1xl animate-pulse"
      >
        More coming soon...
      </motion.p>
    </section>
  );
};

export default Projects;
