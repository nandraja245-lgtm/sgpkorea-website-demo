import {useEffect, useRef, useState, type ReactNode} from 'react';
import {Link, NavLink, useLocation} from 'react-router-dom';
import {ChevronDown, ExternalLink, Menu, X} from 'lucide-react';
import {COMPANY_INFO} from '../data/company';
import {PRODUCTS} from '../data/products';
import {useLocale} from '../i18n/LocaleContext';

interface LayoutProps {
  children: ReactNode;
}

const ROUTE_TITLES: Array<{match: (path: string) => boolean; title: string; description: string}> = [
  {
    match: (path) => path === '/',
    title: 'SGPKOREA | Precision Machinery for Medical Consumables Manufacturing',
    description:
      'Independent website redesign concept for SEGAE PRECISION CO., LTD. (SGPKOREA), showcasing automated machinery for disposable syringe, needle, printing, and blister packing production.',
  },
  {
    match: (path) => path === '/about',
    title: 'About Us | SGPKOREA — SEGAE PRECISION CO., LTD.',
    description:
      'Verified company overview, business focus, and machinery specialisation of SEGAE PRECISION CO., LTD. (SGPKOREA) in Seoul, South Korea.',
  },
  {
    match: (path) => path === '/products',
    title: 'Products & Machinery Catalogue | SGPKOREA',
    description:
      'Explore verified SGPKOREA machinery categories including syringe assembly, needle assembly, barrel printing, blister packing, insulin systems, and injection moulds.',
  },
  {
    match: (path) => path.startsWith('/products/'),
    title: 'Machine Specifications | SGPKOREA',
    description:
      'Detailed machine overview, publicly listed technical specifications, and quotation enquiry options for SGPKOREA machinery.',
  },
  {
    match: (path) => path === '/capabilities',
    title: 'Manufacturing Capabilities | SGPKOREA',
    description:
      'Verified manufacturing capabilities of SEGAE PRECISION CO., LTD. (SGPKOREA) across syringe automation, printing, blister packaging, and injection mould tooling.',
  },
  {
    match: (path) => path === '/applications',
    title: 'Industry Applications | SGPKOREA',
    description:
      'Medical consumables and pharmaceutical packaging manufacturing processes supported by verified SGPKOREA machinery.',
  },
  {
    match: (path) => path === '/downloads',
    title: 'Downloads & Technical Documentation | SGPKOREA',
    description:
      'Information on requesting official product catalogues, machine brochures, and technical datasheets from SEGAE PRECISION CO., LTD. (SGPKOREA).',
  },
  {
    match: (path) => path === '/contact',
    title: 'Contact & Request a Quotation | SGPKOREA',
    description:
      'Verified SGPKOREA headquarters contact details and interactive B2B quotation enquiry demonstration form.',
  },
];

