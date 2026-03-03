import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Moon, Sun, Menu, X } from 'lucide-react'; 
import { useTheme } from '@/contexts/ThemeContext';
import { motion, AnimatePresence, useScroll } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const { theme, toggleTheme } = useTheme();
  
  // Framer motion scroll hook for premium progress bar
  const { scrollYProgress } = useScroll();

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Portfolio', id: 'portfolio' },
    { label: 'Pricing', id: 'pricing' },
    { label: 'Contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Navbar background state
      setIsScrolled(window.scrollY > 20);

      // Active section tracker logic
      const scrollPosition = window.scrollY + 120; // Offset for navbar height
      let currentActive = 'hero';

      for (const item of navItems) {
        const section = document.getElementById(item.id);
        if (section && section.offsetTop <= scrollPosition) {
          currentActive = item.id;
        }
      }
      setActiveSection(currentActive);
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger once on mount to set initial state
    handleScroll();
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
      setActiveSection(id);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-background/70 backdrop-blur-xl shadow-sm border-b border-border/40 py-3' 
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
              <div className="relative h-10 w-10 md:h-12 md:w-12 rounded-xl bg-[#0B0F19] flex items-center justify-center shadow-lg shadow-cyan-500/20 border border-white/10 overflow-hidden transition-all duration-300 group-hover:shadow-cyan-500/40">
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
                    <circle cx="60" cy="60" r="45" stroke="url(#navCyan)" strokeWidth="12" strokeDasharray="160 40 50 32" strokeLinecap="round" transform="rotate(-20 60 60)" className="group-hover:rotate-12 transition-transform duration-700" />
                    <circle cx="60" cy="60" r="24" stroke="url(#navPurple)" strokeWidth="6" strokeDasharray="60 20 40 30" strokeLinecap="round" transform="rotate(70 60 60)" className="group-hover:-rotate-45 transition-transform duration-700" />
                    <circle cx="60" cy="15" r="7" fill="#00E5FF" /> 
                    <circle cx="105" cy="60" r="7" fill="#B900FF" /> 
                    <circle cx="15" cy="60" r="7" fill="#0055FF" /> 
                    <circle cx="75" cy="98" r="5" fill="#5500FF" /> 
                    <circle cx="60" cy="60" r="8" fill="url(#navCyan)" />
                 </svg>
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-xl md:text-2xl font-heading font-extrabold tracking-tight leading-none text-foreground">
                  Omnex
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00E5FF] to-[#B900FF] ml-[3px]">Digital</span>
                </span>
              </div>
            </motion.div>
            {/* --- OMNEX DIGITAL PREMIUM LOGO END --- */}

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 group ${
                      isActive ? 'text-foreground' : 'text-foreground/60 hover:text-foreground'
                    }`}
                  >
                    {item.label}
                    {/* Active Background Pill (Premium subtle effect) */}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute inset-0 bg-primary/5 dark:bg-primary/10 rounded-full -z-10"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    {/* Hover Line */}
                    <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-[#00E5FF] to-[#B900FF] transition-all duration-300 rounded-full ${isActive ? 'w-2/3 shadow-[0_0_8px_rgba(0,229,255,0.6)]' : 'w-0 group-hover:w-1/2'}`} />
                  </button>
                );
              })}
            </div>

            {/* CTA & Theme Toggle (Desktop) */}
            <div className="hidden lg:flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="rounded-full hover:bg-primary/10 transition-colors"
                aria-label="Toggle Theme"
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
                variant="default" // Using default if premium variant isn't globally defined in shadcn
                className="px-6 py-2 rounded-full font-medium transition-all duration-300 shadow-[0_0_20px_rgba(0,85,255,0.3)] hover:shadow-[0_0_25px_rgba(185,0,255,0.4)] bg-gradient-to-r from-[#0055FF] to-[#B900FF] hover:opacity-90 text-white border-none transform hover:-translate-y-0.5"
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
                className="rounded-full relative z-50 bg-primary/5"
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

        {/* Top Scroll Progress Bar */}
        <motion.div 
          style={{ scaleX: scrollYProgress }} 
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#00E5FF] to-[#B900FF] origin-left z-50"
        />

        {/* Mobile Menu Overaly */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: '100vh' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-2xl border-b border-border/50 shadow-2xl z-40 overflow-hidden"
            >
              <div className="flex flex-col p-6 space-y-2 h-full">
                {navItems.map((item, index) => {
                  const isActive = activeSection === item.id;
                  return (
                    <motion.button
                      key={item.id}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -30 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => scrollToSection(item.id)}
                      className={`block w-full text-left px-4 py-4 text-xl rounded-2xl transition-all font-medium font-heading ${
                        isActive 
                          ? 'bg-primary/10 text-primary font-bold' 
                          : 'text-foreground/80 hover:text-primary hover:bg-primary/5'
                      }`}
                    >
                      {item.label}
                    </motion.button>
                  );
                })}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  transition={{ delay: navItems.length * 0.05 + 0.1 }}
                  className="pt-6 mt-auto pb-24"
                >
                  <Button
                    onClick={() => scrollToSection('contact')}
                    size="lg"
                    className="w-full h-14 text-lg rounded-full shadow-[0_0_20px_rgba(0,85,255,0.3)] bg-gradient-to-r from-[#0055FF] to-[#B900FF] text-white transform hover:scale-[1.02] transition-all"
                  >
                    Get Started
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
      
      {/* Background overlay to close mobile menu when clicking outside */}
      <AnimatePresence>
         {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
            />
         )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;