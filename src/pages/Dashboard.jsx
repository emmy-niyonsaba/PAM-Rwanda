import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { sessionService, authService } from '../services/api';
import { useAuthStore } from '../store/store';

export default function DashboardPage() {
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuthStore();
  const [sessions, setSessions] = useState([]);
  const [progress, setProgress] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }
    fetchDashboardData();
  }, [isAuthenticated, navigate]);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      const [sessionsRes, progressRes, profileRes] = await Promise.all([
        sessionService.getSessions(),
        authService.getProfile(),
      ]);
      setSessions(sessionsRes.data.sessions || []);
      setUserProfile(profileRes.data);
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCompleteSession = async (sessionId) => {
    try {
      const score = prompt('Enter your quiz score (0-100):');
      if (score !== null) {
        await sessionService.completeSession(sessionId, { quizScore: parseInt(score) });
        fetchDashboardData();
      }
    } catch (error) {
      console.error('Error completing session:', error);
    }
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-neutral-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="text-center py-12">
              <p className="text-2xl text-neutral-600">Loading...</p>
            </div>
          ) : (
            <>
              {/* Welcome Section */}
              <div className="card mb-8 bg-gradient-to-r from-primary-50 to-accent-50">
                <div className="p-8">
                  <h1 className="text-4xl font-bold text-primary-600 mb-2">
                    Welcome back, {userProfile?.firstName}! 👋
                  </h1>
                  <p className="text-neutral-600 mb-4">
                    {userProfile?.isMember ? (
                      <span className="badge-primary">✓ Verified PAM Member</span>
                    ) : (
                      <span className="badge-accent">Complete sessions to become a member</span>
                    )}
                  </p>
                  <p className="text-neutral-600">
                    📍 {userProfile?.country} | 📧 {userProfile?.email}
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                <div className="card p-6 text-center">
                  <p className="text-5xl font-bold text-primary-600 mb-2">{userProfile?.sessionsCompleted || 0}</p>
                  <p className="text-neutral-600">Sessions Completed</p>
                </div>
                <div className="card p-6 text-center">
                  <p className="text-5xl font-bold text-accent-600 mb-2">{sessions.length - (userProfile?.sessionsCompleted || 0)}</p>
                  <p className="text-neutral-600">Sessions Remaining</p>
                </div>
                <div className="card p-6 text-center">
                  <p className="text-5xl font-bold text-primary-600 mb-2">
                    {Math.round(((userProfile?.sessionsCompleted || 0) / (sessions.length || 1)) * 100)}%
                  </p>
                  <p className="text-neutral-600">Progress</p>
                </div>
              </div>

              {/* Learning Sessions */}
              <div className="card">
                <div className="card-header">
                  <h2 className="text-3xl font-bold">🎓 Learning Sessions</h2>
                </div>
                <div className="p-6">
                  {sessions.length > 0 ? (
                    <div className="space-y-4">
                      {sessions.map((session, index) => {
                        const isCompleted = (userProfile?.sessionsCompleted || 0) > index;
                        return (
                          <div
                            key={session.id}
                            className={`p-4 rounded-lg border-2 ${
                              isCompleted
                                ? 'bg-primary-50 border-primary-200'
                                : 'bg-neutral-50 border-neutral-200'
                            }`}
                          >
                            <div className="flex justify-between items-start mb-2">
                              <div>
                                <h3 className="text-lg font-bold text-neutral-900">
                                  {isCompleted ? '✓' : index + 1}. {session.title}
                                </h3>
                                <p className="text-neutral-600 text-sm">{session.description}</p>
                              </div>
                              {isCompleted ? (
                                <span className="badge-primary">Completed</span>
                              ) : (
                                <span className="badge-accent">In Progress</span>
                              )}
                            </div>
                            <p className="text-sm text-neutral-500 mb-3">
                              ⏱️ {session.duration} minutes
                            </p>
                            {!isCompleted && (
                              <button
                                onClick={() => handleCompleteSession(session.id)}
                                className="btn-primary text-sm"
                              >
                                Mark as Complete
                              </button>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <p className="text-neutral-600">No sessions available.</p>
                  )}
                </div>
              </div>

              {/* Membership Status */}
              {userProfile?.isMember && (
                <div className="card mt-8 bg-gradient-to-r from-primary-500 to-accent-500">
                  <div className="p-8 text-white text-center">
                    <h2 className="text-3xl font-bold mb-2">🌟 Congratulations!</h2>
                    <p className="text-lg mb-4">You are now a verified PAM Member</p>
                    <p className="text-sm">
                      You have the power to create events, share testimonies, and lead your community
                    </p>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}
