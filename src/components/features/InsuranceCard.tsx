import React from 'react';
import { Link } from 'react-router-dom';
import { InsuranceProduct } from '../../types';
import { ArrowRight, HeartPulse, ShieldCheck, Home, Car, Truck } from 'lucide-react';
import { MediaListCard } from '../ui/MediaListCard';

interface InsuranceCardProps {
  product: InsuranceProduct;
  onApply?: (productSlug: string) => void;
}

const styleFor = (category: InsuranceProduct['category']) => {
  switch (category) {
    case 'health':
      return { icon: <HeartPulse className="w-5 h-5" />, accent: 'from-rose-500 to-pink-600' };
    case 'property':
      return { icon: <Home className="w-5 h-5" />, accent: 'from-orange-500 to-amber-500' };
    case 'auto':
      return { icon: <Car className="w-5 h-5" />, accent: 'from-blue-500 to-sky-400' };
    case 'commercial':
      return { icon: <Truck className="w-5 h-5" />, accent: 'from-teal-500 to-emerald-600' };
    default:
      return { icon: <ShieldCheck className="w-5 h-5" />, accent: 'from-emerald-500 to-green-600' };
  }
};

export const InsuranceCard: React.FC<InsuranceCardProps> = ({ product, onApply }) => {
  const { icon, accent } = styleFor(product.category);

  return (
    <MediaListCard
      icon={icon}
      accent={accent}
      title={product.name}
      subtitle={product.tagline}
      image={{ src: product.imageUrl }}
      items={[
        `Cover ${product.coverageUpTo}`,
        product.startingPremium,
        `Claims settled ${product.claimSettlementRatio}`
      ]}
      footer={
        <div className="flex items-center justify-between gap-2">
          <Link
            to={`/insurance/${product.slug}`}
            className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-sky-700 dark:text-cyan-300 hover:text-sky-900 dark:hover:text-white transition-colors"
          >
            Coverage Details
            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </Link>

          <button
            type="button"
            onClick={() => onApply?.(product.slug)}
            className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-[#06B6D4] to-[#0EA5FF] hover:from-[#22D3EE] hover:to-[#0EA5FF] text-white text-[11px] font-semibold shadow-sm transition-all cursor-pointer shrink-0"
          >
            Get Quote
          </button>
        </div>
      }
    />
  );
};
