import {useState} from 'react';
import {
  PRODUCTS,
  PRODUCT_CATEGORIES,
  filterProductsByCategory,
  type ProductCategoryId,
} from '../data/products';
import {COMPANY_INFO} from '../data/company';
import {ProductCard} from '../components/ProductCard';
import {EnquiryCtaBand} from '../components/EnquiryCtaBand';

export function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState<ProductCategoryId>('all');

  const visibleProducts = filterProductsByCategory(activeCategory, PRODUCTS);
  const currentMeta = PRODUCT_CATEGORIES.find((cat) => cat.id === activeCategory);

  return (
    <div>
      {/* Page Header */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-16">
          <p className="text-xs font-medium text-blue-700">Product Catalogue</p>
          <h1 className="mt-2 max-w-3xl text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            SGPKOREA Industrial Machinery Range
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
            Browse publicly verified machinery categories from {COMPANY_INFO.legalName}. Each
            product page separates publicly listed specifications from parameters that must be
            confirmed directly with SGPKOREA.
          </p>
        </div>
      </section>

      {/* Filter Bar & Product Grid */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
          <div className="flex flex-col gap-5 border-b border-slate-200 pb-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-medium text-slate-500">Filter by Machinery Category</p>
              <div
                role="group"
                aria-label="Product category filters"
                className="mt-3 flex flex-wrap gap-2"
              >
                {PRODUCT_CATEGORIES.map((category) => {
                  const selected = category.id === activeCategory;
                  return (
                    <button
                      key={category.id}
                      type="button"
                      aria-pressed={selected}
                      onClick={() => setActiveCategory(category.id)}
                      className={`min-h-[40px] border px-3.5 py-2 text-xs font-semibold whitespace-nowrap transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 ${
                        selected
                          ? 'border-[#0B1B34] bg-[#0B1B34] text-white'
                          : 'border-slate-300 bg-white text-slate-700 hover:border-slate-900 hover:text-slate-950'
                      }`}
                    >
                      {category.shortLabel}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="text-xs text-slate-600 whitespace-nowrap">
              Showing{' '}
              <span className="font-mono font-semibold tabular-nums text-slate-900">
                {visibleProducts.length}
              </span>{' '}
              of{' '}
              <span className="font-mono font-semibold tabular-nums text-slate-900">
                {PRODUCTS.length}
              </span>{' '}
              verified categories
            </div>
          </div>

          {currentMeta ? (
            <div className="mt-6 flex flex-col justify-between gap-2 sm:flex-row sm:items-baseline">
              <h2 className="text-lg font-semibold text-slate-900">{currentMeta.label}</h2>
              <p className="text-sm text-slate-600">{currentMeta.description}</p>
            </div>
          ) : null}

          <div
            data-testid="product-grid"
            className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {visibleProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>

          {/* Transparent Image & Specification Policy Notice */}
          <div className="mt-12 border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-sm font-semibold text-slate-900">
              Visual & Specification Transparency Note
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Because this is an independent redesign concept, copyrighted product photographs from{' '}
              www.sgpkorea.com are not reproduced without permission, and AI-generated machinery
              renders are not presented as SGPKOREA equipment. Technical schematics are clearly
              marked as illustrative placeholders until authorised official photographs are provided.
              Any unpublished specification is explicitly marked:{' '}
              <span className="font-medium text-slate-900">{COMPANY_INFO.specFallback}</span>
            </p>
          </div>
        </div>
      </section>

      <EnquiryCtaBand />
    </div>
  );
}
