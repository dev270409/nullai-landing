import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import { Copy, Check, Zap } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
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

          {/* Accepted networks & assets */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/40">
                Accepted · {siteConfig.donation.network}
              </div>
              <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/30">
                only
              </div>
            </div>
            <div
              data-testid="donation-assets"
              className="grid grid-cols-3 gap-2"
            >
              {siteConfig.donation.accepted.map((a) => (
                <div
                  key={a.symbol}
                  data-testid={`donation-asset-${a.symbol.toLowerCase()}`}
                  className="border border-white/15 px-3 py-2.5 flex flex-col gap-0.5"
                >
                  <span className="font-mono text-[13px] text-white tracking-tight leading-none">
                    {a.symbol}
                  </span>
                  <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-white/40 leading-none">
                    {a.standard}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Address + QR */}
          <div className="space-y-2">
            <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/40">
              Ethereum · donation address
            </div>

            <div className="grid grid-cols-[1fr_auto] gap-3 items-stretch">
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

              <div
                data-testid="donation-qr"
                className="shrink-0 flex items-center justify-center bg-white p-2 border border-white/15"
                title="Scan to donate"
              >
                <QRCodeSVG
                  value={siteConfig.donationAddress}
                  size={96}
                  bgColor="#ffffff"
                  fgColor="#000000"
                  level="M"
                  includeMargin={false}
                />
              </div>
            </div>

            <div className="font-mono text-[9px] tracking-[0.25em] uppercase text-white/30 pt-1">
              Scan · EVM compatible wallet
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
