import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '4xl';
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  subtitle,
  children,
  maxWidth = 'lg'
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const maxWStyles = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
    '4xl': 'max-w-4xl'
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6">
          <div className="flex min-h-full items-center justify-center">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/60 dark:bg-[#020817]/85 backdrop-blur-md transition-opacity"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className={`relative w-full ${maxWStyles[maxWidth]} my-8 rounded-3xl bg-white dark:bg-[#081A2D] border border-slate-200/90 dark:border-[#0EA5FF]/30 p-6 sm:p-8 shadow-2xl dark:shadow-[0_20px_60px_-15px_rgba(14,165,255,0.25)] backdrop-blur-2xl z-10 text-left text-slate-800 dark:text-[#E6F1FF]`}
          >
            {/* Top Glow Bar */}
            <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

            {/* Header */}
            <div className="flex items-start justify-between mb-6">
              <div>
                {title && <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white font-display">{title}</h3>}
                {subtitle && <p className="mt-1 text-sm text-slate-600 dark:text-[#A9BDD1]">{subtitle}</p>}
              </div>
              <button
                id="modal-close-button"
                onClick={onClose}
                className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 border border-slate-200 dark:bg-slate-800/50 dark:hover:bg-slate-700 dark:text-[#A9BDD1] dark:hover:text-white dark:border-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="relative">
              {children}
            </div>
          </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};
