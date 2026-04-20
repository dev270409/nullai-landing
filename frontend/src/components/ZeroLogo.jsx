import React from "react";

/**
 * ZeroLogo — minimal brand mark.
 * Small white ring, no animation. Meant to sit top-left in the header.
 * `size` prop controls the rendered pixel size.
 */
const ZeroLogo = ({ size = 28, className = "" }) => {
  // Variable-thickness ring (thin sides, thicker caps) for typographic feel.
  const VIEW_W = 40;
  const VIEW_H = 56;
  const CX = VIEW_W / 2;
  const CY = VIEW_H / 2;
  const OUTER_RX = 15;
  const OUTER_RY = 27;
  const INNER_RX = 10;
  const INNER_RY = 19;

  return (
    <svg
      data-testid="zero-logo"
      width={size}
      height={size * (VIEW_H / VIEW_W)}
      viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
      className={`block ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <mask id="nullai-zero-ring-mask" maskUnits="userSpaceOnUse">
          <rect x="0" y="0" width={VIEW_W} height={VIEW_H} fill="black" />
          <ellipse cx={CX} cy={CY} rx={OUTER_RX} ry={OUTER_RY} fill="white" />
          <ellipse cx={CX} cy={CY} rx={INNER_RX} ry={INNER_RY} fill="black" />
        </mask>
      </defs>
      {/* Solid white ring */}
      <rect
        x="0"
        y="0"
        width={VIEW_W}
        height={VIEW_H}
        fill="#ffffff"
        mask="url(#nullai-zero-ring-mask)"
      />
    </svg>
  );
};

export default ZeroLogo;
