import React from 'react';

const projects = [
  {
    title: 'Neural-Driven Text Compression and Embedding',
    description: 'Huffman encoding + neural networks for secure text-image steganography.',
  },
  {
    title: 'Super Image Resolution using SRGAN',
    description: 'Used VGG19 + SRGAN to improve image resolution (PSNR: 28, SSIM: 0.83).',
    github: 'https://github.com/shardul1199/SRGAN_IMAGE_RESOLUTION'
  },
  {
    title: 'Speech-based PPT Navigator',
    description: 'Speech-to-command tool for PPT navigation using LPC + HMM.',
    github: 'https://github.com/shardul1199/SpeechBasedPresentationNavigator-master'
  },
  {
    title: 'Encrypted DNS & Threat Detection',
    description: 'Encrypted DNS + ML-based threat detection using Python & Wireshark.',
    github: 'https://github.com/shardul1199/Encrypted-DNS-and-Intelligent-Threat-Detection-in-Networked-Systems'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-4">
      <h2 className="text-3xl font-semibold mb-8">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, idx) => (
          <div key={idx} className="p-4 border rounded shadow">
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="mb-2">{project.description}</p>
            {project.github && (
              <a href={project.github} className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}