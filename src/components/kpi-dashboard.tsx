"use client"

import { motion } from "framer-motion"
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  Cell, PieChart, Pie 
} from "recharts"
import { TrendingDown, Zap, Globe, Award } from "lucide-react"
import { useLanguage } from "@/context/language-context"

const costReductionData = [
  { year: '2020', value: 0 },
  { year: '2021', value: 8 },
  { year: '2022', value: 15 },
  { year: '2023', value: 22 },
  { year: '2024', value: 30 },
]

const efficiencyData = [
  { name: 'AI Automated', value: 65, color: '#3b82f6' },
  { name: 'Manual', value: 35, color: '#e2e8f0' },
]

const metricsKeys = [
  { 
    key: "opexReduction", 
    value: "30%", 
    icon: TrendingDown, 
    color: "text-green-500", 
    descKey: "opexDesc" 
  },
  { 
    key: "infraScale", 
    value: "250K+", 
    icon: Globe, 
    color: "text-brand-accent", 
    descKey: "infraDesc" 
  },
  { 
    key: "aiEfficiency", 
    value: "40%", 
    icon: Zap, 
    color: "text-yellow-500", 
    descKey: "aiDesc" 
  },
  { 
    key: "strategicWins", 
    value: "12", 
    icon: Award, 
    color: "text-purple-500", 
    descKey: "strategicDesc" 
  },
]

export default function KPIDashboard() {
  const { t } = useLanguage();

  return (
    <section id="metrics" className="py-24 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            {t.metrics.title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            {t.metrics.subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {metricsKeys.map((metric, index) => (
            <motion.div 
              key={metric.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-background border border-border hover:border-brand-accent/50 transition-colors group"
            >
              <div className={`p-3 rounded-lg w-fit mb-4 bg-muted group-hover:bg-brand-accent/10 transition-colors`}>
                <metric.icon className={`w-6 h-6 ${metric.color}`} />
              </div>
              <div className="text-3xl font-bold mb-1">{metric.value}</div>
              <div className="text-sm font-semibold text-foreground mb-1">{t.metrics[metric.key as keyof typeof t.metrics]}</div>
              <div className="text-xs text-muted-foreground">{t.metrics[metric.descKey as keyof typeof t.metrics]}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-background border border-border"
          >
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-xl font-bold">{t.metrics.trendTitle}</h3>
                <p className="text-sm text-muted-foreground">{t.metrics.trendSub}</p>
              </div>
              <TrendingDown className="text-green-500 w-6 h-6" />
            </div>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={costReductionData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border)" />
                  <XAxis 
                    dataKey="year" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: 'var(--muted-foreground)', fontSize: 12 }}
                  />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: 'var(--muted-foreground)', fontSize: 12 }}
                    unit="%"
                  />
                  <Tooltip 
                    cursor={{ fill: 'var(--muted)' }}
                    contentStyle={{ 
                      backgroundColor: 'var(--background)', 
                      borderColor: 'var(--border)', 
                      borderRadius: '8px',
                      color: 'var(--foreground)'
                    }} 
                  />
                  <Bar dataKey="value" fill="var(--accent)" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-background border border-border relative"
          >
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-xl font-bold">{t.metrics.aiTitle}</h3>
                <p className="text-sm text-muted-foreground">{t.metrics.aiSub}</p>
              </div>
              <Zap className="text-yellow-500 w-6 h-6" />
            </div>
            <div className="h-[300px] w-full relative flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={efficiencyData}
                    innerRadius={80}
                    outerRadius={110}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {efficiencyData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'var(--background)', 
                      borderColor: 'var(--border)', 
                      borderRadius: '8px',
                      color: 'var(--foreground)'
                    }} 
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <span className="text-4xl font-bold">65%</span>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">{t.metrics.aiDriven}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}