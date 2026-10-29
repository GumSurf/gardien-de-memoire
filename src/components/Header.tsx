import Logo from "./Logo";

const liens = [
  { href: "#apropos", label: "À propos" },
  { href: "#services", label: "Services et tarifs" },
  { href: "#contact", label: "Contact" },
  { href: "#faq", label: "FAQ" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#D9B979]/30 bg-[#FFFCFA]/90 backdrop-blur-lg">
      <nav
        className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-6 gap-y-3 px-5 py-3 sm:px-8 sm:py-4"
        aria-label="Navigation principale"
      >
        {/* Logo et nom */}
        <a
          href="#accueil"
          className="group flex shrink-0 items-center gap-3 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-vert"
          aria-label="Gardien de mémoire, accueil"
        >
          <span className="relative flex h-11 w-11 items-center justify-center rounded-full border border-[#D9B979]/50 bg-[#F8EAF0] text-vert transition-colors duration-300 group-hover:bg-[#F2DFE7] sm:h-12 sm:w-12">
            <Logo />
          </span>

          <span className="flex flex-col">
            <span className="font-script text-2xl leading-none text-vert transition-colors duration-300 group-hover:text-rose sm:text-3xl">
              Gardien de mémoire
            </span>
            <span className="mt-1 hidden text-[9px] uppercase tracking-[0.22em] text-gris sm:block">
              L’attention au souvenir
            </span>
          </span>
        </a>

        {/* Navigation */}
        <ul className="flex w-full flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm font-medium text-gris sm:w-auto sm:justify-end sm:gap-x-6 sm:text-[15px]">
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