import React from "react";
import CTAGroup from "./CTAGroup";
import { siteConfig } from "../siteConfig";

const HeroSection = ({ onDonateClick }) => {
  return (
    <section
      data-testid="hero-section"
      className="relative w-full min-h-[100svh] flex flex-col items-center justify-center px-6 pt-28 pb-20 sm:pt-32 sm:pb-24"
    >
      {/* Status label */}
      <div
        data-testid="hero-status"
        className="font-mono text-[10px] sm:text-[11px] tracking-[0.3em] uppercase text-white/50 reveal reveal-1 mb-10 sm:mb-14"
      >
        <span className="inline-block w-1.5 h-1.5 bg-white/80 mr-2 align-middle" />
        Connection established · Base network
      </div>

      {/* Copy */}
      <div className="w-full flex flex-col items-center gap-6 sm:gap-8 max-w-3xl mx-auto text-center">
        <div className="space-y-5">
          <h1
            data-testid="hero-headline"
            className="reveal reveal-2 text-4xl sm:text-5xl lg:text-6xl font-medium tracking-[-0.035em] leading-[1.02] text-white"
          >
            {siteConfig.content.headline}
          </h1>
          <p
            data-testid="hero-subheadline"
            className="reveal reveal-2 text-sm sm:text-base text-white/55 tracking-tight leading-relaxed max-w-2xl mx-auto"
          >
            {siteConfig.content.subheadline}
          </p>
        </div>

        <div className="mt-4">
          <CTAGroup onDonateClick={onDonateClick} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
