type PlansDataProps = {
  title: string;
  description: string;
  features: string[];
  popular?: boolean;
};


type PlanCategory = {
  id: string;     
  label: string;   
  plans: PlansDataProps[];
};

export const plansData: PlanCategory[] = [
  {
    id: "redesigns",
    label: "Revamps & Redesigns",
    plans: [
      {
        title: "Logo & Branding",
        description: "Founders with a great product but 'meh' branding that feels outdated.",
        features: [
          "Logo Modernization",
          "2 Fresh Logo Concepts",
          "Visual Identity System",
          "Improved Colors & Typography Setup",
        ],
      },
      {
        title: "Hero Section",
        description: "Websites with high bounce rates. Your visitors leave before they even scroll.",
        features: [
          "Hero UI Modernization",
          "Conversion Copywriting",
          "4 Layout Concepts",
          "Responsive Implementation",
        ],
        popular: true,
      },
      {
        title: "Full Landing Page",
        description: "Marketing sites that need a complete visual reset to convert better.",
        features: [
          "Full Page UI Redesign",
          "Speed Optimization",
          "Custom Asset Design",
          "Copy Refinement",
          "Mobile Responsive",
        ],
      },
    ],
  },
  {
    id: "websites",
    label: "Websites",
    plans: [
      {
        title: "Design Only",
        description: "Teams who have developers but need a modern, professional design system.",
        features: [
          "Sitemap & User Flow",
          "Hi-Fi Wireframes (Figma)",
          "4 Hero Concepts",
          "Component Library",
          "Copywriting",
          "4 Core Pages",
        ],
      },
      {
        title: "Design + Dev",
        description: "Founders who have their branding ready but need a high-speed, custom site.",
        features: [
          "Everything in Design +",
          "Custom Code (Astro/Next.js)",
          "Advanced SEO Setup",
          "Analytics Integration",
          "Domain & Hosting Setup",
          "1 Month Post-Launch Support",
        ],
        popular: true,
      },
      {
        title: "Full Launch",
        description: "Starting from scratch. You need a brand and a website that scale.",
        features: [
          "Everything in Design + Dev +",
          "Full Logo Design",
          "2 Logo Concepts",
          "Color Themes",
          "Typography System",
          "2 Months Post-Launch Support",
        ],
      },
    ],
  },
  {
    id: "webApps",
    label: "Custom Web Apps",
    plans: [
      {
        title: "Design Only",
        description: "Teams who have developers but need a modern, professional design system.",
        features: [
          "Sitemap & User Flow",
          "Hi-Fi Wireframes (Figma)",
          "4 Hero Concepts",
          "Component Library",
          "Copywriting",
          "10+ Screen Designs",
        ],
      },
      {
        title: "Design + Dev",
        description: "Validating a SaaS idea or launching a custom E-com store fast.",
        features: [
          "Everything in Design +",
          "Custom Web App / Shopify Store",
          "Database & API Setup",
          "Advanced SEO Setup",
          "Analytics Integration",
          "Domain & Hosting Setup",
        ],
        popular: true,
      },
      {
        title: "Full Launch",
        description: "Funded startups needing a complete product ecosystem from day one.",
        features: [
          "Everything in Design + Dev +",
          "Full Brand Identity",
          "3 Logo Concepts",
          "Color Themes",
          "Typography System",
          "Investor Deck Template",
        ],
      },
    ],
  },
];