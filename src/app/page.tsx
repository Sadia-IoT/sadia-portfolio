import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutMe from "@/components/AboutMe";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900 antialiased transition-colors duration-300 dark:bg-[#202722] dark:text-[#E3E9E1] selection:bg-emerald-100 selection:text-emerald-900">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <AboutMe />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
