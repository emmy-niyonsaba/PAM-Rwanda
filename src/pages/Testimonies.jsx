import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TestimonyCard from '../components/TestimonyCard';
import { testimonyService } from '../services/api';
import { useAuthStore } from '../store/store';

export default function TestimoniesPage() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuthStore();
  const [testimonies, setTestimonies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [content, setContent] = useState('');
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    fetchTestimonies();
  }, []);

  const fetchTestimonies = async () => {
    try {
      setLoading(true);
      const response = await testimonyService.getTestimonies();
      setTestimonies(response.data.testimonies || []);
    } catch (error) {
      console.error('Error fetching testimonies:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }

    try {
      setSubmitting(true);
      await testimonyService.createTestimony({ content });
      setContent('');
      setShowForm(false);
      fetchTestimonies();
    } catch (error) {
      console.error('Error submitting testimony:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-neutral-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="section-header">💬 Community Testimonies</h1>
          <p className="section-subheader">Share your Pan-African journey and inspire others.</p>

          {isAuthenticated && (
            <div className="mb-8">
              <button
                onClick={() => setShowForm(!showForm)}
                className="btn-secondary"
              >
                {showForm ? 'Cancel' : '✍️ Share Your Story'}
              </button>
            </div>
          )}

          {showForm && (
            <div className="card mb-8 p-6">
              <h3 className="text-xl font-bold text-primary-600 mb-4">Share Your Testimony</h3>
              <form onSubmit={handleSubmit}>
                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  required
                  placeholder="Tell us about your Pan-African experience and journey..."
                  className="input-field h-32 mb-4"
                />
                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-primary"
                >
                  {submitting ? 'Submitting...' : 'Submit Testimony'}
                </button>
              </form>
            </div>
          )}

          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="skeleton h-48"></div>
              ))}
            </div>
          ) : testimonies.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonies.map((testimony) => (
                <TestimonyCard key={testimony.id} testimony={testimony} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-lg shadow">
              <p className="text-2xl text-neutral-600 mb-4">No testimonies yet.</p>
              {isAuthenticated && (
                <button onClick={() => setShowForm(true)} className="btn-primary">
                  Be the first to share
                </button>
              )}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}
