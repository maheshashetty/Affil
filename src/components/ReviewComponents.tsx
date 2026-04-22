import * as React from 'react';
import { Star, StarHalf } from 'lucide-react';
import { cn } from '../lib/utils';

interface StarRatingProps {
  rating: number;
  count?: number;
  className?: string;
}

export function StarRating({ rating, count, className }: StarRatingProps) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  return (
    <div className={cn("flex items-center gap-1.5", className)}>
      <div className="flex text-amber-500">
        {[...Array(5)].map((_, i) => {
          if (i < fullStars) return <Star key={i} className="w-4 h-4 fill-current" />;
          if (i === fullStars && hasHalfStar) return <StarHalf key={i} className="w-4 h-4 fill-current" />;
          return <Star key={i} className="w-4 h-4 text-slate-300" />;
        })}
      </div>
      {count !== undefined && (
        <span className="text-sm text-slate-500 font-medium">
          ({count.toLocaleString()})
        </span>
      )}
    </div>
  );
}

interface PriceBadgeProps {
  price: number;
  originalPrice?: number;
  className?: string;
}

export function PriceBadge({ price, originalPrice, className }: PriceBadgeProps) {
  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

  return (
    <div className={cn("inline-flex items-center gap-2", className)}>
      <span className="text-2xl font-bold text-slate-900 font-mono tracking-tight">
        ${price.toFixed(2)}
      </span>
      {originalPrice && (
        <>
          <span className="text-sm text-slate-400 line-through">
            ${originalPrice.toFixed(2)}
          </span>
          <span className="bg-red-100 text-red-600 text-xs font-bold px-2 py-0.5 rounded-full">
            -{discount}%
          </span>
        </>
      )}
    </div>
  );
}

interface AffiliateButtonProps {
  url: string;
  className?: string;
  text?: string;
}

export function AffiliateButton({ url, className, text = "Check Latest Price →" }: AffiliateButtonProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="nofollow sponsored"
      className={cn(
        "inline-flex items-center justify-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold rounded-lg transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-amber-500/20 w-full md:w-auto",
        className
      )}
    >
      <span className="flex items-center gap-2">
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.012 17.525c-1.896.792-4.8.984-6.384.984-2.184 0-5.748-.612-7.512-2.136-.216-.168-.18-.324.084-.312 2.652.12 7.776.624 9.156.624 1.296 0 3.732-.264 4.86-.888.24-.132.396-.024.192.192-.096.096-.288.588-.396.536M22.956 18.065c-.24.708-1.572.636-2.22.612-.66-.024-1.92.156-2.136.42-.312.384.084 1.152.06 1.488-.024.288-.3.312-.456.096-.24-.312-.48-1.284-.132-1.848.24-.396.696-.648 1.152-.78.696-.192 2.064-.204 2.112-.612.048-.42-.516-.948-.792-1.332-.168-.24.048-.48.264-.324.36.264 1.344 1.272 1.14 2.28z"/>
        </svg>
        {text}
      </span>
    </a>
  );
}
