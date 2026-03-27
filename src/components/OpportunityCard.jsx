import React from 'react';

export default function OpportunityCard({ opportunity }) {
  const typeIcons = {
    job: '💼',
    scholarship: '🎓',
    startup: '🚀',
    investment: '💰',
  };

  return (
    <div className="card">
      <div className="card-header">
        <div className="text-center">
          <span className="text-5xl">{typeIcons[opportunity.type]}</span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-primary-600 mb-2">{opportunity.title}</h3>
        <p className="badge-primary mb-3">{opportunity.organization}</p>
        <p className="text-neutral-600 mb-4 line-clamp-2">{opportunity.description}</p>
        
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm text-neutral-500">📍 {opportunity.country}</span>
          <span className="text-sm font-semibold text-accent-600">
            Deadline: {new Date(opportunity.deadline).toLocaleDateString()}
          </span>
        </div>

        <a href={opportunity.link} target="_blank" rel="noopener noreferrer" className="w-full btn-primary">
          Apply Now →
        </a>
      </div>
    </div>
  );
}
