import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import { Copy, Check, Zap } from "lucide-react";
import { siteConfig } from "../siteConfig";

const DonationModal = ({ open, onOpenChange }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.donationAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
      const el = document.createElement("textarea");
      el.value = siteConfig.donationAddress;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        data-testid="donation-modal"
        className="bg-black border border-white/15 text-white max-w-lg p-0 rounded-none sm:rounded-none shadow-[0_0_60px_rgba(255,255,255,0.06)]"
      >
        {/* Top status bar */}
        <div className="flex items-center justify-between px-6 py-3 border-b border-white/10">
          <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.3em] uppercase text-white/60">
            <span className="inline-block w-1.5 h-1.5 bg-white animate-pulse" />
            Transmission · Secure
          </div>
          <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/40">
            NULLAI · V1
          </div>
        </div>

        <div className="px-6 pt-6 pb-7 space-y-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-white" strokeWidth={1.5} />
              <DialogTitle className="text-xl font-medium tracking-tight text-white">
                {siteConfig.donation.title}
              </DialogTitle>
            </div>
            <DialogDescription className="text-sm text-white/60 leading-relaxed">
              {siteConfig.donation.intro}
            </DialogDescription>
          </div>

          {/* Status line */}
          <div className="font-mono text-[11px] tracking-wider text-white/50">
            <span className="text-white/30">$</span>{" "}
            {siteConfig.donation.status}
          </div>

          {/* Address block */}
          <div className="space-y-2">
            <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/40">
              Base · donation address
            </div>
            <div
              data-testid="donation-address-block"
              className="group flex items-center gap-3 border border-white/15 hover:border-white/30 transition-colors px-4 py-3.5"
            >
              <code
                data-testid="donation-address-text"
                className="flex-1 font-mono text-[12px] sm:text-[13px] text-white break-all select-all leading-snug"
              >
                {siteConfig.donationAddress}
              </code>
              <button
                type="button"
                onClick={handleCopy}
                data-testid="copy-address-btn"
                aria-label="Copy address"
                className="shrink-0 inline-flex items-center gap-2 h-8 px-3 border border-white/20 hover:border-white hover:bg-white hover:text-black transition-colors font-mono text-[10px] tracking-[0.2em] uppercase"
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5" strokeWidth={2} />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" strokeWidth={1.75} />
                    Copy
                  </>
                )}
              </button>
            </div>
          </div>

          <p className="text-xs text-white/45 leading-relaxed">
            {siteConfig.donation.footnote}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DonationModal;
