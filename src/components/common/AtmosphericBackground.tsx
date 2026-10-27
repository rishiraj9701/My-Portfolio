import React from 'react';

/**
 * Helper to generate points for a pointy-topped regular hexagon
 * Radius R = 34, width = 58.89, height = 68
 */
function getHexPoints(cx: number, cy: number, r: number = 34): string {
  const dx = r * 0.866025; // r * sqrt(3)/2 = ~29.44
  const dy = r * 0.5;      // ~17
  return [
    `${cx},${cy - r}`,
    `${cx + dx},${cy - dy}`,
    `${cx + dx},${cy + dy}`,
    `${cx},${cy + r}`,
    `${cx - dx},${cy + dy}`,
    `${cx - dx},${cy - dy}`,
  ].join(' ');
}

export const AtmosphericBackground: React.FC = () => {
  return (
    <div 
      aria-hidden="true" 
      className="fixed inset-0 pointer-events-none overflow-hidden select-none z-0"
    >
      {/* 1. Base Dark & Light Background Fill */}
      <div className="absolute inset-0 bg-[#FAF8F5] dark:bg-[#0A0809] transition-colors duration-300" />

      {/* 2. Primary Upper-Center Ambient Radial Glow (Soft Warm Amber/Brown) */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[140vw] max-w-[1500px] h-[750px] sm:h-[900px] opacity-100 transition-opacity duration-500 animate-ambient-glow"
        style={{
          background: `
            radial-gradient(
              ellipse 70% 55% at 50% 0%, 
              rgba(133, 79, 35, 0.24) 0%, 
              rgba(110, 62, 28, 0.17) 25%, 
              rgba(65, 35, 16, 0.09) 50%, 
              rgba(10, 8, 9, 0) 78%
            )
          `,
        }}
      />

      {/* Light Mode Specific Ambient Glow Replacement (Soft warm beige/tan) */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[140vw] max-w-[1500px] h-[750px] sm:h-[900px] opacity-100 dark:opacity-0 transition-opacity duration-500"
        style={{
          background: `
            radial-gradient(
              ellipse 70% 55% at 50% 0%, 
              rgba(224, 196, 168, 0.32) 0%, 
              rgba(238, 218, 196, 0.16) 30%, 
              rgba(245, 232, 218, 0.07) 55%, 
              rgba(250, 248, 245, 0) 78%
            )
          `,
        }}
      />

      {/* 3. Secondary subtle right-side ambient warmth */}
      <div 
        className="hidden md:block absolute top-[10%] right-[-10%] w-[50vw] h-[550px] opacity-60 dark:opacity-40"
        style={{
          background: `
            radial-gradient(
              ellipse 60% 50% at 65% 30%,
              rgba(125, 72, 30, 0.12) 0%,
              rgba(10, 8, 9, 0) 70%
            )
          `,
        }}
      />

      {/* 4. Hexagonal Geometric Clusters (SVG Honeycomb Overlay) */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Subtle gradient for darker filled hexagons in dark mode */}
          <linearGradient id="hexDarkFillGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1a1415" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#0d0a0b" stopOpacity="0.4" />
          </linearGradient>

          {/* Warm stroke gradient for hexagons sitting in the amber glow */}
          <linearGradient id="hexAmberStrokeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#c27d42" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#7c461d" stopOpacity="0.08" />
          </linearGradient>
        </defs>

        {/* ============================================================== */}
        {/* CLUSTER 1: UPPER-LEFT EDGE (Matches reference screenshot)      */}
        {/* ============================================================== */}
        <g className="transition-opacity duration-300">
          {/* Hex (0, 0) */}
          <polygon
            points={getHexPoints(12, 175, 35)}
            className="stroke-zinc-800/50 dark:stroke-zinc-700/30 fill-transparent dark:fill-zinc-950/20"
            strokeWidth="0.85"
          />

          {/* Hex (0, 1) */}
          <polygon
            points={getHexPoints(12, 279, 35)}
            className="stroke-zinc-800/60 dark:stroke-[#342721]/60 fill-zinc-200/20 dark:fill-[#140f10]/80"
            strokeWidth="0.9"
          />

          {/* Hex (0, 2) */}
          <polygon
            points={getHexPoints(12, 383, 35)}
            className="stroke-zinc-800/40 dark:stroke-[#2a201c]/50 fill-zinc-200/10 dark:fill-[#120e0f]/60"
            strokeWidth="0.8"
          />

          {/* Hex (1, 0) - Interlocked */}
          <polygon
            points={getHexPoints(42, 227, 35)}
            className="stroke-orange-950/20 dark:stroke-[#4a3429]/70 fill-zinc-200/30 dark:fill-[url(#hexDarkFillGrad)]"
            strokeWidth="1"
          />

          {/* Hex (1, 1) - Central Hero Left Anchor */}
          <polygon
            points={getHexPoints(42, 331, 35)}
            className="stroke-orange-900/25 dark:stroke-[#583d2d]/80 fill-zinc-200/40 dark:fill-[url(#hexDarkFillGrad)]"
            strokeWidth="1"
          />

          {/* Hex (1, 2) */}
          <polygon
            points={getHexPoints(42, 435, 35)}
            className="stroke-zinc-800/30 dark:stroke-zinc-800/40 fill-transparent"
            strokeWidth="0.75"
          />

          {/* Hex (2, 0) */}
          <polygon
            points={getHexPoints(72, 175, 35)}
            className="stroke-zinc-700/20 dark:stroke-[#3b2920]/40 fill-transparent"
            strokeWidth="0.75"
          />

          {/* Hex (2, 1) */}
          <polygon
            points={getHexPoints(72, 279, 35)}
            className="stroke-orange-900/20 dark:stroke-[#4a3325]/50 fill-zinc-200/10 dark:fill-[#161112]/50"
            strokeWidth="0.85"
          />

          {/* Hex (2, 2) */}
          <polygon
            points={getHexPoints(72, 383, 35)}
            className="stroke-zinc-800/20 dark:stroke-zinc-800/30 fill-transparent"
            strokeWidth="0.7"
          />

          {/* Hex (3, 0) */}
          <polygon
            points={getHexPoints(102, 227, 35)}
            className="stroke-zinc-800/20 dark:stroke-[#3a271d]/35 fill-transparent"
            strokeWidth="0.7"
          />

          {/* Hex (3, 1) */}
          <polygon
            points={getHexPoints(102, 331, 35)}
            className="stroke-zinc-800/15 dark:stroke-zinc-800/25 fill-transparent"
            strokeWidth="0.65"
          />
        </g>

        {/* ============================================================== */}
        {/* CLUSTER 2: MID-LOWER LEFT EDGE (Partially off-screen)          */}
        {/* ============================================================== */}
        <g className="transition-opacity duration-300">
          {/* Hex (-10, 640) */}
          <polygon
            points={getHexPoints(-10, 640, 33)}
            className="stroke-zinc-800/30 dark:stroke-zinc-800/40 fill-transparent dark:fill-[#120e0f]/40"
            strokeWidth="0.75"
          />

          {/* Hex (-10, 738) */}
          <polygon
            points={getHexPoints(-10, 738, 33)}
            className="stroke-zinc-800/25 dark:stroke-zinc-800/35 fill-transparent"
            strokeWidth="0.7"
          />

          {/* Hex (19, 689) */}
          <polygon
            points={getHexPoints(19, 689, 33)}
            className="stroke-zinc-800/30 dark:stroke-[#34241b]/45 fill-zinc-200/15 dark:fill-[#141011]/60"
            strokeWidth="0.8"
          />

          {/* Hex (19, 787) */}
          <polygon
            points={getHexPoints(19, 787, 33)}
            className="stroke-zinc-800/20 dark:stroke-zinc-800/25 fill-transparent"
            strokeWidth="0.65"
          />

          {/* Hex (48, 640) */}
          <polygon
            points={getHexPoints(48, 640, 33)}
            className="stroke-zinc-800/15 dark:stroke-zinc-800/20 fill-transparent"
            strokeWidth="0.6"
          />

          {/* Hex (48, 738) */}
          <polygon
            points={getHexPoints(48, 738, 33)}
            className="stroke-zinc-800/20 dark:stroke-[#2e2017]/30 fill-transparent"
            strokeWidth="0.65"
          />
        </g>

        {/* ============================================================== */}
        {/* CLUSTER 3: UPPER-CENTER/RIGHT (Subtle in the amber glow)       */}
        {/* ============================================================== */}
        <g className="hidden lg:block transition-opacity duration-300">
          {/* Hex in upper glow area */}
          <polygon
            points={getHexPoints(720, 85, 32)}
            className="stroke-orange-800/15 dark:stroke-[url(#hexAmberStrokeGrad)] fill-transparent"
            strokeWidth="0.7"
          />

          <polygon
            points={getHexPoints(748, 133, 32)}
            className="stroke-orange-800/15 dark:stroke-[#52341d]/30 fill-transparent"
            strokeWidth="0.7"
          />

          <polygon
            points={getHexPoints(776, 85, 32)}
            className="stroke-orange-800/10 dark:stroke-orange-600/15 fill-transparent"
            strokeWidth="0.65"
          />

          <polygon
            points={getHexPoints(776, 181, 32)}
            className="stroke-orange-800/10 dark:stroke-orange-600/10 fill-transparent"
            strokeWidth="0.6"
          />

          <polygon
            points={getHexPoints(804, 133, 32)}
            className="stroke-orange-800/10 dark:stroke-orange-600/15 fill-transparent"
            strokeWidth="0.6"
          />
        </g>
      </svg>
    </div>
  );
};

export default AtmosphericBackground;
