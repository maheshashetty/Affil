import * as React from 'react';
import { ShieldCheck, Mail, Info, FileText, CheckCircle2, BarChart3, TrendingUp, MousePointer2 } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

export function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-20 max-w-4xl">
      <h1 className="text-5xl font-black text-slate-900 mb-8 italic uppercase text-center tracking-tighter">
        About <span className="text-amber-500">BestPicksHub</span>
      </h1>
      <div className="prose prose-slate lg:prose-lg mx-auto space-y-8">
        <p className="text-xl text-slate-600 leading-relaxed font-medium">
          Founded in 2025, BestPicksHub was created with one simple goal: to help people buy the right things, the first time. We believe the internet has enough advertisements masquerading as reviews.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-12">
           <div className="p-8 bg-slate-50 rounded-3xl border border-slate-200">
              <ShieldCheck className="w-10 h-10 text-amber-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Independent Research</h3>
              <p className="text-slate-500 text-sm">We don't accept free review samples from brands. We purchase every product we test with our own money.</p>
           </div>
           <div className="p-8 bg-slate-50 rounded-3xl border border-slate-200">
              <CheckCircle2 className="w-10 h-10 text-amber-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Rigorous Testing</h3>
              <p className="text-slate-500 text-sm">Every product undergoes a 47-point inspection process and a 14-day real-world stress test.</p>
           </div>
        </div>
        <h2 className="text-3xl font-black italic uppercase">Editorial Policy</h2>
        <p className="text-slate-600 leading-relaxed">
          Our writers and editors are specialists in their respective categories. Before a review is published, it must be vetted by a secondary expert for accuracy and bias. We prioritize longevity, repairability, and actual performance over marketing specs.
        </p>
        <div className="bg-slate-900 rounded-[2.5rem] p-12 text-white text-center">
           <Mail className="w-12 h-12 text-amber-500 mx-auto mb-6" />
           <h3 className="text-2xl font-black mb-4">Questions? Reach Out.</h3>
           <p className="text-slate-400 mb-8 max-w-md mx-auto">Have a product you want us to test or a correction to report? Our team is standing by.</p>
           <a href="mailto:hello@bestpickshub.com" className="inline-block px-10 py-4 bg-amber-500 text-slate-900 font-black rounded-xl hover:bg-amber-400 transition-colors">
              CONTACT US →
           </a>
        </div>
      </div>
    </div>
  );
}

export function DisclosurePage() {
  return (
    <div className="container mx-auto px-4 py-20 max-w-3xl">
      <h1 className="text-4xl font-black text-slate-900 mb-8 italic uppercase tracking-tighter">
        Affiliate <span className="text-amber-500">Disclosure</span>
      </h1>
      <div className="prose prose-slate leading-relaxed space-y-6 text-slate-600">
        <div className="p-6 bg-amber-50 border-2 border-dashed border-amber-200 rounded-2xl mb-8">
           <h4 className="font-black text-amber-800 uppercase tracking-widest text-xs mb-2 flex items-center gap-2">
             <Info className="w-4 h-4" /> FTC Compliance Statement
           </h4>
           <p className="text-sm italic font-medium">"As an Amazon Associate, we earn from qualifying purchases. This means if you click on a link and make a purchase, we may receive a small commission at no extra cost to you."</p>
        </div>
        <p>
          BestPicksHub participates in various affiliate marketing programs, most notably the Amazon Services LLC Associates Program. This is an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com.
        </p>
        <h2 className="text-2xl font-black text-slate-900 uppercase italic border-b-2 border-slate-100 pb-2">How It Works</h2>
        <p>
          When you click an Amazon link on our site, a tracking cookie is temporarily used to correlate any resulting purchase with our referral. This does not increase the price you pay.
        </p>
        <h2 className="text-2xl font-black text-slate-900 uppercase italic border-b-2 border-slate-100 pb-2">Our Integrity</h2>
        <p>
          Affiliate commissions allow us to remain independent. Brands cannot buy a spot on our lists or influence the final verdict of our reviews. Our first priority is always providing accurate and helpful information to you, our reader.
        </p>
      </div>
    </div>
  );
}

const MOCK_STATS = [
  { name: 'Mon', clicks: 450, conversions: 42 },
  { name: 'Tue', clicks: 520, conversions: 48 },
  { name: 'Wed', clicks: 610, conversions: 55 },
  { name: 'Thu', clicks: 580, conversions: 51 },
  { name: 'Fri', clicks: 750, conversions: 68 },
  { name: 'Sat', clicks: 920, conversions: 88 },
  { name: 'Sun', clicks: 880, conversions: 82 },
];

const CATEGORY_DATA = [
  { name: 'Tech', value: 45, color: '#f59e0b' },
  { name: 'Kitchen', value: 25, color: '#0f172a' },
  { name: 'Fitness', value: 15, color: '#64748b' },
  { name: 'Other', value: 15, color: '#e2e8f0' },
];

