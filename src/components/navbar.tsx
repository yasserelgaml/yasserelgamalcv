"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Sun, Moon, Languages, Phone } from "lucide-react"
import { useTheme } from "next-themes"
import { useLanguage } from "@/context/language-context"
import Link from "next/link"

const navLinksKey = [
  { key: "metrics", href: "#metrics" },
  { key: "expertise", href: "#expertise" },
  { key: "portfolio", href: "#projects" },
  { key: "innovation", href: "#innovation" },
  { key: "contact", href: "#contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const { language, setLanguage, t } = useLanguage()

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!mounted) {
    return (
      <nav className="fixed top-0 w-full z-50 py-6 bg-transparent">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex flex-col">
            <div className="text-xl font-bold tracking-tighter">
              <span className="text-foreground">EXEC</span>
              <span className="text-brand-accent">.PORTFOLIO</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <div className="w-10 h-10" />
          </div>
        </div>
      </nav>
    )
  }

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? "py-3 bg-background/80 backdrop-blur-md border-b border-border" : "py-6 bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col"
        >
          <div className="text-xl font-bold tracking-tighter">
            <span className="text-foreground">EXEC</span>
            <span className="text-brand-accent">.PORTFOLIO</span>
          </div>
          <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-widest leading-none">
            {t.userName}
          </span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinksKey.map((link) => (
            <Link 
              key={link.key} 
              href={link.href} 
              className="text-sm font-medium text-muted-foreground hover:text-brand-accent transition-colors"
            >
              {t.nav[link.key as keyof typeof t.nav]}
            </Link>
          ))}
          
          <div className="h-6 w-px bg-border mx-2" />
          
          <button 
            onClick={() => setLanguage(language === "en" ? "ar" : "en")}
            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors text-xs font-bold"
            aria-label="Toggle language"
          >
            <Languages className="w-4 h-4" />
            {language === "en" ? "العربية" : "English"}
          </button>

          <a 
            href={`tel:${t.userPhone}`}
            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-brand-accent text-background hover:bg-brand-accent/90 transition-colors text-xs font-bold"
            aria-label="Call now"
          >
            <Phone className="w-4 h-4" />
            <span className="hidden lg:inline">{t.userPhone}</span>
          </a>

          <button 
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button 
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-lg bg-muted"
          >
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg bg-muted"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinksKey.map((link) => (
                <Link 
                  key={link.key} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-muted-foreground hover:text-brand-accent transition-colors"
                >
                  {t.nav[link.key as keyof typeof t.nav]}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}