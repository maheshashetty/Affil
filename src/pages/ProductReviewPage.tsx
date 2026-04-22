import * as React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronRight, ExternalLink, ArrowRight, Share2, AlertCircle } from 'lucide-react';
import { PRODUCTS } from '../data/mockData';
import { StarRating, PriceBadge, AffiliateButton } from '../components/ReviewComponents';
import { ProsConsTable, EditorChoiceBadge } from '../components/ProsConsTable';
import { cn, getAffiliateLink } from '../lib/utils';

export function ProductReviewPage() {
  const { slug } = useParams<{ slug: string }>();
  const product = PRODUCTS.find(p => p.slug === slug);

  if (!product) return <div>Product Not Found</div>;

  const faqs = [
    { q: `Is the ${product.name} worth the money?`, a: `Based on our extensive testing, the ${product.name} offers exceptional value particularly if you prioritize ${product.tags[0]}. It stands out in its category for build quality and consistency.` },
    { q: `Where can I find the best price for ${product.name}?`, a: `Amazon currently offers the most competitive pricing and reliable shipping for the ${product.name}. Check the price using the link above for current deals.` },
    { q: `Does this come with a warranty?`, a: `Yes, standard manufacturer warranty usually applies, but we recommend verifying the specific seller details on Amazon before completion.` }
  ];

  return (
    <div className="relative">
      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white/90 backdrop-blur-md border-t border-slate-200 lg:hidden flex items-center justify-between gap-4">
        <div className="flex flex-col">
          <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Best Price Today:</span>
          <span className="text-lg font-black text-slate-900">${product.price.toFixed(2)}</span>
        </div>
        <a 
          href={getAffiliateLink(product.asin)} 
          target="_blank" 
          rel="nofollow sponsored"
          className="flex-grow py-3 px-6 bg-amber-500 text-slate-900 font-black rounded-xl text-center text-sm"
        >
          CHECK ON AMAZON →
        </a>
      </div>

      <header className="py-12 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest mb-8">
             <Link to="/" className="hover:text-amber-600">Home</Link>
             <ChevronRight className="w-3 h-3" />
             <Link to={`/category/${product.category}`} className="hover:text-amber-600">{product.categoryName}</Link>
             <ChevronRight className="w-3 h-3" />
             <span className="text-slate-900">{product.name}</span>
          </nav>
          
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-2/3">
              <div className="flex items-center gap-3 mb-6">
                {product.isEditorChoice && <EditorChoiceBadge />}
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Published on {product.publishedAt}</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-black text-slate-900 leading-tight mb-8">
                Best {product.name} Review in 2025: <span className="italic text-amber-500 underline decoration-slate-900">Is It Worth It?</span>
              </h1>
              <div className="flex items-center gap-6 mb-8 p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
                <div className="text-center md:pr-6 md:border-r border-slate-100">
                  <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Our Score</div>
                   <div className="text-4xl font-black text-amber-500 leading-none">{product.ourScore}<span className="text-sm">/10</span></div>
                </div>
                <div className="flex-grow">
                   <div className="text-xs font-bold text-slate-900 mb-2">Editor's Verdict:</div>
                   <p className="text-sm text-slate-500 italic">"Highly recommended for those seeking {product.tags[0]} features without compromising on {product.tags[1]} quality."</p>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/3">
              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50 sticky top-24">
                <img src={product.images[0]} alt={product.name} className="w-full aspect-square object-cover rounded-2xl mb-6 shadow-md" />
                <PriceBadge price={product.price} originalPrice={product.originalPrice} className="mb-4" />
                <AffiliateButton url={getAffiliateLink(product.asin)} className="w-full mb-4" />
                <p className="text-[10px] text-center text-slate-400 font-bold uppercase tracking-widest">
                  Prices fluctuate. Check current Amazon status.
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-16">
           <article className="lg:w-2/3 space-y-12">
              <section className="prose prose-slate max-w-none">
                 <h2 className="text-2xl font-black text-slate-900 uppercase tracking-widest border-b-4 border-amber-400 inline-block mb-8">Product Overview</h2>
                 <p className="text-lg text-slate-600 leading-relaxed">
                   {product.fullReview} {product.shortDescription} Whether you're a professional or an enthusiast, the {product.name} offers a compelling mix of features that justify its position in the market.
                 </p>
              </section>

              <section>
                 <h2 className="text-2xl font-black text-slate-900 uppercase tracking-widest border-b-4 border-amber-400 inline-block mb-8">The Quick Take: Pros & Cons</h2>
                 <ProsConsTable pros={product.pros} cons={product.cons} />
              </section>

              <section className="bg-slate-50 p-10 rounded-3xl border border-slate-200">
                 <h2 className="text-2xl font-black text-slate-900 uppercase tracking-widest border-b-4 border-amber-400 inline-block mb-8">Detailed Specifications</h2>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries(product.specs).map(([key, value]) => (
                      <div key={key} className="flex justify-between p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                        <span className="font-bold text-slate-500 uppercase text-[10px] tracking-widest">{key}</span>
                        <span className="font-black text-slate-900 text-sm">{value}</span>
                      </div>
                    ))}
                 </div>
              </section>

              <section className="p-8 border-2 border-dashed border-amber-400 rounded-3xl bg-amber-50/50">
                 <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="w-32 h-32 bg-amber-500 rounded-full flex items-center justify-center text-slate-900 font-black text-3xl shrink-0">
                      #{product.id}
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-slate-900 mb-2 italic">Who Is This For?</h3>
                      <p className="text-slate-600 leading-relaxed mb-6">
                        If you've been looking for a reliable {product.categoryName} solution that doesn't break the bank while maintaining premium performance, the {product.name} is built exactly for you.
                      </p>
                      <AffiliateButton url={getAffiliateLink(product.asin)} text="View This Deal on Amazon" />
                    </div>
                 </div>
              </section>

              <section>
                 <h2 className="text-2xl font-black text-slate-900 uppercase tracking-widest border-b-4 border-amber-400 inline-block mb-8">Common Questions (FAQ)</h2>
                 <div className="space-y-4">
                    {faqs.map((faq, i) => (
                      <div key={i} className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
                         <h4 className="font-black text-slate-900 mb-2 flex items-center gap-2">
                           <AlertCircle className="w-4 h-4 text-amber-500" /> {faq.q}
                         </h4>
                         <p className="text-sm text-slate-500 leading-relaxed">{faq.a}</p>
                      </div>
                    ))}
                 </div>
              </section>
           </article>

           <aside className="lg:w-1/3 space-y-8">
              <div className="p-8 bg-slate-900 text-white rounded-3xl">
                 <h4 className="text-sm font-black uppercase tracking-widest text-amber-500 mb-6">Related Guides</h4>
                 <ul className="space-y-4">
                    {['Best Noise Cancelling Tech', 'Top 10 Office Gadgets', 'Budget Prime Day Picks'].map((guide, i) => (
                      <li key={i}>
                        <Link to="/" className="group flex items-center justify-between text-sm font-bold border-b border-slate-800 pb-3 hover:text-amber-500 transition-colors">
                          {guide} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </li>
                    ))}
                 </ul>
              </div>
              
              <div className="p-8 bg-white border border-slate-200 rounded-3xl text-center">
                 <Share2 className="w-8 h-8 text-slate-300 mx-auto mb-4" />
                 <h4 className="font-black text-slate-900 mb-2">Help a Friend Out</h4>
                 <p className="text-xs text-slate-400 mb-6 font-bold uppercase tracking-wide">Share this review with your shopping circle.</p>
                 <div className="flex justify-center gap-3">
                    <button className="w-10 h-10 bg-slate-100 hover:bg-slate-200 rounded-full flex items-center justify-center transition-colors">f</button>
                    <button className="w-10 h-10 bg-slate-100 hover:bg-slate-200 rounded-full flex items-center justify-center transition-colors">t</button>
                    <button className="w-10 h-10 bg-slate-100 hover:bg-slate-200 rounded-full flex items-center justify-center transition-colors">×</button>
                 </div>
              </div>
           </aside>
        </div>
      </main>
    </div>
  );
}
