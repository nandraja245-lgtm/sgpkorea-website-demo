export const ENQUIRY_TYPES = [
  'Machine Quotation',
  'Technical Specifications Request',
  'Product Documentation Request',
  'Turnkey Production Line Enquiry',
  'General Company Enquiry',
] as const;

export type EnquiryType = (typeof ENQUIRY_TYPES)[number];

export interface EnquiryFormValues {
  fullName: string;
  companyName: string;
  businessEmail: string;
  country: string;
  phone: string;
  productInterest: string;
  enquiryType: string;
  message: string;
}

export type EnquiryValidationErrors = Partial<Record<keyof EnquiryFormValues, string>>;

export interface DemoEnquiryReceipt {
  referenceId: string;
  submittedAt: string;
  summary: EnquiryFormValues;
  isDemoOnly: true;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_PATTERN = /^[0-9+\-()\s]{6,25}$/;

export function validateEnquiryForm(values: EnquiryFormValues): EnquiryValidationErrors {
  const errors: EnquiryValidationErrors = {};

  if (!values.fullName.trim() || values.fullName.trim().length < 2) {
    errors.fullName = 'Please enter your full name.';
  }

  if (!values.companyName.trim() || values.companyName.trim().length < 2) {
    errors.companyName = 'Please enter your company or organisation name.';
  }

  if (!values.businessEmail.trim()) {
    errors.businessEmail = 'Please enter your business email address.';
  } else if (!EMAIL_PATTERN.test(values.businessEmail.trim())) {
    errors.businessEmail = 'Please enter a valid business email address.';
  }

  if (!values.country.trim()) {
    errors.country = 'Please specify your country or region.';
  }

  if (values.phone.trim() && !PHONE_PATTERN.test(values.phone.trim())) {
    errors.phone = 'Please enter a valid phone number using digits, spaces, +, -, or parentheses.';
  }

  if (!values.productInterest.trim()) {
    errors.productInterest = 'Please select a product or machinery category of interest.';
  }

  if (!values.enquiryType.trim()) {
    errors.enquiryType = 'Please select an enquiry type.';
  }

  if (!values.message.trim() || values.message.trim().length < 10) {
    errors.message = 'Please provide at least 10 characters describing your technical or quotation requirements.';
  }

  return errors;
}

export function hasValidationErrors(errors: EnquiryValidationErrors): boolean {
  return Object.keys(errors).length > 0;
}

export function buildDemoEnquiryReceipt(
  values: EnquiryFormValues,
  now: Date = new Date(),
): DemoEnquiryReceipt {
  const isoDate = now.toISOString().slice(0, 10).replace(/-/g, '');
  const hashSeed = `${values.companyName.trim()}|${values.businessEmail.trim()}|${values.productInterest.trim()}`;
  let checksum = 0;
  for (let i = 0; i < hashSeed.length; i += 1) {
    checksum = (checksum * 31 + hashSeed.charCodeAt(i)) % 9000;
  }
  const code = String(1000 + checksum);

  return {
    referenceId: `DEMO-SGP-${isoDate}-${code}`,
    submittedAt: now.toISOString(),
    summary: {
      fullName: values.fullName.trim(),
      companyName: values.companyName.trim(),
      businessEmail: values.businessEmail.trim(),
      country: values.country.trim(),
      phone: values.phone.trim(),
      productInterest: values.productInterest.trim(),
      enquiryType: values.enquiryType.trim(),
      message: values.message.trim(),
    },
    isDemoOnly: true,
  };
}
