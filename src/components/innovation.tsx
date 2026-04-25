"use client"

import { motion } from "framer-motion"
import { BrainCircuit, Sparkles, Rocket, Network } from "lucide-react"
import { useLanguage } from "@/context/language-context"

export default function InnovationHub() {
  const { t } = useLanguage();
  const innovations = t.innovation.items;

  return (
    <section id="innovation" className="py-24 px-6 bg-brand-navy text-white overflow-hidden relative">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle, #64ffda 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
          <div className="flex-1 text-center md:text-left">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold mb-6 leading-tight"
            >
              {t.innovation.title}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-400 text-lg mb-8 leading-relaxed"
            >
              {t.innovation.subtitle}
            </motion.p>
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-sm font-medium"
            >
              <Sparkles className="w-4 h-4" />
              {t.innovation.thoughtLeadership}
            </motion.div>
          </div>
          <div className="flex-1 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative w-64 h-64 md:w-80 md:h-80 mx-auto"
            >
              <div className="absolute inset-0 bg-brand-blue/20 rounded-full blur-3xl animate-pulse" />
              <div className="absolute inset-0 flex items-center justify-center">
                <BrainCircuit className="w-32 h-32 text-brand-blue animate-bounce-slow" />
              </div>
            </motion.div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {innovations.map((item, index) => {
            // Map icons based on title or index since they are in translations
            const icons = [BrainCircuit, Network, Sparkles, Rocket];
            const Icon = icons[index % icons.length];
            
            return (
              <motion.div 
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-3xl bg-brand-slate border border-slate-700 hover:border-brand-blue/50 transition-all group"
              >
                <div className="flex items-start gap-6">
                  <div className="p-3 rounded-2xl bg-brand-navy border border-slate-700 text-brand-blue group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-brand-blue transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-4">
                      {item.desc}
                    </p>
                    <div className="inline-block text-xs font-bold text-brand-blue bg-brand-blue/10 px-2 py-1 rounded">
                      {item.impact}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  )
}