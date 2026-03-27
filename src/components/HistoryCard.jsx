import React from 'react';

export default function HistoryCard({ history }) {
  return (
    <div className="card">
      <div className="card-header">
        <div className="text-center">
          <p className="text-sm mb-2">{history.year}</p>
          <p className="text-sm font-semibold">{history.era}</p>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-primary-600 mb-2">{history.title}</h3>
        <p className="badge-primary mb-4">📍 {history.country}</p>
        <p className="text-neutral-600 line-clamp-3">{history.content}</p>
        
        <button className="mt-4 text-primary-600 font-semibold hover:text-primary-700">
          Read Full Story →
        </button>
      </div>
    </div>
  );
}
