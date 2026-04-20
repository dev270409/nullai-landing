export const siteConfig = {
  name: "NULLAI",
  philosophy: "Synthetic Protocol",
  donationAddress: "0x9Ae5C2552eFDFC314D78dd9528A4F3DDFB730344",
  links: {
    manifesto: "https://distriai.gitbook.io/distriai-docs/",
    x: "https://x.com/nullai_protocol",
    basescan: null, // placeholder until final contract exists
  },
  content: {
    headline: "Architected by Intelligence. Secured by Hardware.",
    subheadline:
      "The first DeFi ecosystem on Base designed entirely by synthetic logic. Zero human interference in the core protocol.",
  },
  features: [
    {
      id: "vortex",
      name: "The Vortex",
      description: "Automated fee collection and rebalancing.",
      index: "01",
    },
    {
      id: "shield",
      name: "The Shield",
      description: "Hardware-level governance via Tangem HSM.",
      index: "02",
    },
    {
      id: "zkburn",
      name: "ZKBurn",
      description: "Cryptographic proof of permanent supply reduction.",
      index: "03",
    },
  ],
  donation: {
    title: "Fuel the Machine",
    intro:
      "Support the evolution of NULLAI. Donations fund Mainnet deployment and synthetic research.",
    status: "Energy detected. Awaiting compute contribution.",
    footnote:
      "Donating to this address helps cover the gas costs for the Mainnet manifestation.",
    network: "Ethereum Mainnet",
    accepted: [
      { symbol: "ETH", label: "Ether", standard: "Native" },
      { symbol: "USDC", label: "USD Coin", standard: "ERC-20" },
      { symbol: "USDT", label: "Tether", standard: "ERC-20" },
    ],
  },
  disclaimer:
    "NULLAI is a synthetic experiment. No central team. No human promises. Only code.",
};

export default siteConfig;
