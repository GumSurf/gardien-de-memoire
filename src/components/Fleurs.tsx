import { useId } from "react";

type FleurProps = { x: number; y: number; s?: number; rot?: number };

/* Pensée : cinq pétales violets, cœur jaune, stries sombres */
export function Pensee({ x, y, s = 1, rot = 0 }: FleurProps) {
  const id = useId().replace(/:/g, "");
  return (
    <g transform={`translate(${x} ${y}) rotate(${rot}) scale(${s})`}>
      <defs>
        <radialGradient id={`${id}v`} cx="50%" cy="90%" r="95%">
          <stop offset="0" stopColor="#3f2663" /><stop offset="1" stopColor="#8d6cb8" />
        </radialGradient>
        <radialGradient id={`${id}s`} cx="85%" cy="50%" r="95%">
          <stop offset="0" stopColor="#3f2663" /><stop offset="1" stopColor="#7c5aa8" />
        </radialGradient>
        <radialGradient id={`${id}l`} cx="50%" cy="8%" r="100%">
          <stop offset="0" stopColor="#f8e56f" /><stop offset="0.35" stopColor="#e9cdf0" /><stop offset="1" stopColor="#7a58a8" />
        </radialGradient>
      </defs>
      <ellipse cx="-9" cy="-17" rx="12" ry="15" transform="rotate(-18 -9 -17)" fill={`url(#${id}v)`} />
      <ellipse cx="9" cy="-17" rx="12" ry="15" transform="rotate(18 9 -17)" fill={`url(#${id}v)`} />
      <ellipse cx="-17" cy="2" rx="14" ry="11" transform="rotate(8 -17 2)" fill={`url(#${id}s)`} />
      <ellipse cx="17" cy="2" rx="14" ry="11" transform="rotate(-8 17 2)" fill={`url(#${id}s)`} />
      <ellipse cx="0" cy="16" rx="17" ry="15" fill={`url(#${id}l)`} />
      <path d="M0 2L-5 16M0 2L0 19M0 2L5 16M-1 1L-14 8M1 1L14 8" stroke="#2e1a4d" strokeOpacity="0.7" strokeWidth="0.9" strokeLinecap="round" fill="none" />
      <circle r="2.4" fill="#f2c94c" />
    </g>
  );
}

/* Rose vue de dessus : trois couronnes de pétales, de plus en plus sombres */
export function Rose({ x, y, s = 1, rot = 0 }: FleurProps) {
  const id = useId().replace(/:/g, "");
  const couronnes = [
    { d: "M0 0C-16-6-20-26 0-31C20-26 16-6 0 0Z", angles: [0, 72, 144, 216, 288], fill: `url(#${id}r)`, trait: "#b34f6c" },
    { d: "M0 0C-11-4-14-18 0-21C14-18 11-4 0 0Z", angles: [36, 108, 180, 252, 324], fill: "#d6728d", trait: "#a8405c" },
    { d: "M0 0C-7-3-9-11 0-13C9-11 7-3 0 0Z", angles: [20, 110, 200, 290], fill: "#c25774", trait: "#8f3149" },
  ];
  return (
    <g transform={`translate(${x} ${y}) rotate(${rot}) scale(${s})`}>
      <defs>
        <radialGradient id={`${id}r`} cx="50%" cy="50%" r="55%">
          <stop offset="0" stopColor="#a8405c" /><stop offset="1" stopColor="#e59ab0" />
        </radialGradient>
      </defs>
      {couronnes.map((c, i) => (
        <g key={i} fill={c.fill} stroke={c.trait} strokeWidth="0.5">
          {c.angles.map((a) => <path key={a} d={c.d} transform={`rotate(${a})`} />)}
        </g>
      ))}
      <path d="M0 0C3-2 5 1 2 3C-1 5-5 2-4-2C-3-6 3-7 6-4" fill="none" stroke="#7d2a40" strokeWidth="1.1" strokeLinecap="round" />
    </g>
  );
}