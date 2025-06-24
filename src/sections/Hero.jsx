import React from 'react';

export default function Hero() {
  return (
    <section className="text-center py-16" id="home">
      <h2 className="text-4xl font-bold mb-4">Hi, I'm Shardul Nalode</h2>
      <p className="text-lg mb-6">
        M.Tech CSE @ IIT Guwahati | Ex-Infosys | Full Stack & AI Enthusiast
      </p>
      <div className="flex justify-center space-x-4">
        <a href="/resume.pdf" className="px-4 py-2 bg-blue-600 text-white rounded" download>
          Download Resume
        </a>
        <a href="https://www.linkedin.com/in/shardul-nalode-52b175199/" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href="https://github.com/shardul1199" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </div>
    </section>
  );
}