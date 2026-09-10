export default function Contact() {
  return (
    <footer id="contact" className="mx-auto max-w-5xl px-6 py-32 md:px-10">
      <h2 className="font-display mb-8 text-2xl text-text">Contact</h2>
      <a
        href="mailto:w4ynekousuke@gmail.com"
        className="font-display text-3xl text-text transition-colors hover:text-accent md:text-4xl"
      >
        w4ynekousuke@gmail.com
      </a>

      <div className="mt-24 flex items-center justify-between text-sm text-muted">
        <span>&copy; {new Date().getFullYear()} Wayne Yano</span>

        {/*
          Reserved spot for the hidden audio-visualizer easter egg
          (see /areas/personal-portfolio.md notes):
          - Keep the trigger visually quiet -- a single glyph or short word,
            not a button that announces itself. The "hidden" part of "hidden
            easter egg" is doing real work.
          - onClick should mount a fullscreen <AudioExperience /> (future
            component) that takes over the viewport, starts Web Audio's
            AnalyserNode on the chosen track, and swaps in a Three.js scene
            keyed off the track's genre (see sets.ts -- `genre` can double
            as the scene key).
          - Build that as its own route/overlay, not inline here, once
            Three.js + an audio-reactive shader pass are ready.
        */}
        <button
          type="button"
          aria-label="?"
          className="text-muted transition-colors hover:text-accent"
        >
          ·
        </button>
      </div>
    </footer>
  );
}
