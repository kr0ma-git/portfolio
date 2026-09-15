import { socials } from "@/constants/const";
import ContactExperience from "@/components/ContactExperience/ContactExperience";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative w-full mt-50 px-6 pt-12 pb-10 md:px-10"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 z-10 h-13"
        style={{
          background: "linear-gradient(to top, transparent, var(--color-bg))",
        }}
      />

      {/* Background image */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-5">
        <img
          src="/images/f06ce0b1bafe12d16428c467547d3179-dithered.png"
          alt="Contact Background"
          className="scale-500 md:scale-100 md:translate-x-115 md:-translate-y-170 rotate-90 object-cover"
        />
      </div>

      <div className="flex flex-col sm:flex-col xl:flex-row md:gap-40 overflow-hidden">
        <div className="mx-5">
          <p className="font-mono mb-4 text-xs tracking-widest text-muted">
            (WY · kR)
          </p>
          <h2 className="font-display mb-30 text-2xl tracking-widest text-text md:text-3xl">
            Want to reach out?
          </h2>

          <div className="md:ml-10 mb-8 text-center md:mb-30 md:text-start">
            <a
              href="mailto:w4ynekousuke@gmail.com"
              className="font-display text-2xl text-text transition-colors hover:text-accent md:text-5xl"
            >
              w4ynekousuke@gmail.com
            </a>
          </div>

          <div className="grid gap-16 xl:grid-cols-7">
            <div className="xl:col-span-7">
              {/* mb-30 (120px) was fixed at every breakpoint -- disproportionate
                  on a phone screen. Small base value now, with the original
                  120px restored starting at md, same as your desktop look
                  before. */}

              <ul className="mt-10 space-y-10">
                {socials.map((social) => (
                  <li key={social.label}>
                    {/* mx-20 (80px both sides) was also fixed at every
                        breakpoint -- on a ~375px phone that's 160px eaten out
                        of the row before content even starts. Small mx-4 base,
                        with your original md:mx-20/md:mr-30 desktop values
                        kicking in from md onward, unchanged from before. */}
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex mx-4 items-center justify-between border-b border-line py-3 text-muted transition-colors hover:text-accent md:mx-20 md:mr-30"
                    >
                      {social.label}
                      <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                        ↗
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="min-h-96 min-w-1/2 hidden md:inline">
          <ContactExperience />
        </div>
      </div>

      <div className="mt-35 flex items-center justify-between text-sm text-muted">
        <span>&copy; {new Date().getFullYear()} Wayne Yano | Kroma</span>

        <button
          type="button"
          aria-label="?"
          className="text-muted transition-colors hover:text-accent"
        ></button>
      </div>
    </section>
  );
}
