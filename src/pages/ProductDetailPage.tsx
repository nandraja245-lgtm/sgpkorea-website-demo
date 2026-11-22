import {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import {ArrowLeft, ArrowRight, ChevronRight, FileText} from 'lucide-react';
import {COMPANY_INFO} from '../data/company';
import {PRODUCTS, getProductBySlug} from '../data/products';
import {MachineIllustrativeVisual} from '../components/MachineIllustrativeVisual';
import {ProductCard} from '../components/ProductCard';
import {EnquiryCtaBand} from '../components/EnquiryCtaBand';

export function ProductDetailPage() {
  const {slug} = useParams<{slug: string}>();
  const product = getProductBySlug(slug);
  const [selectedFrameIndex, setSelectedFrameIndex] = useState(0);

  useEffect(() => {
    setSelectedFrameIndex(0);
    if (product) {
      document.title = `${product.name} (${product.modelReference}) | SGPKOREA`;
      const descEl = document.querySelector('meta[name="description"]');
      if (descEl) {
        descEl.setAttribute('content', `${product.name} — ${product.shortDescription}`);
      }
    }
  }, [product]);

  if (!product) {
    return (
      <section className="mx-auto max-w-4xl px-6 py-20 lg:px-8">
        <p className="text-xs font-medium text-blue-700">Product Not Found</p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900">
          Requested machinery page is unavailable
        </h1>
        <p className="mt-3 text-base text-slate-600">
          Only publicly verified SGPKOREA machinery categories are listed in this catalogue.
        </p>
        <div className="mt-6">
          <Link
            to="/products"
            className="inline-flex min-h-[44px] items-center gap-2 bg-[#0B1B34] px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            <span>Return to Product Catalogue</span>
          </Link>
        </div>
      </section>
    );
  }

  const activeFrame = product.gallery[selectedFrameIndex] ?? product.gallery[0];
  const relatedProducts = PRODUCTS.filter((item) => item.slug !== product.slug).slice(0, 3);

  return (
    <div>
      {/* Breadcrumb Bar */}
      <div className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-3.5 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-xs text-slate-600">
            <Link to="/" className="hover:text-slate-950">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-slate-400" aria-hidden="true" />
            <Link to="/products" className="hover:text-slate-950">
              Products
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-slate-400" aria-hidden="true" />
            <span aria-current="page" className="font-medium text-slate-900">
              {product.name}
            </span>
          </nav>
        </div>
      </div>

      {/* A. PRODUCT INTRODUCTION */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-12 lg:grid-cols-12 lg:px-8 lg:py-16">
          <div className="lg:col-span-7">
            <MachineIllustrativeVisual
              kind={product.schematicKind}
              mode={activeFrame.mode}
              modelLabel={product.modelReference}
            />
          </div>

          <div className="flex flex-col justify-between lg:col-span-5">
            <div>
              <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                <span>{product.categoryName}</span>
                <span aria-hidden="true">·</span>
                <span className="font-mono text-blue-700">{product.modelReference}</span>
              </div>

              <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
                {product.name}
              </h1>

              <p className="mt-4 text-base leading-relaxed text-slate-600">
                {product.shortDescription}
              </p>

              <div className="mt-6 border-t border-slate-200 pt-5">
                <h2 className="text-xs font-semibold text-slate-500">Primary Purpose</h2>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-800">
                  {product.primaryPurpose}
                </p>
              </div>

              <div className="mt-5 border-t border-slate-200 pt-5">
                <div className="flex items-baseline justify-between gap-4 text-sm">
                  <span className="text-slate-500">{product.highlightMetricLabel}</span>
                  <span className="font-mono font-semibold tabular-nums text-slate-900">
                    {product.highlightMetricValue}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8 space-y-3 border-t border-slate-200 pt-6">
              <Link
                to={`/contact?product=${encodeURIComponent(product.slug)}`}
                className="flex min-h-[44px] w-full items-center justify-center gap-2 bg-blue-700 px-6 py-3 text-sm font-semibold text-white transition-colors duration-150 hover:bg-blue-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
              >
                <span>Request a Quotation</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                to="/products"
                className="flex min-h-[44px] w-full items-center justify-center gap-2 border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition-colors duration-150 hover:border-slate-900 hover:text-slate-950"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                <span>Back to All Products</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* B. PRODUCT OVERVIEW & F. PRODUCT GALLERY */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-14 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-6">
            <h2 className="text-xl font-semibold text-slate-900">Product Overview</h2>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-slate-600">
              {product.overviewParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <p className="mt-5 border-t border-slate-200 pt-4 text-xs leading-relaxed text-slate-500">
              {product.sourceNote}
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="flex items-baseline justify-between gap-4">
              <h2 className="text-xl font-semibold text-slate-900">Illustrative Visual Gallery</h2>
              <span className="font-mono text-xs text-slate-500">
                {selectedFrameIndex + 1} / {product.gallery.length}
              </span>
            </div>
            <p className="mt-2 text-sm text-slate-600">{activeFrame.caption}</p>

            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {product.gallery.map((frame, index) => {
                const isSelected = index === selectedFrameIndex;
                return (
                  <button
                    key={frame.id}
                    type="button"
                    aria-pressed={isSelected}
                    onClick={() => setSelectedFrameIndex(index)}
                    className={`border p-3.5 text-left transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-blue-700 ${
                      isSelected
                        ? 'border-blue-700 bg-white text-slate-950'
                        : 'border-slate-200 bg-white/70 text-slate-700 hover:border-slate-400'
                    }`}
                  >
                    <span className="font-mono text-[11px] text-blue-700">
                      VIEW {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="mt-1 text-xs font-semibold leading-snug">{frame.title}</div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* C. TECHNICAL SPECIFICATIONS TABLE */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
              Technical Specifications
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Only publicly listed parameters are shown below. Unavailable figures are clearly
              identified so buyers can verify exact specifications directly with{' '}
              {COMPANY_INFO.brandName}.
            </p>
          </div>

          <div className="mt-8 overflow-x-auto border border-slate-200">
            <table className="w-full min-w-[560px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-xs font-semibold text-slate-700">
                  <th scope="col" className="w-1/3 px-5 py-3.5">
                    Specification Field
                  </th>
                  <th scope="col" className="px-5 py-3.5">
                    Listed Specification
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {product.specifications.map((row) => (
                  <tr key={row.label} className="bg-white">
                    <th scope="row" className="px-5 py-4 font-medium text-slate-900 align-top">
                      {row.label}
                    </th>
                    <td
                      className={`px-5 py-4 align-top tabular-nums ${
                        row.verified ? 'font-mono text-[13px] text-slate-800' : 'text-slate-500'
                      }`}
                    >
                      {row.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* D. KEY FEATURES & E. APPLICATIONS */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-14 lg:grid-cols-2 lg:px-8">
          <div className="border border-slate-200 bg-white p-6 sm:p-8">
            <h2 className="text-xl font-semibold text-slate-900">Key Features</h2>
            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-slate-700">
              {product.keyFeatures.map((feature, index) => (
                <li key={feature} className="flex gap-3">
                  <span className="font-mono text-xs font-medium text-blue-700">
                    {String(index + 1).padStart(2, '0')}.
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col justify-between border border-slate-200 bg-white p-6 sm:p-8">
            <div>
              <h2 className="text-xl font-semibold text-slate-900">Manufacturing Applications</h2>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-slate-700">
                {product.applications.map((app) => (
                  <li key={app} className="flex gap-3">
                    <span aria-hidden="true" className="font-mono text-xs text-slate-400">
                      —
                    </span>
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* G. DOCUMENTATION (STRICT HONESTY: NO FAKE PDFS) */}
            <div className="mt-8 border-t border-slate-200 pt-6">
              <div className="flex items-start gap-3">
                <FileText className="mt-0.5 h-5 w-5 shrink-0 text-slate-500" aria-hidden="true" />
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">
                    Technical Documentation & Brochures
                  </h3>
                  <p className="mt-1 text-sm text-slate-600">{COMPANY_INFO.docFallback}</p>
                  <div className="mt-3 flex flex-wrap gap-4 text-xs font-semibold">
                    <Link
                      to={`/contact?product=${encodeURIComponent(product.slug)}&type=${encodeURIComponent('Product Documentation Request')}`}
                      className="text-blue-700 hover:underline"
                    >
                      Request Documentation via Enquiry Form
                    </Link>
                    <Link to="/downloads" className="text-slate-700 hover:underline">
                      Visit Downloads Page
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* H. ENQUIRY SECTION */}
      <EnquiryCtaBand
        heading={`Request a Quotation for ${product.name}`}
        description={`Contact SEGAE PRECISION CO., LTD. (SGPKOREA) for verified specifications, custom tooling compatibility, and pricing for ${product.name} (${product.modelReference}).`}
        productSlug={product.slug}
      />

      {/* RELATED VERIFIED EQUIPMENT */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="flex items-baseline justify-between gap-4">
            <h2 className="text-xl font-semibold text-slate-900">Other Verified Equipment</h2>
            <Link
              to="/products"
              className="text-sm font-semibold text-blue-700 hover:text-blue-900"
            >
              All Products
            </Link>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
            {relatedProducts.map((item) => (
              <ProductCard key={item.slug} product={item} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
