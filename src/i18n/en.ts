export type SupportedLocale = 'en';

export interface Dictionary {
  nav: {
    home: string;
    about: string;
    products: string;
    capabilities: string;
    applications: string;
    downloads: string;
    contact: string;
    primaryCta: string;
  };
  hero: {
    headline: string;
    supportingText: string;
    primaryCta: string;
    secondaryCta: string;
  };
  common: {
    viewDetails: string;
    enquire: string;
    requestQuotation: string;
    backToProducts: string;
    illustrativeNotice: string;
  };
}

export const EN_DICTIONARY: Dictionary = {
  nav: {
    home: 'Home',
    about: 'About Us',
    products: 'Products',
    capabilities: 'Capabilities',
    applications: 'Applications',
    downloads: 'Downloads',
    contact: 'Contact',
    primaryCta: 'Request Enquiry',
  },
  hero: {
    headline: 'Precision Machinery for Medical Consumables Manufacturing',
    supportingText:
      'Explore specialised machinery and manufacturing solutions for medical consumables production.',
    primaryCta: 'Explore Our Products',
    secondaryCta: 'Request an Enquiry',
  },
  common: {
    viewDetails: 'View Details',
    enquire: 'Enquire',
    requestQuotation: 'Request a Quotation',
    backToProducts: 'Back to All Products',
    illustrativeNotice:
      'Illustrative technical schematic · Official SGPKOREA photograph to be supplied upon authorisation',
  },
};
