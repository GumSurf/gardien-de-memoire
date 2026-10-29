import Image from "next/image";
import type { ReactNode } from "react";

import {
  prestations,
  formules,
  frais,
  lecture,
} from "@/lib/content";

const imagesPrestations: Record<string, { src: string; alt: string }> = {
  nettoyage: {
    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    alt: "Allée paisible bordée d'arbres dans un espace naturel",
  },
  lettres: {
    src: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23",
    alt: "Détail de pierre naturelle",
  },
  fleurissement: {
    src: "https://images.unsplash.com/photo-1490750967868-88aa4486c946",
    alt: "Fleurs délicates dans des tons doux",
  },
  bougie: {
    src: "https://images.unsplash.com/photo-1603006905003-be475563bc59",
    alt: "Bougie allumée dans une ambiance apaisante",
  },
};

const icones: Record<string, ReactNode> = {
  nettoyage: (
    <path d="M12 3s6 6.5 6 11a6 6 0 1 1-12 0c0-4.5 6-11 6-11z" />
  ),
  lettres: <path d="M5 19 12 5l7 14M8 14.5h8" />,
  fleurissement: (
    <g>
      {[0, 72, 144, 216, 288].map((r) => (
        <ellipse
          key={r}
          cx="12"
          cy="6.6"
          rx="2.4"
          ry="3.4"
          transform={`rotate(${r} 12 12)`}
        />
      ))}
      <circle cx="12" cy="12" r="1.6" />
    </g>
  ),
  bougie: (
    <path d="M9.5 21h5V11h-5zM12 8c-1.6-1.6-1.6-3.2 0-5.2 1.6 2 1.6 3.6 0 5.2z" />
  ),
};

