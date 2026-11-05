
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const liens = [
  { href: "#accueil", label: "Accueil" },
  { href: "#apropos", label: "À propos" },
  { href: "#prestations", label: "Prestations" },
  { href: "#formules", label: "Formules" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fermer le menu avec la touche Échap
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  // Fermer le menu lorsqu'on passe sur un écran desktop
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");

    const handleResize = () => {
      if (mediaQuery.matches) {
        setMenuOpen(false);
      }
    };

    mediaQuery.addEventListener("change", handleResize);

    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  const fermerMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#D9B979]/20 bg-[#FFFCFA]/95 backdrop-blur-md">
      <nav
        className={`relative mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 transition-all duration-300 sm:px-8 ${
          scrolled ? "py-2" : "py-3 sm:py-5 lg:py-6"
        }`}
        aria-label="Navigation principale"
      >
        {/* Logo et nom */}
        <a
          href="#accueil"
          onClick={fermerMenu}
          className="group flex min-w-0 shrink items-center gap-2 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-vert sm:gap-3"
          aria-label="Gardien de mémoire, accueil"
        >
          <span
            className={`relative block shrink-0 transition-all duration-300 ${
              scrolled
                ? "h-12 w-12 sm:h-14 sm:w-14"
                : "h-14 w-14 sm:h-20 sm:w-20 lg:h-24 lg:w-24"
            }`}
          >
            <Image
              src="/images/logo.png"
              alt="Logo Gardien de mémoire"
              fill
              sizes="96px"
              className="object-contain"
            />
          </span>

          <span className="flex min-w-0 flex-col">
            <span
              className={`whitespace-nowrap font-script leading-none text-vert transition-all duration-300 group-hover:text-rose ${
                scrolled
                  ? "text-xl sm:text-2xl"
                  : "text-2xl sm:text-3xl lg:text-4xl"
              }`}
            >
              Gardien de mémoire
            </span>

            <span
              className={`mt-1 overflow-hidden text-[8px] uppercase tracking-[0.18em] text-gris transition-all duration-300 sm:text-[9px] sm:tracking-[0.22em] ${
                scrolled ? "max-h-0 opacity-0" : "max-h-5 opacity-100"
              }`}
            >
              L’attention au souvenir
            </span>
          </span>
        </a>

        {/* Navigation desktop */}
        <ul
          className={`hidden items-center font-medium text-gris lg:flex ${
            scrolled ? "gap-x-5 text-sm" : "gap-x-6 text-[15px] xl:gap-x-8"
          }`}
        >
          {liens.map((lien) => (
            <li key={lien.href}>
              <a
                href={lien.href}
                className="group relative inline-block py-2 transition-colors duration-200 hover:text-rose focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-vert"
              >
                {lien.label}

                <span
                  aria-hidden="true"
                  className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-rose transition-all duration-300 group-hover:w-full"
                />
              </a>
            </li>
          ))}
        </ul>

        {/* Bouton burger mobile / tablette */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="relative z-20 flex h-11 w-11 shrink-0 flex-col items-center justify-center gap-[6px] rounded-full border border-[#D9B979]/40 text-vert transition-colors hover:bg-[#E9EFE8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-vert lg:hidden"
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={menuOpen}
          aria-controls="menu-mobile"
        >
          <span
            className={`h-[1.5px] w-5 rounded-full bg-current transition-all duration-300 ${
              menuOpen ? "translate-y-[7.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-[1.5px] w-5 rounded-full bg-current transition-all duration-300 ${
              menuOpen ? "scale-x-0 opacity-0" : ""
            }`}
          />
          <span
            className={`h-[1.5px] w-5 rounded-full bg-current transition-all duration-300 ${
              menuOpen ? "-translate-y-[7.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Menu mobile / tablette */}
      <div
        id="menu-mobile"
        className={`grid overflow-hidden border-t border-[#D9B979]/20 bg-[#FFFCFA] transition-all duration-300 ease-in-out lg:hidden ${
          menuOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
        aria-hidden={!menuOpen}
        inert={!menuOpen}
      >
        <div className="min-h-0 overflow-hidden">
          <ul className="mx-auto flex max-w-7xl flex-col px-5 py-3 sm:px-8">
            {liens.map((lien, index) => (
              <li
                key={lien.href}
                className="border-b border-[#D9B979]/15 last:border-0"
              >
                <a
                  href={lien.href}
                  onClick={fermerMenu}
                  tabIndex={menuOpen ? 0 : -1}
                  className="group flex items-center justify-between py-4 text-sm font-medium text-gris transition-colors duration-200 hover:text-rose sm:text-base"
                >
                  {lien.label}

                  <span
                    aria-hidden="true"
                    className="text-[#C985A0] transition-transform duration-200 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <div className="px-5 pb-5 text-center sm:px-8">
            <span className="font-script text-lg text-rose">
              L’attention au souvenir
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
