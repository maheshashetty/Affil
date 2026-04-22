import * as React from 'react';
import { Check, X } from 'lucide-react';
import { cn } from '../lib/utils';

interface ProsConsProps {
  pros: string[];
  cons: string[];
  className?: string;
}

export function ProsConsTable({ pros, cons, className }: ProsConsProps) {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-white border border-slate-200 rounded-xl shadow-sm", className)}>
      <div className="space-y-4">
        <h4 className="flex items-center gap-2 text-lg font-bold text-green-700">
          <Check className="w-5 h-5" /> Pros
        </h4>
        <ul className="space-y-2">
          {pros.map((pro, i) => (
            <li key={i} className="flex gap-3 text-slate-600 text-sm leading-relaxed">
              <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-green-500 mt-2" />
              {pro}
            </li>
          ))}
        </ul>
      </div>
      <div className="space-y-4">
        <h4 className="flex items-center gap-2 text-lg font-bold text-red-700">
          <X className="w-5 h-5" /> Cons
        </h4>
        <ul className="space-y-2">
          {cons.map((con, i) => (
            <li key={i} className="flex gap-3 text-slate-600 text-sm leading-relaxed">
              <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-red-400 mt-2" />
              {con}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function EditorChoiceBadge({ className }: { className?: string }) {
  return (
    <div className={cn("inline-flex items-center gap-1.5 px-3 py-1 bg-amber-100 text-amber-700 border border-amber-200 rounded-full text-xs font-bold uppercase tracking-wider", className)}>
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
      </span>
      Editor's Choice
    </div>
  );
}
