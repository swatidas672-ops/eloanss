import React from 'react';
import { Link } from 'react-router-dom';
import { LoanProduct } from '../../types';
import { ArrowRight, Home, Briefcase, Car, Coins, Landmark } from 'lucide-react';
import { MediaListCard } from '../ui/MediaListCard';

interface ProductCardProps {
  product: LoanProduct;
  onApply?: (productSlug: string) => void;
}

/** Icon and accent per loan category, so the tile reads at a glance. */
const styleFor = (category: LoanProduct['category']) => {
  switch (category) {
    case 'property':
      return { icon: <Home className="w-5 h-5" />, accent: 'from-orange-500 to-amber-500' };
    case 'business':
      return { icon: <Briefcase className="w-5 h-5" />, accent: 'from-purple-500 to-fuchsia-600' };
    case 'auto':
      return { icon: <Car className="w-5 h-5" />, accent: 'from-blue-500 to-sky-400' };
    case 'specialized':
      return { icon: <Landmark className="w-5 h-5" />, accent: 'from-teal-500 to-emerald-600' };
    default:
      return { icon: <Coins className="w-5 h-5" />, accent: 'from-sky-500 to-blue-500' };
  }
};

export const ProductCard: React.FC<ProductCardProps> = ({ product, onApply }) => {
  const { icon, accent } = styleFor(product.category);

  return (
    <MediaListCard
      icon={icon}
      accent={accent}
      title={product.name}
      subtitle={product.tagline}
      image={{ src: product.imageUrl }}
      items={[
        product.interestRate,
        product.tenure,
        product.maxAmount,
        product.processingTime
      ]}
      footer={
        <div className="flex items-center justify-between gap-2">
          <Link
            to={`/loans/${product.slug}`}
            className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-sky-700 dark:text-cyan-300 hover:text-sky-900 dark:hover:text-white transition-colors"
          >
            Details &amp; Eligibility
            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </Link>

          <button
            type="button"
            onClick={() => onApply?.(product.slug)}
            className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-600 hover:to-cyan-600 text-white text-[11px] font-semibold shadow-sm transition-all cursor-pointer shrink-0"
          >
            Apply Now
          </button>
        </div>
      }
    />
  );
};
