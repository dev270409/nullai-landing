import React, { useState } from "react";
import HeroSection from "./HeroSection";
import FeatureGrid from "./FeatureGrid";
import Footer from "./Footer";
import DonationModal from "./DonationModal";
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
        className="fixed top-0 left-0 right-0 z-40 px-6 py-4 flex items-center justify-between pointer-events-none"
      >
        <div className="pointer-events-auto font-mono text-[11px] tracking-[0.35em] uppercase text-white reveal reveal-1">
          {siteConfig.name}
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
