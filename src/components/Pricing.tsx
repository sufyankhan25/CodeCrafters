import { motion } from 'framer-motion';
import { Check, Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const plans = [
  {
    name: 'Starter LaunchKit',
    price: '$299',
    period: 'one-time',
    description: 'Perfect for startups and small businesses.',
    features: [
      '1-page modern website',
      'Responsive mobile design',
      'Basic SEO setup',
      'Contact form integration',
      'Google Map embedding',
      '1 design revision',
      '15 days support',
    ],
    featured: false,
  },
  {
    name: 'Business Growth',
    price: '$599',
    period: 'one-time',
    description: 'Most popular choice for growing companies.',
    features: [
      'Up to 5 pages',
      'Custom UI/UX design',
      'Advanced SEO optimization',
      'Speed optimization',
      'Social media integration',
      'Google Analytics setup',
      'Facebook Pixel setup',
      '3 design revisions',
      '45 days support',
    ],
    featured: true,
  },
  {
    name: 'Pro Branding & SEO',
    price: '$899',
    period: 'one-time',
    description: 'For brands looking to scale with premium features.',
    features: [
      '8–10 page website',
      'Premium UI animations',
      'Blog + CMS setup',
      'High-level SEO strategy',
      'Complete brand styling',
      'Google Ads account setup',
      'Retargeting ads setup',
      'Email automation setup',
      '3 months premium support',
    ],
    featured: false,
  },
  {
    name: 'Enterprise Auto',
    price: '$1499+',
    period: 'starting at',
    description: 'Full-scale automation and digital transformation.',
    features: [
      'E-commerce store',
      'Custom admin dashboards',
      'AI chatbot integration',
      'CRM system integration',
      'SEO + Google Ads management',
      'Full branding package',
      '6 months premium support',
      'Dedicated account manager',
    ],
    featured: false,
  },
];

const Pricing = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-24 md:py-32 relative overflow-hidden bg-background transition-colors duration-500">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-[#00E5FF]/5 via-[#B900FF]/5 to-transparent blur-[120px] pointer-events-none -z-10" />

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
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-md shadow-[0_0_15px_rgba(0,229,255,0.05)]">
              <Sparkles className="w-4 h-4 text-[#00E5FF]" />
              <span className="text-muted-foreground font-medium text-sm">Simple & Transparent</span>
            </span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold mb-6 tracking-tight text-foreground">
            Invest in Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00E5FF] to-[#B900FF]">Digital Success</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-body">
            Transparent pricing with no hidden fees. Choose the plan that fits your vision and let's start building.
          </p>
        </motion.div>

        {/* Pricing Grid (4 Columns on Large Screens) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-[90rem] mx-auto items-center">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{ willChange: "transform, opacity" }}
              className={`relative h-full transition-all duration-500 ${plan.featured ? 'lg:-translate-y-4 z-10' : 'hover:-translate-y-2'}`}
            >
              {/* Animated Glow for Featured Plan */}
              {plan.featured && (
                <div className="absolute -inset-0.5 bg-gradient-to-b from-[#00E5FF] to-[#B900FF] rounded-3xl opacity-50 blur-md" />
              )}
              
              <div 
                className={`relative h-full flex flex-col rounded-3xl p-8 backdrop-blur-xl transition-colors duration-300 ${
                  plan.featured 
                    ? 'bg-card/90 border border-[#00E5FF]/30 shadow-[0_10px_40px_-10px_rgba(0,229,255,0.2)]' 
                    : 'bg-card/40 border border-border/50 hover:border-white/10'
                }`}
              >
                {/* Popular Badge */}
                {plan.featured && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-max">
                    <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-[#0055FF] to-[#B900FF] text-white px-5 py-1.5 rounded-full text-sm font-bold shadow-lg shadow-[#0055FF]/20 tracking-wide uppercase">
                      <Sparkles className="w-4 h-4" /> Most Popular
                    </span>
                  </div>
                )}
                
                {/* Plan Header */}
                <div className="text-center mb-8 pt-4">
                  <h3 className={`text-2xl font-heading font-bold mb-2 ${plan.featured ? 'text-foreground' : 'text-foreground'}`}>
                    {plan.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-6 h-10 flex items-center justify-center">
                    {plan.description}
                  </p>
                  
                  {/* Price Block */}
                  <div className="flex flex-col items-center justify-center">
                    {plan.period === 'starting at' && (
                      <span className="text-sm text-muted-foreground font-medium uppercase tracking-wider mb-1">Starting At</span>
                    )}
                    <div className="flex items-baseline justify-center gap-1">
                      <span className={`text-5xl font-heading font-extrabold tracking-tight ${plan.featured ? 'bg-clip-text text-transparent bg-gradient-to-r from-[#00E5FF] to-[#B900FF]' : 'text-foreground'}`}>
                        {plan.price}
                      </span>
                    </div>
                    {plan.period === 'one-time' && (
                      <span className="text-muted-foreground text-sm mt-1 font-medium">/ one-time project</span>
                    )}
                  </div>
                </div>
                
                {/* Features List */}
                <ul className="space-y-4 mb-10 flex-1">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        plan.featured 
                          ? 'bg-gradient-to-br from-[#00E5FF]/20 to-[#B900FF]/20' 
                          : 'bg-muted/50 border border-border'
                      }`}>
                        <Check className={`h-3 w-3 ${plan.featured ? 'text-[#00E5FF]' : 'text-muted-foreground'}`} />
                      </div>
                      <span className="text-sm text-foreground/80 leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Action Button */}
                <Button
                  onClick={scrollToContact}
                  className={`w-full h-12 rounded-xl text-base font-semibold transition-all duration-300 group/btn ${
                    plan.featured 
                      ? 'bg-gradient-to-r from-[#0055FF] to-[#B900FF] text-white border-none shadow-[0_0_20px_rgba(185,0,255,0.3)] hover:shadow-[0_0_30px_rgba(185,0,255,0.5)] hover:-translate-y-1' 
                      : 'bg-transparent text-foreground border border-border hover:border-[#00E5FF]/50 hover:bg-[#00E5FF]/5'
                  }`}
                >
                  <span className="flex items-center justify-center gap-2">
                    {plan.featured ? 'Get Started Now' : 'Choose Plan'} 
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Contact Prompt */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground text-sm md:text-base bg-card/30 inline-block px-6 py-3 rounded-full border border-border/50 backdrop-blur-sm">
            Need a fully customized solution?{' '}
            <button 
              onClick={scrollToContact} 
              className="text-[#00E5FF] hover:text-[#B900FF] font-semibold transition-colors ml-1"
            >
              Contact us
            </button> 
            {' '}for a personalized quote.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Pricing;