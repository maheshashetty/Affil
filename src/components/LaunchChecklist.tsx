import * as React from 'react';
import { CheckSquare, ListTodo, AlertTriangle, ShieldCheck, Search, Zap, Mail, Rocket } from 'lucide-react';
import { cn } from '../lib/utils';

interface ChecklistItem {
  id: string;
  category: 'Legal' | 'Technical' | 'Content' | 'SEO';
  text: string;
  isDone: boolean;
}

export function LaunchChecklist() {
  const [items, setItems] = React.useState<ChecklistItem[]>([
    { id: '1', category: 'Legal', text: 'FTC Disclosure visible on ALL pages', isDone: true },
    { id: '2', category: 'Legal', text: 'Amazon Associates disclosure in footer', isDone: true },
    { id: '3', category: 'Technical', text: 'rel="nofollow sponsored" on all affiliate links', isDone: true },
    { id: '4', category: 'Technical', text: 'All links open in new tab', isDone: true },
    { id: '5', category: 'Technical', text: '404 page functional', isDone: true },
    { id: '6', category: 'Content', text: 'Minimum 5 products reviewed', isDone: true },
    { id: '7', category: 'SEO', text: 'Sitemap.xml generated', isDone: false },
    { id: '8', category: 'SEO', text: 'Meta titles and descriptions set', isDone: false },
  ]);

  const toggleItem = (id: string) => {
    setItems(items.map(item => item.id === id ? { ...item, isDone: !item.isDone } : item));
  };

  const progress = Math.round((items.filter(i => i.isDone).length / items.length) * 100);

  return (
    <div className="container mx-auto px-4 py-20 max-w-4xl">
       <div className="bg-slate-900 rounded-[3rem] p-12 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500 rounded-full blur-[120px] opacity-20 -mr-20 -mt-20"></div>
          
          <div className="relative z-10">
            <h1 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter mb-4">
              Launch <span className="text-amber-500 underline">Checklist</span>
            </h1>
            <p className="text-slate-400 font-bold uppercase tracking-widest text-xs mb-10">Compliance & Performance Audit Tool</p>
            
            <div className="mb-12">
               <div className="flex justify-between items-center mb-4">
                  <span className="text-sm font-black uppercase tracking-widest">Readiness Progress</span>
                  <span className="text-3xl font-black text-amber-500 italic">{progress}%</span>
               </div>
               <div className="h-4 bg-slate-800 rounded-full overflow-hidden border border-slate-700 p-1">
                  <div className="h-full bg-amber-500 rounded-full transition-all duration-500" style={{ width: `${progress}%` }}></div>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               {['Legal', 'Technical', 'Content', 'SEO'].map(cat => (
                 <div key={cat} className="space-y-4">
                    <h3 className="text-xs font-black text-amber-500 uppercase tracking-[0.2em] flex items-center gap-2 mb-6">
                       <ListTodo className="w-4 h-4" /> {cat}
                    </h3>
                    <div className="space-y-2">
                       {items.filter(i => i.category === cat).map(item => (
                         <div 
                           key={item.id} 
                           onClick={() => toggleItem(item.id)}
                           className={cn(
                             "flex items-start gap-3 p-4 rounded-xl cursor-pointer border transition-all",
                             item.isDone 
                               ? "bg-slate-800/50 border-slate-700 text-slate-400" 
                               : "bg-slate-800 border-amber-500/20 text-white hover:border-amber-400"
                           )}
                         >
                            <div className={cn(
                              "w-5 h-5 rounded flex items-center justify-center shrink-0 mt-0.5",
                              item.isDone ? "bg-amber-500 text-slate-900" : "border-2 border-slate-600"
                            )}>
                               {item.isDone && <CheckSquare className="w-4 h-4" />}
                            </div>
                            <span className={cn("text-xs font-bold", item.isDone && "line-through")}>{item.text}</span>
                         </div>
                       ))}
                    </div>
                 </div>
               ))}
            </div>

            <div className="mt-20 p-8 border-2 border-dashed border-slate-700 rounded-[2.5rem] bg-slate-950/50 text-center">
               <Rocket className={cn("w-16 h-16 mx-auto mb-6 transition-all duration-700", progress === 100 ? "text-amber-500 animate-bounce" : "text-slate-800")} />
               <h3 className="text-2xl font-black mb-2 uppercase italic">Ready For Takeoff?</h3>
               <p className="text-sm text-slate-500 mb-8 max-w-sm mx-auto font-medium leading-relaxed">Ensure all checkboxes are green to maximize affiliate conversion and search engine indexability.</p>
               <button 
                 disabled={progress < 100}
                 className={cn(
                   "px-12 py-4 font-black rounded-xl transition-all shadow-xl",
                   progress === 100 ? "bg-amber-500 text-slate-900 hover:bg-amber-400 shadow-amber-500/20" : "bg-slate-800 text-slate-600 cursor-not-allowed"
                 )}
               >
                 {progress === 100 ? 'LAUNCH SITE →' : 'COMPLETE ALL STEPS'}
               </button>
            </div>
          </div>
       </div>
    </div>
  );
}
