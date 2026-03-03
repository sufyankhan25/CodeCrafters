import { motion } from 'framer-motion';
import { Star, Sparkles, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'David Lee',
    role: 'CEO at NovaCorp',
    content: 'Omnex Digital delivered exactly what we needed — professional, fast, and incredibly effective. Our online presence has completely transformed.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David',
    rating: 5,
  },
  {
    name: 'Sarah Johnson',
    role: 'Founder, TechStart',
    content: 'Outstanding work! They took our scattered vision and turned it into a beautiful, functional platform that our users absolutely love.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Marketing Director, GrowthCo',
    content: 'The team is exceptionally talented. Our conversion rates increased by 45% within just two months after the redesign and SEO optimization.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Product Manager, InnovateLab',
    content: 'Professional, highly responsive, and consistently delivers on time. I highly recommend Omnex Digital to anyone looking to scale.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emily',
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-background relative overflow-hidden transition-colors duration-500">
      
      {/* Background Ambient Glows - perfectly blended with the theme */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1px] bg-gradient-to-r from-transparent via-[#00E5FF]/20 to-transparent" />
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#00E5FF]/5 rounded-full blur-[150px] pointer-events-none -z-10 -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#B900FF]/5 rounded-full blur-[150px] pointer-events-none -z-10 -translate-y-1/2" />

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
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-muted-foreground backdrop-blur-md shadow-[0_0_15px_rgba(0,229,255,0.05)]">
              <Sparkles className="w-4 h-4 text-[#00E5FF]" /> 
              Client Success
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold mb-6 tracking-tight text-foreground">
            Trusted by <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00E5FF] to-[#B900FF]">Leaders.</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-body max-w-2xl mx-auto leading-relaxed">
            Don't just take our word for it. Here is what industry leaders and founders have to say about working with Omnex Digital.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{ willChange: "transform, opacity" }}
              className="relative group h-full"
            >
              {/* Premium Background Glow on Hover */}
              <div className="absolute -inset-0.5 bg-gradient-to-br from-[#00E5FF]/20 to-[#B900FF]/20 rounded-[2rem] opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-500" />
              
              <div className="relative h-full bg-card/40 backdrop-blur-xl p-8 sm:p-10 rounded-[2rem] border border-border/50 group-hover:border-white/10 transition-colors duration-300 flex flex-col overflow-hidden">
                
                {/* Background Watermark Quote Icon */}
                <Quote className="absolute top-8 right-8 w-24 h-24 text-foreground/[0.03] -rotate-12 group-hover:scale-110 group-hover:rotate-0 group-hover:text-[#00E5FF]/[0.05] transition-all duration-700 pointer-events-none" />

                {/* Stars */}
                <div className="flex gap-1.5 mb-6 relative z-10">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="h-5 w-5 text-yellow-500 fill-yellow-500 drop-shadow-[0_0_8px_rgba(234,179,8,0.4)]" 
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-foreground/90 font-body mb-8 text-lg sm:text-xl leading-relaxed flex-1 relative z-10">
                  "{testimonial.content}"
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4 relative z-10 pt-6 border-t border-border/50">
                  <div className="relative">
                    {/* Gradient Avatar Ring */}
                    <div className="absolute -inset-1 bg-gradient-to-br from-[#00E5FF] to-[#B900FF] rounded-full opacity-70 group-hover:opacity-100 group-hover:rotate-180 transition-all duration-700" />
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      loading="lazy"
                      className="relative w-14 h-14 rounded-full bg-muted border-2 border-background object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-heading font-bold text-foreground text-lg group-hover:text-[#00E5FF] transition-colors">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground font-medium">{testimonial.role}</div>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;