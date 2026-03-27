import React from 'react';

export default function TestimonyCard({ testimony }) {
  return (
    <div className="card">
      <div className="p-6">
        <p className="text-neutral-700 mb-4 italic">"{testimony.User?.firstName || 'Anonymous'} from {testimony.User?.country || 'Africa'}"</p>
        <p className="text-neutral-600 line-clamp-3">{testimony.content}</p>
        
        <div className="mt-4 flex justify-between items-center">
          <span className="text-sm text-neutral-500">👤 {testimony.User?.firstName} {testimony.User?.lastName}</span>
          <button className="text-primary-600 font-semibold hover:text-primary-700">Read More →</button>
        </div>
      </div>
    </div>
  );
}
