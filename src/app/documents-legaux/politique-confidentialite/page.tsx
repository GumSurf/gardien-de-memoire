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

export default function PolitiqueConfidentialitePage() {
  return (
    <LegalPage
      eyebrow="Gardien de mémoire"
      title="Politique de confidentialité"
      intro="Cette politique présente les données personnelles susceptibles d'être traitées lors de la navigation sur le site ou dans le cadre d'une demande de prestation."
    >
      <Section title="Article 1 – Responsable du traitement">
        <p>
          Le responsable du traitement est Céline Six, exploitant
          {` ${contact.brand}`}, joignable à{" "}
          <a className="text-vert underline" href={`mailto:${contact.email}`}>{contact.email}</a>
          {" "}et au {contact.phone}. Adresse professionnelle : À COMPLÉTER.
        </p>
      </Section>

      <Section title="Article 2 – Données susceptibles d'être collectées">
        <p>Selon les échanges et les fonctionnalités réellement utilisées, les données suivantes peuvent être traitées :</p>
        <ul className="list-inside list-disc space-y-1">
          <li>Nom et prénom ;</li>
          <li>Adresse e-mail et numéro de téléphone ;</li>
          <li>Informations communiquées dans une demande de renseignement ou de devis ;</li>
          <li>Informations nécessaires à l&apos;identification de la sépulture et à la réalisation de la prestation ;</li>
          <li>Données techniques de navigation, telles que l&apos;adresse IP, le navigateur ou les journaux de connexion.</li>
        </ul>
        <p>
          Seules les données nécessaires aux finalités indiquées ci-dessous
          doivent être demandées. Si le site ne comporte pas de formulaire,
          toute mention relative à une collecte par formulaire doit être adaptée.
        </p>
      </Section>

      <Section title="Article 3 – Finalités et bases légales">
        <ul className="list-inside list-disc space-y-1">
          <li>Répondre aux demandes de contact : intérêt légitime ;</li>
          <li>Établir un devis : mesures précontractuelles ;</li>
          <li>Gérer les commandes et réaliser les prestations : exécution du contrat ;</li>
          <li>Gérer la facturation et les obligations comptables : obligation légale ;</li>
          <li>Assurer la sécurité et le bon fonctionnement du site : intérêt légitime.</li>
        </ul>
        <p>
          Les données ne sont pas vendues à des tiers et ne sont pas utilisées à
          des fins de prospection commerciale sans base légale appropriée.
        </p>
      </Section>

      <Section title="Article 4 – Destinataires des données">
        <p>
          Les données sont destinées à Céline Six. Elles peuvent également être
          accessibles aux prestataires techniques intervenant dans le
          fonctionnement du site, dans la limite de leurs missions.
        </p>
        <Section title="Hébergement du site">
          Le site est hébergé par Vercel Inc., dont le siège social
          est situé aux États-Unis. L&apos;utilisation de ce service peut
          entraîner le traitement de certaines données techniques,
          notamment les adresses IP, les informations relatives au
          navigateur et les journaux de connexion, nécessaires au
          fonctionnement et à la sécurité du site.

          Certaines données peuvent être traitées ou transférées
          en dehors de l&apos;Union européenne, notamment aux États-Unis.
          Vercel indique que ses infrastructures et ses sous-traitants
          peuvent intervenir dans plusieurs pays.

          Pour plus d&apos;informations, vous pouvez consulter la politique
          de confidentialité de Vercel :
          https://vercel.com/legal/privacy-policy
        </Section>
      </Section>

      <Section title="Article 5 – Hébergement et transferts hors Espace économique européen">
        <p>
          Vercel Inc. est une société établie aux États-Unis. Le choix d&apos;une
          région européenne pour certaines ressources du site ne garantit pas,
          à lui seul, que tous les traitements, journaux techniques, opérations
          de support ou traitements des sous-traitants restent dans l&apos;Espace
          économique européen.
        </p>
        <p>
          Des transferts de données hors de l&apos;Espace économique européen peuvent
          donc intervenir selon les services Vercel utilisés et leurs
          sous-traitants. Lorsqu&apos;un transfert est soumis au chapitre V du RGPD,
          il doit être encadré par un mécanisme valable, par exemple une décision
          d&apos;adéquation ou, lorsque cela est requis, des clauses contractuelles
          types accompagnées des mesures nécessaires.
        </p>
        <p>
          Les documents contractuels et garanties applicables doivent être
          vérifiés pour le compte Vercel effectivement utilisé. Il ne faut pas
          présumer que les mêmes garanties contractuelles s&apos;appliquent à tous
          les plans ou comptes.
        </p>
        <p>
          Pour toute question sur les transferts et garanties applicables :
          {" "}<a className="text-vert underline" href={`mailto:${contact.email}`}>{contact.email}</a>.
        </p>
      </Section>

      <Section title="Article 6 – Durées de conservation">
        <p>
          Les données sont conservées pendant la durée nécessaire aux finalités
          pour lesquelles elles sont collectées, puis supprimées ou archivées
          conformément aux obligations légales.
        </p>
        <ul className="list-inside list-disc space-y-1">
          <li>Demandes sans suite : durée nécessaire au traitement, puis suppression ou archivage limité ;</li>
          <li>Données clients : durée nécessaire à la gestion de la relation commerciale et aux obligations applicables ;</li>
          <li>Pièces comptables : durée légale applicable, généralement 10 ans ;</li>
          <li>Journaux techniques : durée définie selon les besoins de sécurité et les paramètres du prestataire.</li>
        </ul>
        <p>Les durées exactes doivent être ajustées aux outils et pratiques effectivement mis en place.</p>
      </Section>

      <Section title="Article 7 – Sécurité">
        <p>
          {contact.brand} met en œuvre des mesures raisonnables afin de protéger
          les données contre la perte, l&apos;accès non autorisé, la divulgation ou
          la modification. Aucun système de transmission ou de stockage ne peut
          toutefois garantir une sécurité absolue.
        </p>
      </Section>

      <Section title="Article 8 – Droits des personnes">
        <p>
          Conformément au RGPD et à la loi Informatique et Libertés, les
          personnes concernées disposent, selon les conditions prévues par la
          réglementation, de droits d&apos;accès, de rectification, d&apos;effacement, de
          limitation, d&apos;opposition et, lorsque cela s&apos;applique, de portabilité.
          Elles peuvent également retirer leur consentement lorsque le
          traitement repose sur celui-ci.
        </p>
        <p>
          Ces droits peuvent être exercés à l&apos;adresse{" "}
          <a className="text-vert underline" href={`mailto:${contact.email}`}>{contact.email}</a>.
          Une preuve d&apos;identité ne pourra être demandée qu&apos;en cas de doute
          raisonnable sur l&apos;identité du demandeur.
        </p>
        <p>
          Une réclamation peut être adressée à la CNIL :{" "}
          <a className="text-vert underline" href="https://www.cnil.fr/" target="_blank" rel="noreferrer">www.cnil.fr</a>.
        </p>
      </Section>

      <Section title="Article 9 – Cookies et traceurs">
        <p>
          Le site peut utiliser des traceurs strictement nécessaires à son
          fonctionnement et à sa sécurité. Les traceurs soumis au consentement,
          notamment certains outils de mesure d&apos;audience ou services tiers, ne
          doivent être déposés qu&apos;après obtention du consentement de l&apos;utilisateur.
        </p>
        <p>
          Cette section doit être adaptée aux outils réellement installés sur le
          site. Si aucun traceur soumis au consentement n&apos;est utilisé, ne pas
          ajouter de bandeau de consentement inutile.
        </p>
      </Section>

      <Section title="Article 10 – Modification de la politique">
        <p>
          La présente politique peut être modifiée afin de tenir compte des
          évolutions légales, réglementaires ou techniques. La version
          applicable est celle publiée sur le site à la date de consultation.
        </p>
      </Section>
    </LegalPage>
  );
}
