import About from "@/components/About";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Leadership from "@/components/Leadership";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,212,255,0.12),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(124,58,237,0.12),transparent_24%),linear-gradient(180deg,rgba(10,14,26,0.96),rgba(10,14,26,1))]" />
      <Navbar />
      <div className="relative z-10">
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Leadership />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
