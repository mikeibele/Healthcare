// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Heart, Phone, Mail, MapPin } from 'lucide-react';

// const Footer = () => {
//   return (
//     <footer className="bg-gray-900 text-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//           {/* Brand */}
//           <div>
//             <div className="flex items-center mb-4">
//               <Heart className="h-8 w-8 text-blue-500" />
//               <span className="ml-2 text-xl font-bold">HealthCare</span>
//             </div>
//             <p className="text-gray-400">
//               Providing quality healthcare services and innovative solutions for a healthier tomorrow.
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
//             <ul className="space-y-2">
//               <li>
//                 <Link to="/about" className="text-gray-400 hover:text-white">
//                   About Us
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/services" className="text-gray-400 hover:text-white">
//                   Our Services
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/doctors" className="text-gray-400 hover:text-white">
//                   Find Doctors
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/appointments" className="text-gray-400 hover:text-white">
//                   Book Appointment
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
//             <ul className="space-y-2">
//               <li className="flex items-center">
//                 <Phone className="h-5 w-5 mr-2 text-blue-500" />
//                 <span className="text-gray-400">+1 (555) 123-4567</span>
//               </li>
//               <li className="flex items-center">
//                 <Mail className="h-5 w-5 mr-2 text-blue-500" />
//                 <span className="text-gray-400">contact@healthcare.com</span>
//               </li>
//               <li className="flex items-center">
//                 <MapPin className="h-5 w-5 mr-2 text-blue-500" />
//                 <span className="text-gray-400">123 Medical Center Dr, City, State</span>
//               </li>
//             </ul>
//           </div>

//           {/* Emergency */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Emergency</h3>
//             <div className="bg-red-600 p-4 rounded-lg">
//               <p className="font-bold mb-2">24/7 Emergency Line</p>
//               <a href="tel:+2348154021780" className="text-2xl font-bold hover:text-gray-200">
//                 +2348154021780
//               </a>
//             </div>
//           </div>
//         </div>

//         <div className="border-t border-gray-800 mt-8 pt-8 text-center">
//           <p className="text-gray-400">
//             © {new Date().getFullYear()} HealthCare. All rights reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center mb-4">
              <Heart className="h-8 w-8 text-blue-500" />
              <span className="ml-2 text-xl font-bold">HealthCare</span>
            </div>
            <p className="text-gray-400">
              Providing quality healthcare services and innovative solutions for a healthier tomorrow.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/doctors" className="text-gray-400 hover:text-white">
                  Find Doctors
                </Link>
              </li>
              <li>
                <Link to="/appointments" className="text-gray-400 hover:text-white">
                  Book Appointment
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-blue-500" />
                <a href="tel:+2348154021780" className="text-gray-400 hover:text-white">
                  +2348154021780
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-blue-500" />
                <a href="mailto:kingkenamu@gmail.com" className="text-gray-400 hover:text-white">
                  kingkenamu@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-blue-500" />
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=123+Medical+Center+Dr,+City,+State" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-white"
                >
                  123 Medical Center Dr, City, State
                </a>
              </li>
            </ul>
          </div>

          {/* Emergency */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Emergency</h3>
            <div className="bg-red-600 p-4 rounded-lg">
              <p className="font-bold mb-2">24/7 Emergency Line</p>
              <a href="tel:+2348154021780" className="text-2xl font-bold hover:text-gray-200">
                +2348154021780
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} HealthCare. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

