"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, ChevronRight, X } from "lucide-react"
import { useLanguage } from "@/context/language-context"

export default function ProjectShowcase() {
  const { t, language } = useLanguage();
  const [filter, setFilter] = useState("All")
  const [selectedProject, setSelectedProject] = useState<string | null>(null)

  const projects = t.projects.items;
  const categories = ["All", ...Array.from(new Set(projects.map(p => p.category)))]
  const filteredProjects = filter === "All" ? projects : projects.filter(p => p.category === filter)

  return (
    <section id="projects" className="py-24 px-6 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            {t.projects.title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            {t.projects.subtitle}
          </motion.p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === cat 
                    ? "bg-brand-accent text-background" 
                    : "bg-background border border-border text-muted-foreground hover:border-brand-accent/50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="p-6 rounded-2xl bg-background border border-border hover:border-brand-accent/50 transition-all group cursor-pointer"
                onClick={() => setSelectedProject(project.id)}
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-accent bg-brand-accent/10 px-2 py-1 rounded">
                    {project.category}
                  </span>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-brand-accent transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-brand-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-6 line-clamp-3">
                  {project.summary}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-medium bg-muted px-2 py-1 rounded text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold text-foreground group-hover:gap-3 transition-all">
                  {t.projects.deepDive} <ChevronRight className="w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Project Detail Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-background/80 backdrop-blur-sm"
              />
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative w-full max-w-3xl bg-background border border-border rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
              >
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 p-2 rounded-full bg-muted hover:bg-brand-accent/20 transition-colors z-10"
                >
                  <X className="w-5 h-5" />
                </button>

                {projects.find(p => p.id === selectedProject) && (
                  <div className="p-8 md:p-12">
                    <div className="mb-8">
                      <span className="text-xs font-bold uppercase tracking-wider text-brand-accent bg-brand-accent/10 px-2 py-1 rounded">
                        {projects.find(p => p.id === selectedProject)?.category}
                      </span>
                      <h2 className="text-3xl font-bold mt-4 mb-2">
                        {projects.find(p => p.id === selectedProject)?.title}
                      </h2>
                      <p className="text-muted-foreground">
                        {projects.find(p => p.id === selectedProject)?.summary}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                      {[
                        { label: t.projects.situation, content: projects.find(p => p.id === selectedProject)?.star.situation },
                        { label: t.projects.task, content: projects.find(p => p.id === selectedProject)?.star.task },
                        { label: t.projects.action, content: projects.find(p => p.id === selectedProject)?.star.action },
                        { label: t.projects.result, content: projects.find(p => p.id === selectedProject)?.star.result },
                      ].map((item, i) => (
                        <div key={item.label} className="p-6 rounded-2xl bg-muted/30 border border-border">
                          <div className="flex items-center gap-3 mb-3">
                            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-brand-accent text-background text-xs font-bold">
                              {i + 1}
                            </span>
                            <h4 className="font-bold text-foreground uppercase tracking-wide text-xs">
                              {item.label}
                            </h4>
                          </div>
                          <p className="text-muted-foreground leading-relaxed pl-9">
                            {item.content}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
