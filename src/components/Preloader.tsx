import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const words = ["Innovation", "Creativity", "Experience", "Development", "Portfolio"];

const Preloader = () => {
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  // Word Cycle Logic
  useEffect(() => {
    if (index === words.length - 1) return;
    const timeout = setTimeout(() => {
      setIndex(index + 1);
    }, 400); 
    return () => clearTimeout(timeout);
  }, [index]);

  // Percentage Counter Logic
  useEffect(() => {
    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 20); // 20ms * 100 = 2000ms (Approx 2 seconds total)

    return () => clearInterval(interval);
  }, []);

  // SVG Curve Logic
  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height}  L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] }
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 }
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
      className="fixed inset-0 flex items-center justify-center z-[9999] bg-[#141516]"
    >
      {dimension.width > 0 && (
        <>
          {/* CONTENT CONTAINER */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center justify-center z-10 w-full px-4"
          >
            {/* 1. MORPHING TEXT */}
            <div className="flex items-center text-white text-4xl md:text-6xl font-bold tracking-tight mb-8 min-h-[60px]">
              <span className="mr-3 w-3 h-3 bg-white rounded-full inline-block animate-pulse shadow-[0_0_10px_rgba(255,255,255,0.8)]"></span>
              {words[index]}
            </div>

            {/* 2. LOADING BAR CONTAINER */}
            <div className="w-full max-w-[300px] md:max-w-[400px] flex items-center gap-4">
               {/* Progress Line */}
               <div className="h-[2px] w-full bg-white/20 rounded-full overflow-hidden relative">
                 <motion.div 
                   className="h-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)]"
                   initial={{ width: "0%" }}
                   animate={{ width: "100%" }}
                   transition={{ duration: 2.1, ease: "easeInOut" }}
                 />
               </div>
               
               {/* Percentage Text */}
               <span className="text-white font-mono text-sm md:text-base w-[40px] text-right">
                 {percent}%
               </span>
            </div>

          </motion.div>

          {/* SVG CURVE (Background) */}
          <svg className="absolute top-0 w-full h-[calc(100%+300px)] pointer-events-none fill-[#141516]">
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