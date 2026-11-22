import {COMPANY_INFO} from './company';

export type ProductCategoryId =
  | 'all'
  | 'syringe-assembly'
  | 'needle-assembly'
  | 'barrel-printing'
  | 'blister-packing'
  | 'insulin-specialty'
  | 'injection-moulds';

export type SchematicKind =
  | 'syringe-assembly'
  | 'needle-assembly'
  | 'barrel-printing'
  | 'blister-packing'
  | 'insulin-assembly'
  | 'injection-mould';

export type GalleryViewMode = 'elevation' | 'process-flow' | 'footprint';

export interface SpecificationRow {
  label: string;
  value: string;
  verified: boolean;
}

export interface GalleryFrame {
  id: string;
  mode: GalleryViewMode;
  title: string;
  caption: string;
}

export interface ProductItem {
  slug: string;
  categoryId: Exclude<ProductCategoryId, 'all'>;
  categoryName: string;
  name: string;
  modelReference: string;
  schematicKind: SchematicKind;
  shortDescription: string;
  primaryPurpose: string;
  overviewParagraphs: string[];
  highlightMetricLabel: string;
  highlightMetricValue: string;
  specifications: SpecificationRow[];
  keyFeatures: string[];
  applications: string[];
  gallery: GalleryFrame[];
  sourceNote: string;
  featured: boolean;
}

export interface ProductCategoryMeta {
  id: ProductCategoryId;
  label: string;
  shortLabel: string;
  description: string;
}

const NOT_SPECIFIED = COMPANY_INFO.specFallback;

export const PRODUCT_CATEGORIES: ProductCategoryMeta[] = [
  {
    id: 'all',
    label: 'All Verified Equipment',
    shortLabel: 'All Products',
    description: 'Complete catalogue of publicly verified SGPKOREA machinery categories.',
  },
  {
    id: 'syringe-assembly',
    label: 'Automatic Syringe Assembly Machines',
    shortLabel: 'Syringe Assembly',
    description: 'Automated multi-station systems for disposable syringe assembly.',
  },
  {
    id: 'needle-assembly',
    label: 'Needle Assembly Machines',
    shortLabel: 'Needle Assembly',
    description: 'Dedicated automated assembly machinery for hypodermic needles.',
  },
  {
    id: 'barrel-printing',
    label: 'Syringe Barrel Printing Machines',
    shortLabel: 'Barrel Printing',
    description: 'Precision screen printing machinery for syringe barrel graduations and markings.',
  },
  {
    id: 'blister-packing',
    label: 'Blister Packing Machines',
    shortLabel: 'Blister Packing',
    description: 'Automated thermoforming, sealing, coding, and cutting lines for syringes and needles.',
  },
  {
    id: 'insulin-specialty',
    label: 'Insulin & Specialty Syringe Systems',
    shortLabel: 'Insulin & Specialty',
    description: 'Assembly systems for insulin, AD/safety, flush, uni-body, and pre-filled syringes.',
  },
  {
    id: 'injection-moulds',
    label: 'Injection Moulds & Tooling',
    shortLabel: 'Injection Moulds',
    description: 'Precision injection moulds supporting medical consumables component manufacturing.',
  },
];

