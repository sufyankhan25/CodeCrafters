import { motion } from "framer-motion";
import { Clock, Briefcase, Globe, Sparkles } from "lucide-react";
import StatsCounter from "./StatsCounter";

const stats = [
  {
    icon: Clock,
    label: "Years of Expertise",
    value: 5,
    suffix: "+",
    gradient: "from-[#00E5FF] to-[#0055FF]",
  },
  {
    icon: Briefcase,
    label: "Projects Delivered",
    value: 100,
    suffix: "+",
    gradient: "from-[#0055FF] to-[#5500FF]",
  },
  {
    icon: Globe,
    label: "Worldwide Clients",
    value: 10,
    suffix: "+",
    gradient: "from-[#5500FF] to-[#B900FF]",
  },
];

// Container animation variants for staggering children
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 20 }
  },
};

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden bg-background">
      
      {/* --- PREMIUM ANIMATED BACKGROUND ORBS --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <motion.div 
          animate={{ 
            x: [0, 50, 0], 
            y: [0, -30, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] left-[15%] w-[300px] h-[300px] bg-[#00E5FF]/10 rounded-full blur-[100px]"
        />
        <motion.div 
          animate={{ 
            x: [0, -40, 0], 
            y: [0, 40, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[10%] right-[15%] w-[400px] h-[400px] bg-[#B900FF]/10 rounded-full blur-[120px]"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Heading Section */}
        <div className="max-w-4xl mx-auto text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-6"
          >
            {/* Premium Pill Badge */}
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-foreground/80 backdrop-blur-md shadow-[0_0_15px_rgba(0,229,255,0.1)]">
              <Sparkles className="w-4 h-4 text-[#00E5FF]" />
              Discover Omnex
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold mb-8 tracking-tight"
          >
            We build digital experiences <br className="hidden md:block" />
            that <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00E5FF] via-[#0055FF] to-[#B900FF]">leave a legacy.</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-foreground/70 font-body leading-relaxed max-w-3xl mx-auto"
          >
            We are a results-driven digital agency helping businesses scale through
            <span className="text-foreground font-semibold"> modern web development</span>, 
            <span className="text-foreground font-semibold"> premium branding</span>, and 
            <span className="text-foreground font-semibold"> smart automation</span>.
          </motion.p>
        </div>

        {/* Stats Section */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="relative group rounded-3xl bg-[#0B0F19]/40 dark:bg-[#0B0F19]/60 backdrop-blur-xl border border-white/10 p-10 overflow-hidden transition-all duration-300 hover:shadow-[0_20px_40px_-15px_rgba(0,85,255,0.2)]"
            >
              {/* Card Hover Gradient Reveal */}
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl pointer-events-none" style={{ backgroundImage: `linear-gradient(to bottom right, #00E5FF, #B900FF)` }} />
              
              <div className="relative z-10 flex flex-col items-center text-center">
                {/* Icon Container with Glow */}
                <div className={`relative w-20 h-20 rounded-2xl flex items-center justify-center mb-8 bg-gradient-to-br ${stat.gradient} p-[2px] group-hover:scale-110 transition-transform duration-500`}>
                  <div className="absolute inset-0 blur-xl opacity-40 bg-gradient-to-br inherit z-0 group-hover:opacity-70 transition-opacity duration-500" />
                  <div className="w-full h-full bg-[#0B0F19] rounded-2xl flex items-center justify-center relative z-10">
                    <stat.icon className="h-8 w-8 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-white/70 transition-all" />
                  </div>
                </div>

                {/* Number */}
                <div className="text-5xl font-heading font-extrabold text-foreground mb-3 flex items-center justify-center gap-1">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
                    <StatsCounter end={stat.value} />
                  </span>
                  <span className={`bg-clip-text text-transparent bg-gradient-to-br ${stat.gradient}`}>
                    {stat.suffix}
                  </span>
                </div>

                {/* Label */}
                <p className="text-foreground/60 font-body text-lg font-medium tracking-wide">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;