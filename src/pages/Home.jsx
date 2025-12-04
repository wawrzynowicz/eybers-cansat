import React, { useState } from 'react';
import { base44 } from '@/api/base44Client';
import { useQuery, useMutation } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { Send, Mail, MessageSquare, User, CheckCircle, Loader2, Twitter, Instagram, Github, Rocket, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import GlowingOrb from '@/components/shared/GlowingOrb';
import SectionTitle from '@/components/shared/SectionTitle';
import TeamMemberCard from '@/components/team/TeamMemberCard';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const { data: members = [], isLoading } = useQuery({
    queryKey: ['teamMembers'],
    queryFn: () => base44.entities.TeamMember.list('order'),
  });

  const mutation = useMutation({
    mutationFn: (data) => base44.entities.ContactMessage.create(data),
    onSuccess: () => {
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      toast.success('Message sent successfully!');
    },
    onError: () => {
      toast.error('Failed to send message. Please try again.');
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden px-4 pt-20">
        <GlowingOrb size={600} color="#6366f1" className="-top-40 -left-40" opacity={0.3} />
        <GlowingOrb size={500} color="#8b5cf6" className="-bottom-40 -right-40" opacity={0.25} />

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-indigo-200 text-sm mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Sparkles className="w-4 h-4" />
              <span>Exploring the Cosmos from High School</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-white via-indigo-200 to-purple-300 bg-clip-text text-transparent">
                EYBERS
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-indigo-100/80 mb-6 max-w-2xl mx-auto leading-relaxed">
              A team of six young scientists building a mini-satellite to detect cosmic muons and unlock the mysteries of the universe.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative py-20 md:py-28 px-4">
        <GlowingOrb size={400} color="#6366f1" className="top-20 -left-40" opacity={0.2} />

        <div className="max-w-6xl mx-auto relative z-10">
          <SectionTitle 
            title="Meet Our Team"
            subtitle="Six passionate students united by a shared dream of exploring the cosmos."
            light
          />

          {isLoading ? (
            <div className="flex justify-center py-20">
              <Loader2 className="w-8 h-8 text-indigo-400 animate-spin" />
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {members.map((member, index) => (
                <TeamMemberCard key={member.id} member={member} index={index} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-20 md:py-28 px-4">
        <GlowingOrb size={450} color="#8b5cf6" className="bottom-20 -right-40" opacity={0.2} />

        <div className="max-w-5xl mx-auto relative z-10">
          <SectionTitle 
            title="Get in Touch"
            subtitle="Have questions about our mission? Want to collaborate or support our project?"
            light
          />

          <div className="grid lg:grid-cols-5 gap-8 md:gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                    <p className="text-indigo-200/70 mb-6">We'll get back to you as soon as possible.</p>
                    <Button 
                      onClick={() => setSubmitted(false)}
                      variant="outline"
                      className="border-white/20 text-white hover:bg-white/10 rounded-full"
                    >
                      Send Another Message
                    </Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-indigo-200">Your Name</Label>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-indigo-300/50" />
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="John Doe"
                            className="pl-12 h-12 bg-white/5 border-white/10 text-white placeholder:text-indigo-300/40 rounded-xl focus:border-indigo-500/50 focus:ring-indigo-500/20"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-indigo-200">Email Address</Label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-indigo-300/50" />
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="john@example.com"
                            className="pl-12 h-12 bg-white/5 border-white/10 text-white placeholder:text-indigo-300/40 rounded-xl focus:border-indigo-500/50 focus:ring-indigo-500/20"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-indigo-200">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="What's this about?"
                        className="h-12 bg-white/5 border-white/10 text-white placeholder:text-indigo-300/40 rounded-xl focus:border-indigo-500/50 focus:ring-indigo-500/20"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-indigo-200">Your Message</Label>
                      <div className="relative">
                        <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-indigo-300/50" />
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          placeholder="Tell us about your inquiry..."
                          rows={5}
                          className="pl-12 pt-3 bg-white/5 border-white/10 text-white placeholder:text-indigo-300/40 rounded-xl focus:border-indigo-500/50 focus:ring-indigo-500/20 resize-none"
                        />
                      </div>
                    </div>

                    <Button
                      type="submit"
                      disabled={mutation.isPending}
                      className="w-full h-12 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white rounded-xl font-medium shadow-lg shadow-indigo-500/20"
                    >
                      {mutation.isPending ? (
                        <Loader2 className="w-5 h-5 animate-spin" />
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2 space-y-6"
            >
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8">
                <h3 className="text-xl font-bold text-white mb-6">Connect With Us</h3>
                
                <a href="mailto:team@eybers.space" className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10 hover:border-indigo-500/30 transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-indigo-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium group-hover:text-indigo-200 transition-colors">Email Us</p>
                    <p className="text-indigo-300/60 text-sm">team@eybers.space</p>
                  </div>
                </a>
              </div>

              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8">
                <h3 className="text-xl font-bold text-white mb-6">Follow Our Journey</h3>
                
                <div className="flex gap-3">
                  {[
                    { icon: Twitter, href: '#', label: 'Twitter' },
                    { icon: Instagram, href: '#', label: 'Instagram' },
                    { icon: Github, href: '#', label: 'GitHub' }
                  ].map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className="flex-1 aspect-square rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-indigo-300/60 hover:text-white hover:bg-white/10 hover:border-indigo-500/30 transition-all"
                      aria-label={social.label}
                    >
                      <social.icon className="w-6 h-6" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}