import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAuthStore } from '../store/store';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, isAuthenticated, logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
    setMenuOpen(false);
  };

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'PAM Sessions', path: '/dashboard' },
    { label: 'History', path: '/history' },
    { label: 'Heroes', path: '/panafricanists' },
    { label: 'Opportunities', path: '/opportunities' },
    { label: 'Events', path: '/events' },
    { label: 'Stories', path: '/testimonies' },
    
  ];

  return (
    <nav className="bg-white border-b-2 border-red-700 shadow-sm sticky top-0 z-50">
      {/* Desktop & Mobile Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-red-500 rounded-md flex items-center justify-center border-2 border-red-900">
              <span className="text-white font-bold text-sm tracking-wide">PAM</span>
            </div>
            <span className="text-xl font-bold text-red-900 group-hover:text-red-500 transition-colors duration-200">
              PAM Rwanda
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-3 py-2 text-sm font-semibold rounded-md transition-colors duration-200 ${
                    isActive
                      ? 'bg-red-500 text-white'
                      : 'text-red-800 hover:bg-red-500 hover:text-white'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            {isAuthenticated ? (
              <div className="flex items-center space-x-3">
                <Link
                  to="/dashboard"
                  className="flex items-center space-x-2 px-3 py-2 text-sm font-semibold text-red-800 hover:text-red-700 transition-colors duration-200"
                >
                  <div className="w-8 h-8 bg-red-700 rounded-full flex items-center justify-center text-white text-xs font-bold border border-red-900">
                    {user?.firstName?.charAt(0).toUpperCase()}
                  </div>
                  <span>{user?.firstName}</span>
                </Link>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 text-sm font-semibold rounded-md border-2 border-red-700 bg-red-700 text-white hover:bg-white hover:text-red-700 transition-colors duration-200"
                >
                  Logout
                </button>
              </div>
            ) : (
              <>
                <Link 
                  to="/login"
                  className="px-4 py-2 text-sm font-semibold text-red-800 border-2 border-red-700 rounded-md hover:bg-red-700 hover:text-white transition-colors duration-200"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="px-4 py-2 text-sm font-semibold rounded-md border-2 border-red-700 bg-red-700 text-white hover:bg-white hover:text-red-700 transition-colors duration-200"
                >
                  Register
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-md text-red-800 border border-red-700 hover:bg-red-700 hover:text-white transition-colors duration-200"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t-2 border-red-700">
          <div className="px-2 pt-2 pb-3 space-y-1 max-w-7xl mx-auto">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-semibold transition-colors duration-200 ${
                    isActive
                      ? 'bg-red-700 text-white'
                      : 'text-red-800 hover:bg-red-700 hover:text-white'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}

            {/* Mobile Auth Section */}
            <div className="border-t border-red-700 pt-3 mt-3 space-y-2">
              {isAuthenticated ? (
                <>
                  <Link
                    to="/dashboard"
                    onClick={() => setMenuOpen(false)}
                    className="block px-3 py-2 text-base font-semibold text-red-800 hover:text-red-700 transition-colors duration-200"
                  >
                    Dashboard ({user?.firstName})
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full px-4 py-2 text-sm font-semibold rounded-md border-2 border-red-700 bg-red-700 text-white hover:bg-white hover:text-red-700 transition-colors duration-200"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    onClick={() => setMenuOpen(false)}
                    className="block px-3 py-2 rounded-md text-base font-semibold text-red-800 border border-red-700 hover:bg-red-700 hover:text-white transition-colors duration-200"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    onClick={() => setMenuOpen(false)}
                    className="block text-center px-4 py-2 text-sm font-semibold rounded-md border-2 border-red-700 bg-red-700 text-white hover:bg-white hover:text-red-700 transition-colors duration-200"
                  >
                    Register
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
