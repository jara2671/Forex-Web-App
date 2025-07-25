import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useAuth } from '../contexts/AuthContext';
import AuthModal from './auth/AuthModal';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');
  const { user, signOut } = useAuth();

  const handleAuthClick = (mode: 'signin' | 'signup') => {
    setAuthMode(mode);
    setIsAuthModalOpen(true);
  };

  return (
    <>
      <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="text-2xl font-bold text-etoro-green">eToro</div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-etoro-green transition-colors">Trade</a>
            <a href="#" className="text-gray-700 hover:text-etoro-green transition-colors">Invest</a>
            <a href="#" className="text-gray-700 hover:text-etoro-green transition-colors">Copy Trading</a>
            <a href="#" className="text-gray-700 hover:text-etoro-green transition-colors">Markets</a>
            <a href="#" className="text-gray-700 hover:text-etoro-green transition-colors">News & Analysis</a>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-4">
                <Link to="/dashboard" className="text-gray-700 hover:text-etoro-green transition-colors">
                  Dashboard
                </Link>
                <button 
                  onClick={signOut}
                  className="text-gray-700 hover:text-etoro-green transition-colors"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <>
                <button 
                  onClick={() => handleAuthClick('signin')}
                  className="text-gray-700 hover:text-etoro-green transition-colors"
                >
                  Log In
                </button>
                <button 
                  onClick={() => handleAuthClick('signup')}
                  className="btn-primary"
                >
                  Join Now
                </button>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-etoro-green"
            >
              {isMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-etoro-green">Trade</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-etoro-green">Invest</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-etoro-green">Copy Trading</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-etoro-green">Markets</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-etoro-green">News & Analysis</a>
              <div className="pt-4 space-y-2">
                {user ? (
                  <>
                    <Link to="/dashboard" className="block w-full text-left px-3 py-2 text-gray-700">
                      Dashboard
                    </Link>
                    <button 
                      onClick={signOut}
                      className="block w-full text-left px-3 py-2 text-gray-700"
                    >
                      Sign Out
                    </button>
                  </>
                ) : (
                  <>
                    <button 
                      onClick={() => handleAuthClick('signin')}
                      className="block w-full text-left px-3 py-2 text-gray-700"
                    >
                      Log In
                    </button>
                    <button 
                      onClick={() => handleAuthClick('signup')}
                      className="block btn-primary text-center"
                    >
                      Join Now
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
    
    <AuthModal 
      isOpen={isAuthModalOpen}
      onClose={() => setIsAuthModalOpen(false)}
      initialMode={authMode}
    />
    </>
  );
};

export default Header;