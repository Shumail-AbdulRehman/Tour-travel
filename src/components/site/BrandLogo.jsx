export function BrandLogo({ className = "h-11 w-11", dark = false }) {
  const frameFill = dark ? "rgba(255,255,255,0.08)" : "#0f1f3d";
  const frameStroke = dark ? "rgba(245,217,138,0.42)" : "rgba(212,168,40,0.72)";
  const peakStroke = dark ? "#f8fafc" : "#ffffff";
  const accentStroke = "#e8c44a";
  const routeStroke = dark ? "rgba(255,255,255,0.88)" : "#d4a828";
  const glowFill = dark ? "rgba(245,217,138,0.2)" : "rgba(232,196,74,0.18)";

  return (
    <svg viewBox="0 0 52 52" aria-hidden="true" className={className}>
      <rect x="1.25" y="1.25" width="49.5" height="49.5" rx="16" fill={frameFill} stroke={frameStroke} strokeWidth="1.5" />
      <circle cx="38" cy="13.5" r="4.5" fill={glowFill} />
      <path
        d="M12 33.5L20.5 22.5L26.2 28.6L34.6 18L40 24.3"
        fill="none"
        stroke={peakStroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3.1"
      />
      <path
        d="M20.7 22.7L24.4 15.4L27.8 20.7"
        fill="none"
        stroke={accentStroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.5"
      />
      <path
        d="M16 39.5C20.3 35.7 23.9 34 27 34C30.4 34 33 35.8 36 38.5"
        fill="none"
        stroke={routeStroke}
        strokeLinecap="round"
        strokeWidth="2.5"
      />
      <circle cx="15.3" cy="40" r="2.2" fill={accentStroke} />
      <circle cx="36.5" cy="38.7" r="1.8" fill={accentStroke} />
    </svg>
  );
}