function Icone({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

function Ornement() {
  return (
    <svg
      viewBox="0 0 400 28"
      className="mx-auto h-7 w-56 sm:w-72"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 14C85 5 145 23 185 14M215 14C255 5 315 23 396 14"
        className="stroke-[#D9B979]/70"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M200 23C192 16 192 8 200 2C208 8 208 16 200 23Z"
        className="fill-vert"
        fillOpacity=".75"
      />
      <circle cx="200" cy="13" r="2" className="fill-rose" />
    </svg>
  );
}

function FeuilleDecorative() {
  return (
    <svg
      viewBox="0 0 180 240"
      className="pointer-events-none absolute bottom-0 right-0 w-28 opacity-40 sm:w-36"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M15 240C50 190 75 130 75 75C75 45 100 20 140 5"
        className="stroke-vert"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {[
        [35, 195, -45],
        [52, 165, 40],
        [65, 132, -45],
        [74, 100, 40],
        [89, 70, -40],
        [112, 40, 40],
      ].map(([x, y, rotation], i) => (
        <path
          key={i}
          d="M0 0C7-10 7-28 0-42C-7-28-7-10 0 0Z"
          transform={`translate(${x} ${y}) rotate(${rotation})`}
          className="fill-vert"
          fillOpacity=".65"
        />
      ))}
      <g transform="translate(140 5)">
        {[0, 72, 144, 216, 288].map((rotation) => (
          <ellipse
            key={rotation}
            cx="0"
            cy="-6"
            rx="4"
            ry="6"
            transform={`rotate(${rotation})`}
            className="fill-rose"
            fillOpacity=".8"
          />
        ))}
        <circle r="2.5" className="fill-[#D9B979]" />
      </g>
    </svg>
  );
}

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#FFFCFA] px-5 py-24 sm:py-32"
      aria-labelledby="services-title"
    >
      <div className="mx-auto max-w-6xl">
        {/* Introduction */}
        <header className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-rose">
            Prendre soin du souvenir
          </p>

          <h2
            id="services-title"
            className="mt-4 font-script text-5xl leading-tight text-vert sm:text-6xl"
          >
            Services et tarifs
          </h2>

          <div className="mt-4">
            <Ornement />
          </div>

          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-gris sm:text-lg">
            Un entretien ponctuel ou régulier, adapté à vos souhaits
            et à ceux de votre proche.
          </p>
        </header>

        {/* Prestations à l'unité */}
        <div className="mt-20 sm:mt-24">
          <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-rose">
                01 / À la carte
              </p>
              <h3 className="mt-3 font-script text-4xl text-vert sm:text-5xl">
                Les prestations à l’unité
              </h3>
            </div>

            <p className="max-w-sm text-sm leading-6 text-gris sm:text-right">
              Choisissez uniquement les soins dont la sépulture a besoin.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {prestations.map((prestation, index) => {
              const image = imagesPrestations[prestation.id];

              return (
                <article
                  key={prestation.id}
                  className="group flex min-w-0 flex-col overflow-hidden rounded-t-[5rem] border border-[#D9B979]/35 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#526B55]/10 motion-reduce:transform-none motion-reduce:transition-none"
                >
                  {/* Photo de remplissage */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#F0F2EC]">
                    {image ? (
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105 motion-reduce:transform-none motion-reduce:transition-none"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center text-vert">
                        <Icone className="h-10 w-10">
                          {icones[prestation.id] ?? (
                            <path d="M12 3v18M3 12h18" />
                          )}
                        </Icone>
                      </div>
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-[#26382B]/45 via-transparent to-transparent" />

                    <span className="absolute bottom-3 left-4 font-script text-3xl text-white drop-shadow">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/60 bg-[#FFFCFA]/90 text-vert backdrop-blur-sm">
                      <Icone className="h-5 w-5">
                        {icones[prestation.id] ?? (
                          <path d="M12 3v18M3 12h18" />
                        )}
                      </Icone>
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <h4 className="text-lg font-semibold text-vert">
                      {prestation.titre}
                    </h4>

                    <p className="mt-3 flex-1 text-sm leading-7 text-gris">
                      {prestation.texte}
                    </p>

                    {prestation.details?.length > 0 && (
                      <ul className="mt-4 space-y-2 border-t border-[#D9B979]/30 pt-4">
                        {prestation.details.map((detail) => (
                          <li
                            key={detail}
                            className="flex items-start gap-2 text-sm leading-6 text-gris"
                          >
                            <span className="mt-0.5 text-rose" aria-hidden="true">
                              ✿
                            </span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    <div className="mt-6 border-t border-[#D9B979]/40 pt-4">
                      <p className="text-xs uppercase tracking-[0.18em] text-gris">
                        Tarif
                      </p>
                      <p className="mt-1 font-script text-3xl text-vert">
                        {prestation.prix ?? "Sur devis"}
                      </p>
                    </div>

                    <a
                      href="#contact"
                      className="mt-5 inline-flex w-fit items-center gap-2 text-sm font-semibold text-vert transition-colors hover:text-rose focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-vert"
                    >
                      Demander un devis
                      <span
                        className="transition-transform group-hover:translate-x-1 motion-reduce:transition-none"
                        aria-hidden="true"
                      >
                        →
                      </span>
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Formules annuelles */}
        <div className="mt-24 sm:mt-28">
          <header className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-rose">
              02 / Toute l’année
            </p>

            <h3 className="mt-4 font-script text-4xl text-vert sm:text-5xl">
              Les formules annuelles
            </h3>

            <div className="mt-3">
              <Ornement />
            </div>

            <p className="mx-auto mt-4 max-w-xl leading-7 text-gris">
              La tranquillité d’un entretien programmé, même lorsque
              vous ne pouvez pas vous déplacer.
            </p>
          </header>

          <div className="mt-12 grid items-stretch gap-6 md:grid-cols-3">
            {formules.map((formule, index) => (
              <article
                key={formule.id}
                className={`relative flex flex-col overflow-hidden rounded-2xl transition duration-300 hover:-translate-y-1 motion-reduce:transform-none motion-reduce:transition-none ${
                  formule.miseEnAvant
                    ? "border border-[#D9B979] bg-[#F8F5EF] shadow-lg shadow-[#526B55]/10"
                    : "border border-[#D9B979]/35 bg-white hover:border-[#D9B979]/80 hover:shadow-lg hover:shadow-[#526B55]/5"
                }`}
              >
                <div className="relative h-32 overflow-hidden bg-[#F0F2EC]">
                  <Image
                    src={
                      index === 0
                        ? "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
                        : index === 1
                          ? "https://images.unsplash.com/photo-1490750967868-88aa4486c946"
                          : "https://images.unsplash.com/photo-1518709268805-4e9042af9f23"
                    }
                    alt=""
                    fill
                    sizes="(max-width: 767px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#26382B]/50 to-transparent" />

                  {formule.miseEnAvant && (
                    <span className="absolute bottom-3 left-5 rounded-full bg-vert px-4 py-1.5 text-xs font-semibold tracking-wide text-white">
                      À découvrir
                    </span>
                  )}

                  <span className="absolute bottom-3 right-5 font-script text-3xl text-white">
                    0{index + 1}
                  </span>
                </div>

                <div className="flex flex-1 flex-col px-6 pb-7 pt-6 sm:px-7">
                  <div className="flex items-start justify-between gap-3">
                    <h4 className="font-script text-3xl text-vert sm:text-4xl">
                      {formule.nom}
                    </h4>
                    <span className="mt-1 text-xl text-rose/70" aria-hidden="true">
                      ✿
                    </span>
                  </div>

                  <p className="mt-4 min-h-12 text-sm leading-6 text-gris">
                    {formule.description}
                  </p>

                  <div className="my-6 border-y border-[#D9B979]/50 py-5">
                    {formule.mensualite != null ? (
                      <>
                        <p className="font-script text-5xl text-vert">
                          {formule.mensualite} €
                          <span className="font-texte text-sm text-gris">
                            {" "}/ mois
                          </span>
                        </p>

                        {formule.total != null && (
                          <p className="mt-2 text-sm text-gris">
                            Soit {formule.total} € par an
                          </p>
                        )}
                      </>
                    ) : (
                      <p className="font-script text-3xl text-vert">
                        Sur devis
                      </p>
                    )}

                    {formule.passages != null && (
                      <p className="mt-2 text-sm text-gris">
                        {formule.passages} passages par an
                      </p>
                    )}
                  </div>

                  <p className="text-sm font-semibold text-vert">
                    Cette formule comprend
                  </p>

                  <ul className="mt-4 flex-1 space-y-3">
                    {formule.inclus.map((element) => (
                      <li
                        key={element}
                        className="flex items-start gap-3 text-sm leading-6 text-gris"
                      >
                        <span className="mt-0.5 text-vert" aria-hidden="true">
                          ✓
                        </span>
                        <span>{element}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-vert ${
                      formule.miseEnAvant
                        ? "bg-vert text-white hover:bg-[#244A38]"
                        : "border border-vert/35 text-vert hover:border-vert hover:bg-[#E8EEE7]"
                    }`}
                  >
                    Découvrir cette formule
                    <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </article>
            ))}
          </div>

          <p className="mx-auto mt-6 max-w-2xl text-center text-xs leading-6 text-gris">
            Le contenu, le nombre de passages et les tarifs des formules
            seront précisés sur le devis.
          </p>
        </div>

        {/* Une attention particulière */}
        <div className="relative mt-24 overflow-hidden rounded-2xl border border-[#D9B979]/50 bg-[#F8F5EF] sm:mt-28">
          <div className="grid md:grid-cols-2">
            <div className="flex flex-col justify-center px-7 py-12 sm:px-12 sm:py-16">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-rose">
                03 / Une attention particulière
              </p>

              <h3 className="mt-4 font-script text-4xl leading-tight text-vert sm:text-5xl">
                Un hommage en quelques mots
              </h3>

              <div className="mt-5 h-px w-14 bg-[#D9B979]" />

              <p className="mt-5 leading-7 text-gris">
                Parce que chaque souvenir est unique, je vous propose
                une lecture de texte devant la sépulture, sans supplément,
                à la fin de la prestation.
              </p>

              <ul className="mt-6 space-y-3">
                {lecture.types.map((type) => (
                  <li
                    key={type}
                    className="flex items-start gap-3 text-sm leading-6 text-vert"
                  >
                    <span className="text-rose" aria-hidden="true">
                      ✿
                    </span>
                    <span>{type}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="mt-8 inline-flex w-fit items-center gap-2 border-b border-vert/50 pb-2 text-sm font-semibold text-vert transition-colors hover:border-rose hover:text-rose focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-vert"
              >
                Parlons de votre demande
                <span aria-hidden="true">↗</span>
              </a>
            </div>

            {/* Illustration botanique */}
            <div className="relative flex min-h-80 items-center justify-center overflow-hidden bg-[#F0F2EC] px-8 py-12 sm:min-h-96">
              <div
                className="absolute inset-5 border border-[#D9B979]/50"
                aria-hidden="true"
              />

              <FeuilleDecorative />

              <div className="relative z-10 mx-auto max-w-sm text-center">
                <span
                  className="block font-script text-7xl leading-none text-rose/70"
                  aria-hidden="true"
                >
                  “
                </span>

                <p className="font-script text-3xl leading-relaxed text-vert sm:text-4xl">
                  Les souvenirs restent vivants dans les mots que l’on partage.
                </p>

                <div className="mx-auto mt-6 h-px w-12 bg-[#D9B979]" />

                <p className="mt-4 text-xs uppercase tracking-[0.2em] text-gris">
                  Un moment de recueillement
                </p>

                <span className="mt-5 block text-rose" aria-hidden="true">
                  ✿ ❀ ✿
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Informations pratiques */}
        <div className="mt-20">
          <div className="mb-8 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-rose">
              Pour vous accompagner
            </p>

            <h3 className="mt-3 font-script text-3xl text-vert sm:text-4xl">
              Informations pratiques
            </h3>

            <div className="mt-3">
              <Ornement />
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 sm:gap-8">
            <div className="flex gap-4 rounded-xl border border-[#D9B979]/35 bg-white p-6">
              <span
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F1EBDD] text-vert"
                aria-hidden="true"
              >
                <Icone className="h-5 w-5">
                  <path d="M12 3s6 6.5 6 11a6 6 0 1 1-12 0c0-4.5 6-11 6-11z" />
                </Icone>
              </span>

              <div>
                <h4 className="font-semibold text-vert">Déplacements</h4>
                <p className="mt-2 text-sm leading-7 text-gris">
                  Déplacement gratuit à {frais.gratuitA}, puis{" "}
                  {frais.prixKm} € par kilomètre dans un rayon de{" "}
                  {frais.rayonKm} km.
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-xl border border-[#D9B979]/35 bg-white p-6">
              <span
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#E8EEE7] text-vert"
                aria-hidden="true"
              >
                <Icone className="h-5 w-5">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </Icone>
              </span>

              <div>
                <h4 className="font-semibold text-vert">Paiement</h4>
                <p className="mt-2 text-sm leading-7 text-gris">
                  Le règlement s’effectue par virement bancaire.
                  Les modalités sont précisées lors de l’établissement du devis.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Conclusion */}
        <div className="mt-16 text-center">
          <Ornement />

          <p className="mt-4 font-script text-3xl text-vert sm:text-4xl">
            Chaque souvenir mérite une attention particulière.
          </p>

          <a
            href="#contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-vert px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#244A38] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-vert"
          >
            Demander un devis
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}