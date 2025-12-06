import { motion } from 'framer-motion';
import { Globe, Palette, Megaphone, Bot, Search, Wrench } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const services = [
  {
    icon: Globe,
    title: 'Web Design & Development',
    description: 'Responsive, modern websites & apps.',
    price: '$400',
  },
  {
    icon: Palette,
    title: 'Branding & Logo Design',
    description: 'Strong, memorable brand identity.',
    price: '$200',
  },
  {
    icon: Megaphone,
    title: 'Digital Ads Management',
    description: 'Google, Meta, TikTok campaigns.',
    price: '$250',
  },
  {
    icon: Bot,
    title: 'AI Automation Setup',
    description: 'Chatbots, workflow automation, AI tools.',
    price: '$350',
  },
  {
    icon: Search,
    title: 'SEO Optimization',
    description: 'Boost rankings & organic traffic.',
    price: '$180',
  },
  {
    icon: Wrench,
    title: 'Maintenance',
    description: 'Continuous updates & support.',
    price: '$100/mo',
  },
];

const Services = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-6">
            Our Services
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-body max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <Card className="h-full hover:shadow-xl transition-all border-2 hover:border-primary/50">
                <CardHeader>
                  <div className="w-14 h-14 gradient-primary rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-xl font-heading">{service.title}</CardTitle>
                  <CardDescription className="font-body">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-heading font-bold text-primary mb-2">
                    {service.price}
                  </div>
                  <p className="text-sm text-muted-foreground">Starting from</p>
                </CardContent>
                <CardFooter>
                  <Button 
                    onClick={scrollToContact}
                    variant="outline" 
                    className="w-full hover:bg-primary hover:text-white transition-colors"
                  >
                    Get Started
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Button 
            onClick={scrollToContact}
            size="lg"
            className="gradient-primary text-white font-medium px-8 hover:shadow-xl transition-all"
          >
            Get Custom Quote
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
