import React from 'react';

export default function EventCard({ event }) {
  return (
    <div className="card">
      <div className="card-header">
        <div className="text-center">
          <h3 className="text-2xl font-bold">{event.title}</h3>
          <p className="text-sm mt-2">📍 {event.location}, {event.country}</p>
        </div>
      </div>
      <div className="p-6">
        <p className="text-neutral-600 mb-4">{event.description}</p>
        
        <div className="flex justify-between items-center mb-4">
          <span className="badge-primary">📅 {new Date(event.date).toLocaleDateString()}</span>
          <span className="badge-accent">{event.category}</span>
        </div>

        <div className="flex justify-between mb-4">
          <span className="text-sm text-neutral-500">👥 {event.attendeeCount}/{event.capacity}</span>
        </div>

        <button className="w-full btn-primary">View Details</button>
      </div>
    </div>
  );
}
