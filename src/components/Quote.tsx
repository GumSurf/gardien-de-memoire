import { citation } from "@/lib/content";

function OrnementCitation() {
  return (
    <svg
      viewBox="0 0 280 24"
      className="mx-auto h-6 w-48 sm:w-64"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M2 12C55 5 92 19 127 12M153 12C188 5 225 19 278 12"
        stroke="#D9B979"
        strokeOpacity=".75"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path
        d="M140 21C131 14 133 7 140 3C147 7 149 14 140 21Z"
        fill="#486B52"
        fillOpacity=".8"
      />
      <circle cx="140" cy="12" r="2" fill="#C985A0" />
    </svg>
  );
}

export default function Quote() {
  if (!citation.texte) return null;

  return (
    <section
      className="relative overflow-hidden bg-[#F8F5EF] px-5 py-20 sm:py-28"
      aria-label="Citation"
    >
      {/* Fond décoratif subtil */}
      <div
        className="pointer-events-none absolute inset-4 border border-[#D9B979]/35 sm:inset-8"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-4xl text-center">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-rose">
          Quelques mots pour se souvenir
        </p>

        <OrnementCitation />

        <blockquote className="mx-auto mt-7 max-w-3xl">
          <span
            className="block font-script text-6xl leading-[0.7] text-rose/60 sm:text-7xl"
            aria-hidden="true"
          >
            “
          </span>

          <p className="mt-4 font-script text-3xl leading-relaxed text-vert sm:text-4xl md:text-5xl">
            {citation.texte}
          </p>

          {citation.auteur && (
            <footer className="mt-8">
              <span
                className="mx-auto mb-4 block h-px w-12 bg-[#D9B979]"
                aria-hidden="true"
              />

              <cite className="text-sm not-italic tracking-wide text-gris sm:text-base">
                {citation.auteur}
              </cite>
            </footer>
          )}
        </blockquote>

        <div className="mt-8">
          <OrnementCitation />
        </div>

        {/* Petite branche décorative */}
        <svg
          viewBox="0 0 100 100"
          className="pointer-events-none absolute -bottom-16 -right-10 hidden h-32 w-32 rotate-12 opacity-40 sm:block md:-right-20"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M10 95C35 70 40 38 85 8"
            stroke="#486B52"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
          <path
            d="M31 72C14 70 10 58 12 48C24 51 32 59 31 72Z"
            fill="#486B52"
            fillOpacity=".7"
          />
          <path
            d="M48 48C45 32 54 23 66 21C66 35 59 44 48 48Z"
            fill="#486B52"
            fillOpacity=".7"
          />
          <path
            d="M63 31C60 18 67 10 78 7C79 18 72 27 63 31Z"
            fill="#C985A0"
            fillOpacity=".8"
          />
        </svg>
      </div>
    </section>
  );
}