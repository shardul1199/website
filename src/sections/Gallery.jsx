import React from 'react';

export default function Gallery() {
  const images = [
    '/photo1.jpg', '/photo2.jpg', '/photo3.jpg'
  ];

  return (
    <section id="gallery" className="py-16 px-4">
      <h2 className="text-3xl font-semibold mb-8">Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src, idx) => (
          <img key={idx} src={src} alt={`gallery-${idx}`} className="rounded shadow" />
        ))}
      </div>
    </section>
  );
}
