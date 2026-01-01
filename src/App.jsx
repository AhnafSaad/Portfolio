import Education from "./components/Education";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'night');
    document.documentElement.className = 'dark';
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 transition-colors duration-500">
      <Navbar />
      <main className="container mx-auto p-4 md:p-8">
        <Hero />
        <div className="divider"></div>
        <Skills />
        <div className="divider"></div>
        <Projects />
        <div className="divider"></div>
        <Education />
      </main>
      <Footer />
    </div>
  );
}

export default App;