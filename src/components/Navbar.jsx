import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuthStore } from '../store/store';

export default function Navbar() {
  const location = useLocation();
  const { user, isAuthenticated, logout } = useAuthStore();
  const [isOpen, setIsOpen] = React.useState(false);

  const handleLogout = () => {
    logout();
    window.location.href = '/';
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/events', label: 'Events' },
    { path: '/history', label: 'History' },
    { path: '/panafricanists', label: 'Heroes' },
    { path: '/opportunities', label: 'Opportunities' },
    { path: '/testimonies', label: 'Testimonies' },
    { path: '/about', label: 'About' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center text-white font-bold text-lg">
            🌍
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent hidden sm:inline">
            PAM Africa
          </span>
        </Link>

        <button
          className="md:hidden text-primary-600 text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:flex absolute md:relative top-16 md:top-0 left-0 md:left-auto right-0 md:right-auto bg-white md:bg-transparent flex-col md:flex-row gap-4 md:gap-8 p-4 md:p-0 shadow-lg md:shadow-none w-full md:w-auto`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-semibold transition ${
                location.pathname === link.path
                  ? 'text-primary-600'
                  : 'text-neutral-700 hover:text-primary-600'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          {isAuthenticated ? (
            <div className="flex gap-4 flex-col md:flex-row">
              <Link
                to="/dashboard"
                className="text-center font-semibold text-primary-600 hover:text-primary-700"
              >
                👤 {user?.firstName}
              </Link>
              <button
                onClick={handleLogout}
                className="btn-secondary"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex gap-4 flex-col md:flex-row">
              <Link to="/login" className="btn-outline">
                Login
              </Link>
              <Link to="/register" className="btn-primary">
                Join Now
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
