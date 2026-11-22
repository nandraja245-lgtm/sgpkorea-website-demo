import {Link} from 'react-router-dom';
import {ArrowRight} from 'lucide-react';
import {
  COMPANY_INFO,
  INDUSTRY_APPLICATIONS,
  MEDIA_ASSETS,
  VERIFIED_CAPABILITIES,
} from '../data/company';
import {
  PRODUCT_CATEGORIES,
  getFeaturedProducts,
} from '../data/products';
import {useLocale} from '../i18n/LocaleContext';
import {ProductCard} from '../components/ProductCard';
import {EnquiryCtaBand} from '../components/EnquiryCtaBand';
import {SafeImage} from '../components/SafeImage';

const CATEGORY_ROUTE_MAP: Record<string, string> = {
  'syringe-assembly': '/products/syringe-assembly-machine',
  'needle-assembly': '/products/needle-assembly-machine',
  'barrel-printing': '/products/barrel-printing-machine',
  'blister-packing': '/products/blister-packing-machine',
  'insulin-specialty': '/products/insulin-syringe-assembly',
  'injection-moulds': '/products/injection-moulds',
};

export function HomePage() {
  const {t} = useLocale();
  const featuredProducts = getFeaturedProducts();
  const displayCategories = PRODUCT_CATEGORIES.filter((cat) => cat.id !== 'all');

  return (
    <div>
      {/* HERO SECTION */}
      <section className="border-b border-slate-800 bg-[#0B1B34] text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-stretch gap-10 px-6 py-14 sm:py-16 lg:grid-cols-12 lg:gap-12 lg:px-8 lg:py-20">
          <div className="flex flex-col justify-center lg:col-span-6">
            <p className="text-xs font-medium tracking-wide text-blue-300">
              {COMPANY_INFO.legalName} · {COMPANY_INFO.country}
            </p>
            <h1 className="mt-4 max-w-2xl text-[clamp(2.125rem,3.6vw,3.35rem)] font-bold leading-[1.1] tracking-tight text-white">
              {t.hero.headline}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-300">
              {t.hero.supportingText}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/products"
                className="inline-flex min-h-[44px] items-center justify-center gap-2 bg-blue-600 px-6 py-3 text-sm font-semibold text-white whitespace-nowrap transition-colors duration-150 hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <span>{t.hero.primaryCta}</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex min-h-[44px] items-center justify-center border border-slate-500 px-6 py-3 text-sm font-semibold text-white whitespace-nowrap transition-colors duration-150 hover:border-white hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                {t.hero.secondaryCta}
              </Link>
            </div>
          </div>

          <div className="relative min-h-[280px] overflow-hidden border border-slate-700/80 bg-slate-900 lg:col-span-6 lg:min-h-[420px]">
            <img
              src={MEDIA_ASSETS.heroCleanroom.src}
              alt={MEDIA_ASSETS.heroCleanroom.alt}
              referrerPolicy="no-referrer"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071224]/85 via-[#071224]/25 to-transparent" />
            <p className="absolute inset-x-0 bottom-0 px-5 py-3 text-[11px] text-slate-300">
              {MEDIA_ASSETS.heroCleanroom.caption}
            </p>
          </div>
        </div>
      </section>

      {/* 1. COMPANY INTRODUCTION */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-16 lg:grid-cols-12 lg:px-8 lg:py-20">
          <div className="lg:col-span-5">
            <p className="text-xs font-medium text-blue-700">Company Introduction</p>
            <h2 className="mt-2.5 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              Automated Production Equipment from {COMPANY_INFO.legalName}
            </h2>
          </div>
          <div className="space-y-4 text-base leading-relaxed text-slate-600 lg:col-span-7">
            <p>
              Operating under the <strong className="font-semibold text-slate-900">SGPKOREA</strong>{' '}
              brand from Guro-gu, Seoul, South Korea,{' '}
              <strong className="font-semibold text-slate-900">{COMPANY_INFO.legalName}</strong>{' '}
              designs and manufactures industrial automation machinery focused on medical
              consumables production.
            </p>
            <p>
              Its core equipment portfolio covers automated syringe assembly machines, hypodermic
              needle assembly machinery, syringe barrel screen printing systems, blister packing
              lines, precision injection moulds, and secondary packaging systems for medical and
              pharmaceutical products.
            </p>
            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700 transition-colors hover:text-blue-900"
              >
                <span>Read Company Overview</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FEATURED MACHINERY */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <p className="text-xs font-medium text-blue-700">Featured Machinery</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                Core Equipment for Syringe & Needle Manufacturing Lines
              </h2>
            </div>
            <Link
              to="/products"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-900 whitespace-nowrap transition-colors hover:text-blue-700"
            >
              <span>View Full Catalogue</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {featuredProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. PRODUCT CATEGORIES */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <div className="max-w-2xl">
            <p className="text-xs font-medium text-blue-700">Product Categories</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              Verified SGPKOREA Machinery Scope
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
              Select a category below to review machine overviews, publicly available technical
              specifications, and direct enquiry options.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-px border border-slate-200 bg-slate-200 md:grid-cols-2 lg:grid-cols-3">
            {displayCategories.map((category, index) => (
              <Link
                key={category.id}
                to={CATEGORY_ROUTE_MAP[category.id] ?? '/products'}
                className="group flex flex-col justify-between bg-white p-6 transition-colors duration-150 hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-blue-700"
              >
                <div>
                  <span className="font-mono text-xs text-slate-500">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-2 text-base font-semibold text-slate-900 transition-colors group-hover:text-blue-700">
                    {category.label}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {category.description}
                  </p>
                </div>
                <div className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold text-blue-700">
                  <span>Inspect Category</span>
                  <ArrowRight
                    className="h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. MANUFACTURING CAPABILITIES */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-16 lg:grid-cols-12 lg:px-8 lg:py-20">
          <div className="lg:col-span-5">
            <p className="text-xs font-medium text-blue-700">Manufacturing Capabilities</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              Integrated Automation Across Medical Consumables Processes
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
              SGPKOREA builds equipment spanning upstream component tooling, precision barrel
              printing, automated assembly, and downstream blister and inner-box packaging.
            </p>
            <div className="mt-6">
              <SafeImage
                src={MEDIA_ASSETS.capabilitiesBay.src}
                alt={MEDIA_ASSETS.capabilitiesBay.alt}
                caption={MEDIA_ASSETS.capabilitiesBay.caption}
              />
            </div>
            <div className="mt-6">
              <Link
                to="/capabilities"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700 hover:text-blue-900"
              >
                <span>Explore Capabilities</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="divide-y divide-slate-200 border-t border-slate-200 lg:col-span-7">
            {VERIFIED_CAPABILITIES.slice(0, 4).map((capability) => (
              <div key={capability.index} className="py-6">
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-xs font-medium text-blue-700">
                    {capability.index}.
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-slate-900">{capability.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {capability.summary}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. INDUSTRY APPLICATIONS */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <p className="text-xs font-medium text-blue-700">Industry Applications</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                Focused on Medical Consumables & Pharmaceutical Automation
              </h2>
            </div>
            <Link
              to="/applications"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-900 whitespace-nowrap hover:text-blue-700"
            >
              <span>View All Applications</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {INDUSTRY_APPLICATIONS.map((sector) => (
              <div
                key={sector.id}
                className="flex flex-col justify-between border border-slate-200 bg-slate-50/70 p-6"
              >
                <div>
                  <p className="text-xs font-medium text-slate-500">{sector.scope}</p>
                  <h3 className="mt-2 text-lg font-semibold text-slate-900">{sector.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                    {sector.description}
                  </p>
                </div>
                <div className="mt-5 border-t border-slate-200 pt-4">
                  <Link
                    to="/applications"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-700 hover:text-blue-900"
                  >
                    <span>Review Application Scope</span>
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. WHY EXPLORE SGPKOREA */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <div className="max-w-2xl">
            <p className="text-xs font-medium text-blue-700">Why Explore SGPKOREA</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              Practical Considerations for International Machinery Buyers
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="border-t border-slate-300 pt-5">
              <h3 className="text-base font-semibold text-slate-900">
                Dedicated Medical Consumables Focus
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                Rather than offering unrelated general-purpose equipment, SGPKOREA concentrates its
                core line around disposable syringes, hypodermic needles, barrel printing, and
                blister packing.
              </p>
            </div>
            <div className="border-t border-slate-300 pt-5">
              <h3 className="text-base font-semibold text-slate-900">
                Process-to-Process Equipment Continuity
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                Buyers evaluating injection moulds, barrel printing, syringe assembly, blister
                packing, and inner box packing can discuss integrated requirements with a single
                Korean manufacturer.
              </p>
            </div>
            <div className="border-t border-slate-300 pt-5">
              <h3 className="text-base font-semibold text-slate-900">
                Direct Technical Specification Review
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                Because syringe geometries, needle gauges, and packaging substrates vary by market,
                SEGAE PRECISION CO., LTD. confirms machine configurations directly against customer
                drawings and production plans.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. PRODUCT ENQUIRY CALL TO ACTION */}
      <EnquiryCtaBand />
    </div>
  );
}
