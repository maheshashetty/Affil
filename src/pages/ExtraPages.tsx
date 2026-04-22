import * as React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Filter, SlidersHorizontal, Zap } from 'lucide-react';
import { PRODUCTS, CATEGORIES } from '../data/mockData';
import { StarRating, PriceBadge } from '../components/ReviewComponents';

export function CategoryPage() {
  const { slug } = useParams<{ slug: string }>();
  const category = CATEGORIES.find(c => c.slug === slug);
  const products = PRODUCTS.filter(p => p.category === slug);

  if (!category) return <div>Category Not Found</div>;

  return (
    <div className="container mx-auto px-4 py-12">
      <header className="mb-12">
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 italic uppercase">
          Best <span className="text-amber-500 underline decoration-8">{category.name}</span> in 2025
        </h1>
        <p className="text-lg text-slate-500 max-w-2xl leading-relaxed">
          We analyzed {products.length * 4}+ models to find the top performing {category.name.toLowerCase()} available today. Our testing methodology focused on durability, price-to-performance ratio, and real-world results.
        </p>
      </header>

      <div className="flex flex-col lg:flex-row gap-12">
        <aside className="lg:w-1/4 space-y-8">
           <div className="p-6 bg-slate-950 text-white rounded-3xl sticky top-24">
              <h4 className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-amber-500 mb-6">
                 <SlidersHorizontal className="w-4 h-4" /> Refine Results
              </h4>
              <div className="space-y-6">
                 <div>
                   <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Price Range</label>
                   <select className="w-full bg-slate-900 border border-slate-800 p-3 rounded-xl text-sm font-bold focus:outline-none focus:ring-2 ring-amber-500">
                      <option>All Prices</option>
                      <option>Under $50</option>
                      <option>$50 - $100</option>
                      <option>$100+</option>
                   </select>
                 </div>
                 <div>
                   <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Sorted By</label>
                   <select className="w-full bg-slate-900 border border-slate-800 p-3 rounded-xl text-sm font-bold focus:outline-none focus:ring-2 ring-amber-500">
                      <option>Our Score (High to Low)</option>
                      <option>Price (Low to High)</option>
                      <option>Most Reviewed</option>
                   </select>
                 </div>
                 <div className="pt-6 border-t border-slate-800">
                   <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-xl text-center">
                      <div className="text-red-500 text-xs font-black uppercase tracking-widest mb-1 flex items-center justify-center gap-2">
                        <Zap className="w-3 h-3 fill-current" /> Hot Tip
                      </div>
                      <p className="text-[10px] text-slate-400 leading-tight">Prices on Amazon change hourly. Our editors refresh this list every 24 hours.</p>
                   </div>
                 </div>
              </div>
           </div>
        </aside>

        <main className="lg:w-3/4 space-y-8 text-slate-900">
          {products.map((product, idx) => (
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              key={product.id} 
              className="bg-white border border-slate-200 rounded-[2rem] overflow-hidden shadow-xl shadow-slate-200/40 hover:border-amber-400 transition-all flex flex-col md:flex-row p-8 gap-8"
            >
              <div className="md:w-1/3 aspect-square relative rounded-2xl overflow-hidden bg-slate-50">
                <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover" />
                <div className="absolute top-4 left-4 bg-slate-900 text-white w-10 h-10 rounded-full flex items-center justify-center font-black text-xl shadow-lg">
                  #{idx + 1}
                </div>
              </div>
              <div className="md:w-2/3 flex flex-col">
                <div className="flex items-center justify-between mb-2">
                  <StarRating rating={product.rating} count={product.reviewCount} />
                  {product.isEditorChoice && <div className="text-[10px] font-black bg-amber-500 text-slate-900 px-2 py-0.5 rounded italic uppercase tracking-widest">Our #1 Pick</div>}
                </div>
                <h3 className="text-2xl font-black mb-4 leading-tight group hover:text-amber-600 transition-colors">
                  <Link to={`/review/${product.slug}`}>{product.name}</Link>
                </h3>
                <p className="text-slate-500 text-sm mb-6 leading-relaxed flex-grow">
                  {product.shortDescription}
                </p>
                <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-slate-50 mt-auto">
                   <PriceBadge price={product.price} originalPrice={product.originalPrice} />
                   <Link to={`/review/${product.slug}`} className="flex-grow">
                      <button className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white font-black rounded-xl transition-all uppercase tracking-widest text-xs">
                        Read Full Analysis →
                      </button>
                   </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </main>
      </div>
    </div>
  );
}

export function DealsPage() {
  const dealProducts = PRODUCTS.filter(p => p.originalPrice);

  return (
    <div className="container mx-auto px-4 py-20">
       <div className="bg-red-600 p-12 rounded-[3rem] mb-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-500 rounded-full blur-[100px] opacity-50 -mr-20 -mt-20"></div>
          <div className="relative z-10 text-center text-white">
            <h1 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter mb-4">
              Flash <span className="text-amber-400 underline decoration-white">Deals</span> Tracker
            </h1>
            <p className="text-red-100 font-bold uppercase tracking-widest text-xs mb-8">Live Price monitoring • refreshed every 60 minutes</p>
            <div className="inline-flex items-center gap-6 bg-red-700/50 backdrop-blur-md px-8 py-3 rounded-full border border-red-400/20 font-black text-sm uppercase tracking-widest">
              <span className="flex items-center gap-2"><Zap className="w-4 h-4 fill-amber-400 text-amber-400" /> 12 Active Drops Today</span>
              <span className="w-px h-4 bg-red-400/30"></span>
              <span>Expires in 04:12:35</span>
            </div>
          </div>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dealProducts.map(product => (
            <div key={product.id} className="bg-white border-2 border-red-100 rounded-[2.5rem] p-8 relative hover:border-red-500 transition-all shadow-xl shadow-red-100/50">
               <div className="absolute -top-4 -right-4 bg-red-600 text-white w-16 h-16 rounded-full flex items-center justify-center font-black flex-col text-xs rotate-12 shadow-lg">
                  SAVE <span>{Math.round(((product.originalPrice! - product.price) / product.originalPrice!) * 100)}%</span>
               </div>
               <img src={product.images[0]} className="w-full aspect-video object-cover rounded-2xl mb-6 bg-slate-50" alt={product.name} />
               <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">{product.categoryName}</div>
               <h3 className="text-xl font-black text-slate-900 mb-4 line-clamp-2">{product.name}</h3>
               <div className="flex items-center justify-between mb-8">
                  <div>
                    <div className="text-[10px] font-bold text-slate-400 line-through">${product.originalPrice?.toFixed(2)}</div>
                    <div className="text-3xl font-black text-red-600">${product.price.toFixed(2)}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] font-bold text-green-600 uppercase tracking-widest mb-1">Status: In Stock</div>
                    <StarRating rating={product.rating} />
                  </div>
               </div>
               <Link to={`/review/${product.slug}`}>
                 <button className="w-full py-4 bg-slate-900 text-white font-black rounded-xl hover:bg-red-600 transition-colors uppercase tracking-widest text-xs">
                    Lock In Price →
                 </button>
               </Link>
            </div>
          ))}
       </div>
    </div>
  );
}
