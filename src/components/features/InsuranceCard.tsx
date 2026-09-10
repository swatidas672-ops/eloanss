import React from 'react';
import { Link } from 'react-router-dom';
import { InsuranceProduct } from '../../types';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { Badge } from '../ui/Badge';

interface InsuranceCardProps {
  product: InsuranceProduct;
  onApply?: (productSlug: string) => void;
}

export const InsuranceCard: React.FC<InsuranceCardProps> = ({ product, onApply }) => {
  return (
    <div className="group relative rounded-2xl overflow-hidden bg-white dark:bg-[#0A192B]/70 border border-slate-200/90 dark:border-[#64B4FF]/15 hover:border-cyan-400 dark:hover:border-[#22D3EE]/50 shadow-xs dark:shadow-none transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl dark:hover:shadow-[0_15px_40px_-10px_rgba(34,211,238,0.25)] flex flex-col h-full text-slate-800 dark:text-[#E6F1FF]">
      {/* Image Banner */}
      <div className="relative h-32 w-full overflow-hidden bg-slate-100 dark:bg-slate-900">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent dark:from-[#0A192B] dark:via-[#0A192B]/50 dark:to-transparent" />

        <div className="absolute top-3 left-3">
          <Badge variant="cyan" dot={false}>
            {product.category.toUpperCase()}
          </Badge>
        </div>

        <div className="absolute bottom-2 right-3 px-2.5 py-0.5 rounded-lg bg-white/90 dark:bg-[#06111F]/80 border border-slate-200 dark:border-emerald-400/30 backdrop-blur-md text-xs font-mono font-bold text-emerald-700 dark:text-emerald-300 shadow-md flex items-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
          <span>CSR: {product.claimSettlementRatio}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow justify-between relative z-10">
        <div>
          <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors duration-300 font-display">
            {product.name}
          </h3>
          <p className="text-xs font-semibold text-cyan-600 dark:text-cyan-400/90 mt-1 uppercase tracking-wider">
            {product.tagline}
          </p>
          <p className="text-[13px] text-slate-600 dark:text-[#A9BDD1] mt-2 line-clamp-2 leading-relaxed">
            {product.shortDesc}
          </p>

          {/* Key coverage info */}
          <div className="mt-3 pt-3 border-t border-slate-200 dark:border-slate-800/80 space-y-1 text-[11px] text-slate-600 dark:text-slate-300">
            <div className="flex justify-between items-center">
              <span className="text-slate-500 dark:text-slate-400">Sum Insured:</span>
              <span className="font-semibold text-slate-900 dark:text-white">{product.coverageUpTo}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-500 dark:text-slate-400">Starting Premium:</span>
              <span className="font-semibold text-cyan-600 dark:text-cyan-300">{product.startingPremium}</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between gap-3">
          <Link
            to={`/insurance/${product.slug}`}
            className="text-xs font-semibold text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 flex items-center gap-1.5 group/link transition-colors"
          >
            <span>Coverage Details</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
          </Link>

          <button
            type="button"
            onClick={() => onApply?.(product.slug)}
            className="px-4 py-1.5 rounded-lg bg-gradient-to-r from-[#06B6D4] to-[#0EA5FF] text-white text-xs font-semibold hover:from-[#22D3EE] hover:to-[#0EA5FF] shadow-sm transition-all shadow-cyan-500/20 cursor-pointer"
          >
            Get Quote
          </button>
        </div>
      </div>
    </div>
  );
};
