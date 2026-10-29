import { contact } from "@/lib/content";

function OrnementFooter() {
  return (
    <svg
      viewBox="0 0 280 24"
      className="mx-auto h-6 w-48 sm:w-56"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M2 12C55 5 92 19 127 12M153 12C188 5 225 19 278 12"
        stroke="#D9B979"
        strokeOpacity=".75"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path
        d="M140 21C131 14 133 7 140 3C147 7 149 14 140 21Z"
        fill="#2F5D46"
        fillOpacity=".8"
      />
      <circle cx="140" cy="12" r="2" fill="#C985A0" />
    </svg>
  );
}

const liensLegaux = [
  { href: "/mentions-legales", label: "Mentions légales" },
  { href: "/confidentialite", label: "Confidentialité" },
  { href: "/cgv", label: "Conditions générales de vente" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[#D9B979]/40 bg-[#F8F5EF] px-5 pb-6 pt-14 sm:pt-16">
      <div className="relative mx-auto max-w-6xl">
        {/* Identité */}
        <div className="text-center">
          <a
            href="#accueil"
            className="inline-block rounded-sm font-script text-3xl text-vert transition-colors duration-300 hover:text-rose focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-vert sm:text-4xl"
          >
            Gardien de mémoire
          </a>

          <p className="mt-3 text-sm leading-6 text-gris sm:text-base">
            Prendre soin des lieux, préserver les souvenirs.
          </p>

          <div className="mt-5">
            <OrnementFooter />
          </div>
        </div>

        {/* Informations de l'entreprise */}
        <div className="mx-auto mt-9 max-w-md text-center">
          <p className="font-medium text-vert">{contact.nom}</p>

          <p className="mt-1 text-sm text-gris">{contact.ville}</p>

          <p className="mt-3 text-xs leading-6 text-gris sm:text-sm">
            SIRET : {contact.siret}
            <span className="mx-2 text-[#C985A0]" aria-hidden="true">
              ·
            </span>
            SIREN : {contact.siren}
          </p>
        </div>

        {/* Liens légaux */}
        <nav
          className="mt-8 border-t border-[#D9B979]/35 pt-6"
          aria-label="Liens légaux"
        >
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            {liensLegaux.map((lien) => (
              <li key={lien.href}>
                <a
                  href={lien.href}
                  className="relative inline-block py-1 text-xs text-gris transition-colors duration-200 hover:text-rose focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-vert sm:text-sm"
                >
                  {lien.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Copyright */}
        <div className="mt-6 border-t border-[#D9B979]/35 pt-5 text-center">
          <p className="text-xs leading-6 text-gris">
            © 2026 {contact.nom}. Tous droits réservés.
          </p>

          <a
            href="#accueil"
            className="mt-2 inline-block text-xs text-vert/80 transition-colors hover:text-rose focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-vert"
          >
            Retour en haut ↑
          </a>
        </div>
      </div>
    </footer>
  );
}