import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag, ShieldCheck, Zap, Search } from 'lucide-react';
import { CATEGORIES } from '../data/mockData';
import { cn } from '../lib/utils';

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full bg-slate-900 border-b border-slate-800">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-xl font-black text-white italic tracking-tighter">
            <span className="text-amber-500">BEST</span>PICKS<span className="text-amber-500 underline decoration-2">HUB</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8 text-sm font-bold text-slate-300">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.slug}
                to={`/category/${cat.slug}`}
                className={cn(
                  "hover:text-amber-400 transition-colors uppercase tracking-wide",
                  location.pathname === `/category/${cat.slug}` && "text-amber-500"
                )}
              >
                {cat.name}
              </Link>
            ))}
            <Link to="/deals" className="flex items-center gap-1.5 text-red-500 hover:text-red-400 animate-pulse">
              <Zap className="w-4 h-4 fill-current" />
              DEALS
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <button className="text-slate-300 hover:text-white lg:hidden" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-slate-900 border-t border-slate-800 p-4 space-y-4">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.slug}
              to={`/category/${cat.slug}`}
              className="block text-slate-300 font-bold uppercase py-2"
              onClick={() => setIsOpen(false)}
            >
              {cat.name}
            </Link>
          ))}
          <Link to="/deals" className="block text-red-500 font-bold uppercase py-2" onClick={() => setIsOpen(false)}>
            🔥 Hot Deals
          </Link>
        </div>
      )}

      {/* Trust Bar */}
      <div className="bg-slate-800/50 py-2 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center text-[10px] font-bold text-slate-400 uppercase tracking-widest">
           <div className="flex gap-6">
              <span className="flex items-center gap-2"><ShieldCheck className="w-3 h-3 text-amber-500" /> Independently Tested</span>
              <span className="flex items-center gap-2"><Zap className="w-3 h-3 text-amber-500" /> Updated Monthly</span>
              <span className="flex items-center gap-2"><ShoppingBag className="w-3 h-3 text-amber-500" /> Amazon Verified Data</span>
           </div>
           <div>FTC Affiliate Disclosure: <span>Affiliate Disclosure →</span></div>
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 mt-20 border-t border-slate-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="text-xl font-black text-white italic tracking-tighter mb-6">
              <span className="text-amber-500">BEST</span>PICKS<span className="text-amber-500 underline decoration-2">HUB</span>
            </div>
            <p className="text-sm max-w-md leading-relaxed">
              BestPicksHub is your destination for independent, expert-tested reviews of the best products on Amazon. Our mission is to help you buy the right things, the first time.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-widest text-xs">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/deals">Best Deals</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/disclosure">Affiliate Disclosure</Link></li>
              <li><Link to="/admin" className="text-slate-800 text-[8px]">Admin</Link></li>
              <li><Link to="/launch-checklist" className="text-slate-800 text-[8px]">Checklist</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-widest text-xs">Categories</h4>
             <ul className="space-y-2 text-sm">
              {CATEGORIES.slice(0, 4).map(c => (
                <li key={c.slug}><Link to={`/category/${c.slug}`}>{c.name}</Link></li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-900 text-[10px] uppercase tracking-widest leading-loose">
          <p className="mb-4">
            Affiliate Disclosure: As an Amazon Associate, BestPicksHub earns from qualifying purchases. We may earn a commission when you click through links on our site and make a purchase. This does not affect the price you pay and helps us keep our testing labs running.
          </p>
          <p>© 2025 BestPicksHub. All rights reserved. Prices and availability are accurate at the time of publication but are subject to change.</p>
        </div>
      </div>
    </footer>
  );
}
