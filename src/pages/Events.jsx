import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import EventCard from '../components/EventCard';
import { useAuthStore, useEventStore } from '../store/store';

export default function EventsPage() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuthStore();
  const { events, filteredEvents, loading, fetchEvents, filterEvents } = useEventStore();
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }
    // Fetch events from store
    fetchEvents();
  }, [isAuthenticated, navigate, fetchEvents]);

  // Apply filter when filter changes
  useEffect(() => {
    filterEvents(filter);
  }, [filter, events, filterEvents]);

  return (
    <>
     
      
      <div className="min-h-screen bg-neutral-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="section-header">🎉 Pan-African Events</h1>
          <p className="section-subheader">Connect with Africans worldwide through transformative events.</p>

          <div className="mb-8 flex gap-4 flex-wrap">
            {['all', 'upcoming', 'past'].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={f === filter ? 'btn-primary' : 'btn-outline'}
              >
                {f === 'all' ? 'All Events' : f === 'upcoming' ? 'Upcoming' : 'Past'}
              </button>
            ))}
          </div>

          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="skeleton h-64"></div>
              ))}
            </div>
          ) : filteredEvents.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-lg shadow">
              <p className="text-2xl text-neutral-600 mb-4">No events found.</p>
              <button onClick={() => setFilter('all')} className="btn-primary">
                View All Events
              </button>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}
