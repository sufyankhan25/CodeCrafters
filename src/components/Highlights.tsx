import { motion } from "framer-motion";
import {
  Code,
  Palette,
  Bot,
  Globe,
  Search,
  Rocket,
  Monitor,
  Megaphone,
} from "lucide-react";

// Optimized to match Omnex Digital's Cyan & Purple Theme
const highlights = [
  {
    icon: Code,
    title: "Website Development",
    description: "High-speed, secure, SEO-optimized websites built for conversions.",
    gradient: "from-[#00E5FF] to-[#0055FF]",
    shadow: "shadow-[0_0_20px_rgba(0,229,255,0.3)]"
  },
  {
    icon: Palette,
    title: "UI/UX Designing",
    description: "Modern, clean, and user-friendly interfaces that elevate your brand.",
    gradient: "from-[#0055FF] to-[#5500FF]",
    shadow: "shadow-[0_0_20px_rgba(0,85,255,0.3)]"
  },
  {
    icon: Search,
    title: "SEO & Ranking",
    description: "Boost your visibility with expert SEO strategies and keyword ranking.",
    gradient: "from-[#5500FF] to-[#B900FF]",
    shadow: "shadow-[0_0_20px_rgba(85,0,255,0.3)]"
  },
  {
    icon: Megaphone,
    title: "Ads Management",
    description: "Maximize ROI with optimized ad campaigns that convert visitors into customers.",
    gradient: "from-[#B900FF] to-[#00E5FF]",
    shadow: "shadow-[0_0_20px_rgba(185,0,255,0.3)]"
  },
  {
    icon: Monitor,
    title: "Social Media",
    description: "Engaging content, branding, and strategies to grow your online presence.",
    gradient: "from-[#00E5FF] to-[#B900FF]",
    shadow: "shadow-[0_0_20px_rgba(0,229,255,0.3)]"
  },
  {
    icon: Rocket,
    title: "Branding & Logo",
    description: "Build a unique digital identity with premium branding and logo creation.",
    gradient: "from-[#B900FF] to-[#0055FF]",
    shadow: "shadow-[0_0_20px_rgba(185,0,255,0.3)]"
  },
  {
    icon: Bot,
    title: "AI Automation",
    description: "Smart workflows, chatbots, and automation that save hours of work.",
    gradient: "from-[#0055FF] to-[#00E5FF]",
    shadow: "shadow-[0_0_20px_rgba(0,85,255,0.3)]"
  },
  {
    icon: Globe,
    title: "E-commerce Solutions",
    description: "High-converting stores built with modern tools, payment integration & SEO.",
    gradient: "from-[#5500FF] to-[#00E5FF]",
    shadow: "shadow-[0_0_20px_rgba(85,0,255,0.3)]"
  },
];

const Highlights = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-background">
      
      {/* Background Soft Glow to match flow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-[#00E5FF]/5 via-[#B900FF]/5 to-transparent blur-[120px] pointer-events-none -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Optional Section Header (To give context before grid) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
           <h2 className="text-3xl md:text-5xl font-heading font-extrabold mb-6 tracking-tight text-foreground">
            Everything you need to <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00E5FF] to-[#B900FF]">Scale Fast.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94], // Premium ease-out
              }}
              whileHover={{
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              className="group relative h-full rounded-3xl"
              style={{ willChange: "transform, opacity" }}
            >
              {/* Premium Animated Border Glow on Hover */}
              <div className={`absolute -inset-0.5 bg-gradient-to-br ${item.gradient} rounded-3xl opacity-0 group-hover:opacity-30 blur-sm transition-opacity duration-500`} />
              
              <div className="h-full relative bg-card/40 dark:bg-[#0B0F19]/60 backdrop-blur-xl p-8 rounded-3xl border border-border/50 group-hover:border-transparent transition-colors duration-300 flex flex-col z-10 overflow-hidden">

                {/* Internal ambient glow */}
                <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${item.gradient} opacity-[0.03] group-hover:opacity-[0.08] blur-2xl rounded-full transition-opacity duration-500`} />

                {/* Floating Icon Container */}
                <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-8 ${item.shadow} group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500`}>
                  <div className="absolute inset-0 bg-black/10 rounded-2xl" /> {/* Subtle depth */}
                  <item.icon className="h-6 w-6 text-white relative z-10 drop-shadow-md" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-heading font-bold mb-3 text-foreground group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/70 transition-all duration-300">
                  {item.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                  {item.description}
                </p>

                {/* Subtle bottom indicator */}
                <div className="mt-6 w-8 h-1 rounded-full bg-border group-hover:w-16 group-hover:bg-[#00E5FF] transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;