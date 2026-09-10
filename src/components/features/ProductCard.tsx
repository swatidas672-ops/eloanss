import React from 'react';
import { Link } from 'react-router-dom';
import { LoanProduct } from '../../types';
import { ArrowRight, Zap, Clock } from 'lucide-react';
import { Badge } from '../ui/Badge';

interface ProductCardProps {
  product: LoanProduct;
  onApply?: (productSlug: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onApply }) => {
  return (
    <div className="group relative rounded-2xl overflow-hidden bg-white dark:bg-[#0A192B]/70 border border-slate-200/90 dark:border-[#64B4FF]/15 hover:border-sky-400 dark:hover:border-[#0EA5FF]/50 shadow-xs dark:shadow-none transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl dark:hover:shadow-[0_15px_40px_-10px_rgba(14,165,255,0.3)] flex flex-col h-full text-slate-800 dark:text-[#E6F1FF]">
      {/* Top Image Container with Cinematic Zoom & Gradient Overlay */}
      <div className="relative h-32 w-full overflow-hidden bg-slate-100 dark:bg-slate-900">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          loading="lazy"
        />
        {/* Cinematic Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent dark:from-[#0A192B] dark:via-[#0A192B]/50 dark:to-transparent" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          <Badge variant="blue" dot={false}>
            {product.category.toUpperCase()}
          </Badge>
        </div>

        {/* Floating Rate Tag */}
        <div className="absolute bottom-2 right-3 px-2.5 py-0.5 rounded-lg bg-white/90 dark:bg-[#06111F]/80 border border-slate-200 dark:border-cyan-400/30 backdrop-blur-md text-xs font-mono font-bold text-sky-700 dark:text-cyan-300 shadow-md">
          {product.interestRate}
        </div>
      </div>

      {/* Content Area */}
      <div className="p-5 flex flex-col flex-grow justify-between relative z-10">
        <div>
          <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-cyan-300 transition-colors duration-300 font-display">
            {product.name}
          </h3>
          <p className="text-xs font-semibold text-sky-600 dark:text-sky-400/90 mt-1 uppercase tracking-wider">
            {product.tagline}
          </p>
          <p className="text-[13px] text-slate-600 dark:text-[#A9BDD1] mt-2 line-clamp-2 leading-relaxed">
            {product.shortDesc}
          </p>

          {/* Quick Metrics */}
          <div className="mt-4 grid grid-cols-2 gap-2 pt-3 border-t border-slate-200 dark:border-slate-800/80 text-[11px]">
            <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300">
              <Clock className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400 shrink-0" />
              <span className="truncate">{product.processingTime}</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300">
              <Zap className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 shrink-0" />
              <span className="truncate">{product.maxAmount}</span>
            </div>
          </div>
        </div>

        {/* Action Controls */}
        <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between gap-3">
          <Link
            to={`/loans/${product.slug}`}
            className="text-xs font-semibold text-sky-600 dark:text-cyan-400 hover:text-sky-700 dark:hover:text-cyan-300 flex items-center gap-1.5 group/link transition-colors"
          >
            <span>Details & Eligibility</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
          </Link>

          <button
            type="button"
            onClick={() => onApply?.(product.slug)}
            className="px-4 py-1.5 rounded-lg bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-600 hover:to-cyan-600 text-white text-xs font-semibold shadow-sm transition-all cursor-pointer"
          >
            Apply Now
          </button>
        </div>
      </div>

      {/* Ambient Reflection on hover */}
      <div className="absolute inset-0 border border-sky-400/0 dark:border-[#0EA5FF]/0 group-hover:border-sky-400/30 dark:group-hover:border-[#0EA5FF]/30 rounded-2xl pointer-events-none transition-colors duration-500" />
    </div>
  );
};
