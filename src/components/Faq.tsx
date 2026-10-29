import { faq } from "@/lib/content";

export default function Faq() {
  return (
    <section
      id="faq"
      className="bg-[#FFFCFA] px-5 py-20 sm:py-28"
      aria-labelledby="faq-title"
    >
      <div className="mx-auto max-w-3xl">
        {/* En-tête */}
        <header className="mb-12 text-center sm:mb-14">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-rose">
            Besoin d'informations ?
          </p>

          <h2
            id="faq-title"
            className="mt-4 font-script text-4xl text-vert sm:text-5xl"
          >
            Questions fréquentes
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gris sm:text-base">
            Vous vous interrogez sur l'entretien d'une sépulture,
            les prestations ou leur organisation ? Retrouvez ici
            les réponses aux questions les plus courantes.
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

        {/* Questions */}
        <div className="space-y-3">
          {faq.map((f, index) => (
            <details
              key={f.q}
              className="group overflow-hidden rounded-2xl border border-[#E8DFD1] bg-[#F8F5EF]/70 shadow-[0_2px_8px_rgba(47,63,45,0.025)] transition-all duration-300 hover:border-[#D9A8B5]/60 hover:shadow-[0_5px_18px_rgba(47,63,45,0.06)] open:border-[#D9A8B5]/60 open:bg-[#FDF7F9] motion-reduce:transition-none"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-5 text-left text-sm font-semibold leading-6 text-vert transition-colors hover:text-rose focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-[#526B55] sm:px-6 sm:text-base [&::-webkit-details-marker]:hidden">
                <span className="flex min-w-0 items-start gap-4">
                  <span
                    className="mt-0.5 shrink-0 text-xs font-semibold tracking-wider text-rose"
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span>{f.q}</span>
                </span>

                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F5E8EC] text-lg font-normal text-rose transition-transform duration-300 group-open:rotate-45 motion-reduce:transition-none"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>

              <div className="px-5 pb-5 sm:px-6">
                <div className="mb-4 ml-8 h-px bg-gradient-to-r from-[#D9B979]/60 via-[#D9A8B5]/50 to-transparent" />

                <p className="pl-8 text-sm leading-7 text-gris sm:text-base">
                  {f.r}
                </p>
              </div>
            </details>
          ))}
        </div>

        {/* Invitation au contact */}
        <div className="relative mt-12 overflow-hidden rounded-3xl border border-[#E8DFD1] bg-[#F8F5EF] px-6 py-8 text-center shadow-[0_8px_30px_rgba(47,63,45,0.04)] sm:px-10 sm:py-10">
          {/* Décoration discrète */}
          <span
            className="mx-auto mb-4 block h-px w-10 bg-[#D9B979]"
            aria-hidden="true"
          />

          <span
            className="mb-3 block text-xl text-rose"
            aria-hidden="true"
          >
            ❀
          </span>

          <h3 className="font-script text-2xl text-vert sm:text-3xl">
            Vous avez une autre question ?
          </h3>

          <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-gris sm:text-base">
            Chaque sépulture et chaque besoin sont différents.
            Contactez-moi pour que nous puissions en discuter simplement.
          </p>

          <a
            href="#contact"
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-vert px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#244A38] hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-vert motion-reduce:transform-none motion-reduce:transition-none"
          >
            Me contacter
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            >
              ↗
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}