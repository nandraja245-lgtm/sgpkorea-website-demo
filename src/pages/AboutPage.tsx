import {Link} from 'react-router-dom';
import {ArrowRight, ExternalLink} from 'lucide-react';
import {COMPANY_INFO, MEDIA_ASSETS} from '../data/company';
import {SafeImage} from '../components/SafeImage';
import {EnquiryCtaBand} from '../components/EnquiryCtaBand';

export function AboutPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-16">
          <p className="text-xs font-medium text-blue-700">About Us</p>
          <h1 className="mt-2 max-w-3xl text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {COMPANY_INFO.legalName} ({COMPANY_INFO.brandName})
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
            South Korean industrial machinery manufacturer specialising in automated production
            equipment for medical consumables and pharmaceutical packaging.
          </p>
        </div>
      </section>

      {/* Company Overview & Verified Fact Table */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-16 lg:grid-cols-12 lg:px-8">
          <div className="space-y-6 lg:col-span-7">
            <div>
              <h2 className="text-xl font-semibold text-slate-900">Company Overview</h2>
              <p className="mt-3 text-base leading-relaxed text-slate-600">
                {COMPANY_INFO.legalName}, operating under the {COMPANY_INFO.brandName} brand in
                Seoul, South Korea, manufactures specialised automated machinery for medical
                consumables production lines.
              </p>
              <p className="mt-3 text-base leading-relaxed text-slate-600">
                This redesign concept presents publicly verifiable information sourced from{' '}
                <a
                  href={COMPANY_INFO.officialWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-blue-700 underline underline-offset-2 hover:text-blue-900"
                >
                  www.sgpkorea.com
                </a>{' '}
                and established industrial product directories. Details not confirmed in public
                sources—such as employee headcount, factory floor area, export destinations, and
                customer lists—are intentionally omitted rather than assumed.
              </p>
            </div>

            <div className="border-t border-slate-200 pt-6">
              <h2 className="text-xl font-semibold text-slate-900">
                Business Focus & Machinery Specialisation
              </h2>
              <p className="mt-3 text-base leading-relaxed text-slate-600">
                SGPKOREA centres its machinery manufacturing on automated equipment used across
                disposable medical device production plants:
              </p>
              <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-slate-700">
                <li className="flex gap-3">
                  <span className="font-mono text-xs font-medium text-blue-700">01.</span>
                  <span>
                    Automation machinery for disposable syringes, hypodermic needles, insulin
                    syringes, auto-disable (AD) / safety syringes, flush syringes, and uni-body
                    syringes
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="font-mono text-xs font-medium text-blue-700">02.</span>
                  <span>
                    Precision syringe barrel screen printing machinery for scale and graduation
                    marking
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="font-mono text-xs font-medium text-blue-700">03.</span>
                  <span>
                    Blister packing machinery and inner box packing systems for primary and
                    secondary packaging
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="font-mono text-xs font-medium text-blue-700">04.</span>
                  <span>
                    Injection moulds for medical consumable components, pre-filled syringe and
                    pharmaceutical automation, and secondary mushroom cultivation automation
                    machinery
                  </span>
                </li>
              </ul>
            </div>

            <div className="border-t border-slate-200 pt-6">
              <h2 className="text-xl font-semibold text-slate-900">Manufacturing Approach</h2>
              <p className="mt-3 text-base leading-relaxed text-slate-600">
                Across publicly listed machinery series such as the SG1700 syringe assembly system,
                SG2500 / SG2500X barrel printer, and SG4800A blister packing machine, SGPKOREA
                emphasises stainless-steel machine structures, PLC or computer-controlled operation,
                and automated component inspection and handling suitable for continuous industrial
                operation.
              </p>
              <p className="mt-3 text-sm text-slate-600">
                For official corporate history, facility visit requests, quality system certificates,
                or project references, please contact SEGAE PRECISION CO., LTD. directly.
              </p>
            </div>
          </div>

          <aside className="space-y-6 lg:col-span-5">
            <div className="border border-slate-200 bg-slate-50 p-6">
              <h2 className="text-sm font-semibold text-slate-900">Verified Company Profile</h2>
              <dl className="mt-4 divide-y divide-slate-200 text-sm">
                <div className="py-3">
                  <dt className="text-xs text-slate-500">Company Name</dt>
                  <dd className="mt-1 font-medium text-slate-900">{COMPANY_INFO.legalName}</dd>
                </div>
                <div className="py-3">
                  <dt className="text-xs text-slate-500">Brand</dt>
                  <dd className="mt-1 font-medium text-slate-900">{COMPANY_INFO.brandName}</dd>
                </div>
                <div className="py-3">
                  <dt className="text-xs text-slate-500">Industry</dt>
                  <dd className="mt-1 text-slate-800">{COMPANY_INFO.industry}</dd>
                </div>
                <div className="py-3">
                  <dt className="text-xs text-slate-500">Location</dt>
                  <dd className="mt-1 text-slate-800">{COMPANY_INFO.contact.address}</dd>
                </div>
                <div className="py-3">
                  <dt className="text-xs text-slate-500">Telephone / Fax</dt>
                  <dd className="mt-1 font-mono text-xs tabular-nums text-slate-800">
                    Tel: {COMPANY_INFO.contact.phone}
                    <br />
                    Fax: {COMPANY_INFO.contact.fax}
                  </dd>
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
                      <span>www.sgpkorea.com</span>
                      <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                  </dd>
                </div>
              </dl>
            </div>

            <SafeImage
              src={MEDIA_ASSETS.capabilitiesBay.src}
              alt={MEDIA_ASSETS.capabilitiesBay.alt}
              caption={MEDIA_ASSETS.capabilitiesBay.caption}
            />

            <div className="border border-slate-200 bg-white p-6">
              <h3 className="text-sm font-semibold text-slate-900">Explore Machinery Range</h3>
              <p className="mt-2 text-sm text-slate-600">
                Review individual product categories and technical specification tables.
              </p>
              <Link
                to="/products"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700 hover:text-blue-900"
              >
                <span>Go to Product Catalogue</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <EnquiryCtaBand
        heading="Request Official Company & Equipment Information"
        description="Reach out to SEGAE PRECISION CO., LTD. for official company documentation, plant capabilities, or machine quotations."
      />
    </div>
  );
}
