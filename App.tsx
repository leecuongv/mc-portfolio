import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Stats from './components/sections/Stats';
import Showreel from './components/sections/Showreel';
import Services from './components/sections/Services';
import Experience from './components/sections/Experience';
import Partners from './components/sections/Partners';
import Testimonials from './components/sections/Testimonials';
import Pricing from './components/sections/Pricing';
import Contact from './components/sections/Contact';

const App: React.FC = () => {
  return (
    <div className="bg-[#141414] text-white min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Stats />
        <Showreel />
        <Services />
        <Experience />
        <Partners />
        <Testimonials />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;