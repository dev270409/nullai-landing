import React, { useMemo } from "react";

/**
 * ZeroLogo — oversized "0" ring with a binary scroll visible only inside
 * the ring. Uses SVG <mask> (outer ellipse white, inner ellipse black)
 * + native SVG <text> lines animated with CSS transform.
 *
 * Pure SVG, transparent background, crisp at any size.
 */

const VIEW_W = 400;
const VIEW_H = 600;
const CX = VIEW_W / 2;
const CY = VIEW_H / 2;
// Narrower, more typographic shape: slim sides, thick top/bottom caps.
// side thickness = OUTER_RX - INNER_RX = 28
// cap thickness  = OUTER_RY - INNER_RY = 72  (≈ 2.5x sides → pinched waist)
const OUTER_RX = 148;
const OUTER_RY = 292;
const INNER_RX = 120;
const INNER_RY = 220;

const LINE_COUNT = 120;
const LINE_HEIGHT = 10; // svg units per line
const FONT_SIZE = 9;

const ZeroLogo = () => {
  const lines = useMemo(() => {
    const seed =
      "0110100101110011011001010110001101110010011001010111010001000000";
    let big = "";
    while (big.length < 220) big += seed;
    const arr = [];
    for (let i = 0; i < LINE_COUNT; i++) {
      const start = (i * 13) % seed.length;
      const rotated = big.slice(start, start + 80);
      arr.push(rotated);
    }
    return arr;
  }, []);

  return (
    <div
      data-testid="zero-logo"
      className="relative flex items-center justify-center w-full select-none"
      aria-hidden="true"
    >
      <svg
        viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
        className="block w-full max-w-[min(52vw,360px)] h-auto animate-zero-pulse"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Ring mask: white = visible, black = hidden */}
          <mask id="nullai-zero-ring-mask" maskUnits="userSpaceOnUse">
            <rect x="0" y="0" width={VIEW_W} height={VIEW_H} fill="black" />
            <ellipse cx={CX} cy={CY} rx={OUTER_RX} ry={OUTER_RY} fill="white" />
            <ellipse cx={CX} cy={CY} rx={INNER_RX} ry={INNER_RY} fill="black" />
          </mask>

          {/* Vertical fade mask to soften edges of the text */}
          <linearGradient id="edge-fade" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="12%" stopColor="white" stopOpacity="1" />
            <stop offset="88%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Masked group containing the binary scroll */}
        <g mask="url(#nullai-zero-ring-mask)">
          {/* Black base so the ring looks clean */}
          <rect x="0" y="0" width={VIEW_W} height={VIEW_H} fill="#000000" />

          {/* Scrolling binary text — two copies stacked for seamless loop */}
          <g className="nullai-binary-scroll">
            {[0, 1].map((block) =>
              lines.map((line, i) => (
                <text
                  key={`${block}-${i}`}
                  x={CX}
                  y={block * LINE_COUNT * LINE_HEIGHT + i * LINE_HEIGHT + 10}
                  textAnchor="middle"
                  fontFamily="'Fira Code', monospace"
                  fontSize={FONT_SIZE}
                  fill="#ffffff"
                  fillOpacity="0.55"
                  style={{ letterSpacing: "1px" }}
                >
                  {line}
                </text>
              ))
            )}
          </g>
        </g>

        {/* Hairline outlines of the ring — gives crisp definition */}
        <g fill="none" vectorEffect="non-scaling-stroke">
          <ellipse
            cx={CX}
            cy={CY}
            rx={OUTER_RX}
            ry={OUTER_RY}
            stroke="rgba(255,255,255,0.32)"
            strokeWidth="1.25"
          />
          <ellipse
            cx={CX}
            cy={CY}
            rx={INNER_RX}
            ry={INNER_RY}
            stroke="rgba(255,255,255,0.22)"
            strokeWidth="1"
          />
        </g>

        {/* Tiny registration ticks for the terminal vibe */}
        <g stroke="rgba(255,255,255,0.35)" strokeWidth="1">
          <line x1={CX - 6} y1={CY - OUTER_RY - 14} x2={CX + 6} y2={CY - OUTER_RY - 14} />
          <line x1={CX - 6} y1={CY + OUTER_RY + 14} x2={CX + 6} y2={CY + OUTER_RY + 14} />
        </g>
      </svg>

      <style>{`
        @keyframes nullai-binary-scroll-kf {
          from { transform: translateY(0); }
          to   { transform: translateY(-${LINE_COUNT * LINE_HEIGHT}px); }
        }
        .nullai-binary-scroll {
          animation: nullai-binary-scroll-kf 32s linear infinite;
          will-change: transform;
          transform-box: fill-box;
        }
      `}</style>
    </div>
  );
};

export default ZeroLogo;
