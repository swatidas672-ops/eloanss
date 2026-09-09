import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { SearchModal } from './components/layout/SearchModal';
import { ScrollToTop } from './components/layout/ScrollToTop';
import { ApplyModal } from './components/features/ApplyModal';
import { AIFinancialAssistant } from './components/features/AIFinancialAssistant';

// Pages
import { Home } from './pages/Home';
import { Loans } from './pages/Loans';
import { LoanDetails } from './pages/LoanDetails';
import { Insurance } from './pages/Insurance';
import { InsuranceDetails } from './pages/InsuranceDetails';
import { Invest } from './pages/Invest';
import { CalculatorPage } from './pages/Calculator';
import { GlobalBusiness } from './pages/GlobalBusiness';
import { DistributorNetwork } from './pages/DistributorNetwork';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Shareholders } from './pages/Shareholders';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';

// Lives inside <Router> so it can use client-side navigation for the
// assistant's action chips.
const AssistantMount: React.FC<{
  onOpenApply: (type: 'loan' | 'insurance', slug?: string) => void;
}> = ({ onOpenApply }) => {
  const navigate = useNavigate();
  return <AIFinancialAssistant onOpenApply={onOpenApply} onNavigateTo={(path) => navigate(path)} />;
};

export default function App() {
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [applyType, setApplyType] = useState<'loan' | 'insurance'>('loan');
  const [applySlug, setApplySlug] = useState<string | undefined>(undefined);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  const handleOpenApply = (type: 'loan' | 'insurance' = 'loan', slug?: string) => {
    setApplyType(type);
    setApplySlug(slug);
    setIsApplyModalOpen(true);
  };

  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-slate-50 dark:bg-[#070D1B] text-slate-800 dark:text-[#E6F1FF] flex flex-col selection:bg-cyan-500/30 selection:text-cyan-950 dark:selection:text-white relative transition-colors duration-300">
          {/* Navigation with Theme Switcher */}
          <Navbar
            onOpenApply={() => handleOpenApply('loan')}
            onOpenSearch={() => setIsSearchModalOpen(true)}
          />

          {/* Dynamic Route Pages */}
          <main className="flex-grow">
            <Routes>
              <Route
                path="/"
                element={<Home onOpenApply={handleOpenApply} />}
              />
              <Route
                path="/loans"
                element={<Loans onOpenApply={(type, slug) => handleOpenApply('loan', slug)} />}
              />
              <Route
                path="/loans/:loanSlug"
                element={<LoanDetails onOpenApply={(type, slug) => handleOpenApply('loan', slug)} />}
              />
              <Route
                path="/insurance"
                element={<Insurance onOpenApply={(type, slug) => handleOpenApply('insurance', slug)} />}
              />
              <Route
                path="/insurance/:insuranceSlug"
                element={<InsuranceDetails onOpenApply={(type, slug) => handleOpenApply('insurance', slug)} />}
              />
              <Route
                path="/invest"
                element={<Invest />}
              />
              <Route
                path="/calculator"
                element={<CalculatorPage onOpenApply={handleOpenApply} />}
              />
              <Route
                path="/global-business"
                element={<GlobalBusiness />}
              />
              <Route
                path="/distributors"
                element={<DistributorNetwork />}
              />
              <Route
                path="/about"
                element={<About />}
              />
              <Route
                path="/services"
                element={<Services />}
              />
              <Route
                path="/shareholders"
                element={<Shareholders />}
              />
              <Route
                path="/contact"
                element={<Contact />}
              />
              <Route
                path="*"
                element={<NotFound />}
              />
            </Routes>
          </main>

          {/* Global Footer */}
          <Footer />

          {/* Floating AI Financial Assistant */}
          <AssistantMount onOpenApply={(type, slug) => handleOpenApply(type, slug)} />

          {/* Global Modals */}
          <ApplyModal
            isOpen={isApplyModalOpen}
            onClose={() => setIsApplyModalOpen(false)}
            defaultType={applyType}
            defaultProduct={applySlug}
          />

          <SearchModal
            isOpen={isSearchModalOpen}
            onClose={() => setIsSearchModalOpen(false)}
            onOpenApply={(type, slug) => handleOpenApply(type, slug)}
          />
        </div>
      </Router>
    </ThemeProvider>
  );
}
