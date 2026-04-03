import { photo2 } from '../../public/images';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import EventCard from '../components/EventCard';
import TestimonyCard from '../components/TestimonyCard';
import Footer from '../components/Footer';
import { eventService, testimonyService } from '../services/api';
import { useAuthStore } from '../store/store';
export default function HomePage() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuthStore();
  const [events, setEvents] = useState([]);
  const [testimonies, setTestimonies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [eventsRes, testimoniesRes] = await Promise.all([
          eventService.getEvents({ filter: 'upcoming' }),
          testimonyService.getTestimonies(),
        ]);
        setEvents(eventsRes.data.events?.slice(0, 3) || []);
        setTestimonies(testimoniesRes.data.testimonies?.slice(0, 3) || []);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {/* Hero Section */}

      <HeroSection
        title="Unite Africa. Empower Africans."
        subtitle="Join millions of Africans and diaspora members building a stronger, more prosperous continent through education, events, and community."
        ctaText={isAuthenticated ? '📚 Continue Learning' : '🚀 Join the Movement'}
        ctaLink={isAuthenticated ? '/dashboard' : '/register'}
      />

        <section className=" flex grow overflow-x-auto gap-6 bg-white p-6 border-t-4 border-black [&>*]:shrink-0">
        
          <div className="  max-w-sm overflow-hidden rounded-xl bg-white shadow-lg transition-hover hover:shadow-2xl border border-gray-100">
            <img
              className="h-48 w-full object-cover"
              src={photo2}
              alt="Event cover"
            />
            <div className="p-5">
              <h1 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
                Event Title
              </h1>

              <div className="flex items-center text-sm text-gray-600">
                <span className="font-medium">Date:</span>
                <span className="ml-2 italic">December 12, 2025</span>
              </div>
              <button className="mt-4 w-full rounded-lg bg-red-500 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-700">
                View Details
              </button>
            </div>
          </div>
          <div className="max-w-sm overflow-hidden rounded-xl bg-white shadow-lg transition-hover hover:shadow-2xl border border-gray-100">
            <img
              className="h-48 w-full object-cover"
              src={photo2}
              alt="Event cover"
            />
            <div className="p-5">
              <h1 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
                Event Title
              </h1>

              <div className="flex items-center text-sm text-gray-600">
                <span className="font-medium">Date:</span>
                <span className="ml-2 italic">December 12, 2025</span>
              </div>
              <button className="mt-4 w-full rounded-lg bg-red-500 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-700">
                View Details
              </button>
            </div>
          </div>
          <div className="max-w-sm overflow-hidden rounded-xl bg-white shadow-lg transition-hover hover:shadow-2xl border border-gray-100">
            <img
              className="h-48 w-full object-cover"
              src={photo2}
              alt="Event cover"
            />
            <div className="p-5">
              <h1 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
                Event Title
              </h1>

              <div className="flex items-center text-sm text-gray-600">
                <span className="font-medium">Date:</span>
                <span className="ml-2 italic">December 12, 2025</span>
              </div>
              <button className="mt-4 w-full rounded-lg bg-red-500 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-700">
                View Details
              </button>
            </div>
          </div>
          <div className="max-w-sm overflow-hidden rounded-xl bg-white shadow-lg transition-hover hover:shadow-2xl border border-gray-100">
            <img
              className="h-48 w-full object-cover"
              src={photo2}
              alt="Event cover"
            />
            <div className="p-5">
              <h1 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
                Event Title
              </h1>

              <div className="flex items-center text-sm text-gray-600">
                <span className="font-medium">Date:</span>
                <span className="ml-2 italic">December 12, 2025</span>
              </div>
              <button className="mt-4 w-full rounded-lg bg-red-500 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-700">
                View Details
              </button>
            </div>
          </div>
          <div className="max-w-sm overflow-hidden rounded-xl bg-white shadow-lg transition-hover hover:shadow-2xl border border-gray-100">
            <img
              className="h-48 w-full object-cover"
              src={photo2}
              alt="Event cover"
            />
            <div className="p-5">
              <h1 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
                Event Title
              </h1>

              <div className="flex items-center text-sm text-gray-600">
                <span className="font-medium">Date:</span>
                <span className="ml-2 italic">December 12, 2025</span>
              </div>
              <button className="mt-4 w-full rounded-lg bg-red-500 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-700">
                View Details
              </button>
            </div>
          </div>
          <div className="max-w-sm overflow-hidden rounded-xl bg-white shadow-lg transition-hover hover:shadow-2xl border border-gray-100">
            <img
              className="h-48 w-full object-cover"
              src={photo2}
              alt="Event cover"
            />
            <div className="p-5">
              <h1 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
                Event Title
              </h1>

              <div className="flex items-center text-sm text-gray-600">
                <span className="font-medium">Date:</span>
                <span className="ml-2 italic">December 12, 2025</span>
              </div>
              <button className="mt-4 w-full rounded-lg bg-red-500 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-700">
                View Details
              </button>
            </div>
          </div>
        </section>

      {/* Learning Path */}
      <section className="py-16 bg-gradient-to-r from-primary-50 to-accent-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-header">🎓 Membership Path</h2>
          <p className="section-subheader">Become a verified PAM member through our structured learning program.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Register', desc: 'Create your PAM account' },
              { step: '2', title: 'Learn', desc: 'Complete learning sessions' },
              { step: '3', title: 'Assess', desc: 'Pass evaluation quizzes' },
              { step: '4', title: 'Celebrate', desc: 'Become a PAM member' },
            ].map((item) => (
              <div key={item.step} className="card text-center">
                <div className="card-header">
                  <span className="text-6xl font-bold text-white">{item.step}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary-600 mb-2">{item.title}</h3>
                  <p className="text-neutral-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button onClick={() => navigate('/register')} className="btn-primary py-3 px-8 text-lg">
              Start Learning Now
            </button>
          </div>
        </div>
      </section>

      {/* Testimonies */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-header">💬 Community Testimonies</h2>
          <p className="section-subheader">Hear from members about their PAM journey.</p>

          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="skeleton h-48"></div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
              {testimonies.length > 0 ? (
                testimonies.map((testimony) => <TestimonyCard key={testimony.id} testimony={testimony} />)
              ) : (
                <p className="text-neutral-600">Be the first to share your story!</p>
              )}
            </div>
          )}

          <div className="text-center">
            <button onClick={() => navigate('/testimonies')} className="btn-secondary py-3 px-8 text-lg">
              Share Your Story
            </button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-accent-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Join the Movement?</h2>
          <p className="text-xl mb-8">Empower yourself. Strengthen your continent. Build African solutions.</p>
          <button
            onClick={() => navigate(isAuthenticated ? '/dashboard' : '/register')}
            className="bg-white text-primary-600 font-bold py-3 px-8 rounded-lg hover:bg-neutral-100 transition text-lg"
          >
            {isAuthenticated ? 'Go to Dashboard' : 'Join Now →'}
          </button>
        </div>
      </section>

      <Footer />
    </>
  );
}
