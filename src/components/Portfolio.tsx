import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, Sparkles, Star, Play, 
  Briefcase, Mail, X, CheckCircle2, BarChart2,
  Layout, Video, Code2, PenTool, Camera, Globe
} from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

// ─── DATA ────────────────────────────────────────────────────────────────────

const projects = [
  {
    title: "FinTech App Interface Redesign",
    client: "NexusPay Solutions",
    category: "UI/UX Design",
    categoryColor: "#B900FF",
    icon: Layout,
    description: "Complete overhaul of a financial application — dark-mode aesthetics, seamless transaction flows, and a design system that scales.",
    highlights: ["User Flow Optimization", "Wireframing & Prototyping", "Design System Creation", "Dark Mode Implementation"],
    tools: ["Figma", "Adobe Illustrator", "Protopie"],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1400",
    result: "3× faster checkout flow",
    featured: true,
  },
  {
    title: "Tech Startup Promo Campaign",
    client: "CloudSync AI",
    category: "Video Editing",
    categoryColor: "#FF6B35",
    icon: Video,
    description: "High-impact promo video with motion graphics explaining complex cloud infrastructure to investors — simply and memorably.",
    highlights: ["Cinematic Color Grading", "Custom Motion Graphics", "Audio Mixing & Foley", "Dynamic Storyboarding"],
    tools: ["Premiere Pro", "After Effects", "DaVinci Resolve"],
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=1400",
    result: "$500K funding raised",
    featured: true,
  },
  {
    title: "ElectroMart E-Commerce Platform",
    client: "ElectroMart Global",
    category: "Web Development",
    categoryColor: "#00E5FF",
    icon: Code2,
    description: "High-performance online store with secure payments, automated inventory, and a blazing-fast frontend built for conversions.",
    highlights: ["Custom Admin Dashboard", "Stripe Payment Integration", "Automated Inventory", "Responsive Mobile Design"],
    tools: ["React", "Next.js", "TailwindCSS", "Node.js"],
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80&w=1400",
    result: "2.4× revenue uplift",
    featured: true,
  },
  {
    title: "Aura Lifestyle Brand Identity",
    client: "Aura Cosmetics",
    category: "Branding",
    categoryColor: "#00FF88",
    icon: PenTool,
    description: "End-to-end brand identity: minimalist logo, typography, color system, packaging design, and social media kits.",
    highlights: ["Minimalist Logo Design", "Brand Guidelines Book", "Social Media Kits", "Product Packaging Design"],
    tools: ["Adobe Illustrator", "Photoshop", "InDesign"],
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1400",
    result: "40% brand recall boost",
    featured: false,
  },
  {
    title: "Cinematic Real Estate Tour",
    client: "Skyline Estates",
    category: "Video Editing",
    categoryColor: "#FF6B35",
    icon: Camera,
    description: "Breathtaking cinematic drone video showcasing luxury properties — dynamic transitions, speed ramping, and mood-perfect color grading.",
    highlights: ["Drone Footage Editing", "Speed Ramping Transitions", "Immersive Sound Design", "Real Estate Color Grade"],
    tools: ["Final Cut Pro", "Premiere Pro", "Lightroom"],
    image: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&q=80&w=1400",
    result: "Properties sold 2× faster",
    featured: false,
  },
  {
    title: "Corporate Real Estate Portal",
    client: "Skyline Estates",
    category: "Web Development",
    categoryColor: "#00E5FF",
    icon: Globe,
    description: "Premium corporate website with advanced property search filters, virtual tour integration, and a custom CRM for lead generation.",
    highlights: ["Advanced Search Filters", "Virtual Tour Integration", "CRM Synchronization", "Automated Lead Generation"],
    tools: ["React", "Express", "PostgreSQL", "AWS"],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1400",
    result: "5× more qualified leads",
    featured: false,
  },
];

const categories = ["All Work", "Web Development", "UI/UX Design", "Video Editing", "Branding"];

// ─── SUB-COMPONENTS ───────────────────────────────────────────────────────────

