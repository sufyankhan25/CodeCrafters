import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Highlights from '@/components/Highlights';
import About from '@/components/About';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
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
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-white">
      <SEO />

      <AnimatePresence mode="wait">
        {isLoading && <Preloader key="preloader" />}
      </AnimatePresence>

      {/* Content ko tab hi render karein jab loading khatam ho */}
      {!isLoading && (
        <>
          <Navbar />
          <Hero />
          <Highlights />
          <About />
          <Services />
          <Portfolio />
          <Testimonials />
          <Pricing />
          <Contact />
          <Footer />
          <AIChatWidget />
        </>
      )}
    </div>
  );
};

export default Index;