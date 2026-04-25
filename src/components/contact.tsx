"use client"

import { motion } from "framer-motion"
import { Mail, Globe, MapPin, Send, FileText } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/context/language-context"

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              {t.contact.title}
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              {t.contact.subtitle}
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-muted/50 border border-border hover:border-brand-accent/50 transition-colors">
                <div className="p-3 rounded-xl bg-background text-brand-accent">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground uppercase font-bold">{t.contact.email}</div>
                  <div className="text-foreground font-medium">yaser.mohamed@te.eg</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-muted/50 border border-border hover:border-brand-accent/50 transition-colors">
                <div className="p-3 rounded-xl bg-background text-brand-accent">
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground uppercase font-bold">{t.contact.linkedin}</div>
                  <Link href="https://www.linkedin.com/in/yasser-elgaml-59b70185/" target="_blank" className="text-foreground font-medium hover:text-brand-accent transition-colors">
                    linkedin.com/in/yasser-elgaml-59b70185
                  </Link>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-muted/50 border border-border hover:border-brand-accent/50 transition-colors">
                <div className="p-3 rounded-xl bg-background text-brand-accent">
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground uppercase font-bold">{t.contact.facebook}</div>
                  <Link href="https://www.facebook.com/yasserelgaml0" target="_blank" className="text-foreground font-medium hover:text-brand-accent transition-colors">
                    facebook.com/yasserelgaml0
                  </Link>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-muted/50 border border-border hover:border-brand-accent/50 transition-colors">
                <div className="p-3 rounded-xl bg-background text-brand-accent">
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground uppercase font-bold">{t.contact.phone}</div>
                  <div className="text-foreground font-medium">{t.userPhone}</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-muted/50 border border-border hover:border-brand-accent/50 transition-colors">
                <div className="p-3 rounded-xl bg-background text-brand-accent">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground uppercase font-bold">{t.contact.location}</div>
                  <div className="text-foreground font-medium">International / Remote Ready</div>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <Link 
                href="/cv.pdf" 
                className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-foreground text-background font-semibold hover:bg-foreground/90 transition-all group"
              >
                <FileText className="w-5 h-5" />
                {t.contact.downloadCV}
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-muted/30 border border-border"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground ml-1">{t.contact.formName}</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-brand-accent/50 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground ml-1">{t.contact.formEmail}</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-brand-accent/50 transition-all"
                    placeholder="john@company.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground ml-1">{t.contact.formSubject}</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-brand-accent/50 transition-all"
                  placeholder="Executive Inquiry / Consulting"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground ml-1">{t.contact.formMessage}</label>
                <textarea 
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-brand-accent/50 transition-all resize-none"
                  placeholder={t.contact.formPlaceholder}
                />
              </div>
              <button 
                type="submit"
                className="w-full py-4 bg-brand-accent text-background font-bold rounded-xl hover:bg-brand-accent/90 transition-all flex items-center justify-center gap-2"
              >
                {t.contact.formSend}
                <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}