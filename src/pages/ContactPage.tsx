import {useEffect, useRef, useState, type FormEvent} from 'react';
import {Link, useSearchParams} from 'react-router-dom';
import {CheckCircle2, ExternalLink, Info} from 'lucide-react';
import {COMPANY_INFO} from '../data/company';
import {PRODUCTS, getProductBySlug} from '../data/products';
import {
  ENQUIRY_TYPES,
  buildDemoEnquiryReceipt,
  hasValidationErrors,
  validateEnquiryForm,
  type DemoEnquiryReceipt,
  type EnquiryFormValues,
  type EnquiryValidationErrors,
} from '../utils/enquiry';

const PRODUCT_OPTIONS = [
  ...PRODUCTS.map((item) => `${item.name} (${item.modelReference})`),
  'Turnkey Disposable Syringe Production Line',
  'Inner Box Packing / Pharmaceutical Automation',
  'General Company / Multiple Machinery Categories',
];

function resolveInitialProduct(slugParam: string | null): string {
  if (!slugParam) {
    return '';
  }
  const matched = getProductBySlug(slugParam);
  if (matched) {
    return `${matched.name} (${matched.modelReference})`;
  }
  return '';
}

function resolveInitialType(typeParam: string | null): string {
  if (!typeParam) {
    return ENQUIRY_TYPES[0];
  }
  const matched = ENQUIRY_TYPES.find((item) => item.toLowerCase() === typeParam.toLowerCase());
  return matched ?? ENQUIRY_TYPES[0];
}

