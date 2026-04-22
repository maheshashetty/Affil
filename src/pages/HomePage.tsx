import * as React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ShoppingBag, ArrowRight, Zap, Trophy, ShieldCheck, Mail } from 'lucide-react';
import { PRODUCTS, CATEGORIES } from '../data/mockData';
import { StarRating, PriceBadge } from '../components/ReviewComponents';
import { EditorChoiceBadge } from '../components/ProsConsTable';

export function HomePage() {
  const featuredProduct = PRODUCTS.find(p => p.isEditorChoice) || PRODUCTS[0];
  const trendingPicks = PRODUCTS.slice(0, 4);

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-900 pt-20 pb-32">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-500 text-xs font-bold uppercase tracking-widest mb-6"
            >
              <Zap className="w-3 h-3 fill-current" /> Expert Tested Reviews
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-black text-white leading-tight mb-8"
            >
              Find the Best Products <br />
              <span className="text-amber-500 italic">— Before You Buy.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-400 mb-10 max-w-xl leading-relaxed"
            >
              We spend hundreds of hours testing products so you don't have to. Real experts, real data, no sponsored fluff.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/category/tech" className="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-slate-900 font-black rounded-lg shadow-xl shadow-amber-500/20 flex items-center gap-2 group transition-all">
                Explore Top Picks <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/deals" className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-black rounded-lg border border-slate-700 transition-all flex items-center gap-2">
                Today's Deals <Zap className="w-5 h-5 text-amber-500" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Category Grid */}
      <section className="container mx-auto px-4 -mt-16 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {CATEGORIES.map((cat) => (
            <Link 
              key={cat.slug} 
              to={`/category/${cat.slug}`}
              className="group bg-white p-6 rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/50 hover:border-amber-400 hover:-translate-y-1 transition-all"
            >
              <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-900 mb-4 group-hover:bg-amber-50 group-hover:text-amber-600 transition-colors">
                <ShoppingBag className="w-6 h-6" />
              </div>
              <h3 className="font-black text-slate-900 text-xs uppercase tracking-widest">{cat.name}</h3>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Review */}
      <section className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-black text-slate-900 italic">EDITOR'S <span className="text-amber-500 underline decoration-4">CHOICE</span></h2>
          <Link to="/category/tech" className="text-sm font-bold text-slate-500 hover:text-amber-600 flex items-center gap-2">
            View All Reviews <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        
        <div className="bg-slate-900 rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          <div className="lg:w-1/2 relative h-80 lg:h-auto">
             <img 
               src={featuredProduct.images[0]} 
               alt={featuredProduct.name} 
               className="absolute inset-0 w-full h-full object-cover"
             />
             <div className="absolute top-6 left-6">
                <EditorChoiceBadge />
             </div>
          </div>
          <div className="lg:w-1/2 p-12 lg:p-20 flex flex-col justify-center">
            <StarRating rating={featuredProduct.rating} count={featuredProduct.reviewCount} className="mb-4" />
            <h3 className="text-3xl lg:text-5xl font-black text-white mb-6 leading-tight">
              {featuredProduct.name}
            </h3>
            <p className="text-slate-400 mb-8 leading-relaxed text-lg">
              {featuredProduct.shortDescription}
            </p>
            <div className="flex flex-wrap items-center gap-8 border-t border-slate-800 pt-8">
               <div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Our Score</div>
                  <div className="text-3xl font-black text-amber-500">{featuredProduct.ourScore}/10</div>
               </div>
               <div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Amazon Price</div>
                  <PriceBadge price={featuredProduct.price} originalPrice={featuredProduct.originalPrice} className="invert" />
               </div>
               <Link to={`/review/${featuredProduct.slug}`} className="flex-grow">
                 <button className="w-full py-4 bg-white hover:bg-slate-100 text-slate-900 font-black rounded-xl transition-all shadow-lg active:scale-95">
                    READ FULL REVIEW →
                 </button>
               </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Grid */}
      <section className="container mx-auto px-4 bg-slate-50 py-20 rounded-[3rem]">
         <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4 italic uppercase">Trending Picks</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">The most clicked, reviewed, and purchased items by our readers this week.</p>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trendingPicks.map((product) => (
              <motion.div 
                whileHover={{ y: -5 }}
                key={product.id} 
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col"
              >
                <div className="relative aspect-square rounded-xl overflow-hidden mb-6 bg-slate-100">
                  <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover" />
                  {product.isBestValue && (
                    <div className="absolute top-3 right-3 bg-green-500 text-white text-[10px] font-black px-2 py-1 rounded uppercase tracking-widest">
                      Best Value
                    </div>
                  )}
                </div>
                <div className="flex-grow">
                  <div className="text-[10px] font-bold text-amber-600 uppercase tracking-widest mb-2">
                    {product.categoryName}
                  </div>
                  <h4 className="font-black text-slate-900 mb-3 line-clamp-2 leading-tight">
                    {product.name}
                  </h4>
                  <StarRating rating={product.rating} count={product.reviewCount} className="mb-4" />
                  <PriceBadge price={product.price} originalPrice={product.originalPrice} />
                </div>
                <Link to={`/review/${product.slug}`} className="mt-6">
                  <button className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white text-xs font-black rounded-lg transition-colors uppercase tracking-widest">
                    See Review
                  </button>
                </Link>
              </motion.div>
            ))}
         </div>
      </section>

      {/* Trust & Newsletter */}
      <section className="container mx-auto px-4 py-20">
         <div className="bg-amber-500 rounded-[3rem] p-12 lg:p-20 flex flex-col lg:flex-row items-center gap-12 overflow-hidden relative">
            <div className="absolute -bottom-20 -right-20 text-white/10 rotate-12">
               <Mail className="w-96 h-96" />
            </div>
            <div className="lg:w-1/2 relative z-10">
               <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
                  Get The Best Deals <br />
                  <span className="italic underline decoration-slate-900">In Your Inbox.</span>
               </h2>
               <p className="text-slate-900/70 font-medium mb-10 max-w-sm"> Weekly curated picks, price drops, and "Buy-It-For-Life" recommendations. No spam, ever.</p>
               <div className="flex gap-2">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="flex-grow px-6 py-4 rounded-xl bg-white/20 border border-slate-900/10 placeholder:text-slate-900/50 text-slate-900 font-bold focus:outline-none focus:ring-2 ring-slate-900"
                  />
                  <button className="px-8 py-4 bg-slate-900 text-white font-black rounded-xl hover:bg-slate-800 transition-colors">
                    JOIN
                  </button>
               </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4 relative z-10">
               {[
                 { icon: Trophy, label: 'Independently Tested' },
                 { icon: ShieldCheck, label: 'Verified Authors' },
                 { icon: Zap, label: 'Real-Time Prices' },
                 { icon: ShoppingBag, label: 'No Sponsored Content' },
               ].map((item, i) => (
                 <div key={i} className="bg-slate-950 p-6 rounded-2xl text-center">
                    <item.icon className="w-8 h-8 text-amber-500 mx-auto mb-3" />
                    <div className="text-[10px] font-black text-white uppercase tracking-widest">{item.label}</div>
                 </div>
               ))}
            </div>
         </div>
      </section>
    </div>
  );
}
