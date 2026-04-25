import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import KPIDashboard from "@/components/kpi-dashboard";
import Expertise from "@/components/expertise";
import ProjectShowcase from "@/components/projects";
import InnovationHub from "@/components/innovation";
import Certifications from "@/components/certifications";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <KPIDashboard />
      <Expertise />
      <ProjectShowcase />
      <InnovationHub />
      <Certifications />
      <Contact />
      
      <footer className="py-12 px-6 border-t border-border bg-muted/20 text-center">
        <div className="max-w-6xl mx-auto">
          <div className="text-xl font-bold tracking-tighter mb-4">
            <span className="text-foreground">EXEC</span>
            <span className="text-brand-accent">.PORTFOLIO</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Executive Telecom Portfolio. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}