export const PRODUCTS: ProductItem[] = [
  {
    slug: 'syringe-assembly-machine',
    categoryId: 'syringe-assembly',
    categoryName: 'Automatic Syringe Assembly Machines',
    name: 'Automatic Syringe Assembly Machine',
    modelReference: 'SG1700 Series',
    schematicKind: 'syringe-assembly',
    shortDescription:
      'Automated linear assembly system for disposable syringes supporting Slip Tip, Luer Lock, and Side Tip designs with PLC control and automated component rejection.',
    primaryPurpose:
      'Automated feeding, silicone lubrication, assembly, and mechanical inspection of disposable medical syringes.',
    overviewParagraphs: [
      'The SG1700 Series Automatic Syringe Assembly Machine is engineered by SEGAE PRECISION CO., LTD. (SGPKOREA) to automate core assembly stages in disposable syringe production lines. Publicly listed configurations accommodate Slip Tip, Luer Lock, and Side Tip syringe formats.',
      'The system integrates centrifugal parts feeding with an elevation conveyor, silicone oil spray nozzles, plunger and gasket insertion, and mechanical rejection of incomplete assemblies. Optional modules include needle attachment and leakage testing for 2-part syringe formats.',
    ],
    highlightMetricLabel: 'Listed Output (0.5–1 ml)',
    highlightMetricValue: 'Approx. 12,000 pcs/hr',
    specifications: [
      {label: 'Machine Model', value: 'SG1700 Series', verified: true},
      {
        label: 'Production Capacity',
        value: 'Approx. 12,000 pcs/hr (0.5 ml & 1 ml); varies by syringe size (up to 15,000 pcs/hr for 2 ml/5 ml)',
        verified: true,
      },
      {
        label: 'Machine Dimensions (W × L × H)',
        value: '2,000 mm × 7,200 mm × 1,900 mm',
        verified: true,
      },
      {label: 'Machine Weight', value: '1,850 kg', verified: true},
      {label: 'Power Requirements', value: '4 kW', verified: true},
      {label: 'Voltage', value: 'AC 220V, 1 Phase', verified: true},
      {label: 'Compressed Air Consumption', value: '600 L/min', verified: true},
      {label: 'Operating System', value: 'Mitsubishi PLC with touch screen interface', verified: true},
      {
        label: 'Automation Level',
        value: 'Automatic (1–2 operators listed for line supervision)',
        verified: true,
      },
      {label: 'Applicable Materials', value: NOT_SPECIFIED, verified: false},
    ],
    keyFeatures: [
      'Full stainless-steel structural body suited to industrial medical consumables production environments',
      'Centrifugal parts feeder paired with an elevation conveyor for continuous component supply',
      'Silicone spray nozzle system for controlled barrel lubrication prior to plunger assembly',
      'Automated mechanical rejection system detecting missing plungers, gaskets, or needles',
      'Compatible with Slip Tip, Luer Lock, and Side Tip syringe formats',
      'Optional needle assembly and leakage testing stations available upon specification',
    ],
    applications: [
      'High-volume disposable syringe assembly lines',
      '2-part and 3-part disposable syringe production',
      'Integrated plant workflows connecting barrel printing and blister packing equipment',
    ],
    gallery: [
      {
        id: 'sg1700-elevation',
        mode: 'elevation',
        title: 'Linear Assembly Frame Schematic',
        caption:
          'Illustrative orthographic schematic of a linear syringe assembly system. Official SGPKOREA photography to be supplied upon authorisation.',
      },
      {
        id: 'sg1700-flow',
        mode: 'process-flow',
        title: 'Station Process Sequence',
        caption:
          'Illustrative process flow showing barrel feeding, silicone spraying, plunger/gasket insertion, inspection, and discharge.',
      },
      {
        id: 'sg1700-footprint',
        mode: 'footprint',
        title: 'Listed Footprint Envelope (2,000 × 7,200 mm)',
        caption:
          'Illustrative floor-plan envelope based on publicly listed SG1700 dimensions (2,000 mm W × 7,200 mm L × 1,900 mm H). Verify installation clearances with SGPKOREA.',
      },
    ],
    sourceNote:
      'Technical figures reflect publicly available SEGAE PRECISION CO., LTD. (SGPKOREA) product listings for the SG1700 Series. Confirm final specifications and options directly with SGPKOREA.',
    featured: true,
  },
  {
    slug: 'needle-assembly-machine',
    categoryId: 'needle-assembly',
    categoryName: 'Needle Assembly Machines',
    name: 'Hypodermic Needle Assembly Machine',
    modelReference: 'Model series confirmed on enquiry',
    schematicKind: 'needle-assembly',
    shortDescription:
      'Dedicated automated assembly equipment for hypodermic needles, designed to support integrated medical consumables production lines.',
    primaryPurpose:
      'Automated handling and assembly of hypodermic needle components within medical consumable manufacturing plants.',
    overviewParagraphs: [
      'SEGAE PRECISION CO., LTD. (SGPKOREA) manufactures automated hypodermic needle assembly machinery as part of its core medical consumables production portfolio.',
      'Because detailed model numbers, output speeds, dimensions, and utility requirements for current hypodermic needle assembly systems are not published in full on public pages, buyers should contact SGPKOREA directly for verified machine documentation and gauge-specific configurations.',
    ],
    highlightMetricLabel: 'Technical Specifications',
    highlightMetricValue: 'Contact SGPKOREA',
    specifications: [
      {label: 'Machine Model', value: NOT_SPECIFIED, verified: false},
      {label: 'Production Capacity', value: NOT_SPECIFIED, verified: false},
      {label: 'Machine Dimensions', value: NOT_SPECIFIED, verified: false},
      {label: 'Machine Weight', value: NOT_SPECIFIED, verified: false},
      {label: 'Power Requirements', value: NOT_SPECIFIED, verified: false},
      {label: 'Voltage', value: NOT_SPECIFIED, verified: false},
      {label: 'Operating System', value: NOT_SPECIFIED, verified: false},
      {
        label: 'Automation Level',
        value: 'Automatic hypodermic needle assembly (confirm station details with SGPKOREA)',
        verified: true,
      },
      {label: 'Applicable Materials', value: NOT_SPECIFIED, verified: false},
    ],
    keyFeatures: [
      'Purpose-built for automated hypodermic needle assembly workflows',
      'Designed by SGPKOREA alongside syringe assembly and blister packing lines for plant compatibility',
      'Detailed station options, epoxy curing, silicone coating, and inspection modules confirmed directly with SGPKOREA',
    ],
    applications: [
      'Standalone hypodermic needle manufacturing facilities',
      'Integrated disposable syringe and needle production plants',
      'Upstream component supply for blister packaging lines',
    ],
    gallery: [
      {
        id: 'needle-elevation',
        mode: 'elevation',
        title: 'Needle Assembly Station Schematic',
        caption:
          'Illustrative schematic of a hypodermic needle assembly unit. Official SGPKOREA photography to be supplied upon authorisation.',
      },
      {
        id: 'needle-flow',
        mode: 'process-flow',
        title: 'General Assembly Workflow',
        caption:
          'Illustrative high-level workflow for automated needle hub, cannula, and cap assembly. Confirm exact process steps with SGPKOREA.',
      },
    ],
    sourceNote:
      'Product category verified via sgpkorea.com and public industrial directories. Detailed model specifications are not publicly listed; contact SGPKOREA for official datasheets.',
    featured: true,
  },
  {
    slug: 'barrel-printing-machine',
    categoryId: 'barrel-printing',
    categoryName: 'Syringe Barrel Printing Machines',
    name: 'Syringe Barrel Printing Machine',
    modelReference: 'SG2500 / SG2500X Series',
    schematicKind: 'barrel-printing',
    shortDescription:
      'Precision screen printing machine built for accurate graduation scale and marking printing on small-diameter disposable syringe barrels.',
    primaryPurpose:
      'Automated cylindrical screen printing of volumetric graduations and markings onto disposable syringe barrels.',
    overviewParagraphs: [
      'The SG2500 / SG2500X Series Syringe Barrel Printing Machine is designed specifically for small-diameter cylindrical medical components such as plastic disposable syringe barrels.',
      'Constructed with stainless steel and MC steel components, the system incorporates computer-controlled operation, a 4-digit automatic counter, automatic ink scraping and reclaiming, adjustable printing displacement and speed, and fine-tuning controls for both the workbench and screen frame.',
    ],
    highlightMetricLabel: 'Listed Footprint',
    highlightMetricValue: '1,500 × 1,800 mm',
    specifications: [
      {label: 'Machine Model', value: 'SG2500 / SG2500X Series', verified: true},
      {label: 'Production Capacity', value: NOT_SPECIFIED, verified: false},
      {
        label: 'Machine Dimensions (W × D × H)',
        value: 'Approx. 1,500 mm × 1,800 mm × 1,760 mm',
        verified: true,
      },
      {label: 'Machine Weight', value: 'Approx. 650 kg', verified: true},
      {label: 'Power Requirements', value: NOT_SPECIFIED, verified: false},
      {label: 'Voltage', value: 'AC 220V, 1 Phase', verified: true},
      {
        label: 'Operating System',
        value: 'Computer-controlled operation with 4-digit automatic counter',
        verified: true,
      },
      {
        label: 'Automation Level',
        value: 'Automatic screen printing with ink scraping and reclaiming',
        verified: true,
      },
      {
        label: 'Applicable Materials',
        value: 'Small-diameter cylindrical plastic syringe barrels (confirm ink & resin specs with SGPKOREA)',
        verified: true,
      },
    ],
    keyFeatures: [
      'Stainless steel and MC steel machine frame construction',
      'Computer-controlled printing cycle with integrated 4-digit automatic production counter',
      'Automatic ink scraping, ink reclaiming, and automatic balance blade mechanism',
      'Workbench lifting system with adjustable printing displacement and printing speed',
      'Fine-tuning adjustments for both the workbench and screen printing frame',
    ],
    applications: [
      'Volumetric graduation and scale printing on disposable syringe barrels',
      'Marking and branding of small-diameter cylindrical medical consumables',
      'Upstream preparation ahead of automated syringe assembly lines',
    ],
    gallery: [
      {
        id: 'sg2500-elevation',
        mode: 'elevation',
        title: 'Screen Printing Unit Schematic',
        caption:
          'Illustrative orthographic schematic of a cylindrical barrel screen printing machine. Official SGPKOREA photography to be supplied upon authorisation.',
      },
      {
        id: 'sg2500-flow',
        mode: 'process-flow',
        title: 'Printing & Indexing Flow',
        caption:
          'Illustrative process flow covering barrel feeding, positioning, screen printing, and discharge.',
      },
      {
        id: 'sg2500-footprint',
        mode: 'footprint',
        title: 'Listed Footprint Envelope (1,500 × 1,800 mm)',
        caption:
          'Illustrative floor-plan envelope based on publicly listed SG2500 / SG2500X dimensions (approx. 1,500 mm × 1,800 mm × 1,760 mm). Verify clearances with SGPKOREA.',
      },
    ],
    sourceNote:
      'Technical figures reflect publicly available SEGAE PRECISION CO., LTD. (SGPKOREA) listings for the SG2500 / SG2500X Series. Confirm current output speeds and power draw directly with SGPKOREA.',
    featured: true,
  },
  {
    slug: 'blister-packing-machine',
    categoryId: 'blister-packing',
    categoryName: 'Blister Packing Machines',
    name: 'Automatic Blister Packing Machine',
    modelReference: 'SG4800A Series',
    schematicKind: 'blister-packing',
    shortDescription:
      'Automated thermoforming, sealing, code printing, and cutting line engineered to package finished syringes and needles into hard or soft blister packs.',
    primaryPurpose:
      'Automated primary blister packaging of disposable syringes and hypodermic needles with integrated LOT, MFG, and EXP date coding.',
    overviewParagraphs: [
      'The SG4800A Series Automatic Blister Packing Machine is built to operate downstream from syringe and needle assembly equipment, packaging finished medical consumables into individual hard or soft blister packs.',
      'Constructed with a full stainless-steel structural frame and controlled by a Mitsubishi PLC, the system automates film feeding, pre-heating, thermoforming, automated product feeding, heat sealing, stamp or inkjet batch coding (LOT, MFG, EXP), and cross/horizontal cutting.',
    ],
    highlightMetricLabel: 'Listed Cycle Speed',
    highlightMetricValue: '12–15 cycles/min',
    specifications: [
      {label: 'Machine Model', value: 'SG4800A Series', verified: true},
      {label: 'Production Capacity', value: '12 – 15 cycles/min', verified: true},
      {
        label: 'Machine Dimensions (W × D × H)',
        value: '1,380 mm × 9,470 mm × 1,800 mm',
        verified: true,
      },
      {label: 'Machine Weight', value: '1,650 kg', verified: true},
      {label: 'Power Requirements', value: '10 kW', verified: true},
      {label: 'Voltage', value: 'AC 220V, 3 Phase', verified: true},
      {label: 'Compressed Air Consumption', value: '1,500 L/min', verified: true},
      {label: 'Operating System', value: 'Mitsubishi PLC control system', verified: true},
      {
        label: 'Automation Level',
        value: 'Automatic forming, feeding, sealing, coding, and cutting',
        verified: true,
      },
      {
        label: 'Applicable Materials',
        value: 'Film width 420–425 mm; Paper width 385 mm (confirm packaging barrier grades with SGPKOREA)',
        verified: true,
      },
    ],
    keyFeatures: [
      'Full stainless-steel structural build for medical consumables packaging environments',
      'Automated sequence covering film feeding, pre-heating, thermoforming, product insertion, and heat sealing',
      'Supports hard or soft blister packaging configurations for syringes and needles',
      'Integrated printing support for LOT, MFG, and EXP codes via stamp or inkjet printers',
      'Automated cross and horizontal cutting stages',
      'Mitsubishi PLC control architecture designed for line integration',
    ],
    applications: [
      'Individual blister packaging of disposable and insulin syringes',
      'Primary blister packaging of hypodermic needles',
      'Downstream integration with automatic syringe assembly and inner box packing lines',
    ],
    gallery: [
      {
        id: 'sg4800a-elevation',
        mode: 'elevation',
        title: 'Thermoforming Blister Line Schematic',
        caption:
          'Illustrative orthographic schematic of an inline blister packing system. Official SGPKOREA photography to be supplied upon authorisation.',
      },
      {
        id: 'sg4800a-flow',
        mode: 'process-flow',
        title: 'Packaging Process Stages',
        caption:
          'Illustrative sequence: film unwind, pre-heat & form, syringe/needle feed, heat seal, LOT/MFG/EXP coding, and cutting.',
      },
      {
        id: 'sg4800a-footprint',
        mode: 'footprint',
        title: 'Listed Footprint Envelope (1,380 × 9,470 mm)',
        caption:
          'Illustrative floor-plan envelope based on publicly listed SG4800A dimensions (1,380 mm W × 9,470 mm D × 1,800 mm H). Verify plant layout clearances with SGPKOREA.',
      },
    ],
    sourceNote:
      'Technical figures reflect publicly available SEGAE PRECISION CO., LTD. (SGPKOREA) product listings for the SG4800A Series. Confirm tooling formats and packaging substrates directly with SGPKOREA.',
    featured: true,
  },
  {
    slug: 'insulin-syringe-assembly',
    categoryId: 'insulin-specialty',
    categoryName: 'Insulin & Specialty Syringe Systems',
    name: 'Insulin & Specialty Syringe Assembly Systems',
    modelReference: 'SG1700 & Project-Configured Series',
    schematicKind: 'insulin-assembly',
    shortDescription:
      'Automated assembly systems configured for insulin syringes, auto-disable (AD) / safety syringes, flush syringes, uni-body syringes, and pre-filled syringe automation.',
    primaryPurpose:
      'Specialised automated assembly of small-volume insulin syringes and dedicated specialty syringe designs.',
    overviewParagraphs: [
      'SGPKOREA offers automated production machinery covering insulin syringes, auto-disable (AD) and safety syringes, flush syringes, uni-body syringe automation, and pre-filled syringe automation.',
      'Public listings for the SG1700 platform note approximately 12,000 pcs/hr output for 0.5 ml and 1 ml syringe formats. Because specialty safety, AD, uni-body, and pre-filled syringe geometries vary substantially by customer product design, final machine specifications are engineered to project requirements.',
    ],
    highlightMetricLabel: 'Listed 0.5–1 ml Output',
    highlightMetricValue: 'Approx. 12,000 pcs/hr',
    specifications: [
      {
        label: 'Machine Model',
        value: 'SG1700 Series (0.5 ml / 1 ml) & custom specialty configurations',
        verified: true,
      },
      {
        label: 'Production Capacity',
        value: 'Approx. 12,000 pcs/hr for 0.5 ml / 1 ml insulin syringe configurations (confirm per design)',
        verified: true,
      },
      {label: 'Machine Dimensions', value: NOT_SPECIFIED, verified: false},
      {label: 'Machine Weight', value: NOT_SPECIFIED, verified: false},
      {label: 'Power Requirements', value: NOT_SPECIFIED, verified: false},
      {label: 'Voltage', value: NOT_SPECIFIED, verified: false},
      {label: 'Operating System', value: NOT_SPECIFIED, verified: false},
      {
        label: 'Automation Level',
        value: 'Automatic assembly tailored to syringe geometry',
        verified: true,
      },
      {label: 'Applicable Materials', value: NOT_SPECIFIED, verified: false},
    ],
    keyFeatures: [
      'Supports insulin syringes alongside AD (Auto-Disable), safety, flush, and uni-body syringe categories',
      'Separate automation offerings listed by SGPKOREA for pre-filled syringes and pharmaceutical products',
      'Component feeding, lubrication, assembly, and mechanical inspection options configured to customer drawings',
    ],
    applications: [
      '0.5 ml and 1 ml insulin syringe manufacturing lines',
      'Auto-disable (AD) and safety syringe production',
      'Uni-body, flush, and pre-filled syringe automation projects',
    ],
    gallery: [
      {
        id: 'insulin-elevation',
        mode: 'elevation',
        title: 'Specialty Syringe Assembly Schematic',
        caption:
          'Illustrative orthographic schematic for fine-pitch specialty syringe assembly. Official SGPKOREA photography to be supplied upon authorisation.',
      },
      {
        id: 'insulin-flow',
        mode: 'process-flow',
        title: 'Assembly & Inspection Sequence',
        caption:
          'Illustrative specialty syringe assembly stages. Exact station layout depends on syringe mechanism (insulin, AD, safety, or uni-body).',
      },
    ],
    sourceNote:
      'Product scope verified via sgpkorea.com and public listings. Confirm exact dimensions, electrical utilities, and per-model capacities directly with SGPKOREA.',
    featured: false,
  },
  {
    slug: 'injection-moulds',
    categoryId: 'injection-moulds',
    categoryName: 'Injection Moulds & Tooling',
    name: 'Precision Injection Moulds for Medical Consumables',
    modelReference: 'Custom Multi-Cavity Tooling',
    schematicKind: 'injection-mould',
    shortDescription:
      'Precision injection moulds engineered for medical consumable components such as syringe barrels, plungers, gaskets, and needle hubs.',
    primaryPurpose:
      'High-precision plastic injection moulding tooling supporting upstream component supply in disposable syringe and needle manufacturing plants.',
    overviewParagraphs: [
      'Alongside its automated assembly, printing, and packaging equipment, SEGAE PRECISION CO., LTD. (SGPKOREA) provides precision injection moulds tailored to medical consumables production.',
      'Mould cavity layouts, runner designs, cycle parameters, and press compatibility are engineered on a project-by-project basis. Contact SGPKOREA directly to review component drawings and obtain official tooling specifications.',
    ],
    highlightMetricLabel: 'Tooling Specification',
    highlightMetricValue: 'Project-Specific',
    specifications: [
      {label: 'Machine Model', value: 'Custom-engineered medical consumable moulds', verified: true},
      {label: 'Production Capacity', value: NOT_SPECIFIED, verified: false},
      {label: 'Machine Dimensions', value: NOT_SPECIFIED, verified: false},
      {label: 'Machine Weight', value: NOT_SPECIFIED, verified: false},
      {label: 'Power Requirements', value: NOT_SPECIFIED, verified: false},
      {label: 'Voltage', value: NOT_SPECIFIED, verified: false},
      {label: 'Operating System', value: NOT_SPECIFIED, verified: false},
      {
        label: 'Automation Level',
        value: 'Tooling for automated injection moulding presses',
        verified: true,
      },
      {
        label: 'Applicable Materials',
        value: 'Medical-grade polymers such as PP and PC (confirm specific resin requirements with SGPKOREA)',
        verified: true,
      },
    ],
    keyFeatures: [
      'Tooling designed for syringe barrels, plungers, gaskets, and needle hubs',
      'Engineered to integrate cleanly with downstream SGPKOREA printing and assembly machinery',
      'Cavity counts, hot-runner options, and dimensional tolerances confirmed directly against customer drawings',
    ],
    applications: [
      'Syringe barrel and plunger component moulding',
      'Hypodermic needle hub and protective cap production',
      'Turnkey medical consumables plant tooling packages',
    ],
    gallery: [
      {
        id: 'mould-elevation',
        mode: 'elevation',
        title: 'Multi-Cavity Injection Mould Cross-Section',
        caption:
          'Illustrative orthographic cross-section of a precision multi-cavity syringe component mould. Official SGPKOREA photography to be supplied upon authorisation.',
      },
      {
        id: 'mould-flow',
        mode: 'process-flow',
        title: 'Upstream Tooling to Assembly Workflow',
        caption:
          'Illustrative relationship between component injection moulding, barrel printing, assembly, and blister packing.',
      },
    ],
    sourceNote:
      'Injection mould offering verified via sgpkorea.com. Cavity counts, cycle times, and press tonnage requirements are project-specific; contact SGPKOREA for technical specifications.',
    featured: false,
  },
];

export function getProductBySlug(slug: string | undefined): ProductItem | undefined {
  if (!slug) {
    return undefined;
  }
  return PRODUCTS.find((item) => item.slug === slug);
}

export function filterProductsByCategory(
  categoryId: ProductCategoryId,
  products: ProductItem[] = PRODUCTS,
): ProductItem[] {
  if (categoryId === 'all') {
    return products;
  }
  return products.filter((item) => item.categoryId === categoryId);
}

export function getFeaturedProducts(products: ProductItem[] = PRODUCTS): ProductItem[] {
  return products.filter((item) => item.featured);
}
