import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Moon, Sun, Menu, X } from 'lucide-react'; 
import { useTheme } from '@/contexts/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Portfolio', id: 'portfolio' },
    { label: 'Pricing', id: 'pricing' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'glass py-3 shadow-sm border-b border-white/10' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* --- OMNEX DIGITAL PREMIUM LOGO START --- */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => scrollToSection('hero')}
          >
            {/* Custom SVG Icon Container */}
            <div className="relative h-10 w-10 md:h-12 md:w-12 rounded-xl bg-[#0B0F19] flex items-center justify-center shadow-lg shadow-cyan-500/20 border border-white/5 overflow-hidden">
               {/* Custom Omnex SVG */}
               <svg viewBox="0 0 120 120" className="h-8 w-8 relative z-10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="navCyan" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#00E5FF" />
                      <stop offset="100%" stopColor="#0055FF" />
                    </linearGradient>
                    <linearGradient id="navPurple" x1="100%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#B900FF" />
                      <stop offset="100%" stopColor="#5500FF" />
                    </linearGradient>
                  </defs>
                  {/* Outer Tech Ring */}
                  <circle cx="60" cy="60" r="45" stroke="url(#navCyan)" strokeWidth="12" strokeDasharray="160 40 50 32" strokeLinecap="round" transform="rotate(-20 60 60)" />
                  {/* Inner Cyber Ring */}
                  <circle cx="60" cy="60" r="24" stroke="url(#navPurple)" strokeWidth="6" strokeDasharray="60 20 40 30" strokeLinecap="round" transform="rotate(70 60 60)" />
                  {/* Nodes */}
                  <circle cx="60" cy="15" r="7" fill="#00E5FF" /> 
                  <circle cx="105" cy="60" r="7" fill="#B900FF" /> 
                  <circle cx="15" cy="60" r="7" fill="#0055FF" /> 
                  <circle cx="75" cy="98" r="5" fill="#5500FF" /> 
                  {/* Center Core */}
                  <circle cx="60" cy="60" r="8" fill="url(#navCyan)" />
               </svg>
            </div>

            {/* The Text Part */}
            <div className="flex flex-col justify-center">
              <span className="text-xl md:text-2xl font-heading font-extrabold tracking-tight leading-none text-foreground">
                Omnex
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00E5FF] to-[#B900FF] ml-[3px]">Digital</span>
              </span>
            </div>
          </motion.div>
          {/* --- OMNEX DIGITAL PREMIUM LOGO END --- */}

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative px-4 py-2 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors group"
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#00E5FF] to-[#B900FF] transition-all duration-300 group-hover:w-2/3 rounded-full" />
              </button>
            ))}
          </div>

          {/* CTA & Theme Toggle (Desktop) */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full hover:bg-primary/10"
            >
              <motion.div
                initial={false}
                animate={{ rotate: theme === 'dark' ? 180 : 0, scale: theme === 'dark' ? 1 : 0.9 }}
                transition={{ duration: 0.3 }}
              >
                {theme === 'light' ? (
                  <Moon className="h-5 w-5 text-foreground/80" />
                ) : (
                  <Sun className="h-5 w-5 text-yellow-400" />
                )}
              </motion.div>
            </Button>
            <Button
              onClick={() => scrollToSection('contact')}
              variant="premium" 
              className="px-6 shadow-md shadow-cyan-500/20 bg-gradient-to-r from-[#0055FF] to-[#B900FF] hover:opacity-90 text-white border-none"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Actions */}
          <div className="lg:hidden flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full"
            >
               <motion.div
                initial={false}
                animate={{ rotate: theme === 'dark' ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
              {theme === 'light' ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5 text-yellow-400" />
              )}
              </motion.div>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="rounded-full relative z-50"
            >
              <motion.div
                animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </motion.div>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="lg:hidden absolute top-full left-0 right-0 p-4 bg-background/95 backdrop-blur-xl border-b border-border shadow-xl z-40"
          >
            <div className="flex flex-col space-y-1">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-4 py-3 text-lg text-foreground/80 hover:text-primary hover:bg-primary/5 rounded-xl transition-all font-medium font-heading"
                >
                  {item.label}
                </motion.button>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.05 + 0.1 }}
                className="pt-2"
              >
                <Button
                  onClick={() => scrollToSection('contact')}
                  variant="premium"
                  size="lg"
                  className="w-full mt-2 shadow-lg shadow-cyan-500/20 bg-gradient-to-r from-[#0055FF] to-[#B900FF] text-white"
                >
                  Get Started
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;