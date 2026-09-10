/**
 * Full-viewport film-grain overlay.
 *
 * Why SVG feTurbulence instead of a PNG texture: it's resolution-independent
 * (no visible tiling seam on large screens), costs ~0kb of image weight, and
 * is trivial to re-tune (frequency = grain size, opacity = intensity).
 *
 * `pointer-events-none` + `fixed` so it sits above every section without
 * ever intercepting clicks or scroll.
 */
export default function Grain() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-50 opacity-[0.05] mix-blend-overlay"
    >
      <svg className="h-full w-full">
        <filter id="grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.85"
            numOctaves="2"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain)" />
      </svg>
    </div>
  );
}
