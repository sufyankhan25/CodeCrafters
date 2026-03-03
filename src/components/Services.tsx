import { motion } from 'framer-motion';
import { Globe, Palette, Megaphone, Bot, Search, Wrench, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Globe,
    title: 'Web Design & Dev',
    description: 'Responsive, modern websites & web applications.',
    price: '$400',
    gradient: "from-[#00E5FF] to-[#0055FF]",
    popular: false,
  },
  {
    icon: Palette,
    title: 'Branding & Logo',
    description: 'Strong, memorable brand identity and guidelines.',
    price: '$200',
    gradient: "from-[#0055FF] to-[#5500FF]",
    popular: false,
  },
  {
    icon: Megaphone,
    title: 'Digital Ads',
    description: 'High-converting Google, Meta, and TikTok campaigns.',
    price: '$250',
    gradient: "from-[#5500FF] to-[#B900FF]",
    popular: false,
  },
  {
    icon: Bot,
    title: 'AI Automation Setup',
    description: 'Chatbots, custom AI agents, and workflow automation.',
    price: '$350',
    gradient: "from-[#00E5FF] to-[#B900FF]",
    popular: true, 
  },
  {
    icon: Search,
    title: 'SEO Optimization',
    description: 'Technical SEO to boost organic rankings & traffic.',
    price: '$180',
    gradient: "from-[#B900FF] to-[#0055FF]",
    popular: false,
  },
  {
    icon: Wrench,
    title: 'Agency Maintenance',
    description: 'Continuous updates, hosting, and technical support.',
    price: '$100/mo',
    gradient: "from-[#0055FF] to-[#00E5FF]",
    popular: false,
  },
];

const Services = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
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

  return (
    <section id="services" className="py-24 md:py-32 bg-background relative overflow-hidden transition-colors duration-500">
      
      {/* Background Ambient Glows - perfectly blended with the theme */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1px] bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1px] bg-gradient-to-r from-transparent via-[#00E5FF]/20 to-transparent" />
      <div className="absolute top-1/4 -left-64 w-[400px] h-[400px] bg-[#00E5FF]/5 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 -right-64 w-[400px] h-[400px] bg-[#B900FF]/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-muted-foreground backdrop-blur-md shadow-[0_0_15px_rgba(185,0,255,0.1)]">
              <Sparkles className="w-4 h-4 text-[#B900FF]" /> 
              Tailored Solutions
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold mb-6 tracking-tight text-foreground">
            Transparent <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00E5FF] to-[#B900FF]">Pricing</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-body max-w-2xl mx-auto leading-relaxed">
            Premium digital services designed to scale your business. Transparent starting prices, no hidden fees.
          </p>
        </motion.div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative group h-full"
              style={{ willChange: "transform, opacity" }}
            >
              {/* Premium Background Glow on Hover */}
              <div className={`absolute -inset-0.5 bg-gradient-to-br ${service.gradient} rounded-[2rem] opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-500`} />
              
              {/* Glassmorphic Card exactly matching Portfolio & Highlights */}
              <div className={`relative h-full bg-card/40 backdrop-blur-xl p-8 rounded-[2rem] border transition-all duration-300 flex flex-col overflow-hidden ${service.popular ? 'border-[#00E5FF]/40 shadow-[0_0_30px_rgba(0,229,255,0.1)]' : 'border-border/50 group-hover:border-transparent'}`}>
                
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-l from-[#00E5FF] to-[#0055FF] text-white text-[10px] font-bold uppercase tracking-wider py-1.5 px-6 rounded-bl-xl shadow-lg transform translate-x-1 -translate-y-1">
                    Most Popular
                  </div>
                )}

                {/* Header & Icon */}
                <div className="flex justify-between items-start mb-6">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500 p-[1px]`}>
                    <div className="w-full h-full bg-background/80 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                      <service.icon className="h-6 w-6 text-foreground drop-shadow-md" />
                    </div>
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-2xl font-heading font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-1">
                  {service.description}
                </p>

                {/* Price Tag */}
                <div className="mb-8 pt-6 border-t border-border/50">
                  <p className="text-sm text-muted-foreground font-medium mb-1 uppercase tracking-wide">Starting From</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-heading font-extrabold text-foreground tracking-tight">{service.price}</span>
                  </div>
                </div>

                {/* Interactive Button */}
                <Button 
                  onClick={scrollToContact}
                  className={`w-full h-12 rounded-xl text-base font-semibold transition-all duration-300 relative overflow-hidden group/btn ${
                    service.popular 
                    ? 'bg-gradient-to-r from-[#0055FF] to-[#B900FF] text-white border-none hover:shadow-[0_0_20px_rgba(185,0,255,0.4)]' 
                    : 'bg-transparent text-foreground border border-border/60 hover:border-transparent'
                  }`}
                >
                  {/* Hover gradient fill for secondary buttons */}
                  {!service.popular && (
                    <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover/btn:opacity-10 transition-opacity duration-300 -z-10`} />
                  )}
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Get Started <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global CTA - Matched with theme */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-20"
        >
          <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-6 p-8 rounded-[2rem] bg-card/30 border border-border/50 backdrop-blur-md w-full max-w-4xl mx-auto shadow-lg">
            <div className="text-left flex-1">
              <h4 className="text-2xl font-bold text-foreground mb-2">Need a custom enterprise solution?</h4>
              <p className="text-muted-foreground">Let's build a package specifically for your brand's requirements.</p>
            </div>
            <Button 
              onClick={scrollToContact}
              size="lg"
              className="h-14 px-8 rounded-full bg-foreground text-background hover:scale-105 transition-all font-bold shadow-xl whitespace-nowrap"
            >
              Get a Custom Quote
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;