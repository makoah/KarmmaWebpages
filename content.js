// ============================================================
//  SITE CONTENT — edit text here, never touch index.html
// ============================================================

const CONTENT = {

  meta: {
    title: "Karmma ICT — Data & Analytics, Architected for Growth"
  },

  nav: {
    links: [
      { label: "Services", href: "#services" },
      { label: "About",    href: "#about"    },
      { label: "Process",  href: "#process"  }
    ],
    cta: { label: "Get in Touch", href: "#contact" }
  },

  hero: {
    badge: "Data & Analytics · Enterprise Architecture · Cloud Platforms",
    heading: {
      line1:  "Your data,",
      accent: "architected",
      line3:  "to perform."
    },
    subheading:   "Karmma ICT brings 15+ years of enterprise data leadership to your organisation — cloud platform migrations, governance frameworks, and AI-ready architectures, delivered with precision across EMEA.",
    primaryCta:   "Start a Conversation",
    secondaryCta: "Explore Services",
    metric: {
      label: "EMEA Markets Migrated",
      value: "30",
      note:  "enterprise-wide"
    },
    badges: [
      { icon: "❄️", iconBg: "#e8f7fd", title: "Snowflake Expert", sub: "Cloud-native data platforms" },
      { icon: "🏗️", iconBg: "#e8faf0", title: "TOGAF Certified",  sub: "Enterprise architecture"    }
    ]
  },

  trustBar: {
    label:   "Organisations we've worked with",
    clients: [
      { name: "Johnson & Johnson",   logo: "https://img.logo.dev/jnj.com?token=pk_X1LRzxnFSzSEDSdU4yYlmw"           },
      { name: "Kenvue",              logo: "https://img.logo.dev/kenvue.com?token=pk_X1LRzxnFSzSEDSdU4yYlmw"         },
      { name: "ONVZ",                logo: "https://img.logo.dev/onvz.nl?token=pk_X1LRzxnFSzSEDSdU4yYlmw"            },
      { name: "RAET",                logo: "https://img.logo.dev/raet.nl?token=pk_X1LRzxnFSzSEDSdU4yYlmw"            },
      { name: "Tata Steel",          logo: "https://img.logo.dev/tatasteel.com?token=pk_X1LRzxnFSzSEDSdU4yYlmw"      },
      { name: "CIPAL",               logo: "https://img.logo.dev/cipal.be?token=pk_X1LRzxnFSzSEDSdU4yYlmw"           },
      { name: "Gem. Rotterdam",      logo: "https://img.logo.dev/rotterdam.nl?token=pk_X1LRzxnFSzSEDSdU4yYlmw"       },
      { name: "Gem. Den Haag",       logo: "https://img.logo.dev/denhaag.nl?token=pk_X1LRzxnFSzSEDSdU4yYlmw"         },
      { name: "Gem. Utrecht",        logo: "https://img.logo.dev/utrecht.nl?token=pk_X1LRzxnFSzSEDSdU4yYlmw"         },
      { name: "Gem. Haarlemmermeer", logo: "https://img.logo.dev/haarlemmermeer.nl?token=pk_X1LRzxnFSzSEDSdU4yYlmw"  },
      { name: "Gem. Tilburg",        logo: "https://img.logo.dev/tilburg.nl?token=pk_X1LRzxnFSzSEDSdU4yYlmw"         },
      { name: "Gem. Nijmegen",       logo: "https://img.logo.dev/nijmegen.nl?token=pk_X1LRzxnFSzSEDSdU4yYlmw"        },
      { name: "Gem. Helmond",        logo: "https://img.logo.dev/helmond.nl?token=pk_X1LRzxnFSzSEDSdU4yYlmw"         },
      { name: "Gem. Oss",            logo: "https://img.logo.dev/oss.nl?token=pk_X1LRzxnFSzSEDSdU4yYlmw"             },
      { name: "Gem. Emmen",          logo: "https://img.logo.dev/emmen.nl?token=pk_X1LRzxnFSzSEDSdU4yYlmw"           },
      { name: "Fujitsu",             logo: "https://img.logo.dev/fujitsu.com?token=pk_X1LRzxnFSzSEDSdU4yYlmw"         },
      { name: "Unilever",            logo: "https://img.logo.dev/unilever.com?token=pk_X1LRzxnFSzSEDSdU4yYlmw"        },
      { name: "Rode Kruis",          logo: "https://img.logo.dev/rodekruis.nl?token=pk_X1LRzxnFSzSEDSdU4yYlmw"        },
      { name: "Quion",               logo: "https://img.logo.dev/quion.nl?token=pk_X1LRzxnFSzSEDSdU4yYlmw"            },
      { name: "Care Nederland",      logo: "https://img.logo.dev/carenederland.nl?token=pk_X1LRzxnFSzSEDSdU4yYlmw"   },
      { name: "Public Sector",       logo: null                                                                        }
    ]
  },

  services: {
    tag:        "What We Do",
    heading:    ["Enterprise Data & Analytics,", "Built Around Your Business"],
    subheading: "From cloud platform migrations to AI governance, we deliver data solutions with the precision and accountability of someone who's led them at EMEA scale.",
    cards: [
      { icon: "❄️", title: "Cloud Data Platforms",        body: "Design and migrate enterprise data platforms on Snowflake, Azure, and Databricks — modern data stack architecture from ingestion through to analytics." },
      { icon: "🔧", title: "Data Engineering",             body: "Scalable dbt, Azure Data Factory, and ETL/ELT pipelines; automated ingestion frameworks that cut provisioning from days to hours." },
      { icon: "🏗️", title: "Enterprise Architecture",     body: "TOGAF-certified solution design; governance blueprints and cross-functional stakeholder alignment for complex, multi-market environments." },
      { icon: "📊", title: "Business Intelligence",        body: "Self-service analytics with Tableau, Power BI, and Cognos — democratising insights across your organisation while maintaining enterprise governance." },
      { icon: "🛡️", title: "Data Governance & Quality",   body: "Key Data Element frameworks, RACI structures, compliance standards, and enterprise-wide data quality solutions that scale across EMEA." },
      { icon: "🤖", title: "AI & Data Strategy",           body: "From NL-to-SQL prototypes and GenAI governance to executive technology roadmaps — strategic guidance grounded in real delivery experience." }
    ]
  },

  stats: {
    tag:        "By the Numbers",
    heading:    ["Outcomes measured,", "partnerships built."],
    subheading: "Every engagement is measured by business impact — not just delivery milestones.",
    cells: [
      { num: "15",  accent: "+",  label: "Years of enterprise data leadership"    },
      { num: "30",  accent: "+",  label: "EMEA markets migrated to modern stack"  },
      { num: "20",  accent: "%",  label: "Platform cost reduction delivered"      },
      { num: "9",   accent: "M+", label: "Annual platform budgets managed"        }
    ]
  },

  about: {
    tag:        "Why Karmma",
    heading:    ["Data leadership,", "delivered personally."],
    subheading: "We don't just architect platforms — we take ownership of outcomes, from the boardroom to the data pipeline.",
    miniCards: [
      { icon: "❄️", title: "Snowflake",   value: "3+ yrs"    },
      { icon: "☁️", title: "Azure",       value: "4+ yrs"    },
      { icon: "📊", title: "BI Delivery", value: "15+ yrs"   },
      { icon: "🏗️", title: "TOGAF",      value: "Certified" }
    ],
    benefits: [
      { title: "Strategic and hands-on",             body: "Bridging C-level stakeholders and engineering teams — from building the business case and ROI analysis through to production deployment." },
      { title: "EMEA-scale experience",              body: "Managed cross-market rollouts across 30+ countries, with deep understanding of regional compliance, data residency, and stakeholder complexity." },
      { title: "Governance built in, not bolted on", body: "Data quality frameworks, RACI structures, and compliance standards designed from day one — not patched on at the end of a project." },
      { title: "Platform economics expertise",       body: "ROI-justified resourcing, vendor management, and targeted cost optimisation that the CFO can sign off on." }
    ]
  },

  process: {
    tag:     "How It Works",
    heading: ["From first conversation", "to a platform that performs."],
    steps: [
      { num: "01", title: "Discover",  outline: false, body: "Assess your data landscape, understand business goals, and identify gaps, risks, and quick wins."                                  },
      { num: "02", title: "Architect", outline: false, body: "Design a scalable, governed solution blueprint aligned to your cloud strategy, tooling, and team capabilities."                    },
      { num: "03", title: "Deliver",   outline: true,  body: "Implement with minimal disruption using proven EMEA migration methodology — keeping stakeholders informed at every step."          },
      { num: "04", title: "Evolve",    outline: true,  body: "Continuous optimisation, cost monitoring, and governance maturity as your platform and business grow."                             }
    ]
  },

  contact: {
    heading:    ["Ready to make your data", "work harder?"],
    subheading: "Let's have an honest conversation about your data challenges. No jargon, no hard sell — just 15 years of enterprise experience.",
    email: { label: "Email Marco", href: "mailto:marco.karmidi@karmma-ict.com" },
    phone: null
  },

  footer: {
    tagline:     "Together, Better, Stronger",
    description: "Enterprise-grade data & analytics consulting — from cloud platforms to AI strategy — delivered by practitioners who've done it at scale.",
    columns: [
      {
        title: "Services",
        links: [
          { label: "Cloud Data Platforms",   href: "#services" },
          { label: "Data Engineering",       href: "#services" },
          { label: "Enterprise Architecture",href: "#services" },
          { label: "BI & Reporting",         href: "#services" },
          { label: "Data Governance",        href: "#services" },
          { label: "AI Strategy",            href: "#services" }
        ]
      },
      {
        title: "Company",
        links: [
          { label: "About Us",     href: "#about"   },
          { label: "How It Works", href: "#process" },
          { label: "Contact",      href: "#contact" }
        ]
      },
      {
        title: "Contact",
        links: [
          { label: "marco.karmidi@karmma-ict.com", href: "mailto:marco.karmidi@karmma-ict.com" },
          { label: "Rhoon, Netherlands",            href: "#"                                    }
        ]
      }
    ],
    copyright: "© 2026 Karmma ICT. All rights reserved."
  }

};
