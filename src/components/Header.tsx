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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-[#D9B979]/20 bg-[#FFFCFA]/95 backdrop-blur-md">
      <nav
        className={`mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-6 gap-y-3 px-5 transition-all duration-300 sm:px-8 ${
          scrolled ? "py-2" : "py-5 sm:py-6"
        }`}
        aria-label="Navigation principale"
      >
        {/* Logo et nom */}
        <a
          href="#accueil"
          className="group flex shrink-0 items-center gap-3 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-vert"
          aria-label="Gardien de mémoire, accueil"
        >
          <span
            className={`relative block shrink-0 transition-all duration-300 ${
              scrolled ? "h-14 w-14" : "h-20 w-20 sm:h-24 sm:w-24"
            }`}
          >
            <Image
              src="/images/logo.png"
              alt="Logo Gardien de mémoire"
              fill
              sizes="156px"
              className="object-contain"
            />
          </span>

          <span className="flex flex-col">
            <span
              className={`font-script leading-none text-vert transition-all duration-300 group-hover:text-rose ${
                scrolled ? "text-2xl" : "text-3xl sm:text-4xl"
              }`}
            >
              Gardien de mémoire
            </span>

            <span
              className={`mt-1 overflow-hidden text-[9px] uppercase tracking-[0.22em] text-gris transition-all duration-300 ${
                scrolled
                  ? "max-h-0 opacity-0"
                  : "max-h-5 opacity-100"
              }`}
            >
              L’attention au souvenir
            </span>
          </span>
        </a>

        {/* Navigation */}
        <ul
          className={`flex w-full flex-wrap items-center justify-center text-sm font-medium text-gris transition-all duration-300 sm:w-auto sm:justify-end sm:text-[15px] ${
            scrolled ? "gap-x-5 gap-y-1" : "gap-x-6 gap-y-2 sm:gap-x-8"
          }`}
        >
          {liens.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="group relative inline-block py-2 transition-colors duration-200 hover:text-rose focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-vert"
              >
                {l.label}

                <span
                  aria-hidden="true"
                  className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-rose transition-all duration-300 group-hover:w-full"
                />
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}