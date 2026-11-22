export const COMPANY_INFO = {
  brandName: 'SGPKOREA',
  legalName: 'SEGAE PRECISION CO., LTD.',
  country: 'South Korea',
  industry: 'Industrial Machinery Manufacturing',
  officialWebsite: 'https://www.sgpkorea.com/',
  contact: {
    address: '30, Digital-ro 26gil, Guro-gu, Seoul, Korea',
    phone: '+82-2-855-8816',
    fax: '+82-2-855-8819',
    email: 'sgpkoreainfo@gmail.com',
  },
  disclaimerNotice:
    'Independent website redesign concept for presentation purposes only. Not affiliated with, commissioned by, or endorsed by SGPKOREA.',
  specFallback: 'Not publicly specified. Contact SGPKOREA for details.',
  shortSpecFallback: 'Contact SGPKOREA for technical specifications.',
  docFallback: 'Contact SGPKOREA to request product documentation.',
} as const;

export const MEDIA_ASSETS = {
  heroCleanroom: {
    src: '/src/assets/images/hero_industrial_cleanroom_1795373385374.jpg',
    alt: 'Illustrative cleanroom industrial production hall representing medical consumables automation environments',
    caption: 'Illustrative industrial cleanroom environment — not an official SGPKOREA facility photograph.',
  },
  capabilitiesBay: {
    src: '/src/assets/images/capabilities_precision_bay_1795373384541.jpg',
    alt: 'Illustrative precision mechanical assembly bay with stainless steel linear rails and fixtures',
    caption: 'Illustrative precision engineering environment — not an official SGPKOREA facility photograph.',
  },
  applicationsFacility: {
    src: '/src/assets/images/applications_medical_packaging_1795373424397.jpg',
    alt: 'Illustrative medical consumables and pharmaceutical cleanroom corridor',
    caption: 'Illustrative medical consumables production environment — not an official SGPKOREA photograph.',
  },
} as const;

export interface CapabilityArea {
  index: string;
  title: string;
  summary: string;
  details: string[];
}

export const VERIFIED_CAPABILITIES: CapabilityArea[] = [
  {
    index: '01',
    title: 'Automated Syringe & Needle Assembly Systems',
    summary:
      'Design and manufacture of automated assembly equipment for disposable syringes, hypodermic needles, insulin syringes, auto-disable (AD) / safety syringes, flush syringes, and uni-body syringes.',
    details: [
      'Component feeding using centrifugal feeders and elevation conveyors (verified on SG1700 series)',
      'Automated silicone oil spraying and component assembly stations',
      'Mechanical inspection and rejection for missing plungers, gaskets, or needles',
      'Optional needle attachment and leakage testing configurations',
    ],
  },
  {
    index: '02',
    title: 'Precision Syringe Barrel Screen Printing',
    summary:
      'Specialised cylindrical screen printing equipment engineered for accurate graduation and scale marking on small-diameter plastic syringe barrels.',
    details: [
      'Computer-controlled screen printing operation with automatic cycle counting (SG2500 / SG2500X series)',
      'Automatic ink scraping, ink reclaiming, and balance blade mechanisms',
      'Fine-tuning adjustments for workbench lifting, printing speed, displacement, and screen frame alignment',
      'Stainless steel and MC steel mechanical construction',
    ],
  },
  {
    index: '03',
    title: 'Downstream Blister & Secondary Packaging Automation',
    summary:
      'Thermoforming blister packing and inner box packing equipment developed to operate standalone or integrated downstream from syringe and needle assembly lines.',
    details: [
      'Film feeding, pre-heating, thermoforming, syringe/needle feeding, and heat sealing (SG4800A series)',
      'Integrated LOT, MFG, and EXP date coding via stamp or inkjet printing units',
      'Cross and horizontal cutting with full stainless-steel machine frame',
      'Inner box packing machinery for secondary medical consumables packaging',
    ],
  },
  {
    index: '04',
    title: 'Precision Injection Moulds & Tooling',
    summary:
      'Engineering of precision injection moulds supporting medical consumable component production such as barrels, plungers, gaskets, and needle hubs.',
    details: [
      'Tooling designed to support disposable syringe and medical consumable manufacturing lines',
      'Project-specific mould cavity count, runner configuration, and resin compatibility confirmed directly with SGPKOREA',
      'Contact SGPKOREA for tooling tolerances, steel grades, and technical specifications',
    ],
  },
  {
    index: '05',
    title: 'Pharmaceutical, Pre-Filled & Secondary Industrial Automation',
    summary:
      'In addition to disposable syringe and needle lines, SGPKOREA lists automation machinery for pre-filled syringes, pharmaceutical products, and mushroom cultivation automation.',
    details: [
      'Pre-filled syringe and pharmaceutical product automation machinery',
      'Turnkey line integration inquiries handled directly by SEGAE PRECISION CO., LTD. engineering staff',
      'Agricultural automation machinery for mushroom cultivation projects',
    ],
  },
];

