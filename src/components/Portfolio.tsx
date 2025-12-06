import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowRight, Code2, X, Github, Globe, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

// Updated Data structure with Links
const projects = [
  {
    title: "Laptop E-Commerce Store",
    client: "ElectroMart",
    category: "MERN Stack E-Commerce",
    description: "A complete online store with Admin Dashboard, Stripe Payment Gateway, Order Management, and JWT Authentication.",
    features: ["Admin Dashboard", "Stripe Online Payments", "JWT Authentication", "Cart + Wishlist"],
    tools: ["React.js", "Express.js", "MongoDB", "Stripe API", "Tailwind"],
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=2068&auto=format&fit=crop",
    liveLink: "#",
    repoLink: "#"
  },
  {
    title: "Corporate Business Hub",
    client: "US Startup Hub",
    category: "Business Website",
    description: "A modern landing page for LLC formation services with SEO optimization and lead generation form.",
    features: ["SEO Ready", "Lead Forms", "Smooth Animations", "Fast Loading"],
    tools: ["React", "Tailwind", "Framer Motion"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    liveLink: "#",
    repoLink: "#"
  },
  {
    title: "Developer Portfolio",
    client: "Personal Brand",
    category: "Portfolio & Blog",
    description: "A high-performance personal portfolio with animations, blog system, and CMS support.",
    features: ["Blog CMS", "Dark Mode", "Framer Motion", "Responsive Design"],
    tools: ["Next.js", "Tailwind", "Framer Motion"],
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2055&auto=format&fit=crop",
    liveLink: "#",
    repoLink: "#"
  },
  {
    title: "University Incubation Portal",
    client: "UEIMS",
    category: "Management System",
    description: "A centralized platform for managing startups, incubation progress, events and faculty roles.",
    features: ["Role-Based Access", "Event Scheduling", "Startup Tracking", "Reporting"],
    tools: ["MySQL", "Node.js", "React"],
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2070&auto=format&fit=crop",
    liveLink: "#",
    repoLink: "#"
  },
  {
    title: "CPU Scheduling Visualizer",
    client: "Computer Science Labs",
    category: "Algorithm Simulation",
    description: "A visual simulator for all CPU scheduling algorithms with chart animations.",
    features: ["Gantt Chart", "Process Table", "RR, SJF, FCFS Support", "Real-time Calc"],
    tools: ["JavaScript", "HTML Canvas", "CSS"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
    liveLink: "#",
    repoLink: "#"
  },
  {
    title: "Smart Traffic Manager",
    client: "Smart City Labs",
    category: "IoT Dashboard",
    description: "Real-time dashboard with live traffic feed, alerts, and sensor data visualization.",
    features: ["Live Data Feed", "Traffic Heatmap", "Admin Panel", "Alert System"],
    tools: ["React", "Node.js", "IoT API"],
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop",
    liveLink: "#",
    repoLink: "#"
  },
];

const Portfolio = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // 1. Scroll Lock Hook: Jab modal open ho, body scroll band ho jaye
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Keyboard support: Close on ESC key
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProject]);

  return (
    <section id="portfolio" className="py-20 md:py-28 bg-background relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-4">
            <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-2">
              <Code2 className="w-4 h-4" /> My Recent Work
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-6">
            Featured Projects
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            From complex web apps to sleek landing pages, explore how I solve problems with code.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          layout 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {(showAll ? projects : projects.slice(0, 3)).map((project, index) => (
              <motion.div
                layout
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative rounded-2xl overflow-hidden bg-card border border-border/50 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                {/* Image Area */}
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button variant="secondary" className="rounded-full gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      View Details <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6">
                  <span className="text-primary text-xs font-semibold tracking-wider uppercase bg-primary/5 px-2 py-1 rounded">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-heading font-bold mt-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-2 mt-2">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Toggle */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="px-8 min-w-[160px] border-2 hover:bg-muted"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Less" : "View All Projects"}
          </Button>
        </div>
      </div>

      {/* ============================================== */}
      {/* ENHANCED MODAL                   */}
      {/* ============================================== */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            
            {/* Backdrop: Clicking here closes modal */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
            />

            {/* Modal Container */}
            <motion.div
              layoutId={`card-${selectedProject.title}`}
              className="bg-card w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden relative z-10 flex flex-col max-h-[90vh]"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              
              {/* Modal Header (Sticky Close Button) */}
              <div className="absolute top-4 right-4 z-20">
                <Button
                  variant="secondary"
                  size="icon"
                  className="rounded-full shadow-lg bg-background/80 backdrop-blur hover:bg-destructive hover:text-white transition-colors"
                  onClick={() => setSelectedProject(null)}
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              {/* Scrollable Content Area */}
              <div className="overflow-y-auto custom-scrollbar">
                
                {/* Hero Image */}
                <div className="w-full h-64 sm:h-80 lg:h-96 relative">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent" />
                </div>

                <div className="p-6 sm:p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                    <div>
                      <h2 className="text-3xl sm:text-4xl font-bold font-heading">
                        {selectedProject.title}
                      </h2>
                      <p className="text-lg text-primary font-medium mt-1">
                        {selectedProject.client}
                      </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 mt-2 md:mt-0">
                        <Button className="gap-2" onClick={() => window.open(selectedProject.liveLink, '_blank')}>
                            <Globe className="w-4 h-4"/> Live Demo
                        </Button>
                        <Button variant="outline" className="gap-2" onClick={() => window.open(selectedProject.repoLink, '_blank')}>
                            <Github className="w-4 h-4"/> Source
                        </Button>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                    {selectedProject.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    
                    {/* Features List */}
                    <div className="bg-secondary/20 p-6 rounded-xl border border-border/50">
                      <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                         Key Features
                      </h3>
                      <ul className="space-y-3">
                        {selectedProject.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm sm:text-base text-foreground/80">
                            <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack */}
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Technologies Used</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tools.map((tool, i) => (
                          <span
                            key={i}
                            className="bg-primary/10 text-primary border border-primary/20 px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary hover:text-white transition-colors cursor-default"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>

                {/* Footer Close Button (Mobile convenience) */}
                <div className="p-6 border-t border-border bg-muted/20 flex justify-end">
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