import React from "react";
import { ArrowUpRight, Zap } from "lucide-react";
import { siteConfig } from "../siteConfig";

const CTAGroup = ({ onDonateClick }) => {
  return (
    <div
      data-testid="cta-group"
      className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 reveal reveal-3"
    >
      <a
        href={siteConfig.links.manifesto}
        target="_blank"
        rel="noreferrer noopener"
        data-testid="cta-manifesto"
        className="group inline-flex items-center justify-center gap-3 h-12 px-7 bg-white text-black font-medium tracking-tight hover:bg-white/90 transition-colors duration-200"
      >
        <span className="text-sm">Read the Manifesto</span>
        <ArrowUpRight
          className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          strokeWidth={1.5}
        />
      </a>

      <button
        type="button"
        onClick={onDonateClick}
        data-testid="cta-donate"
        className="group inline-flex items-center justify-center gap-3 h-12 px-7 bg-transparent text-white font-medium tracking-tight border border-white/30 hover:border-white hover:bg-white/[0.04] transition-colors duration-200"
      >
        <Zap className="h-4 w-4" strokeWidth={1.5} />
        <span className="text-sm">Fuel the Machine</span>
      </button>
    </div>
  );
};

export default CTAGroup;
