// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Heart, Menu, X, User } from 'lucide-react';

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = React.useState(false);

//   return (
//     <nav className="bg-white shadow-lg">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16">
//           <div className="flex">
//             <Link to="/" className="flex-shrink-0 flex items-center">
//               <Heart className="h-8 w-8 text-blue-600" />
//               <span className="ml-2 text-xl font-bold text-gray-800">HealthCare</span>
//             </Link>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden sm:flex sm:items-center sm:space-x-8">
//             <Link to="/doctors" className="text-gray-600 hover:text-blue-600">Find Doctors</Link>
//             <Link to="/appointments" className="text-gray-600 hover:text-blue-600">Appointments</Link>
//             <Link to="/dashboard" className="text-gray-600 hover:text-blue-600">Dashboard</Link>
//             <Link to="/login" className="flex items-center text-gray-600 hover:text-blue-600">
//               <User className="h-5 w-5 mr-1" />
//               Login
//             </Link>
//           </div>

//           {/* Mobile menu button */}
//           <div className="sm:hidden flex items-center">
//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="text-gray-600 hover:text-blue-600"
//             >
//               {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Navigation */}
//       {isMenuOpen && (
//         <div className="sm:hidden">
//           <div className="pt-2 pb-3 space-y-1">
//             <Link
//               to="/doctors"
//               className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600"
//             >
//               Find Doctors
//             </Link>
//             <Link
//               to="/appointments"
//               className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600"
//             >
//               Appointments
//             </Link>
//             <Link
//               to="/dashboard"
//               className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600"
//             >
//               Dashboard
//             </Link>
//             <Link
//               to="/login"
//               className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600"
//             >
//               Login
//             </Link>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Heart, Menu, X, User } from 'lucide-react';
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

          {/* Desktop Navigation */}
          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            <Link to="/doctors" className="text-gray-600 hover:text-blue-600">
              Find Doctors
            </Link>
            <Link to="/appointments" className="text-gray-600 hover:text-blue-600">
              Appointments
            </Link>
           
            {user ? (
              <>
                <Link to="/dashboard" className="text-gray-600 hover:text-blue-600">
                  {user.email}
                </Link>
                <button
                  onClick={handleLogout}
                  className="text-gray-600 hover:text-blue-600"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="flex items-center text-gray-600 hover:text-blue-600">
                  <User className="h-5 w-5 mr-1" />
                  Login
                </Link>
               
              </>
            )}
          </div>

          {/* Mobile menu button */}
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

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link
              to="/doctors"
              className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600"
            >
              Find Doctors
            </Link>
            <Link
              to="/appointments"
              className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600"
            >
              Appointments
            </Link>
            <Link
              to="/dashboard"
              className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600"
            >
              Dashboard
            </Link>
            {user ? (
              <>
                <Link
                  to="/dashboard"
                  className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600"
                >
                  {user.email}
                </Link>
                <button
                  onClick={handleLogout}
                  className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
