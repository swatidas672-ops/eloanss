import React, { useState } from 'react';
import { GlassCard } from '../components/ui/GlassCard';
import { heroImages } from '../data/heroImages';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { PageHero } from '../components/layout/PageHero';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  ShieldCheck, 
  CheckCircle2, 
  MessageSquare,
  Users,
  Compass
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('Loan Inquiries');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 900);
  };

  return (
    <div className="bg-slate-50 dark:bg-[#070D1B] text-slate-800 dark:text-[#E6F1FF] min-h-screen transition-colors duration-300 pb-20">
      {/* Standardized Page Hero with Stunning Picture */}
      <PageHero
        badge="DIRECT INSTITUTIONAL CHANNELS"
        badgeVariant="blue"
        title="Connect With ELOANSS"
        highlight="24/7 Financial Support & Inquiries"
        description="Whether you have questions regarding loan applications, distributor partnerships, enterprise APIs, or grievance redressal, our team is ready to assist."
        breadcrumbs={[{ label: 'Contact' }]}
        image={{
          src: heroImages.contact.src,
          alt: heroImages.contact.alt,
          overlayTag: heroImages.contact.tag,
          floatingBadge: {
            title: heroImages.contact.floatingTitle,
            subtitle: heroImages.contact.floatingSubtitle
          }
        }}
        stats={[
          { label: 'Phone', value: '9030814455', subtext: 'Direct line to our Hyderabad office', icon: <Phone className="w-4 h-4" /> },
          { label: 'Response Velocity', value: '< 2 Hours', subtext: 'Dedicated desk routing', icon: <Clock className="w-4 h-4" /> },
          { label: 'Grievance Protocol', value: 'RBI Aligned', subtext: 'Principal nodal desk', icon: <ShieldCheck className="w-4 h-4" /> },
          { label: 'Doorstep Advisors', value: '1,500+ Network', subtext: 'Local consultation', icon: <Users className="w-4 h-4" /> }
        ]}
        primaryAction={{
          label: 'Call 9030814455',
          href: 'tel:18003562677'
        }}
        secondaryAction={{
          label: 'Find Local Advisor',
          href: '/distributors',
          icon: <Compass className="w-4 h-4 text-sky-600 dark:text-cyan-400" />
        }}
      />

      {/* Main Grid: Form & Info */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto -mt-6 relative z-20 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 text-left">
          {/* Contact Details & Headquarters */}
          <div className="lg:col-span-5 space-y-6">
            <GlassCard className="p-8 space-y-6">
              <div>
                <Badge variant="cyan">HEADQUARTERS</Badge>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display mt-2">
                  Hyderabad Office
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-[#A9BDD1] mt-2 leading-relaxed flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-sky-600 dark:text-cyan-400 shrink-0 mt-1" />
                  <span>#8-3-903/F/7&amp;10, Ratna Complex, Flat No: 404, Opp. R.S. Brothers, Y R Guda, Ameerpet, Hyderabad &ndash; 500038.</span>
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-3 text-xs sm:text-sm">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <div>
                    <span className="text-slate-500 dark:text-slate-400 text-xs block">Phone:</span>
                    <a href="tel:+919030814455" className="font-mono text-slate-900 dark:text-white font-bold hover:text-sky-700 dark:hover:text-cyan-300 transition-colors">9030814455</a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0" />
                  <div>
                    <span className="text-slate-500 dark:text-slate-400 text-xs block">Official Email:</span>
                    <span className="text-sky-600 dark:text-cyan-300 font-mono font-semibold">support@eloanss-platform.in</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
                  <div>
                    <span className="text-slate-500 dark:text-slate-400 text-xs block">Operating Hours:</span>
                    <span className="text-slate-700 dark:text-slate-200">Monday – Saturday: 9:00 AM – 8:00 PM IST</span>
                  </div>
                </div>
              </div>
            </GlassCard>

            {/* Grievance Redressal Card */}
            <div className="p-6 rounded-2xl bg-white dark:bg-[#06111F]/90 border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 space-y-2 shadow-sm">
              <div className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-sky-600 dark:text-cyan-400" />
                <span>Statutory Grievance Redressal Officer</span>
              </div>
              <p>
                In accordance with RBI Fair Practices Code, complaints unresolved beyond 7 business days can be escalated to our Principal Nodal Officer:
              </p>
              <div className="font-mono text-sky-600 dark:text-cyan-300 pt-1 font-semibold">
                nodalofficer@eloanss-platform.in | Ref Code: GO-RBI-2035
              </div>
            </div>
          </div>

          {/* Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#081A2D]/90 border border-slate-200 dark:border-[#0EA5FF]/30 backdrop-blur-2xl shadow-xl">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-display">
                    Message Successfully Dispatched
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-[#A9BDD1] max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-slate-900 dark:text-white font-bold">{name}</span>. Your inquiry has been routed to our specialized support desk. A representative will contact you at <span className="text-sky-600 dark:text-cyan-300 font-semibold">{email}</span> within 2 hours.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setSubmitted(false);
                      setName('');
                      setEmail('');
                      setPhone('');
                      setMessage('');
                    }}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display mb-1">
                    Direct Inquiry Form
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-[#A9BDD1] mb-4">
                    Fill out the parameters below to connect with the right department.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-slate-700 dark:text-slate-300 font-medium block mb-1">Your Full Name</label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Aditya Verma"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-[#06111F] border border-slate-300 dark:border-slate-700 text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-sky-500 dark:focus:border-cyan-400"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-slate-700 dark:text-slate-300 font-medium block mb-1">Email Address</label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="aditya@example.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-[#06111F] border border-slate-300 dark:border-slate-700 text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-sky-500 dark:focus:border-cyan-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-slate-700 dark:text-slate-300 font-medium block mb-1">Mobile Phone</label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 98765 43210"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-[#06111F] border border-slate-300 dark:border-slate-700 text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-sky-500 dark:focus:border-cyan-400"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-slate-700 dark:text-slate-300 font-medium block mb-1">Department / Subject</label>
                      <select
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-[#06111F] border border-slate-300 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-sky-500 dark:focus:border-cyan-400"
                      >
                        <option value="Loan Inquiries">Loan Inquiries & Application Status</option>
                        <option value="Insurance Claim">Insurance & Claim Assistance</option>
                        <option value="Distributor Onboarding">Distributor / Channel Partner Desk</option>
                        <option value="Enterprise API">Enterprise API & Corporate Advisory</option>
                        <option value="Grievance">Grievance & Customer Redressal</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs text-slate-700 dark:text-slate-300 font-medium block mb-1">Detailed Inquiry</label>
                    <textarea
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Please specify your loan requirement, asset location, or inquiry specifics..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-[#06111F] border border-slate-300 dark:border-slate-700 text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-sky-500 dark:focus:border-cyan-400"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="glow"
                    size="md"
                    className="w-full justify-center mt-2"
                    isLoading={isSubmitting}
                    rightIcon={<Send className="w-4 h-4" />}
                  >
                    Submit Secure Inquiry →
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
