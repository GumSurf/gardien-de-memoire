export default function AvisClients() {
  return (
    <section id="avis" className="relative overflow-hidden bg-doux px-5 py-24">
      {/* Halos décoratifs */}
      <div className="pointer-events-none absolute -right-24 top-10 h-64 w-64 rounded-full bg-rose/10 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-vert/15 blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto max-w-5xl">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="tracking-[0.6em] text-rose" aria-hidden="true">✿ ❀ ✿</p>
          <h2 className="mt-3 font-script text-6xl leading-tight text-vert">Vos témoignages</h2>
          <p className="mx-auto mt-3 max-w-xl text-lg text-gris">
            Chaque famille et chaque histoire méritent une attention particulière. Votre confiance est au cœur de mon engagement.
          </p>
        </div>

        {/* Même double filet que la formule annuelle */}
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-trait bg-fond p-2 shadow-[0_15px_60px_rgba(47,69,53,0.08)]">
          <div className="grid overflow-hidden rounded-[1.6rem] border border-vert/25 md:grid-cols-[0.85fr_1.15fr]">
            {/* Panneau vert */}
            <div className="relative flex min-h-[240px] items-center justify-center overflow-hidden bg-vert p-10 md:min-h-[340px]">
              <div className="absolute -left-12 -top-12 h-48 w-48 rounded-full border border-white/10" aria-hidden="true" />
              <div className="absolute -bottom-16 -right-10 h-56 w-56 rounded-full border border-white/10" aria-hidden="true" />

              <div className="relative flex flex-col items-center text-center">
                <svg viewBox="0 0 100 100" fill="none" className="mb-5 h-20 w-20 text-white/80" aria-hidden="true">
                  <path d="M50 82C50 61 34 49 22 40C14 34 16 22 25 19C35 16 43 25 50 38C57 25 65 16 75 19C84 22 86 34 78 40C66 49 50 61 50 82Z" stroke="currentColor" strokeWidth="1.2" />
                  <path d="M50 82V42M50 60C39 55 32 48 29 39M50 66C61 58 68 49 71 39" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
                <span className="font-script text-4xl text-white">Avec attention</span>
                <span className="mt-1 text-base text-white/85">et bienveillance</span>
              </div>
            </div>

            {/* Texte */}
            <div className="flex flex-col justify-center px-8 py-12 sm:px-12">
              <span className="font-script text-7xl leading-none text-rose" aria-hidden="true">“</span>
              <h3 className="mb-3 text-2xl font-bold leading-snug text-vert sm:text-3xl">Vos mots ont leur place ici.</h3>
              <p className="text-gris">
                Après mes premières interventions, cette rubrique accueillera les témoignages des personnes qui m’auront confié l’entretien de la sépulture de leurs proches.
              </p>
              <div className="my-6 h-px w-16 bg-rose/60" />
              <p className="font-script text-3xl text-rose">Merci pour votre confiance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}