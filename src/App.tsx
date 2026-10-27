import { useEffect } from "react";
import { Route, Routes, useRoutePath } from "./lib/router";
import { initLenis } from "./lib/lenis";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Speaking";
import Skills from "./pages/Courses";
import Contact from "./pages/Contact";

export default function App() {
  const path = useRoutePath();

  useEffect(() => {
    const lenis = initLenis();
    return () => lenis.destroy();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
