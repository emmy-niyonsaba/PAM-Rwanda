import React from 'react';
import { homePhoto,presitents,photo2} from '../../public/images';

export default function HeroSection({ title, subtitle, ctaText, ctaLink }) {
  return (
    <div className="hero" style={{ backgroundImage: `url(${presitents})` }}>
      <div className="hero-content">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white">
          {title}
        </h1>
        <p className="text-xl sm:text-2xl mb-8 text-white max-w-2xl">
          {subtitle}
        </p>
        <div className="flex gap-4 flex-wrap">
          <a href={ctaLink} className=" bg-red-500 rounded-md p-2">
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
