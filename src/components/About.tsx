import Image from "next/image";

export default function About() {
  const valeurs = [
    {
      titre: "Respect",
      texte: "Chaque sépulture est entretenue avec soin et considération.",
      symbole: "♡",
    },
    {
      titre: "Discrétion",
      texte:
        "Une présence attentive, dans le respect du lieu et du recueillement.",
      symbole: "✿",
    },
    {
      titre: "Confiance",
      texte: "Des photos après chaque visite pour vous tenir informé.",
      symbole: "✧",
    },
  ];

  return (
    <section
      id="apropos"
      className="overflow-hidden bg-[#FFFCFA] px-5 py-20 sm:py-28"
      aria-labelledby="about-title"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          {/* Texte de présentation */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-rose">
              Une présence, même à distance
            </p>

            <h2
              id="about-title"
              className="mt-4 font-script text-4xl leading-tight text-vert sm:text-5xl lg:text-6xl"
            >
              À propos de moi
            </h2>

            <div
              className="mt-6 flex items-center gap-3"
              aria-hidden="true"
            >
              <span className="h-px w-12 bg-[#D9B979]" />
              <span className="h-1.5 w-1.5 rotate-45 bg-rose" />
            </div>

            <p className="mt-7 text-base leading-8 text-gris sm:text-lg">
              Je m'appelle Céline Six. Quand on ne peut pas se rendre
              aussi souvent qu'on le souhaiterait auprès d'un proche
              disparu, je prends le relais : je veille sur sa dernière
              demeure comme je le ferais pour la mienne.
            </p>

            <p className="mt-5 text-base leading-8 text-gris sm:text-lg">
              Mon approche est simple et discrète : un travail soigné,
              un espace propre et fleuri, et des nouvelles en photos
              pour que vous restiez proche, même de loin.
            </p>

            <a
              href="#services"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-vert px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#244A38] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-vert"
            >
              Découvrir mes prestations
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          {/* Citation et photo */}
          <div className="relative mx-1">
            <div
              className="absolute -inset-2 rounded-[2rem] border border-[#D9B979]/60 sm:-inset-3"
              aria-hidden="true"
            />

            <div className="relative overflow-hidden rounded-[1.75rem] border border-[#E8DFD1] bg-[#F8F5EF]">
              {/* Citation */}
              <div className="relative px-7 py-9 sm:px-10 sm:py-10">
                <span
                  className="absolute right-5 top-0 font-script text-8xl leading-none text-rose/15 sm:right-8 sm:text-9xl"
                  aria-hidden="true"
                >
                  ❀
                </span>

                <span
                  className="relative block font-script text-6xl leading-none text-rose/70 sm:text-7xl"
                  aria-hidden="true"
                >
                  “
                </span>

                <blockquote className="relative -mt-1">
                  <p className="font-script text-3xl leading-relaxed text-vert sm:text-4xl">
                    Prendre soin d'une sépulture, c'est aussi prendre
                    soin du souvenir de ceux qui nous sont chers.
                  </p>
                </blockquote>

                <div
                  className="mt-6 h-px w-12 bg-[#D9B979]"
                  aria-hidden="true"
                />

                <p className="mt-4 text-sm leading-7 text-gris sm:text-base">
                  Une attention sincère, un entretien soigné et la
                  tranquillité de savoir que votre proche n'est pas oublié.
                </p>
              </div>

              {/* Photo d'illustration */}
              <div className="relative h-64 overflow-hidden sm:h-80">
                <Image
                  src="/images/green_tree.jpeg"
                  alt="Arbre décoratif"
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover"
                />

                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#244A38]/20 to-transparent"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Valeurs */}
        <div className="mt-20 grid gap-10 sm:grid-cols-3 sm:gap-8">
          {valeurs.map((valeur, index) => (
            <article
              key={valeur.titre}
              className="group text-center"
            >
              <span
                className="mx-auto flex h-14 w-14 items-center justify-center font-script text-4xl text-rose transition-transform duration-300 group-hover:-translate-y-1 motion-reduce:transition-none"
                aria-hidden="true"
              >
                {valeur.symbole}
              </span>

              <h3 className="mt-4 text-lg font-semibold text-vert">
                {valeur.titre}
              </h3>

              <span
                className="mx-auto mt-3 block h-px w-8 bg-[#D9B979]"
                aria-hidden="true"
              />

              <p className="mx-auto mt-3 max-w-xs text-sm leading-7 text-gris">
                {valeur.texte}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}