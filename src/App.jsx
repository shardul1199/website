import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Gallery from './sections/Gallery';
import Contact from './sections/Contact';

export default function App() {
  return (
    <div className="bg-white text-gray-800 dark:bg-gray-900 dark:text-white">
      <Navbar />
      <Hero />
      <Projects />
      <Experience />
      <Gallery />
      <Contact />
    </div>
  );
}