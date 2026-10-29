export const contact = {
  nom: "Céline Six",
  tel: "00 00 00 00 00", // TODO
  mail: "contact@gardien-de-memoire-bretagne.fr", // TODO
  ville: "Gestel (56)",
  siret: "102 382 017 00014",
  siren: "102 382 017",
};

export const prestations = [
  {
    id: "nettoyage",
    titre: "Nettoyage complet",
    texte:
      "Un entretien attentif de la sépulture pour préserver sa propreté et son aspect soigné, dans le respect de la pierre et des ornements.",
    prix: null,
    details: [
      "Nettoyage de la pierre tombale",
      "Nettoyage des plaques et des ornements",
      "Désherbage et retrait des mousses",
      "Entretien des abords",
      "Bilan photographique envoyé par e-mail",
    ],
  },
  {
    id: "lettres",
    titre: "Rénovation des lettres",
    texte:
      "Avec le temps, les inscriptions peuvent perdre de leur éclat. La remise en peinture des lettres gravées permet de leur redonner de la lisibilité.",
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
    titre: "Fleurissement",
    texte:
      "Pour honorer la mémoire de votre proche, des fleurs ou des plantes peuvent être disposées sur la sépulture, selon vos souhaits et au fil des saisons.",
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
      "À votre demande, une bougie est allumée en mémoire de votre proche. Un geste symbolique pour faire vivre le souvenir, même lorsque vous ne pouvez pas vous déplacer.",
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
      "Un entretien ponctuel pour garder une sépulture propre et soignée, avec un compte rendu pour rester informé à distance.",
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
      "Un suivi régulier pour prendre soin de la sépulture tout au long de l'année et vous permettre de garder l'esprit tranquille.",
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
      "Une attention plus complète portée au lieu de recueillement de votre proche, avec des prestations complémentaires pour entretenir et honorer sa mémoire.",
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




export const frais = { gratuitA: "Gestel", rayonKm: 30, prixKm: "0,50" };

export const lecture = {
  types: ["Texte religieux", "Poème ou citation", "Texte écrit par vous"], // TODO : à valider avec Céline
};


export const faq = [
  {
    q: "Jusqu’où intervenez-vous ?",
    r: "J'interviens dans un rayon de 30 km autour de Gestel. Le déplacement est gratuit à Gestel. Au-delà, des frais de déplacement de 0,50 € par kilomètre s'appliquent.",
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
  texte: "Je t'aime dans le temps. Je t'aimerai jusqu'au bout du temps. Et quand le temps sera écoulé, alors, je t'aurai aimée. Et rien de cet amour, comme rien de ce qui a été, ne pourra jamais être effacé.", // TODO : citation à vérifier avec Céline, ou à remplacer par une autre citation si elle le souhaite
  auteur: "Jean d’Ormesson",
};

