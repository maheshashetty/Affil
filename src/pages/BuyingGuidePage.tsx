import * as React from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../data/mockData';
import { StarRating, PriceBadge, AffiliateButton } from '../components/ReviewComponents';
import { getAffiliateLink } from '../lib/utils';
import { Trophy, ChevronDown, CheckCircle2 } from 'lucide-react';

export function BuyingGuidePage() {
  const topPicks = PRODUCTS.filter(p => p.isEditorChoice || p.isBestValue).slice(0, 5);

  return (
    <div className="bg-white">
      <header className="bg-slate-900 py-24 text-center">
        <div className="container mx-auto px-4">
          <div className="inline-block px-4 py-1 bg-amber-500 text-slate-900 font-black text-xs uppercase tracking-widest rounded-full mb-6">Updated April 2025</div>
          <h1 className="text-4xl md:text-7xl font-black text-white italic mb-8 uppercase tracking-tighter">
            The Best <span className="text-amber-500 underline">Amazon Picks</span> of 2025
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            We tested 150+ products across all major categories. Here are the elite few that actually lived up to the hype and earned our recommendation.
          </p>
        </div>
      </header>

      {/* Summary Table */}
      <section className="container mx-auto px-4 -mt-12">
        <div className="bg-white rounded-[2rem] shadow-2xl border border-slate-200 overflow-hidden">
           <div className="bg-slate-50 p-6 border-b border-slate-200">
              <h2 className="font-black text-slate-900 uppercase tracking-widest text-sm flex items-center gap-2">
                 <Trophy className="w-5 h-5 text-amber-500" /> Quick Comparison: The Winners
              </h2>
           </div>
           <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50/50 text-[10px] font-black uppercase tracking-widest text-slate-400 border-b border-slate-200">
                    <th className="px-8 py-4">Product</th>
                    <th className="px-8 py-4">Best For</th>
                    <th className="px-8 py-4">Our Score</th>
                    <th className="px-8 py-4">Price</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {topPicks.map((p) => (
                    <tr key={p.id} className="hover:bg-slate-50 transition-colors">
                      <td className="px-8 py-6">
                        <Link to={`/review/${p.slug}`} className="font-black text-slate-900 hover:text-amber-600 underline underline-offset-4">{p.name}</Link>
                      </td>
                      <td className="px-8 py-6 text-sm font-bold text-slate-500 uppercase">{p.tags[0]}</td>
                      <td className="px-8 py-6">
                         <div className="inline-flex items-center gap-1 font-black text-amber-600">
                           {p.ourScore}/10
                         </div>
                      </td>
                      <td className="px-8 py-6">
                        <a href={getAffiliateLink(p.asin)} target="_blank" rel="nofollow sponsored" className="text-sm font-black text-slate-900 border-b-2 border-amber-400 p-1">Check Price →</a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
           </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-24 space-y-32">
        {topPicks.map((product, i) => (
           <section key={product.id} className="relative">
              <div className="flex flex-col lg:flex-row gap-16">
                 <div className="lg:w-1/2">
                    <div className="flex items-center gap-4 mb-6">
                       <span className="w-12 h-12 bg-slate-950 text-white rounded-full flex items-center justify-center font-black text-2xl italic">#{i+1}</span>
                       <h3 className="text-3xl font-black text-slate-900 uppercase">{product.name}</h3>
                    </div>
                    <div className="aspect-video rounded-3xl overflow-hidden bg-slate-100 mb-8 border border-slate-200">
                       <img src={product.images[0]} className="w-full h-full object-cover" alt={product.name} />
                    </div>
                 </div>
                 <div className="lg:w-1/2 flex flex-col justify-center">
                    <div className="bg-amber-50 border border-amber-200 p-8 rounded-3xl mb-8">
                       <h4 className="text-xs font-black uppercase tracking-widest text-amber-700 mb-4">Why We Chose It:</h4>
                       <p className="text-slate-700 font-medium leading-relaxed italic mb-6">"{product.shortDescription}"</p>
                       <ul className="space-y-2">
                          {product.pros.slice(0, 3).map((pro, j) => (
                            <li key={j} className="flex items-center gap-2 text-sm font-bold text-slate-600">
                               <CheckCircle2 className="w-4 h-4 text-green-500" /> {pro}
                            </li>
                          ))}
                       </ul>
                    </div>
                    <div className="flex items-center gap-6">
                       <PriceBadge price={product.price} originalPrice={product.originalPrice} />
                       <AffiliateButton url={getAffiliateLink(product.asin)} text="Buy on Amazon →" />
                    </div>
                 </div>
              </div>
           </section>
        ))}
      </main>

      <section className="bg-slate-50 py-24">
         <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-black text-slate-900 mb-4 uppercase italic">Our Methodology</h2>
            <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed mb-12">
               We don't just read reviews—we buy the products, put them through a standard 2-week stress test, and measure them against 47 specific data points. We are self-funded and never accept "free review samples" to ensure 100% objectivity.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {[
                 { t: '150+', d: 'Products Tested' },
                 { t: '400h', d: 'Lab Research' },
                 { t: '100%', d: 'Independent' }
               ].map((stat, i) => (
                 <div key={i} className="p-8 bg-white rounded-3xl border border-slate-200 shadow-sm">
                    <div className="text-4xl font-black text-amber-500 mb-2">{stat.t}</div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.d}</div>
                 </div>
               ))}
            </div>
         </div>
      </section>
    </div>
  );
}
