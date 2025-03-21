// import React, { useState, useEffect } from 'react';
// import { supabase } from '../lib/supabase';
// import { Search, MapPin, Calendar } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';

// interface Doctor {
//   id: string;
//   name: string;
//   specialization: string;
//   location: string;
//   experience: number;
//   rating: number;
//   image_url: string;
//   consultation_fee: number;
//   available_slots: string[];
// }

// const DoctorSearch = () => {
//   const [doctors, setDoctors] = useState<Doctor[]>([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [specialization, setSpecialization] = useState('');
//   const [location, setLocation] = useState('');
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchDoctors();
//   }, []);

//   const fetchDoctors = async () => {
//     try {
//       const { data, error } = await supabase
//         .from('doctors')
//         .select('*');
      
//       if (error) throw error;
//       if (data) setDoctors(data);
//     } catch (error) {
//       console.error('Error fetching doctors:', error);
//     }
//   };

//   const filteredDoctors = doctors.filter(doctor => {
//     const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       doctor.specialization.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesSpecialization = !specialization || doctor.specialization === specialization;
//     const matchesLocation = !location || doctor.location === location;
//     return matchesSearch && matchesSpecialization && matchesLocation;
//   });

//   const specializations = [...new Set(doctors.map(d => d.specialization))];
//   const locations = [...new Set(doctors.map(d => d.location))];

//   const handleBookAppointment = (doctorId: string) => {
//     navigate(`/appointments/book/${doctorId}`);
//   };

//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//       <div className="mb-8">
//         <h1 className="text-3xl font-bold mb-6">Find a Doctor</h1>
        
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
//           <div className="relative">
//             <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//             <input
//               type="text"
//               placeholder="Search doctors..."
//               className="pl-10 w-full p-2 border border-gray-300 rounded-lg"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//           </div>
          
//           <select
//             className="p-2 border border-gray-300 rounded-lg"
//             value={specialization}
//             onChange={(e) => setSpecialization(e.target.value)}
//           >
//             <option value="">All Specializations</option>
//             {specializations.map(spec => (
//               <option key={spec} value={spec}>{spec}</option>
//             ))}
//           </select>
          
//           <select
//             className="p-2 border border-gray-300 rounded-lg"
//             value={location}
//             onChange={(e) => setLocation(e.target.value)}
//           >
//             <option value="">All Locations</option>
//             {locations.map(loc => (
//               <option key={loc} value={loc}>{loc}</option>
//             ))}
//           </select>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {filteredDoctors.map(doctor => (
//           <div key={doctor.id} className="bg-white rounded-lg shadow-md overflow-hidden">
//             <img
//               src={doctor.image_url}
//               alt={doctor.name}
//               className="w-full h-48 object-cover"
//             />
//             <div className="p-6">
//               <h3 className="text-xl font-semibold mb-2">{doctor.name}</h3>
//               <p className="text-blue-600 mb-2">{doctor.specialization}</p>
              
//               <div className="flex items-center text-gray-600 mb-2">
//                 <MapPin className="h-4 w-4 mr-2" />
//                 <span>{doctor.location}</span>
//               </div>
              
//               <div className="flex items-center text-gray-600 mb-4">
//                 <Calendar className="h-4 w-4 mr-2" />
//                 <span>{doctor.available_slots.length} slots available</span>
//               </div>
              
//               <div className="flex items-center justify-between">
//                 <span className="text-lg font-semibold">${doctor.consultation_fee}</span>
//                 <button
//                   onClick={() => handleBookAppointment(doctor.id)}
//                   className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
//                 >
//                   Book Appointment
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default DoctorSearch; 

// import React, { useState, useEffect } from 'react';
// import { supabase } from '../lib/supabase';
// import { Search, MapPin, Calendar } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';

// interface Doctor {
//   id: string;
//   name: string;
//   specialization: string;
//   location: string;
//   experience: number;
//   rating: number;
//   image_url: string;
//   consultation_fee: number;
//   available_slots: string[];
// }

// const DoctorSearch = () => {
//   const [doctors, setDoctors] = useState<Doctor[]>([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [specialization, setSpecialization] = useState('');
//   const [location, setLocation] = useState('');
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchDoctors();
//   }, []);

//   const fetchDoctors = async () => {
//     try {
//       const { data, error } = await supabase.from('doctors').select('*');
//       if (error) throw error;
//       if (data) setDoctors(data);
//     } catch (error) {
//       console.error('Error fetching doctors:', error);
//     }
//   };

//   const filteredDoctors = doctors.filter(doctor => {
//     const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       doctor.specialization.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesSpecialization = !specialization || doctor.specialization === specialization;
//     const matchesLocation = !location || doctor.location === location;
//     return matchesSearch && matchesSpecialization && matchesLocation;
//   });

//   const specializations = [...new Set(doctors.map(d => d.specialization))];
//   const locations = [...new Set(doctors.map(d => d.location))];

//   const handleBookAppointment = async (doctor: Doctor) => {
//     try {
//       const user = await supabase.auth.getUser();
//       if (!user || !user.data.user) {
//         alert('You need to be logged in to book an appointment.');
//         return;
//       }

//       const { data, error } = await supabase
//         .from('appointments')
//         .insert([
//           {
//             user_id: user.data.user.id,
//             doctor_id: doctor.id,
//             doctor_name: doctor.name,
//             specialization: doctor.specialization,
//             location: doctor.location,
//             consultation_fee: doctor.consultation_fee,
//             status: 'pending',
//             booked_at: new Date(),
//           }
//         ]);

