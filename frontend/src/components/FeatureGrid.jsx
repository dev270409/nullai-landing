import React from "react";
import { siteConfig } from "../siteConfig";

const FeatureCard = ({ feature }) => {
  return (
    <div
      data-testid={`feature-card-${feature.id}`}
      className="group relative flex flex-col justify-between p-8 sm:p-10 min-h-[240px] border border-white/12 hover:border-white/40 bg-black transition-colors duration-300"
    >
      <div className="flex items-start justify-between">
        <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/40">
          // {feature.index}
        </span>
        <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/30 group-hover:text-white/60 transition-colors">
          primitive
        </span>
      </div>

      <div className="mt-10 space-y-3">
        <h3 className="text-2xl sm:text-[28px] font-medium tracking-[-0.02em] text-white leading-tight">
          {feature.name}
        </h3>
        <p className="text-sm text-white/55 leading-relaxed max-w-[36ch]">
          {feature.description}
        </p>
      </div>

      {/* Hover accent line */}
      <span className="absolute left-0 bottom-0 h-px w-0 bg-white transition-all duration-500 group-hover:w-full" />
    </div>
  );
};

const FeatureGrid = () => {
  return (
    <section
      data-testid="features-section"
      className="relative w-full px-6 py-24 sm:py-32 border-t border-white/10"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12 sm:mb-16">
          <div className="space-y-3">
            <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/40">
              // Protocol primitives
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-[-0.02em] text-white max-w-2xl leading-[1.1]">
              Three primitives. One synthetic machine.
            </h2>
          </div>
          <div className="font-mono text-[11px] tracking-wider text-white/40 max-w-xs">
            Every layer is deterministic. Every contract is autonomous.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-0">
          {siteConfig.features.map((f, i) => (
            <div
              key={f.id}
              className={
                i < siteConfig.features.length - 1
                  ? "md:border-r md:border-r-white/0"
                  : ""
              }
            >
              <FeatureCard feature={f} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
