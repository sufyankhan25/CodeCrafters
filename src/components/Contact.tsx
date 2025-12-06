import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Clock } from 'lucide-react';
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

    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      setIsSubmitting(false);
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@codecrafters.agency',
      href: 'mailto:hello@codecrafters.agency',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+92 306 9044757',
      href: 'tel:+923069044757',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Karachi, Pakistan',
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-background" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full"
          >
            <span className="text-primary font-medium text-sm">Let's Talk</span>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-6">
            Ready to <span className="text-gradient">Get Started?</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Tell us about your project and we'll get back to you within 24 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h3 className="text-2xl font-heading font-bold mb-6">Contact Information</h3>
              <div className="space-y-5">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                      <item.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">{item.label}</div>
                      {item.href ? (
                        <a 
                          href={item.href} 
                          className="font-medium hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="font-medium">{item.value}</span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="glass-card p-6 rounded-2xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <h4 className="font-heading font-semibold">Office Hours</h4>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Monday - Friday</span>
                  <span className="font-medium">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Saturday</span>
                  <span className="font-medium">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sunday</span>
                  <span className="font-medium text-accent">Closed</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 rounded-2xl space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Name</label>
                  <Input 
                    placeholder="John Doe" 
                    required 
                    className="h-12 rounded-xl border-border/50 bg-background/50 focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input 
                    type="email" 
                    placeholder="john@example.com" 
                    required 
                    className="h-12 rounded-xl border-border/50 bg-background/50 focus:border-primary"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Company <span className="text-muted-foreground">(Optional)</span></label>
                <Input 
                  placeholder="Your Company" 
                  className="h-12 rounded-xl border-border/50 bg-background/50 focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Project Type</label>
                <Select>
                  <SelectTrigger className="h-12 rounded-xl border-border/50 bg-background/50">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent className="bg-popover border border-border rounded-xl">
                    <SelectItem value="web">Web Development</SelectItem>
                    <SelectItem value="branding">Branding</SelectItem>
                    <SelectItem value="ads">Digital Advertising</SelectItem>
                    <SelectItem value="ai">AI Automation</SelectItem>
                    <SelectItem value="seo">SEO</SelectItem>
                    <SelectItem value="maintenance">Maintenance</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <Textarea 
                  placeholder="Tell us about your project..." 
                  rows={5}
                  required
                  className="rounded-xl border-border/50 bg-background/50 focus:border-primary resize-none"
                />
              </div>

              <Button 
                type="submit" 
                variant="premium"
                size="lg"
                className="w-full group"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </>
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
