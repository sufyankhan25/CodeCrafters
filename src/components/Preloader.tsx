import { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform, animate, AnimatePresence } from 'framer-motion';

const words = ["Initializing System", "Crafting Designs", "Compiling Code", "Launching Excellence"];

const Preloader = () => {
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  
  // 🚀 OPTIMIZATION: Hardware accelerated percentage tracking (No React re-renders)
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  // Word Cycle Logic (Slower, premium pacing)
  useEffect(() => {
    if (index === words.length - 1) return;
    const timeout = setTimeout(() => {
      setIndex(index + 1);
    }, 600); 
    return () => clearTimeout(timeout);
  }, [index]);

  // Optimized Counter Animation
  useEffect(() => {
    const controls = animate(count, 100, {
      duration: 2.4, // Matches the total time of word cycles
      ease: [0.25, 0.46, 0.45, 0.94], 
    });
    return () => controls.stop();
  }, [count]);

  // SVG Curve Logic - Color changed to match Omnex Theme
  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height} L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height} L0 0`;

  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }
    }
  }

  const slideUp = {
    initial: { top: 0 },
    exit: { 
      top: "-100vh", 
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 } 
    }
  }

  return (
    <motion.div 
      variants={slideUp} 
      initial="initial" 
      exit="exit" 
      className="fixed inset-0 flex items-center justify-center z-[9999] bg-[#050810]"
    >
      {dimension.width > 0 && (
        <>
          {/* Ambient Background Glow in Loader */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-tr from-[#00E5FF]/10 to-[#B900FF]/10 blur-[100px] rounded-full pointer-events-none" />

          {/* CONTENT CONTAINER */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center z-10 w-full px-4"
          >
            {/* OMNEX Animated Logo */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="mb-8"
            >
              <svg viewBox="0 0 120 120" className="h-16 w-16 md:h-20 md:w-20 drop-shadow-[0_0_15px_rgba(0,229,255,0.4)]" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="preloaderCyan" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00E5FF" />
                    <stop offset="100%" stopColor="#0055FF" />
                  </linearGradient>
                  <linearGradient id="preloaderPurple" x1="100%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#B900FF" />
                    <stop offset="100%" stopColor="#5500FF" />
                  </linearGradient>
                </defs>
                <circle cx="60" cy="60" r="45" stroke="url(#preloaderCyan)" strokeWidth="10" strokeDasharray="160 40 50 32" strokeLinecap="round" />
                <motion.circle 
                  cx="60" cy="60" r="24" 
                  stroke="url(#preloaderPurple)" strokeWidth="6" strokeDasharray="60 20 40 30" strokeLinecap="round"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  style={{ originX: "50%", originY: "50%" }}
                />
                <circle cx="60" cy="60" r="8" fill="url(#preloaderCyan)" />
              </svg>
            </motion.div>

            {/* Premium Cross-fading Text */}
            <div className="h-[40px] flex items-center justify-center overflow-hidden mb-12">
              <AnimatePresence mode="wait">
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="text-white/80 font-heading text-lg md:text-xl tracking-widest uppercase font-medium"
                >
                  {words[index]}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* LOADING BAR & PERCENTAGE */}
            <div className="w-full max-w-[250px] md:max-w-[350px] flex flex-col items-center gap-4">
               {/* Percentage Text (Hardware Accelerated) */}
               <div className="flex items-baseline gap-1 text-4xl md:text-5xl font-heading font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#B900FF]">
                 <motion.span>{rounded}</motion.span>
                 <span className="text-2xl md:text-3xl">%</span>
               </div>
               
               {/* Glow Progress Line */}
               <div className="h-[2px] w-full bg-white/10 rounded-full overflow-hidden relative">
                 <motion.div 
                   className="absolute top-0 left-0 bottom-0 bg-gradient-to-r from-[#00E5FF] to-[#B900FF] shadow-[0_0_15px_rgba(0,229,255,0.8)]"
                   initial={{ width: "0%" }}
                   animate={{ width: "100%" }}
                   transition={{ duration: 2.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                 />
               </div>
            </div>

          </motion.div>

          {/* SVG CURVE (Background) - Using exact match for smooth transition */}
          <svg className="absolute top-0 w-full h-[calc(100%+300px)] pointer-events-none fill-[#050810] z-[5]">
            <motion.path 
              variants={curve} 
              initial="initial" 
              exit="exit" 
            />
          </svg>
        </>
      )}
    </motion.div>
  );
};

export default Preloader;