import {Link} from 'react-router-dom';
import {ArrowRight} from 'lucide-react';
import {COMPANY_INFO} from '../data/company';

interface EnquiryCtaBandProps {
  heading?: string;
  description?: string;
  productSlug?: string;
}

export function EnquiryCtaBand({
  heading = 'Discuss Your Medical Consumables Production Requirements',
  description = 'Contact SEGAE PRECISION CO., LTD. (SGPKOREA) directly for verified technical specifications, machine dimensions, official photographs, and project quotations.',
  productSlug,
}: EnquiryCtaBandProps) {
  const contactHref = productSlug
    ? `/contact?product=${encodeURIComponent(productSlug)}`
    : '/contact';

  return (
    <section className="border-t border-slate-800 bg-[#0B1B34] text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 py-16 lg:flex-row lg:items-center lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-medium tracking-wide text-blue-300">
            {COMPANY_INFO.brandName} · {COMPANY_INFO.legalName}
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            {heading}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">{description}</p>
        </div>

        <div className="flex flex-wrap items-center gap-4 shrink-0">
          <Link
            to={contactHref}
            className="inline-flex min-h-[44px] items-center justify-center gap-2 bg-blue-600 px-6 py-3 text-sm font-semibold text-white whitespace-nowrap transition-colors duration-150 hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <span>Request a Quotation</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Link
            to="/products"
            className="inline-flex min-h-[44px] items-center justify-center border border-slate-500 px-6 py-3 text-sm font-semibold text-white whitespace-nowrap transition-colors duration-150 hover:border-white hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Browse Machinery
          </Link>
        </div>
      </div>
    </section>
  );
}
