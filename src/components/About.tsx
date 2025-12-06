import { motion } from "framer-motion";
import { Clock, Briefcase, Globe } from "lucide-react";
import StatsCounter from "./StatsCounter";

const stats = [
  {
    icon: Clock,
    label: "Years of Expertise",
    value: 5,
    suffix: "+",
  },
  {
    icon: Briefcase,
    label: "Projects Delivered",
    value: 100,
    suffix: "+",
  },
  {
    icon: Globe,
    label: "Worldwide Clients",
    value: 10,
    suffix: "+",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      {/* Background Glow Effect */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-primary/5 to-transparent blur-3xl opacity-40" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold mb-6 bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
            Who We Are
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground font-body leading-relaxed max-w-3xl mx-auto">
            We are a results-driven digital agency helping businesses scale through
            <span className="font-semibold text-primary"> modern web development</span>, 
            <span className="font-semibold text-primary"> premium branding</span>, and 
            <span className="font-semibold text-primary"> smart automation</span>.
            Our mission is to build high-quality digital experiences that leave a strong impression.
          </p>
        </motion.div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card/40 backdrop-blur-md p-10 rounded-2xl border border-border/40 hover:border-primary/40 transition-all hover:shadow-xl group shadow-md"
            >
              {/* Icon */}
              <div className="w-20 h-20 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <stat.icon className="h-10 w-10 text-white" />
              </div>

              {/* Number */}
              <div className="text-5xl font-heading font-extrabold text-primary mb-2">
                <StatsCounter end={stat.value} suffix={stat.suffix} />
              </div>

              {/* Label */}
              <p className="text-muted-foreground font-body text-lg font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
