import { motion } from 'framer-motion';
import { Linkedin, Instagram, Github, ArrowUpRight, Heart } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/yourprofile', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/yourprofile', label: 'GitHub' },
    { icon: Instagram, href: 'https://instagram.com/yourprofile', label: 'Instagram' },
  ];

  const quickLinks = ['Home', 'About', 'Services', 'Portfolio'];
  const otherLinks = ['Pricing', 'Testimonials', 'Contact'];

  return (
    <footer className="relative bg-card border-t border-border">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {/* Brand */}
            <div className="lg:col-span-2">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="inline-block mb-6 cursor-pointer"
                onClick={() => scrollToSection('hero')}
              >
                <span className="text-3xl font-heading font-bold text-gradient">
                  CodeCrafters
                </span>
              </motion.div>
              <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
                Transforming ideas into exceptional digital experiences. We build fast, 
                scalable, and beautiful solutions for modern businesses.
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-11 h-11 rounded-xl bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center group"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  </motion.a>
                ))}
              </div>
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

            {/* More Links */}
            <div>
              <h4 className="font-heading font-semibold mb-5">Resources</h4>
              <ul className="space-y-3">
                {otherLinks.map((item) => (
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
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              © 2025 CodeCrafters Agency. Made with 
              <Heart className="w-4 h-4 text-accent fill-accent" />
              in Pakistan.
            </p>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <button className="hover:text-foreground transition-colors">Privacy Policy</button>
              <button className="hover:text-foreground transition-colors">Terms of Service</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
