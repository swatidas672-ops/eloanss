import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Search, 
  ChevronRight, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight, 
  TrendingUp, 
  MapPin, 
  Send,
  Sun,
  Moon,
  Calculator
} from 'lucide-react';
import { Button } from '../ui/Button';
import { mainNavItems } from '../../data/navigation';
import eloanssLogo from '../../assets/brand/eloanss-logo.png';
import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from '../../context/ThemeContext';

interface NavbarProps {
  onOpenApply: () => void;
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenApply, onOpenSearch }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 dark:bg-[#070D1B]/90 backdrop-blur-2xl border-b border-slate-200/90 dark:border-[#0EA5FF]/20 shadow-sm dark:shadow-[0_10px_30px_rgba(2,8,23,0.8)] py-3'
            : 'bg-transparent py-4 sm:py-5 border-b border-slate-200/40 dark:border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* LEFT: brand logo */}
          <Link to="/" className="flex items-center group shrink-0" aria-label="ELOANSS home">
            {/* The supplied artwork is dark type on white, so it needs a light
                plaque to stay legible against the dark navy header. */}
            <span className="inline-flex items-center rounded-xl bg-white px-2.5 py-1.5 shadow-xs ring-1 ring-slate-200/80 dark:ring-white/10 transition-shadow group-hover:shadow-md">
              <img
                src={eloanssLogo}
                alt="ELOANSS - We Are Provide All Types of Loans"
                className="h-8 sm:h-9 w-auto object-contain"
              />
            </span>
          </Link>

          {/* CENTER: Main Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1 bg-slate-100/90 dark:bg-[#06111F]/60 px-3.5 py-1.5 rounded-full border border-slate-200/90 dark:border-white/10 backdrop-blur-md">
            {mainNavItems.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`relative px-3 py-1 rounded-full text-xs font-semibold transition-all duration-200 ${
                    isActive
                      ? 'text-sky-700 dark:text-white bg-white dark:bg-[#0EA5FF]/20 border border-slate-200/80 dark:border-[#0EA5FF]/40 shadow-xs dark:shadow-[0_0_15px_rgba(14,165,255,0.2)]'
                      : 'text-slate-600 dark:text-[#A9BDD1] hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-white/5'
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-[2px] bg-sky-500 dark:bg-cyan-400 rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* RIGHT: Quick Action Buttons & Theme Switcher */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Theme Toggle Button */}
            <button
              id="theme-toggle-btn"
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-[#0B1528] border border-slate-200 dark:border-slate-800 hover:border-sky-400 text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-cyan-300 transition-all shadow-xs cursor-pointer"
              title={theme === 'dark' ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400 animate-in fade-in zoom-in duration-300" />
              ) : (
                <Moon className="w-4 h-4 text-sky-600 animate-in fade-in zoom-in duration-300" />
              )}
            </button>

            <button
              id="navbar-search-btn"
              onClick={onOpenSearch}
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-[#0B1528] border border-slate-200 dark:border-slate-800 hover:border-sky-400 text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-white transition-colors cursor-pointer"
              title="Search loans & insurance"
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Shown only below xl, where the centre nav (which already has a
                Calculators link) is hidden - avoids a duplicate button. */}
            <Link to="/calculator" className="hidden lg:block xl:hidden">
              <Button variant="secondary" size="sm" leftIcon={<Calculator className="w-3.5 h-3.5 text-sky-600 dark:text-cyan-400" />}>
                Calculators
              </Button>
            </Link>

            <Link to="/distributors">
              <Button variant="secondary" size="sm" leftIcon={<MapPin className="w-3.5 h-3.5 text-sky-600 dark:text-cyan-400" />}>
                Distributors
              </Button>
            </Link>

            <Button
              id="nav-apply-now-btn"
              variant="glow"
              size="sm"
              onClick={onOpenApply}
              rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
            >
              Apply Now
            </Button>
          </div>

          {/* Mobile Menu & Theme Toggle */}
          <div className="flex items-center gap-2 sm:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-slate-100 dark:bg-[#0B1528] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800"
              title="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-sky-600" />}
            </button>

            <button
              onClick={onOpenSearch}
              className="p-2 rounded-xl bg-slate-100 dark:bg-[#0B1528] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800"
            >
              <Search className="w-4 h-4" />
            </button>

            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-100 dark:bg-[#0B1528] border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE FULL-SCREEN NAVIGATION DRAWER */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 top-[65px] z-[45] bg-white/98 dark:bg-[#070D1B]/98 backdrop-blur-2xl border-b border-slate-200 dark:border-[#0EA5FF]/20 px-6 py-8 flex flex-col justify-between overflow-y-auto sm:hidden text-slate-800 dark:text-white"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-sky-600 dark:text-cyan-400 uppercase tracking-widest mb-2 font-bold">
                <span>// PLATFORM NAVIGATION</span>
                <span className="text-[11px] text-slate-400">Theme: {theme === 'dark' ? 'Dark' : 'Light'}</span>
              </div>

              <div className="flex flex-col space-y-1.5">
                {mainNavItems.map((item) => {
                  const isActive = location.pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      to={item.href}
                      className={`flex items-center justify-between p-3 rounded-xl border text-sm font-semibold transition-all ${
                        isActive
                          ? 'bg-sky-50 dark:bg-[#0EA5FF]/15 border-sky-300 dark:border-cyan-400/50 text-sky-800 dark:text-white shadow-xs'
                          : 'bg-slate-50 dark:bg-[#0B1528] border-slate-200 dark:border-slate-800 text-slate-700 dark:text-[#A9BDD1] hover:text-slate-900 dark:hover:text-white'
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronRight className="w-4 h-4 text-sky-600 dark:text-cyan-400" />
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="pt-6 border-t border-slate-200 dark:border-slate-800 space-y-3">
              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200 dark:border-slate-800">
                <span className="text-xs font-medium text-slate-600 dark:text-slate-300">Appearance Theme</span>
                <button
                  onClick={toggleTheme}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-800 dark:text-white shadow-xs"
                >
                  {theme === 'dark' ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5 text-sky-600" />}
                  <span>{theme === 'dark' ? 'Switch to Light' : 'Switch to Dark'}</span>
                </button>
              </div>

              <Link to="/distributors" className="block w-full">
                <Button variant="secondary" className="w-full justify-center">
                  Find Local Distributor
                </Button>
              </Link>
              <Button
                variant="glow"
                className="w-full justify-center"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenApply();
                }}
              >
                Apply Now →
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
