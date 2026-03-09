import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Highlights from '@/components/Highlights';
import About from '@/components/About';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials';
// Pricing component hata diya gaya hai
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import AIChatWidget from '@/components/AIChatWidget';
import SEO from '@/components/SEO';
import Preloader from '@/components/Preloader';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2400); // 2400ms is perfect for this animation
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-white flex flex-col">
      <SEO />

      {/* mode="wait" ensures preloader exits completely before content enters */}
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Preloader key="preloader" />
        ) : (
          <motion.div
            key="main-content"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col flex-grow"
          >
            <Navbar />
            
            {/* Wrapped page sections in a semantic <main> tag for better SEO/Structure */}
            <main className="flex-grow">
              <Hero />
              <Highlights />
              <About />
              <Services />
              <Portfolio />
              <Testimonials />
              <Contact />
            </main>
            
            <Footer />
            <AIChatWidget />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;