export function ContactPage() {
  const [searchParams] = useSearchParams();
  const productParam = searchParams.get('product');
  const typeParam = searchParams.get('type');

  const [values, setValues] = useState<EnquiryFormValues>(() => ({
    fullName: '',
    companyName: '',
    businessEmail: '',
    country: '',
    phone: '',
    productInterest: resolveInitialProduct(productParam),
    enquiryType: resolveInitialType(typeParam),
    message: '',
  }));

  const [errors, setErrors] = useState<EnquiryValidationErrors>({});
  const [receipt, setReceipt] = useState<DemoEnquiryReceipt | null>(null);
  const formPanelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const resolvedProduct = resolveInitialProduct(productParam);
    const resolvedType = resolveInitialType(typeParam);
    setValues((prev) => ({
      ...prev,
      productInterest: resolvedProduct || prev.productInterest,
      enquiryType: typeParam ? resolvedType : prev.enquiryType,
    }));
  }, [productParam, typeParam]);

  function handleChange(field: keyof EnquiryFormValues, nextValue: string) {
    setValues((prev) => ({...prev, [field]: nextValue}));
    if (errors[field]) {
      setErrors((prev) => {
        const updated = {...prev};
        delete updated[field];
        return updated;
      });
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const validationErrors = validateEnquiryForm(values);
    if (hasValidationErrors(validationErrors)) {
      setErrors(validationErrors);
      setReceipt(null);
      return;
    }

    setErrors({});
    setReceipt(buildDemoEnquiryReceipt(values));
    formPanelRef.current?.scrollIntoView({behavior: 'smooth', block: 'start'});
  }

  function handleResetForm() {
    setReceipt(null);
    setErrors({});
    setValues({
      fullName: '',
      companyName: '',
      businessEmail: '',
      country: '',
      phone: '',
      productInterest: resolveInitialProduct(productParam),
      enquiryType: resolveInitialType(typeParam),
      message: '',
    });
  }

  const inputBaseClass =
    'mt-1.5 block w-full border bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700/20';

  return (
    <div>
      {/* Page Header */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-16">
          <p className="text-xs font-medium text-blue-700">Contact & Quotation Enquiry</p>
          <h1 className="mt-2 max-w-3xl text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Request a Quotation or Technical Information
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
            Verified contact information for {COMPANY_INFO.legalName} ({COMPANY_INFO.brandName}) is
            listed alongside an interactive B2B enquiry demonstration form.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-14 lg:grid-cols-12 lg:px-8 lg:py-16">
          {/* Verified Company Contact Panel */}
          <aside className="space-y-6 lg:col-span-4">
            <div className="border border-slate-200 bg-slate-50 p-6">
              <h2 className="text-base font-semibold text-slate-900">
                Verified Headquarters Contact
              </h2>
              <p className="mt-1.5 text-xs text-slate-500">
                Sourced from the official SGPKOREA website (www.sgpkorea.com)
              </p>

              <dl className="mt-5 divide-y divide-slate-200 text-sm">
                <div className="py-3">
                  <dt className="text-xs text-slate-500">Company</dt>
                  <dd className="mt-1 font-medium text-slate-900">
                    {COMPANY_INFO.legalName} ({COMPANY_INFO.brandName})
                  </dd>
                </div>
                <div className="py-3">
                  <dt className="text-xs text-slate-500">Address</dt>
                  <dd className="mt-1 text-slate-800">{COMPANY_INFO.contact.address}</dd>
                </div>
                <div className="py-3">
                  <dt className="text-xs text-slate-500">Telephone</dt>
                  <dd className="mt-1 font-mono tabular-nums text-slate-900">
                    {COMPANY_INFO.contact.phone}
                  </dd>
                </div>
                <div className="py-3">
                  <dt className="text-xs text-slate-500">Fax</dt>
                  <dd className="mt-1 font-mono tabular-nums text-slate-900">
                    {COMPANY_INFO.contact.fax}
                  </dd>
                </div>
                <div className="py-3">
                  <dt className="text-xs text-slate-500">Official Email</dt>
                  <dd className="mt-1 font-mono text-slate-900">{COMPANY_INFO.contact.email}</dd>
                </div>
                <div className="py-3">
                  <dt className="text-xs text-slate-500">Official Website</dt>
                  <dd className="mt-1">
                    <a
                      href={COMPANY_INFO.officialWebsite}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-xs text-blue-700 hover:underline"
                    >
                      <span>https://www.sgpkorea.com/</span>
                      <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                  </dd>
                </div>
              </dl>
            </div>

            <div className="border border-slate-200 bg-white p-6">
              <div className="flex items-start gap-3">
                <Info className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" aria-hidden="true" />
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">
                    Important Demonstration Notice
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-600">
                    This enquiry form is an interactive front-end demonstration only. Submissions
                    are validated locally in your browser and are <strong>not transmitted</strong>{' '}
                    to SGPKOREA or stored on an external server. To contact SEGAE PRECISION CO.,
                    LTD. directly, please use the verified telephone, email, or official website
                    listed above.
                  </p>
                </div>
              </div>
            </div>
          </aside>

          {/* Interactive B2B Demonstration Enquiry Form */}
          <div ref={formPanelRef} className="scroll-mt-24 lg:col-span-8">
            <div className="border border-slate-200 bg-white p-6 sm:p-8">
              <div className="border-b border-slate-200 pb-5">
                <p className="text-xs font-medium text-blue-700">
                  Interactive Demonstration Form · Local Validation Only
                </p>
                <h2 className="mt-1.5 text-xl font-semibold text-slate-900">
                  B2B Machinery Enquiry Form
                </h2>
                <p className="mt-1.5 text-sm text-slate-600">
                  Fields marked with an asterisk (*) are required. Please do not submit sensitive
                  personal data while testing this demonstration.
                </p>
              </div>

              {receipt ? (
                <div
                  role="status"
                  aria-live="polite"
                  className="mt-6 border border-blue-200 bg-blue-50/60 p-6"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2
                      className="mt-0.5 h-5 w-5 shrink-0 text-blue-700"
                      aria-hidden="true"
                    />
                    <div className="w-full">
                      <h3 className="text-base font-semibold text-slate-900">
                        Demonstration Enquiry Validated (Not Sent to SGPKOREA)
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-slate-700">
                        Your enquiry passed client-side validation in this redesign concept. Because
                        no authorised SGPKOREA mail backend is connected, no message has been sent
                        or stored. For real commercial enquiries, contact{' '}
                        <span className="font-mono font-medium text-slate-900">
                          {COMPANY_INFO.contact.email}
                        </span>{' '}
                        or call{' '}
                        <span className="font-mono font-medium text-slate-900">
                          {COMPANY_INFO.contact.phone}
                        </span>
                        .
                      </p>

                      <dl className="mt-5 grid grid-cols-1 gap-3 border-t border-blue-200 pt-4 text-xs sm:grid-cols-2">
                        <div>
                          <dt className="text-slate-500">Demo Reference ID</dt>
                          <dd className="mt-0.5 font-mono font-semibold text-slate-900">
                            {receipt.referenceId}
                          </dd>
                        </div>
                        <div>
                          <dt className="text-slate-500">Enquiry Type</dt>
                          <dd className="mt-0.5 font-medium text-slate-900">
                            {receipt.summary.enquiryType}
                          </dd>
                        </div>
                        <div>
                          <dt className="text-slate-500">Contact / Company</dt>
                          <dd className="mt-0.5 font-medium text-slate-900">
                            {receipt.summary.fullName} · {receipt.summary.companyName}
                          </dd>
                        </div>
                        <div>
                          <dt className="text-slate-500">Country</dt>
                          <dd className="mt-0.5 font-medium text-slate-900">
                            {receipt.summary.country}
                          </dd>
                        </div>
                        <div className="sm:col-span-2">
                          <dt className="text-slate-500">Product of Interest</dt>
                          <dd className="mt-0.5 font-medium text-slate-900">
                            {receipt.summary.productInterest}
                          </dd>
                        </div>
                      </dl>

                      <div className="mt-6 flex flex-wrap items-center gap-3">
                        <button
                          type="button"
                          onClick={handleResetForm}
                          className="min-h-[42px] bg-[#0B1B34] px-5 py-2 text-xs font-semibold text-white transition-colors hover:bg-blue-700"
                        >
                          Submit Another Demo Enquiry
                        </button>
                        <Link
                          to="/products"
                          className="inline-flex min-h-[42px] items-center border border-slate-300 bg-white px-5 py-2 text-xs font-semibold text-slate-800 hover:border-slate-900"
                        >
                          Return to Products
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <form noValidate onSubmit={handleSubmit} className="mt-6 space-y-5">
                  {hasValidationErrors(errors) ? (
                    <div
                      role="alert"
                      className="border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800"
                    >
                      Please review the highlighted fields below before submitting the demonstration
                      enquiry.
                    </div>
                  ) : null}

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="enquiry-full-name"
                        className="block text-xs font-semibold text-slate-800"
                      >
                        Full Name *
                      </label>
                      <input
                        id="enquiry-full-name"
                        name="fullName"
                        type="text"
                        autoComplete="name"
                        value={values.fullName}
                        onChange={(e) => handleChange('fullName', e.target.value)}
                        aria-invalid={Boolean(errors.fullName)}
                        aria-describedby={errors.fullName ? 'error-full-name' : undefined}
                        placeholder="e.g. Minjun Park"
                        className={`${inputBaseClass} ${errors.fullName ? 'border-red-500' : 'border-slate-300'}`}
                      />
                      {errors.fullName ? (
                        <p id="error-full-name" className="mt-1.5 text-xs text-red-700">
                          {errors.fullName}
                        </p>
                      ) : null}
                    </div>

                    <div>
                      <label
                        htmlFor="enquiry-company-name"
                        className="block text-xs font-semibold text-slate-800"
                      >
                        Company Name *
                      </label>
                      <input
                        id="enquiry-company-name"
                        name="companyName"
                        type="text"
                        autoComplete="organization"
                        value={values.companyName}
                        onChange={(e) => handleChange('companyName', e.target.value)}
                        aria-invalid={Boolean(errors.companyName)}
                        aria-describedby={errors.companyName ? 'error-company-name' : undefined}
                        placeholder="e.g. Medical Consumables Manufacturing Ltd."
                        className={`${inputBaseClass} ${errors.companyName ? 'border-red-500' : 'border-slate-300'}`}
                      />
                      {errors.companyName ? (
                        <p id="error-company-name" className="mt-1.5 text-xs text-red-700">
                          {errors.companyName}
                        </p>
                      ) : null}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="enquiry-business-email"
                        className="block text-xs font-semibold text-slate-800"
                      >
                        Business Email *
                      </label>
                      <input
                        id="enquiry-business-email"
                        name="businessEmail"
                        type="email"
                        autoComplete="email"
                        value={values.businessEmail}
                        onChange={(e) => handleChange('businessEmail', e.target.value)}
                        aria-invalid={Boolean(errors.businessEmail)}
                        aria-describedby={errors.businessEmail ? 'error-business-email' : undefined}
                        placeholder="name@company.com"
                        className={`${inputBaseClass} ${errors.businessEmail ? 'border-red-500' : 'border-slate-300'}`}
                      />
                      {errors.businessEmail ? (
                        <p id="error-business-email" className="mt-1.5 text-xs text-red-700">
                          {errors.businessEmail}
                        </p>
                      ) : null}
                    </div>

                    <div>
                      <label
                        htmlFor="enquiry-country"
                        className="block text-xs font-semibold text-slate-800"
                      >
                        Country *
                      </label>
                      <input
                        id="enquiry-country"
                        name="country"
                        type="text"
                        autoComplete="country-name"
                        value={values.country}
                        onChange={(e) => handleChange('country', e.target.value)}
                        aria-invalid={Boolean(errors.country)}
                        aria-describedby={errors.country ? 'error-country' : undefined}
                        placeholder="e.g. South Korea, Germany, Singapore"
                        className={`${inputBaseClass} ${errors.country ? 'border-red-500' : 'border-slate-300'}`}
                      />
                      {errors.country ? (
                        <p id="error-country" className="mt-1.5 text-xs text-red-700">
                          {errors.country}
                        </p>
                      ) : null}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="enquiry-phone"
                        className="block text-xs font-semibold text-slate-800"
                      >
                        Phone Number (Optional)
                      </label>
                      <input
                        id="enquiry-phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        value={values.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        aria-invalid={Boolean(errors.phone)}
                        aria-describedby={errors.phone ? 'error-phone' : undefined}
                        placeholder="+82-2-0000-0000"
                        className={`${inputBaseClass} ${errors.phone ? 'border-red-500' : 'border-slate-300'}`}
                      />
                      {errors.phone ? (
                        <p id="error-phone" className="mt-1.5 text-xs text-red-700">
                          {errors.phone}
                        </p>
                      ) : null}
                    </div>

                    <div>
                      <label
                        htmlFor="enquiry-type"
                        className="block text-xs font-semibold text-slate-800"
                      >
                        Enquiry Type *
                      </label>
                      <select
                        id="enquiry-type"
                        name="enquiryType"
                        value={values.enquiryType}
                        onChange={(e) => handleChange('enquiryType', e.target.value)}
                        aria-invalid={Boolean(errors.enquiryType)}
                        aria-describedby={errors.enquiryType ? 'error-enquiry-type' : undefined}
                        className={`${inputBaseClass} ${errors.enquiryType ? 'border-red-500' : 'border-slate-300'}`}
                      >
                        {ENQUIRY_TYPES.map((typeOption) => (
                          <option key={typeOption} value={typeOption}>
                            {typeOption}
                          </option>
                        ))}
                      </select>
                      {errors.enquiryType ? (
                        <p id="error-enquiry-type" className="mt-1.5 text-xs text-red-700">
                          {errors.enquiryType}
                        </p>
                      ) : null}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="enquiry-product"
                      className="block text-xs font-semibold text-slate-800"
                    >
                      Product of Interest *
                    </label>
                    <select
                      id="enquiry-product"
                      name="productInterest"
                      value={values.productInterest}
                      onChange={(e) => handleChange('productInterest', e.target.value)}
                      aria-invalid={Boolean(errors.productInterest)}
                      aria-describedby={errors.productInterest ? 'error-product' : undefined}
                      className={`${inputBaseClass} ${errors.productInterest ? 'border-red-500' : 'border-slate-300'}`}
                    >
                      <option value="">Select a machinery category or model</option>
                      {PRODUCT_OPTIONS.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    {errors.productInterest ? (
                      <p id="error-product" className="mt-1.5 text-xs text-red-700">
                        {errors.productInterest}
                      </p>
                    ) : null}
                  </div>

                  <div>
                    <label
                      htmlFor="enquiry-message"
                      className="block text-xs font-semibold text-slate-800"
                    >
                      Message & Technical Requirements *
                    </label>
                    <textarea
                      id="enquiry-message"
                      name="message"
                      rows={5}
                      value={values.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={errors.message ? 'error-message' : undefined}
                      placeholder="Specify syringe sizes (e.g. 1 ml, 3 ml, 5 ml), tip style, needle gauge, packaging requirements, or documentation needed."
                      className={`${inputBaseClass} ${errors.message ? 'border-red-500' : 'border-slate-300'}`}
                    />
                    {errors.message ? (
                      <p id="error-message" className="mt-1.5 text-xs text-red-700">
                        {errors.message}
                      </p>
                    ) : null}
                  </div>

                  <div className="flex flex-col items-start justify-between gap-4 border-t border-slate-200 pt-5 sm:flex-row sm:items-center">
                    <p className="text-xs text-slate-500">
                      Demo submission only — no email is sent to SGPKOREA.
                    </p>
                    <button
                      type="submit"
                      className="min-h-[44px] bg-blue-700 px-7 py-3 text-sm font-semibold text-white whitespace-nowrap transition-colors duration-150 hover:bg-blue-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
                    >
                      Submit Enquiry
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
