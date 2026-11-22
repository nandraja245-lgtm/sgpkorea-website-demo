import {Link} from 'react-router-dom';
import {ArrowRight} from 'lucide-react';
import type {ProductItem} from '../data/products';
import {MachineIllustrativeVisual} from './MachineIllustrativeVisual';

interface ProductCardProps {
  product: ProductItem;
}

export function ProductCard({product}: ProductCardProps) {
  return (
    <article className="flex h-full flex-col border border-slate-200 bg-white transition-colors duration-200 hover:border-slate-300">
      <Link
        to={`/products/${product.slug}`}
        className="block focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-blue-700"
        aria-label={`View technical details for ${product.name}`}
      >
        <MachineIllustrativeVisual
          kind={product.schematicKind}
          modelLabel={product.modelReference}
          compact
          showCaption={false}
        />
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-500">
          <span>{product.categoryName}</span>
          <span aria-hidden="true">·</span>
          <span className="font-mono text-slate-600">{product.modelReference}</span>
        </div>

        <h3 className="mt-2.5 text-lg font-semibold leading-snug text-slate-900">
          <Link
            to={`/products/${product.slug}`}
            className="transition-colors hover:text-blue-700 focus-visible:outline-2 focus-visible:outline-blue-700"
          >
            {product.name}
          </Link>
        </h3>

        <p className="mt-2.5 text-sm leading-relaxed text-slate-600">{product.shortDescription}</p>

        <div className="mt-5 border-t border-slate-100 pt-4">
          <div className="flex items-baseline justify-between gap-4 text-xs">
            <span className="text-slate-500">{product.highlightMetricLabel}</span>
            <span className="font-mono font-medium tabular-nums text-slate-900">
              {product.highlightMetricValue}
            </span>
          </div>
          <p className="mt-2 text-[11px] text-slate-500">
            Illustrative schematic · Official photograph supplied by SGPKOREA
          </p>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3 pt-1">
          <Link
            to={`/products/${product.slug}`}
            className="inline-flex min-h-[40px] flex-1 items-center justify-center gap-1.5 bg-slate-900 px-4 py-2 text-xs font-semibold text-white whitespace-nowrap transition-colors duration-150 hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
          >
            <span>View Details</span>
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
          <Link
            to={`/contact?product=${encodeURIComponent(product.slug)}`}
            className="inline-flex min-h-[40px] items-center justify-center border border-slate-300 bg-white px-4 py-2 text-xs font-semibold text-slate-800 whitespace-nowrap transition-colors duration-150 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
          >
            Enquire
          </Link>
        </div>
      </div>
    </article>
  );
}
