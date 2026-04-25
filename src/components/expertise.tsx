"use client"

import { motion } from "framer-motion"
import { Cpu, Globe, Layers, Zap, Shield, BarChart3 } from "lucide-react"
import { useLanguage } from "@/context/language-context"

const expertiseKeys = [
  {
    key: "fiber",
    icon: Globe,
    color: "text-brand-accent",
    skills: {
      en: ["FTTH/B Architecture", "DWDM & Optical Transport", "CAPEX/OPEX Optimization", "Network Topology Design", "Vendor Management (Huawei, Nokia, Ericsson)"],
      ar: ["هيكلية FTTH/B", "النقل الضوئي DWDM", "تحسين النفقات الرأسمالية والتشغيلية", "تصميم طبولوجيا الشبكة", "إدارة الموردين (هواوي، نوكيا، إريكسون)"]
    }
  },
  {
    key: "oss",
    icon: Layers,
    color: "text-blue-500",
    skills: {
      en: ["Network Inventory Management", "Service Provisioning Automation", "SLA/SLO Governance", "Fault & Performance Management", "Agile Operations Frameworks"],
      ar: ["إدارة مخزون الشبكة", "أتمتة تفعيل الخدمات", "حوكمة اتفاقيات مستوى الخدمة", "إدارة الأعطال والأداء", "أطر العمليات الرشيقة (Agile)"]
    }
  },
  {
    key: "ai",
    icon: Cpu,
    color: "text-yellow-500",
    skills: {
      en: ["GenAI for Network Ops", "Predictive Maintenance", "AIOps Implementation", "Data-Driven Decision Making", "ML-based Traffic Forecasting"],
      ar: ["الذكاء الاصطناعي التوليدي لعمليات الشبكة", "الصيانة التنبؤية", "تنفيذ AIOps", "اتخاذ القرار القائم على البيانات", "التنبؤ بحركة المرور باستخدام ML"]
    }
  }
]

export default function Expertise() {
  const { t, language } = useLanguage();

  return (
    <section id="expertise" className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            {t.expertise.title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            {t.expertise.subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {expertiseKeys.map((item, index) => {
            const content = {
              fiber: { title: t.expertise.fiberTitle, desc: t.expertise.fiberDesc },
              oss: { title: t.expertise.ossTitle, desc: t.expertise.ossDesc },
              ai: { title: t.expertise.aiTitle, desc: t.expertise.aiDesc },
            }[item.key as 'fiber' | 'oss' | 'ai'];

            return (
              <motion.div 
                key={item.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="p-8 rounded-3xl bg-muted/50 border border-border hover:border-brand-accent/50 transition-all group relative overflow-hidden"
              >
                <div className="absolute -right-8 -top-8 w-32 h-32 bg-brand-accent/5 rounded-full group-hover:scale-150 transition-transform duration-500" />
                
                <div className={`p-3 rounded-2xl w-fit mb-6 bg-background border border-border ${item.color}`}>
                  <item.icon className="w-8 h-8" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 group-hover:text-brand-accent transition-colors">
                  {content.title}
                </h3>
                
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  {content.desc}
                </p>
                
                <div className="space-y-3">
                  {item.skills[language].map((skill) => (
                    <div key={skill} className="flex items-center gap-3 text-sm font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                      {skill}
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  )
}
