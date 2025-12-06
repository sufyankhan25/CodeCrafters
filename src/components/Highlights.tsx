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

const highlights = [
  {
    icon: Code,
    title: "Website Development",
    description: "High-speed, secure, SEO-optimized websites built for conversions.",
    color: "from-primary to-primary/60",
  },
  {
    icon: Palette,
    title: "UI/UX Designing",
    description: "Modern, clean, and user-friendly interfaces that elevate your brand.",
    color: "from-accent to-accent/60",
  },
  {
    icon: Search,
    title: "SEO & Ranking",
    description: "Boost your visibility with expert SEO strategies and keyword ranking.",
    color: "from-green-500 to-green-400",
  },
  {
    icon: Megaphone,
    title: "Google Ads Management",
    description: "Maximize ROI with optimized ad campaigns that convert visitors into customers.",
    color: "from-yellow-500 to-yellow-300",
  },
  {
    icon: Monitor,
    title: "Social Media Management",
    description: "Engaging content, branding, and strategies to grow your online presence.",
    color: "from-sky-500 to-sky-300",
  },
  {
    icon: Rocket,
    title: "Branding & Logo Design",
    description: "Build a unique digital identity with premium branding and logo creation.",
    color: "from-pink-500 to-purple-500",
  },
  {
    icon: Bot,
    title: "AI Automation",
    description: "Smart workflows, chatbots, and automation that save hours of work.",
    color: "from-primary to-accent",
  },
  {
    icon: Globe,
    title: "E-commerce Solutions",
    description: "High-converting stores built with modern tools, payment integration & SEO.",
    color: "from-indigo-500 to-purple-400",
  },
];

const Highlights = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background soft gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-background" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
              className="group"
            >
              <div className="h-full glass-card p-8 rounded-2xl hover:shadow-2xl border border-border/40 transition-all duration-300 relative overflow-hidden">

                {/* Hover glow effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                {/* Icon */}
                <div
                  className={`relative w-16 h-16 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <item.icon className="h-7 w-7 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-heading font-semibold mb-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
