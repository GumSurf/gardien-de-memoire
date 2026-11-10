import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales | Gardien de mémoire",
  description: "Mentions légales du site Gardien de mémoire, entretien et fleurissement de sépultures à Gestel et dans le Morbihan.",
  alternates: { canonical: "https://gardien-de-memoire-bretagne.fr/documents-legaux/mentions-legales" },
};


const contact = {
  name: "Céline Six",
  brand: "Gardien de mémoire",
  email: "contact@gardien-de-memoire-bretagne.fr",
  phone: "06 82 51 83 36",
  siren: "102 382 017",
  siret: "102 382 017 00014",
};

function LegalPage({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-fond px-5 py-16 sm:px-8">
      <div className="mx-auto max-w-4xl">
        <header className="mb-12 space-y-4 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose">
            {eyebrow}
          </p>
          <h1 className="font-serif text-3xl text-vert sm:text-5xl">{title}</h1>
          <p className="mx-auto max-w-2xl text-sm leading-7 text-gris">{intro}</p>
          <p className="text-xs text-gris/60">Dernière mise à jour : 10 novembre 2026</p>
        </header>

        <article className="space-y-8 rounded-3xl border border-vert/10 bg-white p-6 shadow-sm sm:p-10">
          {children}
        </article>

        <nav className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-vert">
          <a className="underline-offset-4 hover:underline" href="/">Accueil</a>
          <a className="underline-offset-4 hover:underline" href="/documents-legaux/mentions-legales">Mentions légales</a>
          <a className="underline-offset-4 hover:underline" href="/documents-legaux/cgv">CGV</a>
          <a className="underline-offset-4 hover:underline" href="/documents-legaux/politique-confidentialite">Confidentialité</a>
        </nav>
      </div>
    </main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-3">
      <h2 className="font-serif text-xl text-vert sm:text-2xl">{title}</h2>
      <div className="space-y-3 text-sm leading-7 text-gris">{children}</div>
    </section>
  );
}

export default function MentionsLegalesPage() {
  return (
    <LegalPage
      eyebrow="Gardien de mémoire"
      title="Mentions légales"
      intro="Retrouvez les informations relatives à l'éditeur, à la publication et à l'hébergement du site."
    >
      <Section title="Éditeur du site">
        <p>Le présent site est édité par :</p>
        <ul className="list-inside list-disc space-y-1">
          <li>Nom : {contact.name}</li>
          <li>Nom commercial : {contact.brand}</li>
          <li>Statut juridique : À COMPLÉTER</li>
          <li>SIREN : {contact.siren}</li>
          <li>SIRET : {contact.siret}</li>
          <li>Adresse professionnelle : À COMPLÉTER</li>
          <li>
            E-mail : <a className="text-vert underline" href={`mailto:${contact.email}`}>{contact.email}</a>
          </li>
          <li>
            Téléphone : <a className="text-vert underline" href={`tel:${contact.phone.replaceAll(" ", "")}`}>{contact.phone}</a>
          </li>
        </ul>
      </Section>

      <Section title="Directrice de la publication">
        <p>{contact.name}, en qualité de responsable de l'entreprise {contact.brand}.</p>
      </Section>

      <Section title="Hébergement du site">
        <p>
          Le site est hébergé par Vercel Inc., 440 N Barranca Avenue #4133,
          Covina, CA 91723, États-Unis. Site internet :{" "}
          <a className="text-vert underline" href="https://vercel.com" target="_blank" rel="noreferrer">vercel.com</a>.
        </p>
        <p>
          Certains traitements techniques liés au fonctionnement du site peuvent
          être réalisés en dehors de l'Union européenne, notamment aux États-Unis,
          selon les services et sous-traitants utilisés.
        </p>
      </Section>

      <Section title="Propriété intellectuelle">
        <p>
          Les textes, photographies, illustrations, éléments graphiques, logos et
          autres contenus présents sur ce site sont protégés par les dispositions
          relatives à la propriété intellectuelle. Toute reproduction,
          représentation, modification ou réutilisation, totale ou partielle,
          sans autorisation préalable de leur titulaire est interdite, sauf
          exceptions prévues par la loi.
        </p>
      </Section>

      <Section title="Responsabilité">
        <p>
          {contact.brand} s'efforce de fournir des informations exactes et à jour.
          Des erreurs ou omissions peuvent toutefois subsister. Les informations
          présentées sur le site sont données à titre indicatif et ne constituent
          pas un devis ou un engagement contractuel.
        </p>
        <p>
          {contact.brand} ne saurait être tenu responsable des dommages résultant
          de l'utilisation du site ou de l'impossibilité temporaire d'y accéder,
          dans les limites prévues par la loi.
        </p>
      </Section>

      <p className="border-t border-vert/10 pt-5 text-xs leading-6 text-gris/70">
        Les informations signalées « À COMPLÉTER » doivent être renseignées avant
        la mise en ligne du site.
      </p>
    </LegalPage>
  );
}
