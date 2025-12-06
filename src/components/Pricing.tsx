import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';
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
  },
  {
    name: 'Enterprise Automation',
    price: '$1499+',
    period: 'starting at',
    description: 'Full-scale business automation and digital transformation.',
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
    <section id="pricing" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 gradient-glow opacity-50" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full"
          >
            <span className="text-primary font-medium text-sm">Simple Pricing</span>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-6">
            Invest in Your <span className="text-gradient">Digital Success</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Transparent pricing with no hidden fees. Choose the plan that fits your needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={`relative ${plan.featured ? 'md:-mt-4 md:mb-4' : ''}`}
            >
              <div 
                className={`h-full rounded-2xl p-8 transition-all duration-300 ${
                  plan.featured 
                    ? 'bg-gradient-to-b from-primary/10 to-accent/10 border-2 border-primary/30 shadow-xl shadow-primary/10' 
                    : 'glass-card hover:shadow-lg'
                }`}
              >
                {plan.featured && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 gradient-primary text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow-lg">
                      <Sparkles className="w-4 h-4" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-heading font-bold mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm mb-6">{plan.description}</p>
                  <div className="flex items-end justify-center gap-1">
                    <span className="text-sm text-muted-foreground">{plan.period === 'starting at' ? 'Starting at' : ''}</span>
                  </div>
                  <div className="flex items-end justify-center gap-1 mt-1">
                    <span className={`text-5xl font-heading font-bold ${plan.featured ? 'text-gradient' : ''}`}>
                      {plan.price}
                    </span>
                    {plan.period === 'one-time' && (
                      <span className="text-muted-foreground mb-2">/ project</span>
                    )}
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        plan.featured 
                          ? 'bg-primary/20' 
                          : 'bg-muted'
                      }`}>
                        <Check className={`h-3 w-3 ${plan.featured ? 'text-primary' : 'text-muted-foreground'}`} />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button
                  onClick={scrollToContact}
                  variant={plan.featured ? 'premium' : 'outline'}
                  className="w-full"
                  size="lg"
                >
                  Get Started
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-muted-foreground text-sm mt-12"
        >
          Need a custom solution? <button onClick={scrollToContact} className="text-primary hover:underline font-medium">Contact us</button> for a personalized quote.
        </motion.p>
      </div>
    </section>
  );
};

export default Pricing;
