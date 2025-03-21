import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Calendar, Video, Phone } from 'lucide-react';

const Home = () => {
  const [showVideoModal, setShowVideoModal] = useState(false);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[600px]"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')"
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Your Health, Our Priority
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl">
              Book appointments with the best doctors, access your medical records,
              and manage your healthcare journey all in one place.
            </p>
            <Link
              to="/doctors"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300"
            >
              Find a Doctor
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link to="/doctors">
              <FeatureCard
                icon={<Search className="h-8 w-8 text-blue-600" />}
                title="Find Doctors"
                description="Search and book appointments with specialized doctors in your area."
              />
            </Link>
            <Link to="/appointments">
              <FeatureCard
                icon={<Calendar className="h-8 w-8 text-blue-600" />}
                title="Online Booking"
                description="Easy and convenient appointment scheduling at your fingertips."
              />
            </Link>
            <button onClick={() => setShowVideoModal(true)}>
              <FeatureCard
                icon={<Video className="h-8 w-8 text-blue-600" />}
                title="Video Consultation"
                description="Connect with doctors remotely through secure video calls."
              />
            </button>
            <a href="tel:911">
              <FeatureCard
                icon={<Phone className="h-8 w-8 text-blue-600" />}
                title="24/7 Support"
                description="Round-the-clock assistance for all your healthcare needs."
              />
            </a>
          </div>
        </div>
      </section>

      {/* Video Consultation Modal */}
      {showVideoModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-lg w-full mx-4">
            <h3 className="text-2xl font-bold mb-4">Video Consultation</h3>
            <p className="text-gray-600 mb-6">
              To schedule a video consultation, please book an appointment with your preferred doctor
              and select "Video Consultation" as the appointment type.
            </p>
            <div className="flex justify-end">
              <button
                onClick={() => setShowVideoModal(false)}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Emergency Section */}
      <section className="bg-red-600 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-white mb-4 md:mb-0">
              <h3 className="text-2xl font-bold">Emergency? Need Help Now?</h3>
              <p className="text-lg">Our emergency line is available 24/7</p>
            </div>
            <div className="flex space-x-4">
              <a
                href="tel:911"
                className="bg-white text-red-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
              >
                Call Emergency
              </a>
              <Link
                to="/emergency"
                className="border-2 border-white text-white px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-lg transition duration-300">
    <div className="flex justify-center mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default Home;