import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, Star, TrendingUp, MonitorPlay, PenTool, Layout, Video, Briefcase, Mail, X, Github, Globe, CheckCircle2 } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "FinTech App Interface Redesign",
    client: "NexusPay Solutions",
    category: "UI/UX Design",
    icon: Layout,
    description: "A complete overhaul of a financial application focusing on user experience, modern dark-mode aesthetics, and seamless transaction flows.",
    highlights: ["User Flow Optimization", "Wireframing & Prototyping", "Design System Creation", "Dark Mode Implementation"],
    tools: ["Figma", "Adobe Illustrator", "Protopie"],
    image: "https://images.unsplash.com/photo-1616077168079-7e84a4c4ba98?w=800&h=600&fit=crop",
    featured: true,
  },
  {
    title: "Tech Startup Promo Campaign",
    client: "CloudSync AI",
    category: "Video Editing",
    icon: Video,
    description: "High-impact promotional video mixed with motion graphics to explain complex cloud infrastructure in a simple, engaging way for investors.",
    highlights: ["Cinematic Color Grading", "Custom Motion Graphics", "Audio Mixing & Foley", "Dynamic Storyboarding"],
    tools: ["Premiere Pro", "After Effects", "DaVinci Resolve"],
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=600&fit=crop",
    featured: true,
  },
  {
    title: "ElectroMart E-Commerce Platform",
    client: "ElectroMart Global",
    category: "Web Development",
    icon: MonitorPlay,
    description: "A high-performance online store with secure payment gateways, automated inventory management, and a blazing-fast frontend.",
    highlights: ["Custom Admin Dashboard", "Stripe Payment Integration", "Automated Inventory", "Responsive Mobile Design"],
    tools: ["React", "Next.js", "TailwindCSS", "Node.js"],
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&h=600&fit=crop",
    featured: true,
  },
  {
    title: "Aura Lifestyle Brand Identity",
    client: "Aura Cosmetics",
    category: "Branding",
    icon: PenTool,
    description: "Complete brand identity creation including a minimalist logo design, typography selection, color palettes, and social media marketing kits.",
    highlights: ["Minimalist Logo Design", "Brand Guidelines Book", "Social Media Kits", "Product Packaging Design"],
    tools: ["Adobe Illustrator", "Photoshop", "InDesign"],
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop",
    featured: false,
  },
  {
    title: "Cinematic Real Estate Tour",
    client: "Skyline Estates",
    category: "Video Editing",
    icon: Video,
    description: "A breathtaking cinematic drone video showcasing luxury properties, edited with dynamic transitions, speed ramping, and mood lighting.",
    highlights: ["Drone Footage Editing", "Speed Ramping Transitions", "Immersive Sound Design", "Real Estate Color Grade"],
    tools: ["Final Cut Pro", "Premiere Pro", "Lightroom"],
    image: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=800&h=600&fit=crop",
    featured: false,
  },
  {
    title: "Corporate Real Estate Portal",
    client: "Skyline Estates",
    category: "Web Development",
    icon: MonitorPlay,
    description: "A premium corporate website featuring advanced property search filters, virtual tour integrations, and a custom CRM for lead generation.",
    highlights: ["Advanced Search Filters", "Virtual Tour Integration", "CRM Synchronization", "Automated Lead Generation"],
    tools: ["React", "Express", "PostgreSQL", "AWS"],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
    featured: false,
  }
];

