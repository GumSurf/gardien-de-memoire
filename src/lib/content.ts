
export const contact = {
  nom: "Céline Six",
  tel: "06 82 51 83 36", // TODO : à vérifier
  mail: "contact@gardien-de-memoire-bretagne.fr", // TODO : à vérifier
  ville: "Gestel (56)",
  siret: "102 382 017 00014",
  siren: "102 382 017",
};

export const prestations = [
  {
    id: "nettoyage",
    titre: "Nettoyage et entretien de sépulture",
    texte:
      "Je prends soin de la tombe de votre proche en nettoyant le monument et ses abords, dans le respect des matériaux et de la mémoire de vos proches.",
    tarifs: [
      { nom: "Pierre lisse", prix: "65 €" },
      { nom: "Pierre brute (selon la taille de la sépulture)", prix: "À partir de 160 €" },
    ],
    details: [
      "Nettoyage du monument et des ornements",
      "Désherbage et entretien des abords",
      "Bilan photographique après chaque passage",
    ],
  },
  {
    id: "lettres",
    titre: "Rénovation des lettres gravées",
    texte:
      "Avec le temps, les inscriptions peuvent perdre de leur éclat. Je leur redonne de la lisibilité grâce à une rénovation adaptée.",
    tarifs: [
      { nom: "Peinture", prix: "35 €" },
      { nom: "Feuille d'or", prix: "45 €" },
    ],
    details: [
      "Préparation des inscriptions",
      "Remise en peinture ou application de feuille d'or",
      "Bilan photographique après intervention",
    ],
  },
  {
    id: "fleurissement",
    titre: "Fleurissement de sépulture",
    texte:
      "Honorez la mémoire de vos proches avec un fleurissement adapté à vos souhaits et aux saisons, pour conserver un lieu de recueillement accueillant.",
    tarifs: [
      { nom: "Petit fleurissement", prix: "30 €" },
      { nom: "Fleurissement moyen", prix: "45 €" },
      { nom: "Grand fleurissement", prix: "60 €" },
      { nom: "Composition", prix: "100 €" },
    ],
    details: [
      "Choix des fleurs selon vos souhaits",
      "Mise en place de compositions florales",
      "Bilan photographique après intervention",
    ],
  },
  {
    id: "bougie",
    titre: "Bougie du souvenir",
    texte:
      "Un geste symbolique pour honorer la mémoire d'un proche : je dépose et allume une bougie devant sa sépulture, même lorsque vous ne pouvez pas vous déplacer.",
    tarifs: [
      { nom: "Petite bougie", prix: "5 €" },
      { nom: "Grande bougie", prix: "10 €" },
    ],
    details: [
      "Allumage d'une bougie en mémoire de votre proche",
      "Moment de recueillement",
      "Photographie après intervention",
    ],
  },
];


export const formules = [
  {
    id: "essentielle",
    nom: "Formule essentielle",
    passages: "2 passages par an",
    description:
      "L'essentiel pour garder une sépulture propre et entretenue tout au long de l'année.",
    tarifs: {
      nettoyage: [
        { nom: "Pierre lisse", prix: "120 € / an" },
        { nom: "Pierre brute (selon la taille de la sépulture)", prix: "À partir de 300 € / an" },
      ],
      fleurissement: [],
    },
    inclus: [
      "Nettoyage de la sépulture et des ornements",
      "Entretien des abords",
      "Bilan photographique après chaque passage",
    ],
    miseEnAvant: false,
  },
  {
    id: "serenite",
    nom: "Formule sérénité",
    passages: "4 passages par an",
    description:
      "Un suivi régulier pour prendre soin de la sépulture et de son fleurissement au fil des saisons.",
    tarifs: {
      nettoyage: [
        { nom: "Pierre lisse", prix: "235 € / an" },
        { nom: "Pierre brute (selon la taille de la sépulture)", prix: "610 € / an" },
      ],
      fleurissement: [
        { nom: "Petit", prix: "100 € / an" },
        { nom: "Moyen", prix: "160 € / an" },
        { nom: "Grand", prix: "200 € / an" },
        { nom: "Composition", prix: "380 € / an" },
      ],
    },
    inclus: [
      "Tous les services de la formule essentielle",
      "Entretien régulier et suivi visuel",
      "Fleurissement selon les saisons",
      "Bilan photographique après chaque passage",
    ],
    miseEnAvant: true,
  },
  {
    id: "memoire",
    nom: "Formule mémoire",
    passages: "6 à 12 passages par an",
    description:
      "Un accompagnement complet et régulier, avec un entretien renforcé et des attentions particulières pour votre proche.",
    tarifs: {
      nettoyage: [
        {
          nom: "Pierre lisse",
          prix: "375 € / an",
          prix12: "730 € / an",
        },
        {
          nom: "Pierre brute (selon la taille de la sépulture)",
          prix: "950 € / an",
          prix12: "1 870 € / an",
        },
      ],
      fleurissement: [
        {
          nom: "Petit",
          prix: "160 € / an",
          prix12: "300 € / an",
        },
        {
          nom: "Moyen",
          prix: "245 € / an",
          prix12: "475 € / an",
        },
        {
          nom: "Grand",
          prix: "340 € / an",
          prix12: "660 € / an",
        },
        {
          nom: "Composition",
          prix: "550 € / an",
          prix12: "Sur devis",
        },
      ],
      renovation: [
        {
          nom: "Peinture",
          prix: "30 € / an",
          prix12: "Sur devis",
        },
        {
          nom: "Feuille d'or",
          prix: "40 € / an",
          prix12: "Sur devis",
        },
      ],
    },
    inclus: [
      "Tous les services de la formule sérénité",
      "Entretien et fleurissement renforcés",
      "Bougie du souvenir à la demande",
      "Bilan photographique après chaque passage",
    ],
    note:
      "La bougie du souvenir est offerte à la demande. La formule peut être adaptée selon vos besoins.",
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
  types: [
    "Texte religieux",
    "Poème ou citation",
    "Texte écrit par vous",
  ], // TODO : à valider avec Céline
};

export const faq = [
  {
    q: "Dans quelles communes intervenez-vous ?",
    r: "Basée à Gestel, j'interviens dans un rayon d'environ 30 km, notamment à Lorient, Quéven, Guidel, Ploemeur, Hennebont et dans les communes environnantes.",
  },
  {
    q: "Comment puis-je payer ?",
    r: "Le règlement s'effectue à l'avance, par virement bancaire ou par chèque.",
  },
  {
    q: "Comment suivre l'état de la sépulture après votre passage ?",
    r: "Je vous adresse un bilan photographique par e-mail après chaque prestation, pour vous permettre de suivre l'entretien même à distance.",
  },
  {
    q: "Quelle est la lecture de texte offerte ?",
    r: "À votre demande, je peux lire un texte devant la sépulture après la prestation, sans supplément : poème, citation ou texte personnel.",
  },
  {
    q: "Pouvez-vous repeindre les lettres gravées ?",
    r: "Oui, je propose la rénovation des lettres gravées par une remise en peinture ou une application de feuille d'or.",
  },
];

export const citation = {
  texte:
    "Il y a quelque chose de plus fort que la mort, c'est la présence des absents dans la mémoire des vivants.",
  auteur: "Jean d’Ormesson",
};
