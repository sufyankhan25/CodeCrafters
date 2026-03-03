import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Star } from 'lucide-react';
import AnimatedBackground from './AnimatedBackground';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Framer Motion Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
    },
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-background">
      {/* Background Component (Keep your existing one) */}
      <AnimatedBackground />
      
      {/* Premium Ambient Glows for Text Readability */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#00E5FF]/10 to-[#B900FF]/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto text-center"
        >
          {/* Glowing Badge */}
          <motion.div variants={itemVariants} className="flex justify-center mb-8">
            <div className="relative group cursor-default">
              {/* Animated Border Glow */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00E5FF] to-[#B900FF] rounded-full opacity-30 group-hover:opacity-60 blur transition duration-500" />
              <div className="relative flex items-center gap-2 px-5 py-2.5 bg-[#0B0F19]/80 backdrop-blur-xl border border-white/10 rounded-full">
                <Sparkles className="w-4 h-4 text-[#00E5FF]" />
                <span className="text-white font-medium text-sm tracking-wide">Building Digital Excellence</span>
              </div>
            </div>
          </motion.div>
          
          {/* Main Headline */}
          <motion.h1 
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-heading font-extrabold mb-8 leading-[1.05] tracking-tight text-foreground"
          >
            Transform Your Vision <br className="hidden md:block" /> Into{' '}
            <span className="relative inline-block">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00E5FF] via-[#0055FF] to-[#B900FF]">
                Digital Reality
              </span>
              {/* Subtle underline glow */}
              <div className="absolute -bottom-2 left-0 right-0 h-[4px] bg-gradient-to-r from-[#00E5FF] via-[#0055FF] to-[#B900FF] blur-sm opacity-50 rounded-full" />
            </span>
          </motion.h1>
          
          {/* Subheadline */}
          <motion.p 
            variants={itemVariants}
            className="text-lg sm:text-xl md:text-2xl text-foreground/70 mb-12 max-w-3xl mx-auto leading-relaxed font-body"
          >
            We craft stunning websites, powerful automations, and strategic solutions 
            that help ambitious businesses scale faster.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-16"
          >
            {/* Primary Premium Button */}
            <Button
              onClick={() => scrollToSection('contact')}
              size="lg"
              className="relative group min-w-[220px] h-14 rounded-full overflow-hidden border-none bg-gradient-to-r from-[#0055FF] to-[#B900FF] text-white shadow-[0_0_20px_rgba(0,85,255,0.3)] hover:shadow-[0_0_30px_rgba(185,0,255,0.5)] transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <span className="relative flex items-center justify-center text-lg font-semibold">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>

            {/* Secondary Glass Button */}
            <Button
              onClick={() => scrollToSection('portfolio')}
              size="lg"
              variant="outline"
              className="group min-w-[220px] h-14 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-foreground hover:bg-white/10 hover:border-white/20 hover:text-white transition-all duration-300 text-lg font-medium"
            >
              Explore Our Work
            </Button>
          </motion.div>

          {/* Trust indicators (Glass Card Style) */}
          <motion.div
            variants={itemVariants}
            className="inline-flex flex-wrap items-center justify-center gap-6 md:gap-8 px-8 py-4 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/20"
          >
            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                {['bg-[#00E5FF]', 'bg-[#0055FF]', 'bg-[#5500FF]', 'bg-[#B900FF]'].map((color, i) => (
                  <div
                    key={i}
                    className={`w-10 h-10 rounded-full ${color} border-2 border-[#0B0F19] flex items-center justify-center text-sm font-bold text-white shadow-md relative z-[${4-i}] hover:-translate-y-1 transition-transform cursor-pointer`}
                  >
                    {String.fromCharCode(64 + i + 1)}
                  </div>
                ))}
              </div>
              <span className="text-sm md:text-base font-semibold text-foreground/80">50+ Happy Clients</span>
            </div>
            
            <div className="h-8 w-px bg-white/20 hidden sm:block" />
            
            <div className="flex items-center gap-3">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400 drop-shadow-[0_0_5px_rgba(250,204,21,0.5)]" />
                ))}
              </div>
              <span className="text-sm md:text-base font-semibold text-foreground/80">5.0 Rated Agency</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Modern Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={() => scrollToSection('about')}
      >
        <div className="flex flex-col items-center gap-2 group">
          <span className="text-xs uppercase tracking-[0.2em] text-foreground/50 group-hover:text-[#00E5FF] transition-colors">Scroll</span>
          <motion.div
            className="w-6 h-10 border-2 border-white/20 group-hover:border-[#00E5FF]/50 rounded-full flex items-start justify-center p-1.5 transition-colors"
          >
            <motion.div
              animate={{ y: [0, 16, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-1.5 bg-gradient-to-b from-[#00E5FF] to-[#B900FF] rounded-full shadow-[0_0_8px_rgba(0,229,255,0.8)]"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;