export function AdminDashboard() {
  return (
    <div className="bg-slate-50 min-h-screen pt-12 pb-24">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <h1 className="text-3xl font-black text-slate-900 italic uppercase">
            Performance <span className="text-amber-500">Dashboard</span>
          </h1>
          <div className="flex bg-white rounded-xl border border-slate-200 p-1">
             <button className="px-4 py-2 bg-slate-900 text-white font-bold rounded-lg text-xs">WEEKLY</button>
             <button className="px-4 py-2 text-slate-400 font-bold hover:text-slate-900 text-xs">MONTHLY</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
           {[
             { label: 'Total Clicks', val: '5,124', change: '+12%', icon: MousePointer2 },
             { label: 'Total CTR', val: '8.4%', change: '+0.5%', icon: TrendingUp },
             { label: 'Comm. Est.', val: '$1,240', change: '+18%', icon: BarChart3 },
             { label: 'Best Day', val: 'Saturday', change: '920 Clicks', icon: CheckCircle2 },
           ].map((stat, i) => (
             <div key={i} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <stat.icon className="w-6 h-6 text-amber-500" />
                  <span className="text-[10px] font-black text-green-500 bg-green-50 px-2 py-0.5 rounded-full">{stat.change}</span>
                </div>
                <div className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">{stat.label}</div>
                <div className="text-3xl font-black text-slate-900">{stat.val}</div>
             </div>
           ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
           <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm min-h-[400px]">
              <h3 className="text-lg font-black italic mb-8 uppercase">Click Traffic (7 Days)</h3>
              <ResponsiveContainer width="100%" height={300}>
                 <BarChart data={MOCK_STATS}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                    <Tooltip cursor={{fill: '#f8fafc'}} contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'}} />
                    <Bar dataKey="clicks" fill="#f59e0b" radius={[4, 4, 0, 0]} />
                 </BarChart>
              </ResponsiveContainer>
           </div>
           <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm min-h-[400px]">
              <h3 className="text-lg font-black italic mb-8 uppercase">Conversion by Category</h3>
              <div className="flex flex-col md:flex-row items-center gap-12">
                 <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                       <Pie data={CATEGORY_DATA} cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                          {CATEGORY_DATA.map((entry, index) => (
                             <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                       </Pie>
                       <Tooltip />
                    </PieChart>
                 </ResponsiveContainer>
                 <div className="w-full md:w-1/2 space-y-4">
                    {CATEGORY_DATA.map((cat, i) => (
                       <div key={i} className="flex items-center justify-between border-b pb-2">
                          <div className="flex items-center gap-2">
                             <div className="w-3 h-3 rounded-full" style={{backgroundColor: cat.color}}></div>
                             <span className="text-sm font-bold text-slate-700">{cat.name}</span>
                          </div>
                          <span className="text-sm font-black text-slate-900">{cat.value}%</span>
                       </div>
                    ))}
                 </div>
              </div>
           </div>
        </div>

        <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-sm overflow-hidden">
           <div className="p-8 border-b border-slate-200 bg-slate-50 flex items-center justify-between">
              <h3 className="text-lg font-black italic uppercase">Top Clicked Products</h3>
              <button className="text-xs font-black text-amber-600 underline">EXPORT CSV</button>
           </div>
           <div className="overflow-x-auto">
              <table className="w-full text-left">
                 <thead>
                    <tr className="text-[10px] font-black uppercase tracking-widest text-slate-400 border-b">
                       <th className="px-8 py-4">Product Name</th>
                       <th className="px-8 py-4">Clicks</th>
                       <th className="px-8 py-4">CTR</th>
                       <th className="px-8 py-4">Ref. Page</th>
                    </tr>
                 </thead>
                 <tbody className="divide-y divide-slate-100 italic font-medium text-slate-600">
                    {[
                       { name: 'Sony WH-1000XM5', clicks: 1240, ctr: '12.4%', ref: '/review/sony-wh1000...' },
                       { name: 'Ninja AF101 Air Fryer', clicks: 980, ctr: '10.2%', ref: '/category/kitchen' },
                       { name: 'Manduka PRO Yoga Mat', clicks: 750, ctr: '8.1%', ref: '/best-of-2025' },
                       { name: 'Hydro Flask 32oz', clicks: 420, ctr: '4.5%', ref: '/category/outdoor' },
                    ].map((row, i) => (
                       <tr key={i} className="hover:bg-slate-50">
                          <td className="px-8 py-4 font-black text-slate-900">{row.name}</td>
                          <td className="px-8 py-4">{row.clicks}</td>
                          <td className="px-8 py-4 text-green-600 font-black">{row.ctr}</td>
                          <td className="px-8 py-4 text-xs font-mono">{row.ref}</td>
                       </tr>
                    ))}
                 </tbody>
              </table>
           </div>
        </div>

        <div className="mt-12 p-10 bg-amber-500 rounded-[2.5rem] flex flex-col md:flex-row items-center justify-between gap-8">
           <div>
              <h4 className="text-2xl font-black text-slate-900 mb-2 italic">Ready to Scale?</h4>
              <p className="text-slate-900/70 font-bold">You currently have 12 active deal trackers running.</p>
           </div>
           <button className="px-10 py-4 bg-slate-900 text-white font-black rounded-xl hover:bg-slate-800 transition-all shadow-xl shadow-slate-950/20 active:scale-95">
              GENERATE NEW TRACKER →
           </button>
        </div>
      </div>
    </div>
  );
}
