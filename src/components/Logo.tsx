export default function Logo({ size = 34 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
      <circle cx="20" cy="12" r="8" className="fill-doux" />
      <path d="M20 37V18M20 28c-5-1-8-4-9-8M20 23c4-1 7-3 8-7" />
    </svg>
  );
}
