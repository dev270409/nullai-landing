import React from "react";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "../siteConfig";

const FooterLink = ({ href, label, testId, disabled }) => {
  if (disabled) {
    return (
      <span
        data-testid={testId}
        className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.2em] uppercase text-white/30 cursor-not-allowed select-none"
        title="Mainnet pending"
      >
        {label}
        <span className="text-white/20">[ pending ]</span>
      </span>
    );
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      data-testid={testId}
      className="group inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.2em] uppercase text-white/60 hover:text-white transition-colors"
    >
      {label}
      <ArrowUpRight
        className="h-3 w-3 opacity-60 group-hover:opacity-100 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        strokeWidth={1.5}
      />
    </a>
  );
};

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      data-testid="site-footer"
      className="relative w-full border-t border-white/10 px-6 py-10 sm:py-12"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-8">
          {/* Brand block */}
          <div className="space-y-2 max-w-md">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm tracking-[0.35em] text-white">
                NULLAI
              </span>
              <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/30">
                — {siteConfig.philosophy}
              </span>
            </div>
            <p className="text-xs text-white/45 leading-relaxed">
              {siteConfig.disclaimer}
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-4 sm:items-end">
            <FooterLink
              href={siteConfig.links.manifesto}
              label="GitBook"
              testId="footer-link-gitbook"
            />
            <FooterLink
              href={siteConfig.links.x}
              label="X / Twitter"
              testId="footer-link-x"
            />
            <FooterLink
              href={siteConfig.links.basescan}
              label="Basescan"
              testId="footer-link-basescan"
              disabled={!siteConfig.links.basescan}
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-white/5">
          <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/30">
            © {year} NULLAI · No team · No promises · Only code.
          </div>
          <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/30">
            Build v1.0.0 · Static manifest
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
