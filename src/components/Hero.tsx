import type { CSSProperties } from "react";
import Logo from "./Logo";

const delai = (s: number) => ({ "--d": `${s}s` }) as CSSProperties;

/* Feuilles le long de la tige : [x, y, rotation, échelle] */
const feuilles: [number, number, number, number][] = [
  [28, 385, -70, 1], [40, 360, 40, 1.1], [58, 320, -65, 1.2], [72, 285, 50, 1.2],
  [80, 245, -60, 1.2], [82, 205, 55, 1.1], [76, 165, -55, 1.1], [72, 130, 50, 1],
  [80, 95, -45, 0.9], [98, 60, 40, 0.9], [118, 30, -30, 0.8],
];

function Fleur({ x, y, s = 1 }: { x: number; y: number; s?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      {[0, 72, 144, 216, 288].map((r) => (
        <ellipse key={r} cx="0" cy="-9" rx="7" ry="10" transform={`rotate(${r})`} className="fill-rose" fillOpacity="0.8" />
      ))}
      <circle r="3.6" className="fill-fond" />
      <circle r="1.6" className="fill-rose" />
    </g>
  );
}

function Feuillage({ miroir = false, className = "" }: { miroir?: boolean; className?: string }) {
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute bottom-0 ${miroir ? "right-0" : "left-0"} ${className}`} style={miroir ? { transform: "scaleX(-1)" } : undefined}>
      <svg viewBox="0 -30 260 450" className="pousse h-auto w-full" fill="none">
        <path d="M10 420C60 340 90 250 70 150C60 100 90 50 130 10" className="stroke-vert" strokeWidth="2.2" strokeLinecap="round" strokeOpacity="0.7" />
        {feuilles.map(([x, y, r, s], i) => (
          <path key={i} d="M0 0C7-10 7-28 0-42C-7-28-7-10 0 0Z" transform={`translate(${x} ${y}) rotate(${r}) scale(${s})`} className="fill-vert" fillOpacity={0.28 + (i % 3) * 0.12} />
        ))}
        <Fleur x={131} y={8} s={1.3} />
        <Fleur x={98} y={202} s={0.9} />
        <Fleur x={52} y={330} s={0.8} />
      </svg>
    </div>
  );
}

const infos = [
  { texte: "Gestel et 30 km alentour", icone: <path d="M12 21s-6-5.2-6-10a6 6 0 1112 0c0 4.8-6 10-6 10zM12 8.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5z" /> },
  { texte: "Déplacement gratuit à Gestel", icone: <path d="M3 11l18-8-8 18-2-8-8-2z" /> },
  { texte: "Bilan photo après chaque visite", icone: <path d="M4 8h3l2-3h6l2 3h3v11H4zM12 11a3.5 3.5 0 100 7 3.5 3.5 0 000-7z" /> },
];

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative flex min-h-[92svh] items-center justify-center overflow-hidden px-5 pb-24 pt-20 text-center"
      style={{
        backgroundImage:
          "radial-gradient(ellipse 80% 60% at 50% 0%, var(--color-doux), transparent 70%), radial-gradient(circle at 88% 92%, rgb(185 120 139 / 0.10), transparent 45%)",
      }}
    >
      <Feuillage className="w-32 opacity-80 sm:w-48 lg:w-72" />
      <Feuillage miroir className="w-28 opacity-70 sm:w-40 lg:w-60" />

      <div className="relative z-[1] mx-auto max-w-3xl">
        <div className="lever mx-auto mb-2 w-fit text-vert" style={delai(0)}>
          <Logo size={56} />
        </div>

        <h1 className="lever font-script text-[clamp(3.6rem,12vw,7.5rem)] leading-[1.05] text-vert" style={delai(0.15)}>
          Gardien de mémoire
        </h1>

        <svg viewBox="0 0 400 24" className="mx-auto my-2 h-6 w-64 sm:w-80" fill="none" aria-hidden="true">
          <path d="M5 14C90 4 150 22 190 12M210 12C250 2 310 20 395 10" pathLength={600} className="trait stroke-rose" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M200 20C193 14 193 6 200 0C207 6 207 14 200 20Z" className="lever fill-vert" fillOpacity="0.7" style={delai(1.9)} />
        </svg>

        <p className="lever mx-auto mb-8 mt-3 max-w-xl text-xl text-gris" style={delai(0.5)}>
          Je veille sur la dernière demeure de vos proches : nettoyage, fleurissement, entretien. Autour de Gestel, dans un rayon de 30 km.
        </p>

        <div className="lever flex flex-wrap items-center justify-center gap-3" style={delai(0.65)}>
          <a href="#contact" className="rounded-full bg-vert px-8 py-3.5 text-white shadow-[0_10px_24px_-10px_rgb(47_93_70_/_0.6)] transition hover:-translate-y-0.5 hover:bg-[#244a38] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-vert">
            Demander un devis
          </a>
          <a href="#services" className="rounded-full border border-vert/40 px-8 py-3.5 text-vert transition hover:bg-doux focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-vert">
            Voir les services
          </a>
        </div>

        <ul className="lever mx-auto mt-12 flex max-w-2xl flex-wrap justify-center gap-x-8 gap-y-3 text-base text-gris" style={delai(0.8)}>
          {infos.map((i) => (
            <li key={i.texte} className="flex items-center gap-2">
              <svg viewBox="0 0 24 24" className="h-5 w-5 stroke-vert" fill="none" strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round" aria-hidden="true">{i.icone}</svg>
              {i.texte}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}