export interface ApplicationSector {
  id: string;
  title: string;
  scope: string;
  description: string;
  relatedMachineSlugs: string[];
  considerations: string[];
}

export const INDUSTRY_APPLICATIONS: ApplicationSector[] = [
  {
    id: 'disposable-syringes',
    title: 'Disposable Syringe Manufacturing',
    scope: 'Primary Medical Consumables',
    description:
      'End-to-end mechanical processes covering component moulding support, barrel graduation printing, automated syringe assembly, and individual blister packaging for standard disposable syringes.',
    relatedMachineSlugs: [
      'syringe-assembly-machine',
      'barrel-printing-machine',
      'blister-packing-machine',
      'injection-moulds',
    ],
    considerations: [
      'Supports Slip Tip, Luer Lock, and Side Tip syringe configurations on verified SG1700 assembly systems',
      'Compatible with upstream barrel printing and downstream thermoforming blister packing',
      'Confirm site cleanroom requirements and applicable local regulatory standards directly with SGPKOREA',
    ],
  },
  {
    id: 'insulin-and-safety-syringes',
    title: 'Insulin, Auto-Disable (AD), Safety & Uni-Body Syringes',
    scope: 'Specialised Injection Consumables',
    description:
      'Dedicated automation lines configured for small-volume insulin syringes (such as 0.5 ml and 1 ml formats), auto-disable (AD) syringes, safety syringes, flush syringes, and uni-body syringe production.',
    relatedMachineSlugs: [
      'insulin-syringe-assembly',
      'syringe-assembly-machine',
      'barrel-printing-machine',
    ],
    considerations: [
      'High-precision graduation scale printing for fine-increment syringe barrels',
      'Automated feeding and component verification tailored to specific syringe designs',
      'Exact machine configuration and compatibility are confirmed per product drawing with SGPKOREA',
    ],
  },
  {
    id: 'hypodermic-needles',
    title: 'Hypodermic Needle Production',
    scope: 'Needle Assembly & Packaging',
    description:
      'Automated assembly systems and compatible blister packaging equipment built for hypodermic needle manufacturing operations.',
    relatedMachineSlugs: ['needle-assembly-machine', 'blister-packing-machine', 'injection-moulds'],
    considerations: [
      'Supports automated handling of needle hubs, cannulas, and protective caps',
      'Blister packing systems can be configured to handle syringes and needles',
      'Contact SGPKOREA for gauge range compatibility and detailed line specifications',
    ],
  },
  {
    id: 'pharmaceutical-packaging',
    title: 'Pre-Filled Syringe & Pharmaceutical Automation',
    scope: 'Pharmaceutical Processing & Packaging',
    description:
      'Automation machinery listed by SGPKOREA for pre-filled syringes, pharmaceutical products, thermoformed blister sealing, and secondary inner box packaging.',
    relatedMachineSlugs: ['blister-packing-machine', 'insulin-syringe-assembly'],
    considerations: [
      'Automated LOT, MFG, and EXP code printing integration on blister lines',
      'Secondary inner box packing configurations available upon enquiry',
      'Regulatory suitability and validation documentation must be confirmed directly with SEGAE PRECISION CO., LTD.',
    ],
  },
];
