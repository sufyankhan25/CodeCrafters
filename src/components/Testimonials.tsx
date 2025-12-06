import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'David Lee',
    role: 'CEO at NovaCorp',
    content: 'CodeCrafters delivered exactly what we needed — professional, fast, and effective.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David',
    rating: 5,
  },
  {
    name: 'Sarah Johnson',
    role: 'Founder, TechStart',
    content: 'Outstanding work! They transformed our vision into a beautiful, functional website.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Marketing Director, GrowthCo',
    content: 'The team is incredibly talented. Our conversion rates increased by 45% after the redesign.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Product Manager, InnovateLab',
    content: 'Professional, responsive, and delivers on time. Highly recommend CodeCrafters!',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emily',
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-6">
            What Our Clients Say
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-body max-w-3xl mx-auto">
            Trusted by businesses worldwide
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-foreground font-body mb-6 text-lg leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <div className="font-heading font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
