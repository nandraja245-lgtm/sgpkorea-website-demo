import {Link} from 'react-router-dom';
import {ArrowRight, ExternalLink, FileText} from 'lucide-react';
import {COMPANY_INFO} from '../data/company';
import {PRODUCTS} from '../data/products';
import {EnquiryCtaBand} from '../components/EnquiryCtaBand';

const DOCUMENT_TYPES = [
  {
    title: 'Product Catalogues',
    scope: 'Complete overview of current SGPKOREA syringe, needle, printing, and packaging lines.',
    status: COMPANY_INFO.docFallback,
  },
  {
    title: 'Machine Brochures',
    scope: 'Model-specific brochures including SG1700, SG2500 / SG2500X, SG4800A, and needle assembly systems.',
    status: COMPANY_INFO.docFallback,
  },
  {
    title: 'Technical Specification Sheets',
    scope: 'Verified machine dimensions, electrical utilities, air consumption, layout drawings, and optional stations.',
    status: COMPANY_INFO.docFallback,
  },
  {
    title: 'Company Profile',
    scope: 'Official corporate profile and documentation from SEGAE PRECISION CO., LTD.',
    status: COMPANY_INFO.docFallback,
  },
];

export function DownloadsPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-16">
          <p className="text-xs font-medium text-blue-700">Documentation Centre</p>
          <h1 className="mt-2 max-w-3xl text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Product Documentation & Technical Sheets
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
            No public downloadable PDF catalogues or machine brochures were confirmed as direct
            public downloads on www.sgpkorea.com at the time this concept was prepared. Rather than
            providing placeholder files, this page directs buyers to request official documents
            directly from {COMPANY_INFO.brandName}.
          </p>
        </div>
      </section>

      {/* Honest Documentation Request Table */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {DOCUMENT_TYPES.map((doc) => (
              <article
                key={doc.title}
                className="flex flex-col justify-between border border-slate-200 bg-slate-50/70 p-6"
              >
                <div>
                  <div className="flex items-start gap-3">
                    <FileText className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" aria-hidden="true" />
                    <div>
                      <h2 className="text-lg font-semibold text-slate-900">{doc.title}</h2>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">{doc.scope}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 border-t border-slate-200 pt-4">
                  <p className="text-xs font-medium text-slate-700">{doc.status}</p>
                  <div className="mt-3">
                    <Link
                      to={`/contact?type=${encodeURIComponent('Product Documentation Request')}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-700 hover:text-blue-900"
                    >
                      <span>Open Documentation Request Form</span>
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Equipment-Specific Specification Pages */}
          <div className="mt-12 border border-slate-200 bg-white p-6 sm:p-8">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <h2 className="text-lg font-semibold text-slate-900">
                  Online Machine Specification Tables
                </h2>
                <p className="mt-1 text-sm text-slate-600">
                  While official PDF files require direct request, publicly listed specifications
                  are organised on each product detail page.
                </p>
              </div>
              <a
                href={COMPANY_INFO.officialWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[40px] items-center gap-1.5 border border-slate-300 px-4 py-2 text-xs font-semibold text-slate-800 whitespace-nowrap hover:border-slate-900"
              >
                <span>Visit Official www.sgpkorea.com</span>
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {PRODUCTS.map((product) => (
                <Link
                  key={product.slug}
                  to={`/products/${product.slug}`}
                  className="flex items-center justify-between border border-slate-200 px-4 py-3 text-sm transition-colors hover:border-blue-700 hover:bg-slate-50"
                >
                  <div>
                    <div className="font-medium text-slate-900">{product.name}</div>
                    <div className="mt-0.5 font-mono text-[11px] text-slate-500">
                      {product.modelReference}
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 shrink-0 text-slate-400" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <EnquiryCtaBand
        heading="Need Official Technical Datasheets or Layout Drawings?"
        description="Contact SEGAE PRECISION CO., LTD. directly using the verified Seoul office details or submit a demonstration request."
      />
    </div>
  );
}