const categories = ["All Work", "Web Development", "UI/UX Design", "Video Editing", "Branding"];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Work");
  const [selectedProject, setSelectedProject] = useState(null);
  const [displayCount, setDisplayCount] = useState(6);

  const filteredProjects = selectedCategory === "All Work" 
    ? projects 
    : projects.filter(p => p.category.toLowerCase().includes(selectedCategory.toLowerCase()));

  const visibleProjects = filteredProjects.slice(0, displayCount);
  const hasMore = displayCount < filteredProjects.length;

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
    <section id="portfolio" className="py-24 md:py-32 bg-background relative overflow-hidden transition-colors duration-500">
      
      {/* Optimized Static Ambient Background to match About Section */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-[#00E5FF]/5 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#B900FF]/5 rounded-full blur-[100px] pointer-events-none -z-10" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-foreground/80 backdrop-blur-md shadow-[0_0_15px_rgba(0,229,255,0.1)]">
              <Sparkles className="w-4 h-4 text-[#00E5FF]" /> 
              Creative Excellence
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold mb-6 tracking-tight text-foreground">
            Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00E5FF] to-[#B900FF]">Creative Vault</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We don't just write code; we craft visual experiences. Explore our diverse portfolio spanning 
            <span className="text-foreground font-semibold"> Web Development, Video Editing, UI/UX, and Branding</span>.
          </p>
        </motion.div>

        {/* Optimized Category Filter (No heavy layout animations) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setDisplayCount(6);
              }}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === cat 
                  ? "bg-gradient-to-r from-[#0055FF] to-[#B900FF] text-white shadow-[0_0_20px_rgba(0,85,255,0.4)] border-none" 
                  : "text-muted-foreground hover:text-foreground bg-card/50 border border-border hover:border-primary/50"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid - Removed Layout Animation to fix Hang/Lag */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative rounded-3xl overflow-hidden bg-card/40 backdrop-blur-sm border border-border/40 hover:border-[#00E5FF]/40 transition-all duration-300 cursor-pointer shadow-md hover:shadow-[0_10px_40px_-15px_rgba(0,229,255,0.2)] flex flex-col"
              onClick={() => setSelectedProject(project)}
            >
              {project.featured && (
                <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-lg">
                  <Star className="w-3.5 h-3.5 fill-white" /> Top Tier Work
                </div>
              )}

              {/* Optimized Image Area */}
              <div className="aspect-[16/10] overflow-hidden relative bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center gap-2 bg-background/90 text-foreground px-6 py-3 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-xl font-medium border border-border/50">
                    View Visuals <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-8 flex-1 flex flex-col bg-card/50">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[#00E5FF] flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase bg-[#00E5FF]/10 px-3 py-1 rounded-full border border-[#00E5FF]/20">
                    <project.icon className="w-3.5 h-3.5" />
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-heading font-bold text-foreground group-hover:text-[#00E5FF] transition-colors mb-2">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-5 line-clamp-2 flex-1">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tools.slice(0, 3).map((tool, i) => (
                    <span key={i} className="text-xs bg-muted border border-border/50 px-2.5 py-1 rounded-md text-muted-foreground">
                      {tool}
                    </span>
                  ))}
                  {project.tools.length > 3 && (
                    <span className="text-xs bg-muted border border-border/50 px-2.5 py-1 rounded-md text-muted-foreground">
                      +{project.tools.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More Controls */}
        <div className="text-center mt-16 flex justify-center">
          {hasMore ? (
            <Button
              variant="outline"
              size="lg"
              className="group rounded-full px-8 py-6 border-border hover:border-[#00E5FF]/50 hover:bg-[#00E5FF]/5 transition-all duration-300"
              onClick={() => setDisplayCount(prev => prev + 6)}
            >
              Load More Projects <TrendingUp className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          ) : (
            displayCount > 6 && (
              <button
                className="text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
                onClick={() => setDisplayCount(6)}
              >
                Show Less
              </button>
            )
          )}
        </div>
      </div>

      {/* ============================================== */}
      {/* OPTIMIZED CASE STUDY MODAL                     */}
      {/* ============================================== */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-background/80 backdrop-blur-sm cursor-pointer"
            />

            <motion.div
              className="bg-card w-full max-w-5xl rounded-[2rem] shadow-2xl overflow-hidden relative z-10 flex flex-col max-h-[90vh] border border-border"
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              
              <div className="absolute top-6 right-6 z-20">
                <button
                  className="rounded-full bg-background/50 backdrop-blur-md border border-border hover:bg-destructive hover:border-destructive hover:text-white text-foreground transition-all duration-300 w-10 h-10 flex items-center justify-center"
                  onClick={() => setSelectedProject(null)}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="overflow-y-auto custom-scrollbar">
                
                <div className="w-full h-64 sm:h-[400px] relative">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                  
                  <div className="absolute bottom-8 left-8 right-8">
                    <div className="inline-flex items-center gap-2 bg-[#00E5FF]/20 backdrop-blur-md text-[#00E5FF] px-4 py-1.5 rounded-full text-sm font-bold mb-4 border border-[#00E5FF]/30">
                      <selectedProject.icon className="w-4 h-4" />
                      {selectedProject.category}
                    </div>
                    <h2 className="text-3xl sm:text-5xl font-bold font-heading mb-3 text-foreground">
                      {selectedProject.title}
                    </h2>
                    <p className="text-muted-foreground text-lg">Client: <span className="font-semibold text-foreground">{selectedProject.client}</span></p>
                  </div>
                </div>

                <div className="p-8 sm:p-10">
                  <div className="flex flex-wrap items-center justify-between gap-6 mb-12 p-6 rounded-2xl bg-primary/5 border border-primary/10">
                    <div>
                      <h4 className="text-xl font-bold text-foreground mb-1">Looking for similar results?</h4>
                      <p className="text-muted-foreground text-sm">Let's discuss how we can bring your vision to life.</p>
                    </div>
                    <Button 
                      onClick={() => {
                        setSelectedProject(null);
                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="rounded-full px-8 bg-gradient-to-r from-[#0055FF] to-[#B900FF] hover:opacity-90 text-white border-none shadow-lg shadow-primary/20"
                    >
                      <Briefcase className="w-4 h-4 mr-2"/> Start a Project
                    </Button>
                  </div>

                  <div className="mb-12">
                    <h3 className="text-xl font-bold mb-4 text-foreground flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-[#00E5FF]" /> Project Brief & Execution
                    </h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-8">
                    
                    <div className="bg-muted/50 p-8 rounded-2xl border border-border/50">
                      <h3 className="text-xl font-bold mb-6 text-foreground">Creative Highlights</h3>
                      <ul className="space-y-4">
                        {selectedProject.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <Star className="w-5 h-5 text-[#B900FF] shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold mb-6 text-foreground flex items-center gap-2">
                        <PenTool className="w-5 h-5 text-[#00E5FF]" /> Tools & Software
                      </h3>
                      <div className="flex flex-wrap gap-3">
                        {selectedProject.tools.map((tool, i) => (
                          <span
                            key={i}
                            className="bg-muted border border-border/50 text-muted-foreground px-5 py-2.5 rounded-xl text-sm font-medium cursor-default"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 border-t border-border bg-muted/30 flex justify-between items-center">
                  <p className="text-sm text-muted-foreground">
                    Crafted by <span className="text-foreground font-medium">Omnex Digital</span>
                  </p>
                  <a href="mailto:digitalomnex@gmail.com" className="flex items-center gap-2 text-primary hover:text-primary/80 text-sm font-medium transition-colors">
                    <Mail className="w-4 h-4" /> Email Us
                  </a>
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