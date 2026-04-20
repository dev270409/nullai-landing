import React from "react";
import ZeroLogo from "./ZeroLogo";
import CTAGroup from "./CTAGroup";
import { siteConfig } from "../siteConfig";

const HeroSection = ({ onDonateClick }) => {
  return (
    <section
      data-testid="hero-section"
      className="relative w-full min-h-[100svh] flex flex-col items-center justify-between pt-20 pb-12 sm:pt-24 sm:pb-16"
    >
      {/* Top terminal label */}
      <div className="w-full flex items-center justify-center px-6">
        <div
          data-testid="hero-status"
          className="font-mono text-[10px] sm:text-[11px] tracking-[0.3em] uppercase text-white/50 reveal reveal-1"
        >
          <span className="inline-block w-1.5 h-1.5 bg-white/80 mr-2 align-middle" />
          Connection established · Base network
        </div>
      </div>

      {/* The oversized 0 */}
      <div className="flex-1 w-full flex items-center justify-center px-4 py-6 sm:py-8">
        <ZeroLogo />
      </div>

      {/* Copy + CTAs */}
      <div className="w-full px-6 flex flex-col items-center gap-6 sm:gap-8 max-w-3xl mx-auto text-center">
        <div className="space-y-4">
          <h1
            data-testid="hero-headline"
            className="reveal reveal-2 text-3xl sm:text-4xl lg:text-5xl font-medium tracking-[-0.03em] leading-[1.05] text-white"
          >
            {siteConfig.content.headline}
          </h1>
          <p
            data-testid="hero-subheadline"
            className="reveal reveal-2 text-sm sm:text-base text-white/60 tracking-tight leading-relaxed max-w-2xl mx-auto"
          >
            {siteConfig.content.subheadline}
          </p>
        </div>

        <CTAGroup onDonateClick={onDonateClick} />
      </div>
    </section>
  );
};

export default HeroSection;
