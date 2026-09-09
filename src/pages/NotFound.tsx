import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { Compass, Home } from 'lucide-react';

export const NotFound: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-slate-50 dark:bg-[#070D1B] text-slate-800 dark:text-[#E6F1FF] min-h-screen flex items-center justify-center px-4 transition-colors duration-300">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-sky-500/10 dark:bg-cyan-500/20 text-sky-600 dark:text-cyan-400 flex items-center justify-center mx-auto border border-sky-500/20 dark:border-cyan-400/30">
          <Compass className="w-8 h-8" />
        </div>
        <Badge variant="cyan">ERROR 404</Badge>
        <h1 className="text-4xl font-black text-slate-900 dark:text-white font-display">
          Route Not Found
        </h1>
        <p className="text-sm text-slate-600 dark:text-[#A9BDD1] leading-relaxed">
          The requested financial endpoint or resource does not exist or has been repositioned within the ELOANSS network.
        </p>
        <div className="pt-2 flex justify-center gap-3">
          <Link to="/">
            <Button variant="glow" size="md" leftIcon={<Home className="w-4 h-4" />}>
              Return to Homepage
            </Button>
          </Link>
          <Link to="/loans">
            <Button variant="outline" size="md">
              View All Loans
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
