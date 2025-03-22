import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Heart, Menu, X, LogOut, User } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut();
      navigate('/'); // redirect to home after logout
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <Heart className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">HealthCare</span>
            </Link>
          </div>

          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            <Link to="/doctors" className="text-gray-600 hover:text-blue-600">
              Find Doctors
            </Link>
            <Link to="/appointments" className="text-gray-600 hover:text-blue-600">
              Appointments
            </Link>

            {user ? (
              <>
                <Link
                  to="/dashboard"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white font-bold text-lg"
                >
                  {user.email.slice(0, 2).toUpperCase()}
                </Link>
                <button
                  onClick={handleLogout}
                  className="text-gray-600 hover:text-blue-600"
                >
                  <LogOut className="h-6 w-6" />
                </button>
              </>
            ) : (
              <Link to="/login" className="flex items-center text-gray-600 hover:text-blue-600">
                <User className="h-5 w-5 mr-1" />
                Login
              </Link>
            )}
          </div>

          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-blue-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
