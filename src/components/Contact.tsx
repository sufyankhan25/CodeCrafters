import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Clock, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      setIsSubmitting(false);
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'digitalomnex@gmail.com',
      href: 'mailto:digitalomnex@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+92 318 4898854',
      href: 'tel:+923184898854',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Karachi, Pakistan',
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 bg-background relative overflow-hidden transition-colors duration-500">
      
      {/* Premium Ambient Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1px] bg-gradient-to-r from-transparent via-[#B900FF]/20 to-transparent" />
      <div className="absolute top-1/4 -right-64 w-[500px] h-[500px] bg-[#00E5FF]/5 rounded-full blur-[150px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 -left-64 w-[500px] h-[500px] bg-[#B900FF]/5 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-muted-foreground backdrop-blur-md shadow-[0_0_15px_rgba(0,229,255,0.05)]">
              <Sparkles className="w-4 h-4 text-[#00E5FF]" /> 
              Let's Talk
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold mb-6 tracking-tight text-foreground">
            Ready to <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00E5FF] to-[#B900FF]">Get Started?</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-body">
            Tell us about your project, goals, and vision. Our team will get back to you within 24 hours with a strategic action plan.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 max-w-7xl mx-auto">
          
          {/* Contact Information Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h3 className="text-3xl font-heading font-bold mb-8 text-foreground">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex items-center gap-5 group"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#00E5FF] to-[#B900FF] p-[1px] flex-shrink-0 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-[#00E5FF]/20">
                      <div className="w-full h-full bg-background/90 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                        <item.icon className="h-6 w-6 text-foreground group-hover:text-[#00E5FF] transition-colors duration-300" />
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-muted-foreground mb-1 uppercase tracking-wider">{item.label}</div>
                      {item.href ? (
                        <a 
                          href={item.href} 
                          className="text-lg font-bold text-foreground hover:text-[#00E5FF] transition-colors duration-300"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-lg font-bold text-foreground">{item.value}</span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Office Hours Glass Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="bg-card/40 backdrop-blur-xl p-8 rounded-3xl border border-border/50 shadow-xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#00E5FF]/10 flex items-center justify-center border border-[#00E5FF]/20">
                  <Clock className="h-6 w-6 text-[#00E5FF]" />
                </div>
                <h4 className="text-xl font-heading font-bold text-foreground">Office Hours</h4>
              </div>
              <div className="space-y-4 text-base">
                <div className="flex justify-between items-center border-b border-border/50 pb-3">
                  <span className="text-muted-foreground font-medium">Monday - Friday</span>
                  <span className="font-bold text-foreground">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center pt-1">
                  <span className="text-muted-foreground font-medium">Saturday</span>
                  <span className="font-bold text-foreground">10:00 AM - 4:00 PM</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="bg-card/40 backdrop-blur-xl p-8 sm:p-10 rounded-[2rem] border border-border/50 shadow-2xl relative overflow-hidden group">
              
              {/* Form internal subtle glow */}
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-to-bl from-[#B900FF]/10 to-transparent blur-3xl pointer-events-none -z-10 transition-opacity duration-500 opacity-50 group-hover:opacity-100" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div className="space-y-3">
                  <label className="text-sm font-semibold text-foreground/80 ml-1">Full Name</label>
                  <Input 
                    placeholder="John Doe" 
                    required 
                    className="h-14 rounded-xl border-border/50 bg-background/50 backdrop-blur-sm focus:border-[#00E5FF]/50 focus:ring-1 focus:ring-[#00E5FF]/50 transition-all text-base px-5"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-semibold text-foreground/80 ml-1">Email Address</label>
                  <Input 
                    type="email" 
                    placeholder="john@company.com" 
                    required 
                    className="h-14 rounded-xl border-border/50 bg-background/50 backdrop-blur-sm focus:border-[#B900FF]/50 focus:ring-1 focus:ring-[#B900FF]/50 transition-all text-base px-5"
                  />
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <label className="text-sm font-semibold text-foreground/80 ml-1">Company <span className="text-muted-foreground font-normal">(Optional)</span></label>
                <Input 
                  placeholder="Your Company Name" 
                  className="h-14 rounded-xl border-border/50 bg-background/50 backdrop-blur-sm focus:border-[#00E5FF]/50 focus:ring-1 focus:ring-[#00E5FF]/50 transition-all text-base px-5"
                />
              </div>

              <div className="space-y-3 mb-6">
                <label className="text-sm font-semibold text-foreground/80 ml-1">Project Type</label>
                <Select>
                  <SelectTrigger className="h-14 rounded-xl border-border/50 bg-background/50 backdrop-blur-sm focus:border-[#B900FF]/50 focus:ring-1 focus:ring-[#B900FF]/50 transition-all text-base px-5">
                    <SelectValue placeholder="What can we help you with?" />
                  </SelectTrigger>
                  <SelectContent className="bg-card/95 backdrop-blur-xl border border-border/50 rounded-xl shadow-xl">
                    <SelectItem value="web" className="py-3 cursor-pointer hover:bg-white/5 focus:bg-white/5">Website Development</SelectItem>
                    <SelectItem value="branding" className="py-3 cursor-pointer hover:bg-white/5 focus:bg-white/5">Brand Identity & Logo</SelectItem>
                    <SelectItem value="video" className="py-3 cursor-pointer hover:bg-white/5 focus:bg-white/5">Video Editing</SelectItem>
                    <SelectItem value="ads" className="py-3 cursor-pointer hover:bg-white/5 focus:bg-white/5">Digital Advertising</SelectItem>
                    <SelectItem value="ai" className="py-3 cursor-pointer hover:bg-white/5 focus:bg-white/5">AI Automation</SelectItem>
                    <SelectItem value="seo" className="py-3 cursor-pointer hover:bg-white/5 focus:bg-white/5">SEO Optimization</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-3 mb-8">
                <label className="text-sm font-semibold text-foreground/80 ml-1">Project Details</label>
                <Textarea 
                  placeholder="Tell us about your goals, timeline, and budget..." 
                  rows={5}
                  required
                  className="rounded-xl border-border/50 bg-background/50 backdrop-blur-sm focus:border-[#00E5FF]/50 focus:ring-1 focus:ring-[#00E5FF]/50 transition-all text-base p-5 resize-none"
                />
              </div>

              <Button 
                type="submit" 
                size="lg"
                className="w-full h-14 rounded-xl bg-gradient-to-r from-[#0055FF] to-[#B900FF] text-white font-bold text-lg hover:shadow-[0_0_30px_rgba(185,0,255,0.4)] transition-all duration-300 transform hover:-translate-y-1 group/btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-3">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending Request...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    Send Message
                    <Send className="ml-2 h-5 w-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </span>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;