const ProjectCard = ({ project, index, onClick }: { project: any, index: number, onClick: () => void }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay: (index % 3) * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
    className="group relative rounded-[2rem] overflow-hidden bg-card/40 backdrop-blur-xl border border-white/5 hover:border-[#00E5FF]/40 hover:shadow-[0_0_30px_rgba(0,229,255,0.1)] transition-all duration-500 cursor-pointer flex flex-col h-full"
    onClick={onClick}
  >
    {project.featured && (
      <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-gradient-to-r from-[#00E5FF] to-[#0055FF] text-white shadow-lg">
        <Star className="w-3 h-3 fill-white" /> Featured
      </div>
    )}

    <div className="aspect-[16/10] overflow-hidden relative bg-black/50">
      <img
        src={project.image}
        alt={project.title}
        loading="lazy"
        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out opacity-80 group-hover:opacity-100"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />

      {/* Result badge */}
      <div className="absolute bottom-4 left-4 flex items-center gap-2 px-4 py-2 rounded-xl bg-background/80 backdrop-blur-md border border-white/10 shadow-lg transform group-hover:-translate-y-2 transition-transform duration-500">
        <BarChart2 className="w-4 h-4 text-[#00E5FF]" />
        <span className="text-xs font-bold text-foreground">{project.result}</span>
      </div>

      {/* Hover overlay button */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-full font-bold text-sm shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
          <Play className="w-4 h-4 fill-background" /> View Case Study
        </div>
      </div>
    </div>

    <div className="p-8 flex-1 flex flex-col relative">
      <div className="flex items-center justify-between mb-4">
        <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full"
          style={{ color: project.categoryColor, background: `${project.categoryColor}15`, border: `1px solid ${project.categoryColor}30` }}>
          <project.icon className="w-3 h-3" />{project.category}
        </span>
        <span className="text-xs font-medium text-muted-foreground">{project.client}</span>
      </div>

      <h3 className="text-xl font-heading font-bold text-foreground mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#00E5FF] group-hover:to-[#B900FF] transition-all duration-300">
        {project.title}
      </h3>
      <p className="text-sm text-muted-foreground line-clamp-2 flex-1 mb-6 leading-relaxed">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/5">
        {project.tools.slice(0, 3).map((t: string) => (
          <span key={t} className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-muted-foreground">{t}</span>
        ))}
        {project.tools.length > 3 && (
          <span className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-muted-foreground">+{project.tools.length - 3}</span>
        )}
      </div>
    </div>
  </motion.div>
);

// ─── MODAL ────────────────────────────────────────────────────────────────────

const CaseStudyModal = ({ project, onClose }: { project: any, onClose: () => void }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => { document.body.style.overflow = "unset"; window.removeEventListener("keydown", handler); };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        className="absolute inset-0 bg-background/90 backdrop-blur-xl cursor-pointer" onClick={onClose} />

      <motion.div
        className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto overflow-x-hidden rounded-[2rem] border border-white/10 bg-card/95 backdrop-blur-3xl shadow-2xl custom-scrollbar"
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
      >
        <button onClick={onClose}
          className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full flex items-center justify-center bg-black/40 backdrop-blur-md border border-white/10 hover:bg-red-500/80 hover:border-red-500 text-white transition-all duration-300">
          <X className="w-5 h-5" />
        </button>

        <div>
          {/* Hero Image */}
          <div className="relative h-64 sm:h-96 overflow-hidden">
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
            
            <div className="absolute bottom-8 left-8 right-8">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4 shadow-lg"
                style={{ color: project.categoryColor, background: `${project.categoryColor}20`, border: `1px solid ${project.categoryColor}40`, backdropFilter: 'blur(8px)' }}>
                <project.icon className="w-3 h-3" />{project.category}
              </span>
              <h2 className="text-3xl sm:text-5xl font-heading font-black text-foreground leading-tight mb-2 drop-shadow-md">
                {project.title}
              </h2>
              <p className="text-muted-foreground text-sm font-medium">
                Client — <span className="text-foreground">{project.client}</span>
              </p>
            </div>
          </div>

          <div className="p-8 sm:p-10">
            {/* CTA strip */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#0055FF]/10 to-[#B900FF]/10 border border-[#00E5FF]/20 shadow-inner">
              <div className="text-center sm:text-left">
                <p className="font-heading font-bold text-foreground text-lg sm:text-xl mb-1">Want similar results for your business?</p>
                <p className="text-muted-foreground text-sm">Let's build a custom strategy for your brand.</p>
              </div>
              <Button onClick={() => { onClose(); setTimeout(() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }), 300); }}
                className="w-full sm:w-auto px-8 h-12 rounded-xl bg-gradient-to-r from-[#0055FF] to-[#B900FF] text-white font-bold hover:shadow-[0_0_20px_rgba(185,0,255,0.4)] transition-all duration-300">
                <Briefcase className="w-4 h-4 mr-2" /> Start a Project
              </Button>
            </div>

            {/* Description & Result */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-10">
              <div className="lg:col-span-2 space-y-6">
                <h3 className="text-2xl font-heading font-bold text-foreground">Project Overview</h3>
                <p className="text-muted-foreground leading-relaxed text-base">{project.description}</p>
                
                <div className="inline-flex items-center gap-3 p-4 rounded-xl bg-[#00E5FF]/10 border border-[#00E5FF]/20">
                  <div className="w-10 h-10 rounded-full bg-[#00E5FF]/20 flex items-center justify-center">
                    <BarChart2 className="w-5 h-5 text-[#00E5FF]" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-0.5">Key Result</p>
                    <p className="text-lg font-bold text-foreground">{project.result}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                {/* Highlights */}
                <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
                  <h4 className="text-sm font-bold uppercase tracking-widest text-foreground mb-4">Deliverables</h4>
                  <ul className="space-y-3">
                    {project.highlights.map((h: string) => (
                      <li key={h} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-[#00E5FF]" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tools */}
                <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
                  <h4 className="text-sm font-bold uppercase tracking-widest text-foreground mb-4">Tools Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((t: string) => (
                      <span key={t} className="px-3 py-1.5 rounded-lg text-xs font-medium text-muted-foreground bg-background border border-white/5">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="px-8 py-5 bg-black/20 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">Crafted by <span className="text-foreground font-bold">Omnex Digital</span></p>
            <a href="mailto:digitalomnex@gmail.com"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-[#00E5FF] transition-colors font-medium">
              <Mail className="w-4 h-4" /> digitalomnex@gmail.com
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Work");
  const [selectedProject, setSelectedProject] = useState<any | null>(null);

  const filteredProjects = selectedCategory === "All Work"
    ? projects
    : projects.filter((p) => p.category.toLowerCase().includes(selectedCategory.toLowerCase()));

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-background relative overflow-hidden transition-colors duration-500">

      {/* Premium Ambient Background Glows (Matched with Services/Contact) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1px] bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
      <div className="absolute top-1/4 -left-64 w-[500px] h-[500px] bg-[#00E5FF]/5 rounded-full blur-[150px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 -right-64 w-[500px] h-[500px] bg-[#B900FF]/5 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── HEADER ─────────────────────────────────── */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }} 
          transition={{ duration: 0.6 }} 
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-muted-foreground backdrop-blur-md shadow-[0_0_15px_rgba(0,229,255,0.05)]">
              <Sparkles className="w-4 h-4 text-[#00E5FF]" /> 
              Creative Vault
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold mb-6 tracking-tight text-foreground">
            Our Premium <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00E5FF] to-[#B900FF]">Portfolio</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-body max-w-2xl mx-auto leading-relaxed">
            Real projects. Real results. Explore how we help brands scale through stunning design, powerful code, and high-converting content.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button 
              key={cat} 
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 border ${
                selectedCategory === cat
                  ? "bg-gradient-to-r from-[#0055FF] to-[#B900FF] text-white border-transparent shadow-[0_0_20px_rgba(185,0,255,0.3)]"
                  : "bg-card/40 border-white/10 text-muted-foreground hover:bg-white/5 hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredProjects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} onClick={() => setSelectedProject(p)} />
          ))}
        </div>

        {/* Global CTA - Matched Theme */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-24"
        >
          <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-6 p-8 sm:p-10 rounded-[2rem] bg-card/30 border border-border/50 backdrop-blur-md w-full max-w-5xl mx-auto shadow-2xl relative overflow-hidden group">
            
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-to-bl from-[#00E5FF]/10 to-transparent blur-3xl pointer-events-none -z-10 transition-opacity duration-500 opacity-50 group-hover:opacity-100" />

            <div className="text-center sm:text-left flex-1 relative z-10">
              <span className="inline-block px-3 py-1 bg-[#00E5FF]/10 text-[#00E5FF] text-xs font-bold uppercase tracking-wider rounded-full mb-3 border border-[#00E5FF]/20">
                Limited Spots This Month
              </span>
              <h4 className="text-3xl font-heading font-bold text-foreground mb-3">Ready to be our next success story?</h4>
              <p className="text-muted-foreground text-lg">Let's build a digital presence that dominates your market.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 relative z-10 w-full sm:w-auto">
              <Button 
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                size="lg"
                className="h-14 px-8 rounded-xl bg-gradient-to-r from-[#0055FF] to-[#B900FF] text-white hover:scale-105 transition-all font-bold shadow-xl w-full sm:w-auto"
              >
                Start a Project <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Modal Render */}
      <AnimatePresence>
        {selectedProject && (
          <CaseStudyModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;