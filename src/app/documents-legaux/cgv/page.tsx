import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conditions générales de vente | Gardien de mémoire",
  description: "Conditions générales de vente des prestations de nettoyage, entretien et fleurissement de sépultures proposées par Gardien de mémoire.",
  alternates: { canonical: "https://gardien-de-memoire-bretagne.fr/documents-legaux/cgv" },
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

export default function CGVPage() {
  return (
    <LegalPage
      eyebrow="Gardien de mémoire"
      title="Conditions générales de vente"
      intro="Les présentes conditions définissent les modalités de commande et de réalisation des prestations proposées par Gardien de mémoire."
    >
      <Section title="Article 1 – Objet">
        <p>
          Les présentes conditions générales de vente (CGV) s'appliquent aux
          prestations d'entretien et d'accompagnement des sépultures proposées
          par {contact.brand} à des particuliers.
        </p>
        <ul className="list-inside list-disc space-y-1">
          <li>Nettoyage et entretien des sépultures ;</li>
          <li>Rénovation des lettres gravées ;</li>
          <li>Fleurissement des tombes ;</li>
          <li>Bougie du souvenir ;</li>
          <li>Formules d'entretien ponctuel ou régulier ;</li>
          <li>Prestations complémentaires définies dans un devis.</li>
        </ul>
      </Section>

      <Section title="Article 2 – Présentation des prestations">
        <p>
          Chaque intervention est réalisée avec attention, dans le respect des
          matériaux, des ornements et du caractère particulier du lieu. Selon le
          devis accepté, les prestations peuvent comprendre le nettoyage de la
          pierre tombale, des plaques et ornements, le désherbage, l'entretien
          des abords, la rénovation des inscriptions, le fleurissement ou
          l'allumage d'une bougie lorsque le règlement du cimetière et les
          conditions de sécurité le permettent.
        </p>
        <p>
          Un bilan photographique peut être envoyé au client après l'intervention,
          selon la prestation convenue. Le détail exact de chaque prestation est
          précisé dans le devis accepté.
        </p>
      </Section>

      <Section title="Article 3 – Zone d'intervention et frais de déplacement">
        <p>
          {contact.brand} intervient dans un rayon indicatif de 30 kilomètres
          autour de Gestel (56). Le déplacement est gratuit à Gestel. Au-delà,
          des frais de déplacement de 0,50 € par kilomètre peuvent être appliqués,
          selon les conditions précisées dans le devis.
        </p>
        <p>La possibilité d'intervention est confirmée au client avant toute commande.</p>
      </Section>

      <Section title="Article 4 – Devis et commande">
        <p>
          Toute demande peut être effectuée par téléphone ou par courrier
          électronique. Un devis personnalisé est établi selon la nature de la
          sépulture, son état, la prestation demandée et les éventuels frais
          complémentaires.
        </p>
        <p>
          La commande devient définitive après acceptation expresse du devis.
          {` ${contact.brand}`} peut refuser une intervention lorsque les
          conditions d'accès, de sécurité ou l'état du monument ne permettent
          pas de la réaliser dans de bonnes conditions.
        </p>
      </Section>

      <Section title="Article 5 – Prix">
        <p>
          Les prix sont exprimés en euros. Le prix applicable est celui indiqué
          sur le devis accepté. Les éventuels frais de déplacement, fournitures,
          fleurs ou prestations complémentaires sont indiqués avant validation
          de la commande.
        </p>
        <p>
          Si l'entreprise bénéficie effectivement de la franchise en base de
          TVA, les devis et factures porteront la mention « TVA non applicable,
          art. 293 B du CGI ». Cette mention doit être retirée si elle ne
          correspond pas à la situation fiscale de l'entreprise.
        </p>
      </Section>

      <Section title="Article 6 – Modalités de paiement">
        <p>
          Le règlement s'effectue par virement bancaire. Les coordonnées
          bancaires, les éventuels acomptes et les échéances sont précisés sur
          le devis ou la facture. Le paiement est exigible selon les modalités
          indiquées sur ces documents.
        </p>
      </Section>

      <Section title="Article 7 – Réalisation des prestations">
        <p>
          La date d'intervention est convenue avec le client selon les
          disponibilités de {contact.brand} et les conditions d'accès au
          cimetière. Une intervention peut être reportée en cas de météo
          défavorable, de restriction du cimetière ou de toute situation
          empêchant sa réalisation dans de bonnes conditions. Le client est
          informé du report dans la mesure du possible.
        </p>
      </Section>

      <Section title="Article 8 – Accès à la sépulture et autorisations">
        <p>
          Le client fournit les informations nécessaires à l'identification de
          la sépulture et s'assure qu'il est autorisé à demander l'intervention.
          Il signale toute particularité connue concernant le monument, les
          matériaux, les ornements ou les restrictions du cimetière.
        </p>
        <p>{contact.brand} respecte les règlements intérieurs des cimetières et les consignes applicables aux interventions.</p>
      </Section>

      <Section title="Article 9 – Bilan photographique">
        <p>
          Les photographies éventuellement transmises ont pour objectif de
          présenter le travail effectué et de permettre au client de constater
          l'état de la sépulture après intervention. Elles ne sont pas destinées
          à une diffusion publique sans autorisation préalable des personnes
          concernées.
        </p>
      </Section>

      <Section title="Article 10 – Droit de rétractation">
        <p>
          Lorsqu'un contrat de prestation de services est conclu à distance avec
          un consommateur, celui-ci bénéficie en principe d'un délai de
          rétractation de 14 jours à compter de la conclusion du contrat,
          conformément au Code de la consommation.
        </p>
        <p>
          Si le client demande expressément que la prestation commence avant la
          fin de ce délai, il peut être redevable du montant correspondant au
          service déjà réalisé s'il se rétracte. Le droit de rétractation peut
          être perdu lorsque la prestation a été entièrement exécutée avant la
          fin du délai, après accord préalable exprès du consommateur et
          reconnaissance de la perte de ce droit.
        </p>
        <p>
          Pour exercer son droit de rétractation, le client peut adresser une
          déclaration dénuée d'ambiguïté à {contact.brand}, par e-mail ou par
          courrier, en indiquant ses coordonnées, la prestation concernée et la
          date de commande.
        </p>
        <p>
          Formulaire type : « À l'attention de Céline Six – Gardien de mémoire,
          je vous notifie ma rétractation du contrat portant sur la prestation
          suivante : [prestation]. Commandée le : [date]. Nom : [nom]. Adresse :
          [adresse]. Date : [date]. Signature (uniquement en cas de notification
          sur papier). »
        </p>
      </Section>

      <Section title="Article 11 – Annulation et report">
        <p>
          Toute demande d'annulation ou de report doit être communiquée dans les
          meilleurs délais. Les éventuelles conséquences financières dépendent
          de l'avancement de la prestation, des dépenses déjà engagées, du devis
          accepté et des dispositions légales applicables.
        </p>
      </Section>

      <Section title="Article 12 – Responsabilité">
        <p>
          Les prestations sont réalisées avec soin et selon des méthodes
          adaptées aux matériaux et aux caractéristiques de la sépulture. En
          raison de l'ancienneté, de l'état initial ou de la fragilité d'un
          monument, certaines traces ou dégradations peuvent ne pas pouvoir être
          supprimées. Aucun résultat esthétique identique sur tous les supports
          ne peut être garanti.
        </p>
        <p>
          Cette disposition ne limite pas les droits légaux du consommateur ni
          la responsabilité de {contact.brand} en cas de faute.
        </p>
      </Section>

      <Section title="Article 13 – Réclamations et médiation">
        <p>
          Pour toute question ou réclamation, le client peut contacter
          {` ${contact.brand}`} à l'adresse{" "}
          <a className="text-vert underline" href={`mailto:${contact.email}`}>{contact.email}</a>
          {" "}ou au {contact.phone}. Une solution amiable sera recherchée en priorité.
        </p>
        <p>
          Après une réclamation écrite préalable restée sans solution
          satisfaisante, le consommateur peut saisir gratuitement le médiateur
          de la consommation désigné par l'entreprise.
        </p>
        <p className="font-semibold text-rose">
          À COMPLÉTER AVANT PUBLICATION : nom, adresse postale et site internet
          du médiateur de la consommation compétent.
        </p>
      </Section>

      <Section title="Article 14 – Droit applicable">
        <p>
          Les présentes CGV sont soumises au droit français. En cas de différend,
          les règles légales de compétence juridictionnelle s'appliquent.
        </p>
      </Section>
    </LegalPage>
  );
}
