import {Link} from 'react-router-dom';
import {ArrowRight} from 'lucide-react';
import {COMPANY_INFO, INDUSTRY_APPLICATIONS, MEDIA_ASSETS} from '../data/company';
import {getProductBySlug} from '../data/products';
import {SafeImage} from '../components/SafeImage';
import {EnquiryCtaBand} from '../components/EnquiryCtaBand';

export function ApplicationsPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-16">
          <p className="text-xs font-medium text-blue-700">Industry Applications</p>
          <h1 className="mt-2 max-w-3xl text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Medical Consumables & Packaging Manufacturing Applications
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
            Key production processes supported by verified {COMPANY_INFO.brandName} automated
            machinery. Buyers must verify local regulatory, cleanroom, and compliance requirements
            directly with {COMPANY_INFO.legalName}.
          </p>
        </div>
      </section>

      {/* Illustrative Environment Context */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-14 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-6">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
              Focused on Disposable Medical Consumables Production
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Medical consumables plants require consistent mechanical repeatability across
              moulding, scale printing, component assembly, and primary blister sealing. SGPKOREA
              manufactures specialised machinery addressing each of these stages.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Note on compliance: This concept website does not assert medical device regulatory
              certifications, GMP validation status, or jurisdiction-specific compliance for any
              machine. Contact SGPKOREA directly for official technical and compliance
              documentation.
            </p>
          </div>
          <div className="lg:col-span-6">
            <SafeImage
              src={MEDIA_ASSETS.applicationsFacility.src}
              alt={MEDIA_ASSETS.applicationsFacility.alt}
              caption={MEDIA_ASSETS.applicationsFacility.caption}
            />
          </div>
        </div>
      </section>

      {/* Application Sectors */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="space-y-8">
            {INDUSTRY_APPLICATIONS.map((sector, index) => (
              <article
                key={sector.id}
                className="grid grid-cols-1 gap-8 border border-slate-200 bg-white p-6 sm:p-8 lg:grid-cols-12"
              >
                <div className="lg:col-span-7">
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <span className="font-mono text-blue-700">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{sector.scope}</span>
                  </div>
                  <h2 className="mt-2 text-xl font-semibold text-slate-900">{sector.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                    {sector.description}
                  </p>

                  <ul className="mt-5 space-y-2 border-t border-slate-100 pt-4 text-sm text-slate-700">
                    {sector.considerations.map((point) => (
                      <li key={point} className="flex gap-2.5">
                        <span aria-hidden="true" className="font-mono text-xs text-slate-400">
                          —
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col justify-between border-t border-slate-200 pt-6 lg:col-span-5 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                  <div>
                    <h3 className="text-xs font-semibold text-slate-500">
                      Relevant Verified Machinery
                    </h3>
                    <div className="mt-3 space-y-2">
                      {sector.relatedMachineSlugs.map((slug) => {
                        const machine = getProductBySlug(slug);
                        if (!machine) {
                          return null;
                        }
                        return (
                          <Link
                            key={machine.slug}
                            to={`/products/${machine.slug}`}
                            className="flex items-center justify-between border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-900 transition-colors hover:border-blue-700 hover:bg-white hover:text-blue-700"
                          >
                            <span>{machine.name}</span>
                            <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                          </Link>
                        );
                      })}
                    </div>
                  </div>

                  <div className="mt-6">
                    <Link
                      to={`/contact?type=${encodeURIComponent('Turnkey Production Line Enquiry')}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-700 hover:text-blue-900"
                    >
                      <span>Enquire About This Application</span>
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Secondary Verified Industrial Area */}
          <div className="mt-8 border border-slate-200 bg-white p-6 sm:p-8">
            <p className="text-xs font-medium text-slate-500">Secondary Industrial Automation</p>
            <h2 className="mt-2 text-lg font-semibold text-slate-900">
              Mushroom Cultivation Automation Machinery
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-600">
              In addition to medical consumables and pharmaceutical automation, the official
              SGPKOREA website lists automation machinery for mushroom cultivation. Contact{' '}
              {COMPANY_INFO.legalName} directly for information on agricultural automation systems.
            </p>
          </div>
        </div>
      </section>

      <EnquiryCtaBand />
    </div>
  );
}
