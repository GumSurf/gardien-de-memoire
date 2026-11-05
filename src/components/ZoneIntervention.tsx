import { frais } from "@/lib/content";

const villes = [
  "Lorient", "Quéven", "Guidel", "Ploemeur", "Hennebont",
  "Lanester", "Caudan", "Pont-Scorff", "Larmor-Plage",
];

/* Schéma de la zone (pas une carte) : Gestel au centre, rayon de 30 km */
function SchemaZone() {
  const feuilles = Array.from({ length: 12 }, (_, i) => i * 30);
  return (
    <svg viewBox="0 0 320 320" className="mx-auto w-full max-w-sm" role="img" aria-label="Schéma de la zone d’intervention : un rayon de 30 km autour de Gestel">
      <defs>
        <radialGradient id="zone-halo" cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="var(--color-rose)" stopOpacity="0.18" />
          <stop offset="1" stopColor="var(--color-doux)" stopOpacity="0.9" />
        </radialGradient>
      </defs>

      <circle cx="160" cy="160" r="140" fill="url(#zone-halo)" className="stroke-vert" strokeOpacity="0.55" strokeDasharray="5 6" />
      <circle cx="160" cy="160" r="92" fill="none" className="stroke-vert" strokeOpacity="0.15" />
      <circle cx="160" cy="160" r="46" fill="none" className="stroke-vert" strokeOpacity="0.15" />

      {/* Feuilles le long du cercle */}
      {feuilles.map((a) => (
        <path
          key={a}
          d="M0 0C4-6 4-16 0-24C-4-16-4-6 0 0Z"
          transform={`rotate(${a} 160 160) translate(160 20) rotate(${a % 60 === 0 ? 35 : -35})`}
          className="fill-vert"
          fillOpacity="0.45"
        />
      ))}

      {/* Rayon de 30 km */}
      <path d="M160 160H300" className="stroke-rose" strokeWidth="1.4" strokeDasharray="3 4" strokeLinecap="round" />
      <text x="230" y="150" textAnchor="middle" className="fill-gris" fontSize="15">30 km</text>

      {/* Gestel */}
      <circle cx="160" cy="160" r="16" className="fill-rose" fillOpacity="0.2" />
      <circle cx="160" cy="160" r="7" className="fill-rose" />
      <text x="160" y="196" textAnchor="middle" className="fill-vert" fontSize="22" fontFamily="var(--font-script)">Gestel</text>
    </svg>
  );
}

export default function ZoneIntervention() {
  return (
    <section id="zone-intervention" className="relative overflow-hidden bg-doux px-5 py-24 sm:py-28" aria-labelledby="zone-title">
      <div className="pointer-events-none absolute -right-24 top-10 h-64 w-64 rounded-full bg-rose/10 blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto max-w-5xl">
        <div className="grid items-center gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
          {/* Schéma */}
          <div className="rounded-[2rem] border border-trait bg-fond p-2 shadow-[0_15px_50px_rgba(47,69,53,0.06)]">
            <div className="rounded-[1.6rem] border border-vert/20 p-6">
              <SchemaZone />
            </div>
          </div>

          {/* Texte et communes */}
          <div>
            <p className="text-lg italic text-rose">Une présence locale</p>
            <h2 id="zone-title" className="mt-1 font-script text-5xl leading-tight text-vert sm:text-6xl">
              Zone d’intervention
            </h2>
            <p className="mt-5 text-lg leading-8 text-gris">
              Basée à {frais.gratuitA}, je me déplace dans les communes environnantes pour l’entretien des sépultures de vos proches, dans un rayon de {frais.rayonKm} km.
            </p>

            <ul className="mt-7 grid grid-cols-2 gap-x-6 gap-y-3 text-lg sm:grid-cols-3">
              <li className="col-span-2 flex items-center gap-2 font-bold text-vert sm:col-span-3">
                <span className="text-rose" aria-hidden="true">✿</span>
                {frais.gratuitA}
                <span className="font-normal text-gris">· déplacement offert</span>
              </li>
              {villes.map((ville) => (
                <li key={ville} className="flex items-center gap-2 text-vert">
                  <span className="text-rose/70" aria-hidden="true">✿</span>
                  {ville}
                </li>
              ))}
            </ul>

            <p className="mt-6 text-gris">
              Au-delà de {frais.gratuitA}, le déplacement est facturé {frais.prixKm} € du kilomètre.
            </p>

            <div className="mt-8 border-t border-rose/30 pt-6">
              <p className="text-lg leading-7 text-gris">
                Vous habitez une autre commune à proximité ? Contactez-moi pour vérifier si votre secteur est desservi.
              </p>
              <a
                href="#contact"
                className="mt-5 inline-block rounded-full bg-vert px-8 py-3.5 text-white shadow-[0_10px_24px_-10px_rgb(47_93_70_/_0.6)] transition hover:-translate-y-0.5 hover:bg-[#244a38] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-vert"
              >
                Me contacter
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}