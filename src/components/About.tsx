import Image from "next/image";

const valeurs = [
  { titre: "Respect", texte: "Chaque sépulture est entretenue avec soin et considération.", symbole: "♡" },
  { titre: "Discrétion", texte: "Une présence attentive, dans le respect du lieu et du recueillement.", symbole: "✿" },
  { titre: "Confiance", texte: "Des photos après chaque visite pour vous tenir informé.", symbole: "✧" },
];

export default function About() {
  return (
    <section id="apropos" className="overflow-hidden bg-fond px-5 py-20 sm:py-28" aria-labelledby="about-title">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          {/* Texte de présentation */}
          <div>
            <p className="text-lg italic text-rose">Une présence, même à distance</p>

            <h2 id="about-title" className="mt-2 font-script text-5xl leading-tight text-vert sm:text-6xl">
              À propos de moi
            </h2>

            <div className="mt-6 flex items-center gap-3" aria-hidden="true">
              <span className="h-px w-12 bg-rose/50" />
              <span className="h-1.5 w-1.5 rotate-45 bg-rose" />
            </div>

            <p className="mt-7 text-lg leading-8 text-gris">
              Je m’appelle Céline Six. Et je suis confrontée à l'eloignement de là sépulture des êtres que j'aime, c'est pourquoi je me propose de prendre soin de là dernière demeure de vos proches, comme s'il s'agissait des miens.
            </p>

            <p className="mt-5 text-lg leading-8 text-gris">
              Mon approche est simple et discrète : un travail soigné, un espace propre et fleuri, ainsi qu'un bilan photographique en fin de prestation.
            </p>

            <a
              href="#services"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-vert px-7 py-3.5 text-white shadow-[0_10px_24px_-10px_rgb(47_93_70_/_0.6)] transition hover:-translate-y-0.5 hover:bg-[#244a38] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-vert"
            >
              Découvrir mes prestations
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          {/* Citation et photo */}
          <div className="relative mx-1">
            <div className="absolute -inset-2 rounded-[2rem] border border-rose/30 sm:-inset-3" aria-hidden="true" />

            <div className="relative overflow-hidden rounded-[1.75rem] border border-trait bg-doux">
              <div className="relative px-7 py-9 sm:px-10 sm:py-10">
                <span className="absolute right-5 top-0 font-script text-8xl leading-none text-rose/15 sm:right-8 sm:text-9xl" aria-hidden="true">❀</span>
                <span className="relative block font-script text-6xl leading-none text-rose/70 sm:text-7xl" aria-hidden="true">“</span>

                <blockquote className="relative -mt-1">
                  <p className="font-script text-3xl leading-relaxed text-vert sm:text-4xl">
                    Prendre soin d’une sépulture, c’est aussi prendre soin du souvenir de ceux qui nous sont chers.
                  </p>
                </blockquote>

                <div className="mt-6 h-px w-12 bg-rose/50" aria-hidden="true" />

                <p className="mt-4 text-base leading-7 text-gris sm:text-lg">
                  Une attention sincère, un entretien soigné et la tranquillité de savoir que votre proche n’est pas oublié.
                </p>
              </div>

              {/* Photo d'ambiance : alt vide car purement décorative */}
              <div className="relative h-64 overflow-hidden sm:h-80">
                <Image src="/images/green_tree.jpeg" alt="" fill sizes="(max-width: 640px) 100vw, 50vw" className="object-cover" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-vert/20 to-transparent" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>

        {/* Valeurs */}
        <div className="mt-20 grid gap-10 sm:grid-cols-3 sm:gap-8">
          {valeurs.map((valeur) => (
            <article key={valeur.titre} className="group text-center">
              <span className="mx-auto flex h-14 w-14 items-center justify-center font-script text-4xl text-rose transition-transform duration-300 group-hover:-translate-y-1 motion-reduce:transition-none" aria-hidden="true">
                {valeur.symbole}
              </span>
              <h3 className="mt-4 text-xl font-bold text-vert">{valeur.titre}</h3>
              <span className="mx-auto mt-3 block h-px w-8 bg-rose/50" aria-hidden="true" />
              <p className="mx-auto mt-3 max-w-xs text-base leading-7 text-gris">{valeur.texte}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}