import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="py-16 px-4 text-center">
      <h2 className="text-3xl font-semibold mb-4">Get In Touch</h2>
      <p className="mb-4">Feel free to reach out via email or connect on LinkedIn/GitHub.</p>
      <div className="flex justify-center space-x-6 text-2xl">
        <a href="mailto:shardul01011999@gmail.com" aria-label="Email"><FaEnvelope /></a>
        <a href="https://www.linkedin.com/in/shardul-nalode-52b175199/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
        <a href="https://github.com/shardul1199" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
      </div>
    </section>
  );
}