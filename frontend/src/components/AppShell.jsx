import React, { useState } from "react";
import HeroSection from "./HeroSection";
import FeatureGrid from "./FeatureGrid";
import Footer from "./Footer";
import DonationModal from "./DonationModal";
import ZeroLogo from "./ZeroLogo";
import { siteConfig } from "../siteConfig";

const AppShell = () => {
  const [donationOpen, setDonationOpen] = useState(false);

  return (
    <div
      data-testid="app-shell"
      className="relative min-h-screen w-full bg-black text-white scanlines overflow-x-hidden"
    >
      {/* Top brand bar */}
      <header
        data-testid="top-bar"
        className="fixed top-0 left-0 right-0 z-40 px-5 sm:px-6 py-4 flex items-center justify-between pointer-events-none"
      >
        {/* Logo tab: empty white-outlined box containing the 0 mark */}
        <div
          data-testid="brand-mark"
          className="pointer-events-auto inline-flex items-center gap-3 reveal reveal-1"
        >
          <div className="inline-flex items-center justify-center h-9 w-9 border border-white/25 hover:border-white/60 transition-colors bg-white/[0.04] backdrop-blur-sm">
            <ZeroLogo size={16} />
          </div>
          <span className="font-mono text-[11px] tracking-[0.35em] uppercase text-white">
            {siteConfig.name}
          </span>
        </div>

        <div className="pointer-events-auto font-mono text-[10px] tracking-[0.3em] uppercase text-white/40 reveal reveal-1">
          {siteConfig.philosophy}
        </div>
      </header>

      <main className="relative z-10">
        <HeroSection onDonateClick={() => setDonationOpen(true)} />
        <FeatureGrid />
      </main>

      <Footer />

      <DonationModal open={donationOpen} onOpenChange={setDonationOpen} />
    </div>
  );
};

export default AppShell;
