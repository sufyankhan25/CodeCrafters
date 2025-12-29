import { motion } from 'framer-motion';
import {
  Linkedin,
  Instagram,
  Github,
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  Heart,
} from 'lucide-react';

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    const offset = 80;
    const y =
      element.getBoundingClientRect().top + window.pageYOffset - offset;

    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/muhammad-sufyan-804921367',
      label: 'LinkedIn',
    },
    {
      icon: Github,
      href: 'https://github.com/sufyankhan25',
      label: 'GitHub',
    },
    {
      icon: Instagram,
      href: '#',
      label: 'Instagram',
    },
  ];

  const services = [
    'Web Development',
    'UI / UX Design',
    'SEO Optimization',
    'Business Automation',
    'E-Commerce Solutions',
    'AI Chatbots',
  ];

  const quickLinks = ['Home', 'About', 'Services', 'Pricing', 'Portfolio', 'Contact'];

  return (
    <footer className="relative bg-card border-t border-border">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Top */}
        <div className="py-16 md:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.h3
              whileHover={{ scale: 1.02 }}
              className="text-3xl font-heading font-bold text-gradient mb-4 cursor-pointer"
              onClick={() => scrollToSection('hero')}
            >
              CodeCrafters Digital Agency
            </motion.h3>

            <p className="text-muted-foreground max-w-md mb-6 leading-relaxed">
              We help startups, businesses, and enterprises grow digitally with
              modern websites, powerful automation, SEO strategies, and scalable
              software solutions.
            </p>

            <div className="flex gap-3">
              {socialLinks.map((item, i) => (
                <motion.a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-11 h-11 rounded-xl bg-muted hover:bg-primary hover:text-primary-foreground transition-all flex items-center justify-center"
                  aria-label={item.label}
                >
                  <item.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold mb-5">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="flex items-center gap-1 text-muted-foreground">
                  <ArrowUpRight className="w-3 h-3 text-primary" />
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="group flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <span>{item}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact strip */}
        <div className="border-t border-border/50 py-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-primary" />
            sufyan265631@gmail.com
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-primary" />
            +92 306 9044757
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary" />
            Karachi, Pakistan
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p className="flex items-center gap-1">
            © 2025 CodeCrafters Agency. Built 
            by Muhammad Sufyan
          </p>
          <div className="flex gap-6">
            <button className="hover:text-foreground">Privacy Policy</button>
            <button className="hover:text-foreground">Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
