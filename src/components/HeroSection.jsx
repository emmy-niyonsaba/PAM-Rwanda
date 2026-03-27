import React from 'react';

export default function HeroSection({ title, subtitle, ctaText, ctaLink }) {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          {title}
        </h1>
        <p className="text-xl sm:text-2xl mb-8 text-white/90 max-w-2xl">
          {subtitle}
        </p>
        <div className="flex gap-4 flex-wrap">
          <a href={ctaLink} className="btn-primary">
            {ctaText}
          </a>
          <a href="#learn-more" className="btn-outline">
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
}
