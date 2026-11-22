/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import {LocaleProvider} from './i18n/LocaleContext';
import {Layout} from './components/Layout';
import {HomePage} from './pages/HomePage';
import {AboutPage} from './pages/AboutPage';
import {ProductsPage} from './pages/ProductsPage';
import {ProductDetailPage} from './pages/ProductDetailPage';
import {CapabilitiesPage} from './pages/CapabilitiesPage';
import {ApplicationsPage} from './pages/ApplicationsPage';
import {DownloadsPage} from './pages/DownloadsPage';
import {ContactPage} from './pages/ContactPage';

function NotFoundPage() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-24 lg:px-8">
      <p className="text-xs font-medium text-blue-700">Page Not Found</p>
      <h1 className="mt-2 text-3xl font-bold text-slate-900">
        The requested page could not be found
      </h1>
      <p className="mt-3 text-base text-slate-600">
        Use the navigation bar or return to the SGPKOREA redesign concept homepage.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          to="/"
          className="inline-flex min-h-[44px] items-center bg-[#0B1B34] px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
        >
          Return Home
        </Link>
        <Link
          to="/products"
          className="inline-flex min-h-[44px] items-center border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-800 hover:border-slate-900"
        >
          Browse Products
        </Link>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <LocaleProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:slug" element={<ProductDetailPage />} />
            <Route path="/capabilities" element={<CapabilitiesPage />} />
            <Route path="/applications" element={<ApplicationsPage />} />
            <Route path="/downloads" element={<DownloadsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </LocaleProvider>
  );
}
