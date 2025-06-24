import React from 'react';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 shadow-md bg-white dark:bg-gray-800">
      <h1 className="text-xl font-bold">Shardul Nalode</h1>
      <div className="space-x-4">
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#gallery">Gallery</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}