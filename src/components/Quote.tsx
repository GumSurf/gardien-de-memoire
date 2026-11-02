import { citation } from "@/lib/content";

function OrnementCitation() {
  return (
    <svg viewBox="0 0 280 24" className="mx-auto h-6 w-48 sm:w-64" fill="none" aria-hidden="true">
      <path
        d="M2 12C55 5 92 19 127 12M153 12C188 5 225 19 278 12"
        className="stroke-rose"
        strokeOpacity=".6"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path d="M140 21C131 14 133 7 140 3C147 7 149 14 140 21Z" className="fill-vert" fillOpacity=".8" />
      <circle cx="140" cy="12" r="2" className="fill-rose" />
    </svg>
  );
}

export default function Quote() {
  if (!citation.texte) return null;

  return (
    <section className="relative overflow-hidden bg-doux px-5 py-20 sm:py-28" aria-label="Citation">
      {/* Cadre décoratif subtil */}
      <div className="pointer-events-none absolute inset-4 border border-rose/25 sm:inset-8" aria-hidden="true" />

      <div className="relative mx-auto max-w-4xl text-center">
        <p className="mb-5 text-lg italic text-rose">Quelques mots pour se souvenir</p>

        <OrnementCitation />

        <blockquote className="mx-auto mt-7 max-w-3xl">
          <span className="block font-script text-6xl leading-[0.7] text-rose/60 sm:text-7xl" aria-hidden="true">“</span>

          <p className="mt-4 font-script text-3xl leading-relaxed text-vert sm:text-4xl md:text-5xl">
            {citation.texte}
          </p>

          {citation.auteur && (
            <footer className="mt-8">
              <span className="mx-auto mb-4 block h-px w-12 bg-rose/50" aria-hidden="true" />
              <cite className="text-lg not-italic text-gris">{citation.auteur}</cite>
            </footer>
          )}
        </blockquote>

        <div className="mt-8">
          <OrnementCitation />
        </div>
      </div>
    </section>
  );
}