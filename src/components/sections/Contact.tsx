import React, { useState } from 'react';
import { DEVELOPER_INFO } from '../../data/portfolioData';
import { Mail, Linkedin, Github, MapPin, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { Button } from '../ui/Button';
import { motion, AnimatePresence } from 'motion/react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorBanner, setErrorBanner] = useState('');

  const validate = () => {
    const tempErrors: Record<string, string> = {};
    if (!formData.name.trim()) tempErrors.name = 'Please provide your name.';
    
    if (!formData.email.trim()) {
      tempErrors.email = 'Email address is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Please provide a valid email format.';
    }
    
    if (!formData.subject.trim()) tempErrors.subject = 'Subject line is required.';
    if (!formData.message.trim()) {
      tempErrors.message = 'Please type a message.';
    } else if (formData.message.length < 10) {
      tempErrors.message = 'Message must be at least 10 letters.';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setErrorBanner('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        // Save submission history to localStorage for client-side audit/record purposes
        const submissions = JSON.parse(localStorage.getItem('rishiraj_contact_messages') || '[]');
        submissions.push({
          id: Date.now(),
          ...formData,
          date: new Date().toISOString(),
          emailed: !data.savedLocally
        });
        localStorage.setItem('rishiraj_contact_messages', JSON.stringify(submissions));

        setLoading(false);
        setSuccess(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error(data.error || 'Failed to dispatch form submission to server.');
      }
    } catch (err: any) {
      setLoading(false);
      setErrorBanner(err.message || 'An error occurred while transmitting your message. Please try again.');
    }
  };

  return (
    <section id="contact" className="py-24 relative px-4 sm:px-6 lg:px-8 bg-black/5 dark:bg-black/15">
      
      {/* Decorative vertical background divider line */}
      <div className="absolute top-0 right-1/2 translate-x-1/2 w-[1px] h-12 bg-gradient-to-b from-gray-200 dark:from-gray-800 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto z-10 relative">
        
        {/* Header section structure */}
        <div className="text-center md:text-left space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-orange-500/10 border border-brand-orange-500/20 text-xs font-mono text-brand-orange-500 font-semibold uppercase tracking-wider">
            <Mail className="w-3.5 h-3.5" />
            <span>Connect Center</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-950 dark:text-white tracking-tight">
            Let's Build Something Great Together
          </h2>
          <div className="w-12 h-1 bg-brand-orange-500 mx-auto md:mx-0 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-8">
          
          {/* Card Left: Contact Information Panel */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <p className="font-sans text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
              I'm always interested in discussing internships, freelance projects, collaborations, and exciting opportunities. Feel free to reach out directly through the form or my social channels!
            </p>

            {/* Quick Details Cards */}
            <div className="space-y-4">
              
              {/* Box 1: Email */}
              <div className="p-5 rounded-2xl border border-gray-100 dark:border-gray-850 bg-white/40 dark:bg-gray-900/30 flex items-start gap-4">
                <span className="p-3 bg-brand-orange-500/10 text-brand-orange-500 rounded-xl inline-flex flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </span>
                <div>
                  <h4 className="font-display font-medium text-[11px] text-gray-400 dark:text-gray-500 uppercase tracking-wider">Email Address</h4>
                  <a 
                    href={`mailto:${DEVELOPER_INFO.email}`}
                    className="font-display font-bold text-sm sm:text-base text-gray-900 dark:text-gray-200 hover:text-brand-orange-500 hover:underline underline-offset-4 break-all block mt-1"
                  >
                    {DEVELOPER_INFO.email}
                  </a>
                </div>
              </div>

              {/* Box 2: Location */}
              <div className="p-5 rounded-2xl border border-gray-100 dark:border-gray-850 bg-white/40 dark:bg-gray-900/30 flex items-start gap-4">
                <span className="p-3 bg-brand-orange-500/10 text-brand-orange-500 rounded-xl inline-flex flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </span>
                <div>
                  <h4 className="font-display font-medium text-[11px] text-gray-400 dark:text-gray-500 uppercase tracking-wider">Office Location</h4>
                  <p className="font-display font-semibold text-sm sm:text-base text-gray-900 dark:text-gray-200 mt-1">
                    {DEVELOPER_INFO.location}
                  </p>
                </div>
              </div>

            </div>

            {/* Social details list */}
            <div className="pt-4 space-y-3">
              <h4 className="font-display font-bold text-xs text-gray-400 uppercase tracking-tight">Socials & Networks</h4>
              <div className="flex items-center gap-2">
                <a 
                  href={DEVELOPER_INFO.github} 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-3 rounded-xl border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-300 hover:border-brand-orange-500/40 hover:text-brand-orange-500 dark:hover:text-brand-orange-400 hover:bg-white dark:hover:bg-gray-900 duration-200 transition-all flex items-center gap-2 text-xs font-mono"
                >
                  <Github className="w-4 h-4" />
                  <span>rishiraj9701</span>
                </a>

                <a 
                  href={DEVELOPER_INFO.linkedin} 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-3 rounded-xl border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-300 hover:border-brand-orange-500/40 hover:text-brand-orange-500 dark:hover:text-brand-orange-400 hover:bg-white dark:hover:bg-gray-900 duration-200 transition-all flex items-center gap-2 text-xs font-mono"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>workrishirajshukla</span>
                </a>
              </div>
            </div>

          </div>

          {/* Card Right: Contact Form Panel */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-8 md:p-10 rounded-3xl relative overflow-hidden text-left">
              
              <AnimatePresence mode="wait">
                {success ? (
                  /* Success Screen */
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="py-12 flex flex-col items-center text-center space-y-4"
                  >
                    <span className="p-4 bg-emerald-500/10 text-emerald-500 rounded-full inline-block">
                      <CheckCircle2 className="w-12 h-12" />
                    </span>
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-gray-950 dark:text-white">
                      Message Dispatched!
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 max-w-sm">
                      Thank you for contacting Rishi Raj Shukla. Your message was recorded successfully. Rishi will respond back to you as soon as possible.
                    </p>
                    <div className="pt-4">
                      <Button variant="glass" size="sm" onClick={() => setSuccess(false)}>
                        Send another message
                      </Button>
                    </div>
                  </motion.div>
                ) : (
                  /* Main Form Display */
                  <motion.form 
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    {errorBanner && (
                      <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-500 rounded-xl flex items-center gap-3 text-xs">
                        <AlertCircle className="w-4 h-4" />
                        <span>{errorBanner}</span>
                      </div>
                    )}

                    {/* Row 1: Name and Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label htmlFor="name" className="text-[11px] font-mono font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">Your Name</label>
                        <input 
                          type="text" 
                          id="name"
                          name="name"
                          placeholder="Rishi Raj"
                          value={formData.name}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 rounded-xl border text-sm font-sans bg-white/40 dark:bg-black/15 outline-none focus:border-brand-orange-500 dark:focus:border-brand-orange-500 focus:ring-1 focus:ring-brand-orange-500/10 transition-colors ${
                            errors.name ? 'border-red-500/50' : 'border-gray-200 dark:border-gray-800'
                          }`}
                        />
                        {errors.name && <span className="text-[10px] text-red-500">{errors.name}</span>}
                      </div>

                      <div className="space-y-1.5">
                        <label htmlFor="email" className="text-[11px] font-mono font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">Email Address</label>
                        <input 
                          type="email" 
                          id="email"
                          name="email"
                          placeholder="rishiraj@example.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 rounded-xl border text-sm font-sans bg-white/40 dark:bg-black/15 outline-none focus:border-brand-orange-500 dark:focus:border-brand-orange-500 focus:ring-1 focus:ring-brand-orange-500/10 transition-colors ${
                            errors.email ? 'border-red-500/50' : 'border-gray-200 dark:border-gray-800'
                          }`}
                        />
                        {errors.email && <span className="text-[10px] text-red-500">{errors.email}</span>}
                      </div>
                    </div>

                    {/* Row 2: Subject */}
                    <div className="space-y-1.5">
                      <label htmlFor="subject" className="text-[11px] font-mono font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">Email Subject</label>
                      <input 
                        type="text" 
                        id="subject"
                        name="subject"
                        placeholder="Collaboration Opportunities / Developer Internships"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-xl border text-sm font-sans bg-white/40 dark:bg-black/15 outline-none focus:border-brand-orange-500 dark:focus:border-brand-orange-500 focus:ring-1 focus:ring-brand-orange-500/10 transition-colors ${
                          errors.subject ? 'border-red-500/50' : 'border-gray-200 dark:border-gray-800'
                        }`}
                      />
                      {errors.subject && <span className="text-[10px] text-red-500">{errors.subject}</span>}
                    </div>

                    {/* Row 3: Message Textarea */}
                    <div className="space-y-1.5">
                      <label htmlFor="message" className="text-[11px] font-mono font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">Your Message</label>
                      <textarea 
                        id="message"
                        name="message"
                        rows={4}
                        placeholder="Hi Rishi, we would love to schedule an interview with you regarding..."
                        value={formData.message}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-xl border text-sm font-sans bg-white/40 dark:bg-black/15 outline-none focus:border-brand-orange-500 dark:focus:border-brand-orange-500 focus:ring-1 focus:ring-brand-orange-500/10 transition-colors resize-none ${
                          errors.message ? 'border-red-500/50' : 'border-gray-200 dark:border-gray-800'
                        }`}
                      />
                      {errors.message && <span className="text-[10px] text-red-500">{errors.message}</span>}
                    </div>

                    {/* Submit Button with loading animation status */}
                    <div className="pt-2 select-none">
                      <Button 
                        type="submit" 
                        variant="glow"
                        fullWidth 
                        disabled={loading}
                        className="py-3 items-center justify-center gap-2"
                      >
                        {loading ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin text-white" />
                            <span>Routing message over server...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            <span>Transmit Message</span>
                          </>
                        )}
                      </Button>
                    </div>

                  </motion.form>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
export default Contact;
