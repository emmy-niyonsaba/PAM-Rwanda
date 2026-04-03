import React from 'react';
import { presitents } from '../../public/images';

export default function HeroSection({ title, subtitle, ctaText, ctaLink }) {
  return (
    <section
      className="relative min-h-screen flex items-center bg-black bg-center bg-cover"
      style={{ backgroundImage: `url(${presitents})` }}
    >
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-28 sm:py-32 lg:py-36">
        <div className="max-w-4xl">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight text-white">
            {title}
          </h1>
          <p className="text-lg sm:text-2xl mb-10 text-white/95 max-w-2xl leading-relaxed">
            {subtitle}
          </p>
          <div className="flex gap-4 flex-wrap">
            <a
              href={ctaLink}
              className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-red-700 text-white font-semibold border-2 border-red-700 hover:bg-white hover:text-red-700 transition-colors duration-200"
            >
              {ctaText}
            </a>
            <a
              href="#learn-more"
              className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-white text-black font-semibold border-2 border-white hover:bg-black hover:text-white transition-colors duration-200"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