export function Layout({children}: LayoutProps) {
  const {t} = useLocale();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsMenuOpen, setProductsMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMobileMenuOpen(false);
    setProductsMenuOpen(false);
    window.scrollTo({top: 0, behavior: 'auto'});

    const meta = ROUTE_TITLES.find((entry) => entry.match(location.pathname));
    if (meta && !location.pathname.startsWith('/products/')) {
      document.title = meta.title;
      const descEl = document.querySelector('meta[name="description"]');
      if (descEl) {
        descEl.setAttribute('content', meta.description);
      }
    }
  }, [location.pathname]);

  useEffect(() => {
    function handleOutsideClick(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setProductsMenuOpen(false);
      }
    }
    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setProductsMenuOpen(false);
        setMobileMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const navLinkClass = ({isActive}: {isActive: boolean}) =>
    `relative py-1 text-sm font-medium whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700 ${
      isActive
        ? 'text-blue-700 after:absolute after:inset-x-0 after:-bottom-[21px] after:h-[2px] after:bg-blue-700'
        : 'text-slate-700 hover:text-slate-950'
    }`;

  const isProductsActive = location.pathname === '/products' || location.pathname.startsWith('/products/');

  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-900">
      <header className="sticky top-0 z-40 h-16 border-b border-slate-200 bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between gap-8 px-6 lg:px-8">
          {/* Zone 1: Single clean text wordmark */}
          <Link
            to="/"
            className="font-display text-lg font-bold tracking-tight text-[#0B1B34] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700"
          >
            {COMPANY_INFO.brandName}
          </Link>

          {/* Zone 2: Primary navigation links (single-line, clean typography) */}
          <nav
            aria-label="Primary Navigation"
            className="hidden items-center gap-6 lg:flex"
          >
            <NavLink to="/" end className={navLinkClass}>
              {t.nav.home}
            </NavLink>
            <NavLink to="/about" className={navLinkClass}>
              {t.nav.about}
            </NavLink>

            {/* Products with accessible dropdown */}
            <div ref={dropdownRef} className="relative flex items-center">
              <Link
                to="/products"
                className={`relative py-1 text-sm font-medium whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700 ${
                  isProductsActive
                    ? 'text-blue-700 after:absolute after:inset-x-0 after:-bottom-[21px] after:h-[2px] after:bg-blue-700'
                    : 'text-slate-700 hover:text-slate-950'
                }`}
              >
                {t.nav.products}
              </Link>
              <button
                type="button"
                aria-label="Toggle product categories menu"
                aria-expanded={productsMenuOpen}
                aria-haspopup="menu"
                onClick={() => setProductsMenuOpen((prev) => !prev)}
                className="ml-1 inline-flex h-7 w-7 items-center justify-center text-slate-500 transition-colors hover:text-slate-950 focus-visible:outline-2 focus-visible:outline-blue-700"
              >
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-150 ${productsMenuOpen ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                />
              </button>

              {productsMenuOpen ? (
                <div
                  role="menu"
                  aria-label="SGPKOREA Machinery Categories"
                  className="absolute left-0 top-[calc(100%+14px)] z-50 w-80 border border-slate-200 bg-white p-2 shadow-lg"
                >
                  <Link
                    to="/products"
                    role="menuitem"
                    onClick={() => setProductsMenuOpen(false)}
                    className="block border-b border-slate-100 px-3 py-2.5 text-xs font-semibold text-blue-700 hover:bg-slate-50"
                  >
                    View All Verified Machinery
                  </Link>
                  <div className="mt-1 space-y-0.5">
                    {PRODUCTS.map((product) => (
                      <Link
                        key={product.slug}
                        to={`/products/${product.slug}`}
                        role="menuitem"
                        onClick={() => setProductsMenuOpen(false)}
                        className="block px-3 py-2 transition-colors hover:bg-slate-50"
                      >
                        <div className="text-sm font-medium text-slate-900">{product.name}</div>
                        <div className="mt-0.5 font-mono text-[11px] text-slate-500">
                          {product.modelReference}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>

            <NavLink to="/capabilities" className={navLinkClass}>
              {t.nav.capabilities}
            </NavLink>
            <NavLink to="/applications" className={navLinkClass}>
              {t.nav.applications}
            </NavLink>
            <NavLink to="/downloads" className={navLinkClass}>
              {t.nav.downloads}
            </NavLink>
            <NavLink to="/contact" className={navLinkClass}>
              {t.nav.contact}
            </NavLink>
          </nav>

          {/* Zone 3: Single Primary Action & Mobile Drawer Trigger */}
          <div className="flex items-center gap-3 shrink-0">
            <Link
              to="/contact"
              className="hidden min-h-[40px] items-center justify-center bg-[#0B1B34] px-4 py-2 text-xs font-semibold text-white whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 sm:inline-flex"
            >
              {t.nav.primaryCta}
            </Link>

            <button
              type="button"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="inline-flex h-11 w-11 items-center justify-center border border-slate-200 text-slate-800 transition-colors hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-blue-700 lg:hidden"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Responsive Navigation Drawer */}
        {mobileMenuOpen ? (
          <nav
            aria-label="Mobile Navigation"
            className="border-b border-slate-200 bg-white px-6 py-5 shadow-lg lg:hidden"
          >
            <div className="flex flex-col divide-y divide-slate-100">
              {[
                {to: '/', label: t.nav.home},
                {to: '/about', label: t.nav.about},
                {to: '/products', label: t.nav.products},
                {to: '/capabilities', label: t.nav.capabilities},
                {to: '/applications', label: t.nav.applications},
                {to: '/downloads', label: t.nav.downloads},
                {to: '/contact', label: t.nav.contact},
              ].map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({isActive}) =>
                    `flex min-h-[44px] items-center text-sm font-medium ${
                      isActive ? 'text-blue-700' : 'text-slate-800 hover:text-blue-700'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>

            <div className="mt-4 border-t border-slate-200 pt-4">
              <p className="text-xs font-medium text-slate-500">Machinery Direct Links</p>
              <div className="mt-2 grid grid-cols-1 gap-1.5">
                {PRODUCTS.map((product) => (
                  <Link
                    key={product.slug}
                    to={`/products/${product.slug}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex min-h-[40px] items-center text-xs text-slate-700 hover:text-blue-700"
                  >
                    {product.name}
                  </Link>
                ))}
              </div>
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-4 flex min-h-[44px] w-full items-center justify-center bg-blue-700 px-4 py-2.5 text-sm font-semibold text-white"
              >
                {t.nav.primaryCta}
              </Link>
            </div>
          </nav>
        ) : null}
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-slate-800 bg-[#071224] text-slate-300">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12">
            {/* Brand & Corporate Identity */}
            <div className="lg:col-span-4">
              <Link
                to="/"
                className="font-display text-lg font-bold tracking-tight text-white"
              >
                {COMPANY_INFO.brandName}
              </Link>
              <p className="mt-2 text-sm font-medium text-slate-200">{COMPANY_INFO.legalName}</p>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-400">
                South Korean manufacturer of automated machinery for disposable syringe, hypodermic
                needle, barrel printing, blister packing, and medical consumables production.
              </p>
              <div className="mt-4">
                <a
                  href={COMPANY_INFO.officialWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-blue-300 hover:text-white"
                >
                  <span>Official Reference: www.sgpkorea.com</span>
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* Site Navigation */}
            <div className="lg:col-span-2">
              <h2 className="text-xs font-semibold tracking-wide text-white">Navigation</h2>
              <ul className="mt-4 space-y-2.5 text-sm">
                <li>
                  <Link to="/" className="text-slate-400 transition-colors hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-slate-400 transition-colors hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/products" className="text-slate-400 transition-colors hover:text-white">
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    to="/capabilities"
                    className="text-slate-400 transition-colors hover:text-white"
                  >
                    Capabilities
                  </Link>
                </li>
                <li>
                  <Link
                    to="/applications"
                    className="text-slate-400 transition-colors hover:text-white"
                  >
                    Applications
                  </Link>
                </li>
                <li>
                  <Link
                    to="/downloads"
                    className="text-slate-400 transition-colors hover:text-white"
                  >
                    Downloads
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-slate-400 transition-colors hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Verified Equipment Links */}
            <div className="lg:col-span-3">
              <h2 className="text-xs font-semibold tracking-wide text-white">Machinery Range</h2>
              <ul className="mt-4 space-y-2.5 text-sm">
                {PRODUCTS.map((product) => (
                  <li key={product.slug}>
                    <Link
                      to={`/products/${product.slug}`}
                      className="text-slate-400 transition-colors hover:text-white"
                    >
                      {product.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Verified Contact Information */}
            <div className="lg:col-span-3">
              <h2 className="text-xs font-semibold tracking-wide text-white">
                Headquarters Contact
              </h2>
              <dl className="mt-4 space-y-2.5 text-sm text-slate-400">
                <div>
                  <dt className="text-xs text-slate-500">Address</dt>
                  <dd className="mt-0.5 text-slate-300">{COMPANY_INFO.contact.address}</dd>
                </div>
                <div>
                  <dt className="text-xs text-slate-500">Telephone</dt>
                  <dd className="mt-0.5 font-mono tabular-nums text-slate-300">
                    {COMPANY_INFO.contact.phone}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs text-slate-500">Fax</dt>
                  <dd className="mt-0.5 font-mono tabular-nums text-slate-300">
                    {COMPANY_INFO.contact.fax}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs text-slate-500">Email</dt>
                  <dd className="mt-0.5 font-mono text-slate-300">{COMPANY_INFO.contact.email}</dd>
                </div>
              </dl>
            </div>
          </div>

          {/* Independent Demonstration Notice */}
          <div className="mt-12 border-t border-slate-800 pt-6">
            <p className="text-xs leading-relaxed text-slate-400">
              {COMPANY_INFO.disclaimerNotice}
            </p>
            <div className="mt-3 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500">
              <span>
                Subject Company: {COMPANY_INFO.legalName} ({COMPANY_INFO.brandName}) ·{' '}
                {COMPANY_INFO.country}
              </span>
              <span>Language Architecture: English (Ready for Korean localisation)</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
