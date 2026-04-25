"use client"

import { motion } from "framer-motion"
import { Award, CheckCircle2 } from "lucide-react"
import { useLanguage } from "@/context/language-context"

export default function Certifications() {
  const { t } = useLanguage();
  const certs = t.certifications.items;

  return (
    <section id="certifications" className="py-24 px-6 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            {t.certifications.title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            {t.certifications.subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certs.map((cert, index) => (
            <motion.div 
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-background border border-border hover:border-brand-accent/50 transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-muted group-hover:bg-brand-accent/10 transition-colors">
                  <Award className="w-6 h-6 text-brand-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1 group-hover:text-brand-accent transition-colors">
                    {cert.name}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-3 h-3 text-brand-accent" />
                    <span>{cert.issuer}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}