//       if (error) throw error;

//       alert('Appointment booked successfully!');
//       navigate('/appointments');
//     } catch (error) {
//       console.error('Error booking appointment:', error);
//       alert('Failed to book appointment. Please try again.');
//     }
//   };

//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//       <div className="mb-8">
//         <h1 className="text-3xl font-bold mb-6">Find a Doctor</h1>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
//           <div className="relative">
//             <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//             <input
//               type="text"
//               placeholder="Search doctors..."
//               className="pl-10 w-full p-2 border border-gray-300 rounded-lg"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//           </div>

//           <select
//             className="p-2 border border-gray-300 rounded-lg"
//             value={specialization}
//             onChange={(e) => setSpecialization(e.target.value)}
//           >
//             <option value="">All Specializations</option>
//             {specializations.map(spec => (
//               <option key={spec} value={spec}>{spec}</option>
//             ))}
//           </select>

//           <select
//             className="p-2 border border-gray-300 rounded-lg"
//             value={location}
//             onChange={(e) => setLocation(e.target.value)}
//           >
//             <option value="">All Locations</option>
//             {locations.map(loc => (
//               <option key={loc} value={loc}>{loc}</option>
//             ))}
//           </select>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {filteredDoctors.map(doctor => (
//           <div key={doctor.id} className="bg-white rounded-lg shadow-md overflow-hidden">
//             <img src={doctor.image_url} alt={doctor.name} className="w-full h-48 object-cover" />
//             <div className="p-6">
//               <h3 className="text-xl font-semibold mb-2">{doctor.name}</h3>
//               <p className="text-blue-600 mb-2">{doctor.specialization}</p>

//               <div className="flex items-center text-gray-600 mb-2">
//                 <MapPin className="h-4 w-4 mr-2" />
//                 <span>{doctor.location}</span>
//               </div>

//               <div className="flex items-center text-gray-600 mb-4">
//                 <Calendar className="h-4 w-4 mr-2" />
//                 <span>{doctor.available_slots.length} slots available</span>
//               </div>

//               <div className="flex items-center justify-between">
//                 <span className="text-lg font-semibold">${doctor.consultation_fee}</span>
//                 <button
//                   onClick={() => handleBookAppointment(doctor)}
//                   className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
//                 >
//                   Book Appointment
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default DoctorSearch;



import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { Search, MapPin, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Doctor {
  id: string;
  name: string;
  specialization: string;
  location: string;
  experience: number;
  rating: number;
  image_url: string;
  consultation_fee: number;
  available_slots: string[];
}

const DoctorSearch = () => {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [location, setLocation] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = async () => {
    try {
      const { data, error } = await supabase.from('doctors').select('*');
      if (error) throw error;
      if (data) setDoctors(data);
    } catch (error) {
      console.error('Error fetching doctors:', error);
    }
  };

  const filteredDoctors = doctors.filter((doctor) => {
    const matchesSearch =
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.specialization.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialization = !specialization || doctor.specialization === specialization;
    const matchesLocation = !location || doctor.location === location;
    return matchesSearch && matchesSpecialization && matchesLocation;
  });

  const handleBookAppointment = async (doctor: Doctor) => {
    try {
      const { data: userData, error: userError } = await supabase.auth.getUser();
      if (userError || !userData || !userData.user) {
        alert('Authentication failed. Please log in.');
        return;
      }

      const user_id = userData.user.id;

      const appointmentData = {
        user_id,
        doctor_id: doctor.id,
        doctor_name: doctor.name,
        specialization: doctor.specialization,
        location: doctor.location,
        consultation_fee: doctor.consultation_fee,
        status: 'pending',
        booked_at: new Date().toISOString(),
      };

      const { error: insertError } = await supabase.from('appointments').insert([appointmentData]);

      if (insertError) throw insertError;

      alert('Appointment booked successfully!');
      navigate('/appointments');
    } catch (error: any) {
      console.error('Error booking appointment:', error.message || error);
      alert(`Failed to book appointment: ${error.message || 'Please try again.'}`);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-6">Find a Doctor</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search doctors..."
            className="pl-10 w-full p-2 border border-gray-300 rounded-lg"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <select
          className="p-2 border border-gray-300 rounded-lg"
          value={specialization}
          onChange={(e) => setSpecialization(e.target.value)}
        >
          <option value="">All Specializations</option>
          {[...new Set(doctors.map((d) => d.specialization))].map((spec) => (
            <option key={spec} value={spec}>
              {spec}
            </option>
          ))}
        </select>

        <select
          className="p-2 border border-gray-300 rounded-lg"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        >
          <option value="">All Locations</option>
          {[...new Set(doctors.map((d) => d.location))].map((loc) => (
            <option key={loc} value={loc}>
              {loc}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDoctors.map((doctor) => (
          <div key={doctor.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={doctor.image_url} alt={doctor.name} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{doctor.name}</h3>
              <p className="text-blue-600 mb-2">{doctor.specialization}</p>

              <div className="flex items-center text-gray-600 mb-2">
                <MapPin className="h-4 w-4 mr-2" />
                <span>{doctor.location}</span>
              </div>

              <div className="flex items-center text-gray-600 mb-4">
                <Calendar className="h-4 w-4 mr-2" />
                <span>{doctor.available_slots.length} slots available</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold">${doctor.consultation_fee}</span>
                <button
                  onClick={() => handleBookAppointment(doctor)}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
                >
                  Book Appointment
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorSearch;
