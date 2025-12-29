import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowRight, Code2, X, Github, Globe, CheckCircle2, Sparkles, Star, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

// Complete Projects Data
const projects = [
  {
    title: "Laptop E-Commerce Store",
    client: "ElectroMart",
    category: "MERN Stack E-Commerce",
    description: "A complete online store with Admin Dashboard, Stripe Payment Gateway, Order Management, and JWT Authentication.",
    features: ["Admin Dashboard", "Stripe Online Payments", "JWT Authentication", "Cart + Wishlist", "Order Tracking", "Product Reviews"],
    tools: ["React.js", "Express.js", "MongoDB", "Stripe API", "Tailwind", "JWT"],
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&h=400&fit=crop",
    liveLink: "",
    repoLink: "https://github.com/sufyankhan25/laptop_web",
    featured: true,
    year: "2024"
  },
  {
    title: "Gym Management System",
    client: "Fitness Pro",
    category: "Full-Stack Web App",
    description: "A full-stack gym web app with user signup/login, trainer dashboard, and BMI calculator for health tracking.",
    features: ["User Authentication", "Trainer Dashboard", "BMI Calculator", "Member Management", "Class Scheduling", "Payment Portal"],
    tools: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop",
    liveLink: "https://gym-website-1-weld.vercel.app/",
    repoLink: "https://github.com/sufyankhan25/Gym_Website",
    featured: true,
    year: "2024"
  },
  {
    title: "Food Delivery App",
    client: "FoodHub",
    category: "MERN E-Commerce",
    description: "MERN-based food ordering system with real-time order tracking, restaurant management, and admin panel.",
    features: ["Real-time Tracking", "Admin Panel", "Cart System", "Order Management", "Restaurant Dashboard", "Payment Integration"],
    tools: ["React", "Redux", "Node.js", "MongoDB", "Socket.io"],
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=600&h=400&fit=crop",
    liveLink: "https://food-app-sufi.vercel.app/",
    repoLink: "https://github.com/sufyankhan25/Food_app",
    featured: true,
    year: "2024"
  },
  {
    title: "AI Traffic Management System",
    client: "Smart City Labs",
    category: "IoT & AI System",
    description: "AI-based traffic simulation model that optimizes routes, controls signals, and reduces congestion using intelligent algorithms.",
    features: ["Live Data Feed", "AI Route Optimization", "Signal Control", "Congestion Analysis", "Predictive Analytics", "Emergency Override"],
    tools: ["React", "Node.js", "Express", "MongoDB", "TensorFlow.js"],
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&h=400&fit=crop",
    liveLink: "https://ai-traffic-management.vercel.app/",
    repoLink: "https://github.com/sufyankhan25/AI-Traffic-Management",
    featured: false,
    year: "2024"
  },
  {
    title: "Resume Builder & Job Portal",
    client: "CareerBoost",
    category: "Web Application",
    description: "A responsive resume builder and job portal app using Firebase with real-time preview and multiple templates.",
    features: ["Template Selection", "Real-time Preview", "PDF Export", "Firebase Backend", "Job Listings", "Profile Management"],
    tools: ["React", "Firebase", "TailwindCSS", "PDF.js"],
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=400&fit=crop",
    liveLink: "https://resume-builder-sufyan.vercel.app/",
    repoLink: "https://github.com/sufyankhan25/resume-builder",
    featured: false,
    year: "2024"
  },
  {
    title: "Real-Time Currency Converter",
    client: "FinTech Solutions",
    category: "API Integration",
    description: "A real-time currency conversion app that fetches live rates using an API with historical data charts.",
    features: ["Live Exchange Rates", "Multi-Currency Support", "Historical Charts", "Instant Conversion", "Favorite Pairs", "Rate Alerts"],
    tools: ["HTML", "CSS", "JavaScript", "Exchange Rate API", "Chart.js"],
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=600&h=400&fit=crop",
    liveLink: "https://real-time-currency-converter-xi.vercel.app/",
    repoLink: "https://github.com/sufyankhan25/real-time-currency-converter",
    featured: false,
    year: "2024"
  },
  {
    title: "Random Fact Generator",
    client: "Fun Labs",
    category: "Entertainment App",
    description: "Simple, lightweight, and fun app that generates random interesting facts using an external API with categories.",
    features: ["Random Facts", "API Integration", "Category Filter", "Share Feature", "Favorites", "Clean Interface"],
    tools: ["React", "Facts API", "TailwindCSS", "Framer Motion"],
    image: "https://images.unsplash.com/photo-1516796181074-bf453fbfa3e6?w=600&h=400&fit=crop",
    liveLink: "https://fact-alpha.vercel.app/",
    repoLink: "https://github.com/sufyankhan25/random-fact",
    featured: false,
    year: "2024"
  },
  {
    title: "Crypto Price Tracker",
    client: "CryptoWatch",
    category: "Financial Dashboard",
    description: "Real-time cryptocurrency price tracking dashboard with historical charts, market cap analysis, and price alerts.",
    features: ["Live Price Updates", "Historical Charts", "Market Cap Tracking", "Price Alerts", "Portfolio Management", "News Feed"],
    tools: ["React", "Chart.js", "CoinGecko API", "TailwindCSS", "Redux"],
    image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=600&h=400&fit=crop",
    liveLink: "#",
    repoLink: "#",
    featured: false,
    year: "2024"
  },
  {
    title: "Task Management Dashboard",
    client: "ProductivityHub",
    category: "SaaS Platform",
    description: "Feature-rich task management system with team collaboration, deadlines, priorities, and progress tracking.",
    features: ["Team Collaboration", "Kanban Board", "Priority Tags", "Progress Analytics", "Time Tracking", "Notifications"],
    tools: ["React", "Node.js", "PostgreSQL", "Socket.io", "Chart.js"],
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop",
    liveLink: "#",
    repoLink: "#",
    featured: false,
    year: "2024"
  },
  {
    title: "Weather Forecast App",
    client: "WeatherNow",
    category: "API Integration",
    description: "Beautiful weather application with 7-day forecast, hourly predictions, and location-based weather alerts.",
    features: ["7-Day Forecast", "Hourly Predictions", "Weather Alerts", "Location Search", "Interactive Maps", "UV Index"],
    tools: ["React", "OpenWeather API", "Leaflet.js", "TailwindCSS"],
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=600&h=400&fit=crop",
    liveLink: "#",
    repoLink: "#",
    featured: false,
    year: "2024"
  },
  {
    title: "Social Media Dashboard",
    client: "SocialMetrics",
    category: "Analytics Platform",
    description: "Comprehensive social media analytics dashboard with engagement metrics, follower growth, and content performance.",
    features: ["Multi-Platform Analytics", "Engagement Metrics", "Growth Charts", "Post Scheduling", "Competitor Analysis", "Export Reports"],
    tools: ["React", "Node.js", "MongoDB", "Chart.js", "Social APIs"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    liveLink: "#",
    repoLink: "#",
    featured: false,
    year: "2024"
  },
  {
    title: "Expense Tracker Pro",
    client: "MoneyWise",
    category: "Finance App",
    description: "Personal finance management app with budget tracking, expense categorization, and financial insights.",
    features: ["Budget Tracking", "Expense Categories", "Financial Insights", "Recurring Expenses", "Bill Reminders", "Export to CSV"],
    tools: ["React", "Firebase", "Chart.js", "TailwindCSS"],
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
    liveLink: "#",
    repoLink: "#",
    featured: false,
    year: "2024"
  }
];

const categories = ["All Projects", "E-Commerce", "Web App", "API Integration", "Dashboard", "AI/IoT"];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Projects");
  const [selectedProject, setSelectedProject] = useState(null);
  const [displayCount, setDisplayCount] = useState(6);

  // Filter projects based on selected category
  const filteredProjects = selectedCategory === "All Projects" 
    ? projects 
    : projects.filter(p => p.category.toLowerCase().includes(selectedCategory.toLowerCase()));

  const visibleProjects = filteredProjects.slice(0, displayCount);
  const hasMore = displayCount < filteredProjects.length;

  // Scroll Lock Hook
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProject]);

  return (
    <section id="portfolio" className="py-20 md:py-28 bg-gradient-to-b from-background via-background to-muted/20 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-4">
            <span className="bg-gradient-to-r from-primary/20 to-primary/10 text-primary px-5 py-2 rounded-full text-sm font-semibold flex items-center gap-2 border border-primary/20">
              <Sparkles className="w-4 h-4" /> Portfolio Showcase
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Transforming ideas into powerful digital solutions. Explore my collection of 
            <span className="text-primary font-semibold"> {projects.length}+ projects</span> spanning web apps, e-commerce platforms, and AI systems.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={selectedCategory === cat ? "default" : "outline"}
              onClick={() => {
                setSelectedCategory(cat);
                setDisplayCount(6);
              }}
              className={`rounded-full px-6 py-2 transition-all duration-300 ${
                selectedCategory === cat 
                  ? "shadow-lg shadow-primary/25" 
                  : "hover:border-primary/50"
              }`}
            >
              {cat}
            </Button>
          ))}
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 max-w-4xl mx-auto"
        >
          <div className="bg-card border border-border/50 rounded-xl p-4 text-center">
            <div className="text-3xl font-bold text-primary mb-1">{projects.length}+</div>
            <div className="text-sm text-muted-foreground">Projects</div>
          </div>
          <div className="bg-card border border-border/50 rounded-xl p-4 text-center">
            <div className="text-3xl font-bold text-primary mb-1">100%</div>
            <div className="text-sm text-muted-foreground">Satisfaction</div>
          </div>
          <div className="bg-card border border-border/50 rounded-xl p-4 text-center">
            <div className="text-3xl font-bold text-primary mb-1">10+</div>
            <div className="text-sm text-muted-foreground">Tech Stack</div>
          </div>
          <div className="bg-card border border-border/50 rounded-xl p-4 text-center">
            <div className="text-3xl font-bold text-primary mb-1">2024</div>
            <div className="text-sm text-muted-foreground">Year Active</div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          layout 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project, index) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative rounded-2xl overflow-hidden bg-card border border-border/50 shadow-md hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
                    <Star className="w-3 h-3 fill-white" /> Featured
                  </div>
                )}

                {/* Image Area */}
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button 
                      variant="secondary" 
                      className="rounded-full gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-xl"
                    >
                      View Details <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-primary text-xs font-bold tracking-wider uppercase bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                      {project.category}
                    </span>
                    <span className="text-xs text-muted-foreground">{project.year}</span>
                  </div>
                  <h3 className="text-xl font-heading font-bold group-hover:text-primary transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Client: <span className="text-foreground font-medium">{project.client}</span>
                  </p>
                  <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-2">
                    {project.tools.slice(0, 3).map((tool, i) => (
                      <span key={i} className="text-xs bg-muted px-2 py-1 rounded text-muted-foreground">
                        {tool}
                      </span>
                    ))}
                    {project.tools.length > 3 && (
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded font-medium">
                        +{project.tools.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load More Button */}
        {hasMore && (
          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="px-10 py-6 text-base border-2 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 rounded-full shadow-lg"
              onClick={() => setDisplayCount(prev => prev + 6)}
            >
              Load More Projects <TrendingUp className="w-5 h-5 ml-2" />
            </Button>
          </div>
        )}

        {/* View Less */}
        {!hasMore && displayCount > 6 && (
          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="ghost"
              className="px-10"
              onClick={() => setDisplayCount(6)}
            >
              Show Less
            </Button>
          </div>
        )}
      </div>

      {/* ============================================== */}
      {/* PREMIUM MODAL                                  */}
      {/* ============================================== */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/70 backdrop-blur-md cursor-pointer"
            />

            {/* Modal Container */}
            <motion.div
              className="bg-card w-full max-w-5xl rounded-3xl shadow-2xl overflow-hidden relative z-10 flex flex-col max-h-[90vh] border-2 border-border/50"
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              
              {/* Close Button */}
              <div className="absolute top-6 right-6 z-20">
                <Button
                  variant="secondary"
                  size="icon"
                  className="rounded-full shadow-xl bg-background/90 backdrop-blur hover:bg-destructive hover:text-white transition-all duration-300 w-12 h-12"
                  onClick={() => setSelectedProject(null)}
                >
                  <X className="w-6 h-6" />
                </Button>
              </div>

              {/* Scrollable Content */}
              <div className="overflow-y-auto custom-scrollbar">
                
                {/* Hero Image with Overlay */}
                <div className="w-full h-72 sm:h-96 relative">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                  
                  {/* Floating Info Card */}
                  <div className="absolute bottom-8 left-8 right-8 bg-card/95 backdrop-blur-lg rounded-2xl p-6 border border-border/50 shadow-2xl">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <h2 className="text-3xl sm:text-4xl font-bold font-heading mb-2">
                          {selectedProject.title}
                        </h2>
                        <p className="text-lg text-primary font-semibold">
                          {selectedProject.client} • {selectedProject.year}
                        </p>
                      </div>
                      
                      {/* Action Buttons */}
                      <div className="flex gap-3">
                        {selectedProject.liveLink && selectedProject.liveLink !== "#" && (
                          <Button 
                            className="gap-2 shadow-lg hover:shadow-xl transition-shadow" 
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open(selectedProject.liveLink, '_blank');
                            }}
                          >
                            <Globe className="w-4 h-4"/> Live Demo
                          </Button>
                        )}
                        {selectedProject.repoLink && selectedProject.repoLink !== "#" && (
                          <Button 
                            variant="outline" 
                            className="gap-2 border-2" 
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open(selectedProject.repoLink, '_blank');
                            }}
                          >
                            <Github className="w-4 h-4"/> Source
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-8 sm:p-10">
                  {/* Category Badge */}
                  <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold mb-6 border border-primary/20">
                    <Code2 className="w-4 h-4" />
                    {selectedProject.category}
                  </div>

                  <p className="text-muted-foreground text-lg leading-relaxed mb-10">
                    {selectedProject.description}
                  </p>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    
                    {/* Features List */}
                    <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-8 rounded-2xl border border-primary/20">
                      <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <Sparkles className="w-6 h-6 text-primary" /> Key Features
                      </h3>
                      <ul className="space-y-4">
                        {selectedProject.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3 text-base">
                            <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                            <span className="text-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack */}
                    <div>
                      <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <Code2 className="w-6 h-6 text-primary" /> Technologies Used
                      </h3>
                      <div className="flex flex-wrap gap-3">
                        {selectedProject.tools.map((tool, i) => (
                          <span
                            key={i}
                            className="bg-gradient-to-r from-primary/10 to-primary/5 text-primary border-2 border-primary/20 px-5 py-3 rounded-xl text-sm font-semibold hover:scale-105 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 cursor-default"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="p-6 border-t border-border bg-muted/30 flex flex-col sm:flex-row justify-between items-center gap-4">
                  <p className="text-sm text-muted-foreground">
                    Built with ❤️ by <span className="text-primary font-semibold">Sufyan Khan</span>
                  </p>
                  <Button variant="ghost" onClick={() => setSelectedProject(null)}>
                    Close Project
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;