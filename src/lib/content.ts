export const contact = {
  nom: "Céline Six",
  tel: "06 82 51 83 36", // TODO
  mail: "contact@gardien-de-memoire-bretagne.fr", // TODO
  ville: "Gestel (56)",
  siret: "102 382 017 00014",
  siren: "102 382 017",
};

export const prestations = [
  {
    id: "nettoyage",
    titre: "Nettoyage et entretien de sépulture",
    texte:
      "Je réalise le nettoyage complet de votre tombe et de votre monument funéraire afin de préserver la pierre tombale, les plaques et les ornements. Un entretien soigné, réalisé dans le respect des matériaux et de la mémoire de vos proches.",
    prix: null,
    details: [
      "Nettoyage de la pierre tombale et du monument funéraire",
      "Nettoyage des plaques et des ornements",
      "Désherbage et retrait des mousses",
      "Entretien des abords de la sépulture",
      "Bilan photographique envoyé par e-mail",
    ],
  },
  {
    id: "lettres",
    titre: "Rénovation des lettres gravées",
    texte:
      "Avec le temps, les inscriptions sur les pierres tombales peuvent perdre de leur éclat. Je propose la rénovation des lettres gravées par une remise en peinture adaptée, afin de redonner de la lisibilité aux noms et aux inscriptions commémoratives.",
    prix: null,
    details: [
      "Examen de l'état des inscriptions",
      "Préparation des lettres à rénover",
      "Remise en peinture des lettres gravées",
      "Rénovation des inscriptions sur les plaques",
      "Bilan photographique après intervention",
    ],
  },
  {
    id: "fleurissement",
    titre: "Fleurissement de sépulture",
    texte:
      "Le fleurissement d'une tombe permet d'honorer la mémoire d'un proche et de conserver un lieu de recueillement accueillant. Je peux disposer des fleurs ou des plantes sur la sépulture, selon vos souhaits et au fil des saisons.",
    prix: null,
    details: [
      "Choix des fleurs ou des plantes selon vos souhaits",
      "Fleurissement adapté à la saison",
      "Mise en place des compositions florales",
      "Disposition soignée sur la sépulture",
      "Bilan photographique après intervention",
    ],
  },
  {
    id: "bougie",
    titre: "Bougie du souvenir",
    texte:
      "Pour honorer la mémoire de votre proche, je propose l'allumage d'une bougie du souvenir devant sa sépulture. Un geste symbolique et attentionné pour faire vivre le souvenir, même lorsque vous ne pouvez pas vous déplacer.",
    prix: null,
    details: [
      "Prise en compte de votre demande",
      "Allumage d'une bougie en mémoire de votre proche",
      "Moment de recueillement devant la sépulture",
      "Photographie du geste du souvenir",
    ],
  },
];



export const formules = [
  {
    id: "essentielle",
    nom: "Formule essentielle",
    passages: null,
    description:
      "Une prestation ponctuelle de nettoyage et d'entretien de tombe pour conserver une sépulture propre et soignée, avec un bilan photographique après intervention.",
    inclus: [
      "Nettoyage complet de la sépulture",
      "Nettoyage des plaques et des ornements",
      "Désherbage et entretien des abords",
      "Bilan photographique après intervention",
    ],
    mensualite: null,
    total: null,
    miseEnAvant: false,
  },
  {
    id: "serenite",
    nom: "Formule sérénité",
    passages: null,
    description:
      "Un entretien régulier de la sépulture tout au long de l'année, avec des passages programmés, un suivi visuel et un bilan photographique après chaque intervention.",
    inclus: [
      "Tous les services de la formule essentielle",
      "Passages d'entretien réguliers",
      "Surveillance visuelle de l'état général de la sépulture",
      "Bilan photographique après chaque passage",
      "Fleurissement à certaines périodes de l'année",
    ],
    mensualite: null,
    total: null,
    miseEnAvant: true,
  },
  {
    id: "memoire",
    nom: "Formule mémoire",
    passages: null,
    description:
      "Un accompagnement complet pour l'entretien et la rénovation de votre sépulture : nettoyage, fleurissement, rénovation des inscriptions et gestes du souvenir.",
    inclus: [
      "Tous les services de la formule sérénité",
      "Suivi d'entretien renforcé",
      "Fleurissement plus fréquent selon les saisons",
      "Rénovation des lettres gravées selon les besoins",
      "Bougie du souvenir à la demande",
      "Bilan photographique après chaque passage",
    ],
    mensualite: null,
    total: null,
    miseEnAvant: false,
  },
];




export const frais = {
  gratuitA: "Gestel",
  rayonKm: 30,
  prixKm: "0,50",
  villes: [
    "Gestel",
    "Lorient",
    "Quéven",
    "Guidel",
    "Ploemeur",
    "Hennebont",
    "Lanester",
    "Caudan",
    "Pont-Scorff",
    "Larmor-Plage",
  ],
};

export const lecture = {
  types: ["Texte religieux", "Poème ou citation", "Texte écrit par vous"], // TODO : à valider avec Céline
};


export const faq = [
  {
    q: "Dans quelles communes intervenez-vous pour l'entretien des sépultures ?",
    r: "Basée à Gestel, j'interviens dans un rayon d'environ 30 km pour le nettoyage, l'entretien et le fleurissement des sépultures. Je me déplace notamment à Lorient, Quéven, Guidel, Ploemeur, Hennebont et dans les communes environnantes.",
  },
  {
    q: "Comment puis-je payer ?",
    r: "Le règlement s'effectue par virement bancaire. Les modalités de paiement vous seront précisées lors de l'établissement de votre devis.",
  },
  {
    q: "Comment suivre l’état de la sépulture après votre passage ?",
    r: "Après chaque prestation, je vous adresse un bilan photographique par e-mail afin que vous puissiez constater le travail réalisé, même si vous habitez loin du cimetière.",
  },
  {
    q: "Quelle est la lecture de texte offerte ?",
    r: "À votre demande, je peux lire un texte devant la sépulture après la prestation, sans supplément. Il peut s'agir d'un poème, d'une citation ou d'un texte personnel, sous réserve des modalités proposées.",
  },
  {
    q: "Pouvez-vous repeindre les lettres gravées ?",
    r: "Oui, je propose la remise en peinture des lettres gravées sur les pierres tombales et les plaques, afin de leur redonner de la lisibilité.",
  },
];


export const citation = {
  texte: "Il y a quelque chose de plus fort que la mort, c'est la présence des absents dans la mémoire des vivants.",
  auteur: "Jean d’Ormesson",
};

