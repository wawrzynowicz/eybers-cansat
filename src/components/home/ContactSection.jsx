import React, { useState } from 'react';
import { base44 } from '@/api/base44Client';
import { useMutation } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { Send, Mail, CheckCircle, Loader2, Facebook, Linkedin, Instagram, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { useLanguage } from '@/components/shared/LanguageContext';

export default function ContactSection() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const mutation = useMutation({
    mutationFn: async (data) => {
      await base44.entities.ContactMessage.create(data);
      await base44.functions.invoke('forwardContactMessage', data);
    },
    onSuccess: () => {
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      toast.success('Message sent');
    },
    onError: () => {
      toast.error('Failed to send');
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(formData);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="relative py-12 px-4" id="contact">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-white/30 uppercase tracking-[0.3em] text-xs mb-4">{t.contact.sectionTitle}</p>
          <h2 className="text-4xl md:text-5xl font-light text-white">
            {t.contact.heading}
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="border border-white/10 bg-white/[0.03] p-8 md:p-10 hover:border-blue-500/40 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all duration-500">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle className="w-12 h-12 text-white/80 mx-auto mb-4" strokeWidth={1} />
                  <h3 className="text-xl text-white mb-2">{t.contact.form.successTitle}</h3>
                  <p className="text-white/90 mb-6">{t.contact.form.successMessage}</p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="text-white/70 hover:text-white text-sm underline underline-offset-4"
                  >
                    {t.contact.form.send}
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder={t.contact.form.name}
                        className="h-12 bg-white/[0.08] border-white/30 text-white placeholder:text-white/50 rounded-none focus:border-white/50 focus:ring-0"
                      />
                    </div>
                    <div>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder={t.contact.form.email}
                        className="h-12 bg-white/[0.08] border-white/30 text-white placeholder:text-white/50 rounded-none focus:border-white/50 focus:ring-0"
                      />
                    </div>
                  </div>

                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder={t.contact.form.message}
                    rows={5}
                    className="bg-white/[0.08] border-white/30 text-white placeholder:text-white/50 rounded-none focus:border-white/50 focus:ring-0 resize-none"
                  />

                  <Button
                    type="submit"
                    disabled={mutation.isPending}
                    className="w-full h-12 bg-white text-black hover:bg-white/90 rounded-none font-medium tracking-wide"
                  >
                    {mutation.isPending ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <>
                        {t.contact.form.send.toUpperCase()}
                        <Send className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="border border-white/10 bg-white/[0.03] p-8 hover:border-blue-500/40 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all duration-500">
              <h3 className="text-white text-lg mb-4">{t.contact.email}</h3>
              <a 
                href="mailto:eybers.cansat@gmail.com" 
                className="flex items-center gap-2 text-white/80 hover:text-white transition-colors group"
              >
                <Mail className="w-4 h-4" />
                eybers.cansat@gmail.com
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>

            <div className="border border-white/10 bg-white/[0.03] p-8 hover:border-blue-500/40 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all duration-500">
              <h3 className="text-white text-lg mb-4">{t.contact.connect}</h3>
              <div className="flex gap-4">
                {[
                  { icon: Facebook, href: 'https://www.facebook.com/eybers.cansat/', label: 'Facebook' },
                  { icon: Linkedin, href: 'https://www.linkedin.com/company/eybers-cansat/', label: 'LinkedIn' },
                  { icon: Instagram, href: 'https://www.instagram.com/eybers.cansat/', label: 'Instagram' }
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:border-white/30 transition-all"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            <div className="border border-white/10 bg-white/[0.04] p-8 hover:border-blue-500/40 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all duration-500">
              <h3 className="text-white text-lg mb-3">{t.contact.sponsorTitle}</h3>
              <p className="text-white/80 text-sm leading-relaxed text-justify">
                {t.contact.sponsorMessage}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}