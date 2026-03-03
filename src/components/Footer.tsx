import { motion } from 'framer-motion';
import {
  Linkedin,
  Instagram,
  Github,
  Facebook,
  ArrowUpRight,
  Mail,
  Phone,
  Send
} from 'lucide-react';

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    const offset = 80;
    const y =
      element.getBoundingClientRect().top + window.pageYOffset - offset;

    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      icon: Facebook,
      href: 'https://www.facebook.com/share/1X3HpxBAHs/',
      label: 'Facebook',
      hoverColor: 'hover:bg-[#1877F2] hover:text-white hover:shadow-[#1877F2]/50'
    },
    {
      icon: Instagram,
      href: 'https://www.instagram.com/omnex_digital?igsh=MWwwbm9kZDM5eHZ0cg==',
      label: 'Instagram',
      hoverColor: 'hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:text-white hover:shadow-[#dc2743]/50'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/muhammad-sufyan-804921367',
      label: 'LinkedIn',
      hoverColor: 'hover:bg-[#0A66C2] hover:text-white hover:shadow-[#0A66C2]/50'
    },
    {
      icon: Github,
      href: 'https://github.com/sufyankhan25',
      label: 'GitHub',
      hoverColor: 'hover:bg-[#333] hover:text-white hover:shadow-[#333]/50'
    },
  ];

  const services = [
    'Web Development',
    'UI / UX Design',
    'SEO Optimization',
    'Business Automation',
    'E-Commerce Solutions',
    'AI Chatbots',
  ];

  const quickLinks = ['Home', 'About', 'Services', 'Pricing', 'Portfolio', 'Contact'];

  return (
    <footer className="relative bg-[#050810] border-t border-white/10 overflow-hidden font-body">
      {/* Premium Ambient Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-[#00E5FF]/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#B900FF]/5 via-transparent to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-[#00E5FF]/10 to-transparent pointer-events-none blur-[100px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Section */}
        <div className="py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">

          {/* Company Info (Takes up 4 columns on large screens) */}
          <div className="lg:col-span-4 flex flex-col items-start">
            {/* OMNEX DIGITAL PREMIUM LOGO */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-3 cursor-pointer group mb-6"
              onClick={() => scrollToSection('hero')}
            >
              <div className="relative h-10 w-10 md:h-12 md:w-12 rounded-xl bg-[#0B0F19] flex items-center justify-center shadow-lg shadow-cyan-500/20 border border-white/10 overflow-hidden transition-all duration-300 group-hover:shadow-cyan-500/40">
                 <svg viewBox="0 0 120 120" className="h-8 w-8 relative z-10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="footerCyan" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#00E5FF" />
                        <stop offset="100%" stopColor="#0055FF" />
                      </linearGradient>
                      <linearGradient id="footerPurple" x1="100%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#B900FF" />
                        <stop offset="100%" stopColor="#5500FF" />
                      </linearGradient>
                    </defs>
                    <circle cx="60" cy="60" r="45" stroke="url(#footerCyan)" strokeWidth="12" strokeDasharray="160 40 50 32" strokeLinecap="round" transform="rotate(-20 60 60)" className="group-hover:rotate-12 transition-transform duration-700" />
                    <circle cx="60" cy="60" r="24" stroke="url(#footerPurple)" strokeWidth="6" strokeDasharray="60 20 40 30" strokeLinecap="round" transform="rotate(70 60 60)" className="group-hover:-rotate-45 transition-transform duration-700" />
                    <circle cx="60" cy="15" r="7" fill="#00E5FF" /> 
                    <circle cx="105" cy="60" r="7" fill="#B900FF" /> 
                    <circle cx="15" cy="60" r="7" fill="#0055FF" /> 
                    <circle cx="60" cy="60" r="8" fill="url(#footerCyan)" />
                 </svg>
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-xl md:text-2xl font-heading font-extrabold tracking-tight leading-none text-white">
                  Omnex
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00E5FF] to-[#B900FF] ml-[3px]">Digital</span>
                </span>
              </div>
            </motion.div>

            <p className="text-gray-400 mb-8 leading-relaxed max-w-sm text-sm md:text-base">
              Empowering businesses with modern web development, intelligent automation, and premium digital experiences that drive real growth.
            </p>

            <div className="flex gap-4">
              {socialLinks.map((item, i) => (
                <motion.a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 transition-all duration-300 shadow-lg ${item.hoverColor}`}
                  aria-label={item.label}
                >
                  <item.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links (2 columns) */}
          <div className="lg:col-span-2 mt-4 lg:mt-0">
            <h4 className="text-lg font-heading font-semibold text-white mb-6">Explore</h4>
            <ul className="space-y-4">
              {quickLinks.map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <ArrowUpRight className="w-4 h-4 text-[#00E5FF] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{item}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services (3 columns) */}
          <div className="lg:col-span-3 mt-4 lg:mt-0">
            <h4 className="text-lg font-heading font-semibold text-white mb-6">Our Services</h4>
            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service} className="group flex items-center gap-3 text-gray-400 hover:text-white transition-colors cursor-pointer">
                  <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#00E5FF] to-[#B900FF] group-hover:scale-150 transition-transform duration-300" />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact / Newsletter (3 columns) */}
          <div className="lg:col-span-3 mt-4 lg:mt-0">
            <h4 className="text-lg font-heading font-semibold text-white mb-6">Stay Updated</h4>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to our newsletter for the latest digital trends and agency news.
            </p>
            
            {/* Newsletter Input */}
            <form className="relative mb-8" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-[#0B0F19] border border-white/10 rounded-xl py-3 pl-4 pr-12 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#00E5FF]/50 focus:ring-1 focus:ring-[#00E5FF]/50 transition-all"
                required
              />
              <button 
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-lg bg-gradient-to-r from-[#00E5FF] to-[#0055FF] text-white hover:shadow-[0_0_15px_rgba(0,229,255,0.4)] transition-shadow"
              >
                <Send className="w-4 h-4 ml-[-2px]" />
              </button>
            </form>

            <div className="space-y-4">
              <a href="mailto:digitalomnex@gmail.com" className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors group">
                <div className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#00E5FF]/20 transition-colors">
                  <Mail className="w-4 h-4 text-[#00E5FF]" />
                </div>
                digitalomnex@gmail.com
              </a>
              <a href="tel:+923184898854" className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors group">
                <div className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#B900FF]/20 transition-colors">
                  <Phone className="w-4 h-4 text-[#B900FF]" />
                </div>
                +92 318 4898854
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p className="flex items-center gap-1">
            © {new Date().getFullYear()} Omnex Digital. Crafted by <span className="text-gray-300 font-medium ml-1 hover:text-[#00E5FF] transition-colors cursor-pointer">Muhammad Sufyan</span>
          </p>
          <div className="flex gap-6">
            <button className="hover:text-white transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-[#00E5FF] hover:after:w-full after:transition-all after:duration-300">Privacy Policy</button>
            <button className="hover:text-white transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-[#B900FF] hover:after:w-full after:transition-all after:duration-300">Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;