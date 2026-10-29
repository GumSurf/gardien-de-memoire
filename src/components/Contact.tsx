import { contact, frais } from "@/lib/content";

export default function Contact() {
  const telephone = contact.tel.replace(/[^\d+]/g, "");

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#F8F5EF] px-5 py-20 sm:py-28"
      aria-labelledby="contact-title"
    >
      <div className="mx-auto max-w-5xl">
        {/* En-tête */}
        <header className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-rose">
            Je suis à votre écoute
          </p>

          <h2
            id="contact-title"
            className="mt-4 font-script text-4xl text-vert sm:text-5xl md:text-6xl"
          >
            Parlons de vos besoins
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gris sm:text-base">
            Un devis, une question ou un besoin particulier ?
            Contactez-moi pour que nous puissions en discuter simplement.
          </p>

          <div
            className="mx-auto mt-7 flex items-center justify-center gap-3"
            aria-hidden="true"
          >
            <span className="h-px w-10 bg-[#D9B979]" />
            <span className="h-1.5 w-1.5 rotate-45 bg-rose" />
            <span className="h-px w-10 bg-[#D9B979]" />
          </div>
        </header>

        {/* Moyens de contact */}
        <div className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-2 sm:gap-5">
          {/* Téléphone */}
          <a
            href={`tel:${telephone}`}
            className="group flex min-w-0 items-center gap-4 rounded-3xl border border-[#E8DFD1] bg-[#FFFCFA] p-5 transition-colors duration-300 hover:border-[#D9B979] hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-vert sm:p-6 motion-reduce:transition-none"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#E8EEE7] text-vert transition-colors group-hover:bg-vert group-hover:text-white sm:h-14 sm:w-14 motion-reduce:transition-none">
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 11.19 18a19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.09 3.18 2 2 0 0 1 4.08 1h3a2 2 0 0 1 2 1.72c.12.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.11L8.06 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.84.58 2.8.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </span>

            <span className="min-w-0">
              <span className="block text-sm text-gris">
                Téléphone
              </span>

              <span className="mt-1 block break-words font-semibold text-vert transition-colors group-hover:text-rose">
                {contact.tel}
              </span>

              <span className="mt-1 block text-xs leading-5 text-gris">
                M'appeler directement
              </span>
            </span>
          </a>

          {/* E-mail */}
          <a
            href={`mailto:${contact.mail}`}
            className="group flex min-w-0 items-center gap-4 rounded-3xl border border-[#E8DFD1] bg-[#FFFCFA] p-5 transition-colors duration-300 hover:border-[#D9B979] hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-vert sm:p-6 motion-reduce:transition-none"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#F1EBDD] text-vert transition-colors group-hover:bg-vert group-hover:text-white sm:h-14 sm:w-14 motion-reduce:transition-none">
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>
            </span>

            <span className="min-w-0">
              <span className="block text-sm text-gris">
                Adresse e-mail
              </span>

              <span className="mt-1 block break-all font-semibold text-vert transition-colors group-hover:text-rose">
                {contact.mail}
              </span>

              <span className="mt-1 block text-xs leading-5 text-gris">
                M'écrire un message
              </span>
            </span>
          </a>
        </div>

        {/* Zone d'intervention et carte */}
        <div className="mx-auto mt-8 max-w-4xl overflow-hidden rounded-3xl border border-[#E8DFD1] bg-[#FFFCFA] shadow-sm shadow-[#2F5D46]/5">
          <div className="grid md:grid-cols-[0.9fr_1.1fr]">
            {/* Informations pratiques */}
            <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-9">
              <span
                className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E8EEE7] text-vert"
                aria-hidden="true"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
              </span>

              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-rose">
                Morbihan · Bretagne
              </p>

              <h3 className="mt-2 text-2xl font-semibold text-vert">
                Zone d'intervention
              </h3>

              <p className="mt-3 text-sm leading-7 text-gris sm:text-base">
                Basée à {contact.ville}, j'interviens dans un rayon de{" "}
                {frais.rayonKm} km autour de Gestel pour prendre soin des
                sépultures.
              </p>

              {/* Rayon d'intervention */}
              <div className="mt-5 flex items-center gap-3 rounded-2xl border border-[#E8DFD1] bg-[#F8F5EF] p-4">
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-vert"
                  aria-hidden="true"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <circle cx="12" cy="12" r="4" />
                    <circle
                      cx="12"
                      cy="12"
                      r="1"
                      fill="currentColor"
                    />
                  </svg>
                </span>

                <div>
                  <p className="text-sm font-semibold text-vert">
                    Rayon de {frais.rayonKm} km
                  </p>

                  <p className="mt-0.5 text-xs leading-5 text-gris">
                    Autour de Gestel et des communes voisines
                  </p>
                </div>
              </div>

              {/* Frais de déplacement */}
              <div className="mt-3 border-l-2 border-[#D9B979] pl-4">
                <p className="text-sm font-semibold text-vert">
                  Frais de déplacement
                </p>

                <p className="mt-1 text-sm leading-6 text-gris">
                  Déplacement gratuit à {frais.gratuitA}, puis{" "}
                  {frais.prixKm} € par kilomètre dans la zone d'intervention.
                </p>
              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Gestel%2C%20Morbihan%2C%20France"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-vert px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#244A38] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-vert"
              >
                Ouvrir Google Maps
                <span aria-hidden="true">↗</span>
              </a>
            </div>

            {/* Carte Google Maps */}
            <div className="relative min-h-72 overflow-hidden border-t border-[#E8DFD1] bg-[#F0F2EC] md:min-h-full md:border-l md:border-t-0">
              <iframe
                title="Carte Google Maps de Gestel dans le Morbihan"
                src="https://maps.google.com/maps?q=Gestel%2C%20Morbihan%2C%20France&z=13&output=embed"
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />

              {/* Repère visuel sur la carte */}
              <div className="pointer-events-none absolute bottom-4 left-4 right-4">
                <div className="flex items-center gap-3 rounded-2xl border border-white/70 bg-[#FFFCFA]/95 p-3 shadow-lg shadow-black/5 backdrop-blur-sm">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#E8EEE7] text-vert">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                      <circle cx="12" cy="10" r="2.5" />
                    </svg>
                  </span>

                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-vert">
                      Gestel
                    </p>

                    <p className="text-xs text-gris">
                      Point de départ des interventions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Note de clôture */}
        <div className="mt-12 text-center">
          <div
            className="mx-auto flex items-center justify-center gap-3"
            aria-hidden="true"
          >
            <span className="h-px w-8 bg-[#D9B979]" />
            <span className="text-lg text-rose/80">✿ ❀</span>
            <span className="h-px w-8 bg-[#D9B979]" />
          </div>

          <p className="mt-4 font-script text-2xl text-vert sm:text-3xl">
            Chaque souvenir mérite une attention particulière.
          </p>
        </div>
      </div>
    </section>
  );
}