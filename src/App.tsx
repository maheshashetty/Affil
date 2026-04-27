/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar, Footer } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { ProductReviewPage } from './pages/ProductReviewPage';
import { CategoryPage, DealsPage } from './pages/ExtraPages';
import { BuyingGuidePage } from './pages/BuyingGuidePage';
import { AboutPage, DisclosurePage, AdminDashboard } from './pages/StaticPages';
import { LaunchChecklist } from './components/LaunchChecklist';
import { AboutPage, DisclosurePage, AdminDashboard } from './pages/StaticPages';
import { LaunchChecklist } from './components/LaunchChecklist';

/**
 * ScrollToTop helper component to reset scroll position on route changes.
 */
function ScrollToTop() {
  const { pathname } = useLocation();
  
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-white font-sans text-slate-950 selection:bg-amber-200 selection:text-amber-900">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/category/:slug" element={<CategoryPage />} />
            <Route path="/review/:slug" element={<ProductReviewPage />} />
            <Route path="/best-of-2025" element={<BuyingGuidePage />} />
            <Route path="/deals" element={<DealsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/disclosure" element={<DisclosurePage />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/launch-checklist" element={<LaunchChecklist />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/disclosure" element={<DisclosurePage />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/launch-checklist" element={<LaunchChecklist />} />
            <Route path="*" element={<div className="container mx-auto px-4 py-32 text-center font-black italic text-4xl">404 — PAGE NOT FOUND</div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
