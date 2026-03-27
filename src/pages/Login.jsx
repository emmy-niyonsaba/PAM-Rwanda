import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { authService } from '../services/api';
import { useAuthStore } from '../store/store';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuthStore();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await authService.login(formData);
      login(response.data.user, response.data.token);
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-primary-50 flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-md card">
          <div className="card-header text-center">
            <h1 className="text-3xl font-bold">Welcome Back</h1>
          </div>

          <form onSubmit={handleSubmit} className="p-8">
            {error && (
              <div className="bg-accent-100 border border-accent-400 text-accent-700 px-4 py-3 rounded mb-6">
                {error}
              </div>
            )}

            <div className="mb-6">
              <label className="block text-neutral-700 font-semibold mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="input-field"
                placeholder="your@email.com"
              />
            </div>

            <div className="mb-6">
              <label className="block text-neutral-700 font-semibold mb-2">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="input-field"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full btn-primary"
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>

            <p className="text-center text-neutral-600 mt-6">
              Don't have an account?{' '}
              <Link to="/register" className="text-primary-600 font-semibold hover:text-primary-700">
                Register here
              </Link>
            </p>

            <p className="text-center text-neutral-500 mt-4 text-sm">
              Demo: Use admin@pam.africa / admin123
            </p>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
