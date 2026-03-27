import React from 'react';

export default function PanafricanistCard({ panafricanist }) {
  return (
    <div className="card">
      <div className="card-header">
        <div className="text-center text-5xl">🌟</div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-primary-600 mb-2">{panafricanist.name}</h3>
        <p className="badge-accent mb-3">{panafricanist.country}</p>
        
        <div className="mb-4">
          <p className="text-sm text-neutral-500">
            {panafricanist.birthYear} - {panafricanist.deathYear || 'Present'}
          </p>
        </div>

        <p className="text-neutral-600 text-sm mb-4 line-clamp-3">{panafricanist.biography}</p>
        
        <div className="bg-primary-50 p-3 rounded-lg mb-4">
          <p className="text-sm font-semibold text-primary-700 mb-1">Contributions:</p>
          <p className="text-sm text-neutral-600 line-clamp-2">{panafricanist.contributions}</p>
        </div>

        <button className="w-full btn-primary">Learn More</button>
      </div>
    </div>
  );
}
