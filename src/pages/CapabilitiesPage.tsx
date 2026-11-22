import {Link} from 'react-router-dom';
import {ArrowRight} from 'lucide-react';
import {COMPANY_INFO, MEDIA_ASSETS, VERIFIED_CAPABILITIES} from '../data/company';
import {SafeImage} from '../components/SafeImage';
import {EnquiryCtaBand} from '../components/EnquiryCtaBand';

const PRODUCTION_STAGES = [
  {
    step: 'Stage 01',
    title: 'Component Tooling',
    detail: 'Precision injection moulds for syringe barrels, plungers, gaskets, and needle hubs.',
    link: '/products/injection-moulds',
  },
  {
    step: 'Stage 02',
    title: 'Barrel Printing',
    detail: 'Cylindrical screen printing for volumetric graduation scales and markings (SG2500 / SG2500X).',
    link: '/products/barrel-printing-machine',
  },
  {
    step: 'Stage 03',
    title: 'Automated Assembly',
    detail: 'High-precision assembly and mechanical inspection for syringes and hypodermic needles (SG1700).',
    link: '/products/syringe-assembly-machine',
  },
  {
    step: 'Stage 04',
    title: 'Blister & Box Packing',
    detail: 'Thermoforming blister sealing with LOT/MFG/EXP coding (SG4800A) and inner box packing.',
    link: '/products/blister-packing-machine',
  },
];

export function CapabilitiesPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-16">
          <p className="text-xs font-medium text-blue-700">Manufacturing Capabilities</p>
          <h1 className="mt-2 max-w-3xl text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Industrial Automation Capabilities at {COMPANY_INFO.brandName}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
            Overview of verified machinery manufacturing and automation capabilities offered by{' '}
            {COMPANY_INFO.legalName} based on official website listings and public equipment
            documentation.
          </p>
        </div>
      </section>

      {/* Process Chain Strip */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-xl font-semibold text-slate-900">
              End-to-End Syringe Production Line Continuity
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              SGPKOREA equipment spans the primary mechanical operations involved in disposable
              medical consumables manufacturing.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {PRODUCTION_STAGES.map((stage) => (
              <Link
                key={stage.step}
                to={stage.link}
                className="group flex flex-col justify-between border border-slate-200 bg-slate-50/70 p-5 transition-colors hover:border-blue-700 hover:bg-white"
              >
                <div>
                  <span className="font-mono text-xs font-medium text-blue-700">{stage.step}</span>
                  <h3 className="mt-2 text-base font-semibold text-slate-900 group-hover:text-blue-700">
                    {stage.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{stage.detail}</p>
                </div>
                <div className="mt-5 inline-flex items-center gap-1 text-xs font-semibold text-blue-700">
                  <span>View Related Equipment</span>
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Verified Capability Areas */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-16 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-24 space-y-6">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                  Verified Engineering & Equipment Scope
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  Specific factory floor capacities, custom engineering lead times, installation
                  support terms, and aftermarket service coverage are not publicly published and
                  should be confirmed directly with SEGAE PRECISION CO., LTD.
                </p>
              </div>
              <SafeImage
                src={MEDIA_ASSETS.capabilitiesBay.src}
                alt={MEDIA_ASSETS.capabilitiesBay.alt}
                caption={MEDIA_ASSETS.capabilitiesBay.caption}
              />
            </div>
          </div>

          <div className="space-y-6 lg:col-span-7">
            {VERIFIED_CAPABILITIES.map((capability) => (
              <article
                key={capability.index}
                className="border border-slate-200 bg-white p-6 sm:p-8"
              >
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-xs font-medium text-blue-700">
                    {capability.index}.
                  </span>
                  <h3 className="text-lg font-semibold text-slate-900">{capability.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{capability.summary}</p>
                <ul className="mt-5 space-y-2.5 border-t border-slate-100 pt-4 text-sm text-slate-700">
                  {capability.details.map((detail) => (
                    <li key={detail} className="flex gap-2.5">
                      <span aria-hidden="true" className="font-mono text-xs text-slate-400">
                        —
                      </span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <EnquiryCtaBand
        heading="Confirm Custom Engineering & Line Integration Scope"
        description="Contact SGPKOREA directly to review machine specifications, plant layout compatibility, and custom configuration options."
      />
    </div>
  );
}
