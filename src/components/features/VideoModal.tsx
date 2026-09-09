import React, { useState } from 'react';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { 
  Play, 
  Cpu, 
  ShieldCheck, 
  Network, 
  TrendingUp, 
  CheckCircle2, 
  FileCheck2, 
  Zap, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose }) => {
  const [activeStep, setActiveStep] = useState(0);

  const demoSteps = [
    {
      title: '1. Intelligent Profile Ingestion',
      icon: <Cpu className="w-5 h-5 text-cyan-400" />,
      desc: 'Our proprietary financial neural engine analyzes applicant parameters (income, debt-to-income, credit score, industry risk vectors) in sub-second latency.',
      metric: 'Under 1.2s Analysis Time',
      badge: 'Step 1: AI Processing'
    },
    {
      title: '2. Multi-Lender Risk Algorithmic Match',
      icon: <Network className="w-5 h-5 text-sky-400" />,
      desc: 'Simultaneously queries underwriting policies across 50+ tier-1 banking institutions, NBFCs, and global syndicate lenders to pinpoint the lowest rates.',
      metric: '50+ Verified Partners',
      badge: 'Step 2: Competitive Routing'
    },
    {
      title: '3. Local Distributor Node Synchronization',
      icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
      desc: 'Routes your file to an accredited, certified local financial distributor in your specific district for personalized doorstep or digital guidance.',
      metric: '500+ Indian Cities Covered',
      badge: 'Step 3: Human Expertise'
    },
    {
      title: '4. Instant Digital Sanction & Disbursal',
      icon: <Zap className="w-5 h-5 text-amber-400" />,
      desc: 'E-sign automated sanction letters with Aadhaar OTP and enjoy straight-through processing direct into your bank account with zero paperwork hassles.',
      metric: '99.9% Digital Pipeline',
      badge: 'Step 4: Liquidity Delivery'
    }
  ];

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="How ELOANSS Works"
      subtitle="Interactive architecture of the next-generation financial ecosystem"
      maxWidth="2xl"
    >
      <div className="space-y-6">
        {/* Futuristic Video Simulation Container */}
        <div className="relative aspect-video rounded-2xl overflow-hidden bg-[#020817] border border-[#0EA5FF]/30 group shadow-2xl flex flex-col justify-between p-6">
          {/* Background Animated Grids & Atmospheric lights */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0EA5FF]/20 via-[#06111F]/80 to-[#020817] pointer-events-none" />
          <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
          
          {/* Top telemetry bar */}
          <div className="relative z-10 flex items-center justify-between text-xs font-mono">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-cyan-400 font-semibold uppercase">SYSTEM STATUS: OPTIMAL</span>
            </div>
            <div className="text-slate-400">
              BUILD: v2035.4.1 // NEURAL ENGINE
            </div>
          </div>

          {/* Central Active Simulation Card */}
          <div className="relative z-10 my-auto text-center max-w-lg mx-auto py-4">
            <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-[#081A2D]/80 border border-cyan-400/40 text-cyan-300 mb-3 shadow-[0_0_25px_rgba(34,211,238,0.3)]">
              {demoSteps[activeStep].icon}
            </div>
            <h4 className="text-xl sm:text-2xl font-bold text-white font-display">
              {demoSteps[activeStep].title}
            </h4>
            <p className="text-xs sm:text-sm text-[#A9BDD1] mt-2 leading-relaxed">
              {demoSteps[activeStep].desc}
            </p>
            <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/20 text-sky-300 text-xs font-mono">
              <Sparkles className="w-3.5 h-3.5" />
              {demoSteps[activeStep].metric}
            </div>
          </div>

          {/* Bottom Controls / Progress */}
          <div className="relative z-10 flex items-center justify-between pt-2 border-t border-slate-800">
            <div className="flex gap-1.5">
              {demoSteps.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`h-1.5 rounded-full transition-all ${
                    activeStep === idx ? 'w-8 bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]' : 'w-2 bg-slate-700 hover:bg-slate-600'
                  }`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : demoSteps.length - 1))}
              >
                Prev
              </Button>
              <Button
                variant="primary"
                size="sm"
                onClick={() => setActiveStep((prev) => (prev < demoSteps.length - 1 ? prev + 1 : 0))}
                rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
              >
                Next Architecture Step
              </Button>
            </div>
          </div>
        </div>

        {/* Step Summary Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          {demoSteps.map((step, idx) => (
            <button
              key={idx}
              onClick={() => setActiveStep(idx)}
              className={`p-3 rounded-xl text-left border transition-all ${
                activeStep === idx
                  ? 'bg-[#0D2138] border-cyan-400/50 shadow-[0_0_15px_rgba(34,211,238,0.2)]'
                  : 'bg-[#06111F]/60 border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="text-[10px] font-mono text-cyan-400 mb-1">0{idx + 1}</div>
              <div className="text-xs font-semibold text-white line-clamp-1">{step.title.split('.')[1]}</div>
              <div className="text-[11px] text-[#A9BDD1] mt-0.5">{step.metric}</div>
            </button>
          ))}
        </div>
      </div>
    </Modal>
  );
};
