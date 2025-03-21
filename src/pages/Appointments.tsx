// // const Appointments = () => {
// //   return (
// //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
// //       <h1 className="text-3xl font-bold mb-8">My Appointments</h1>
// //       <div className="bg-white shadow-md rounded-lg p-6">
// //         <p className="text-gray-600">Appointments page coming soon...</p>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Appointments;

// import React, { useEffect, useState } from 'react';
// import { supabase } from '../lib/supabase';

// interface Appointment {
//   id: string;
//   doctor_name: string;
//   specialization: string;
//   location: string;
//   consultation_fee: number;
//   status: string;
//   booked_at: string;
// }

// const Appointments = () => {
//   const [appointments, setAppointments] = useState<Appointment[]>([]);

//   useEffect(() => {
//     fetchAppointments();
//   }, []);

//   const fetchAppointments = async () => {
//     try {
//       const user = await supabase.auth.getUser();
//       if (!user || !user.data.user) {
//         return;
//       }

//       const { data, error } = await supabase
//         .from('appointments')
//         .select('*')
//         .eq('user_id', user.data.user.id);

//       if (error) throw error;
//       setAppointments(data);
//     } catch (error) {
//       console.error("Error fetching appointments:", error);
//     }
//   };

//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//       <h1 className="text-3xl font-bold mb-8">My Appointments</h1>
//       <div className="bg-white shadow-md rounded-lg p-6">
//         {appointments.length > 0 ? (
//           <ul>
//             {appointments.map((appointment) => (
//               <li key={appointment.id} className="mb-4 p-4 border rounded">
//                 <p><strong>Doctor:</strong> {appointment.doctor_name}</p>
//                 <p><strong>Specialization:</strong> {appointment.specialization}</p>
//                 <p><strong>Location:</strong> {appointment.location}</p>
//                 <p><strong>Fee:</strong> ${appointment.consultation_fee}</p>
//                 <p><strong>Status:</strong> {appointment.status}</p>
//                 <p><strong>Booked At:</strong> {new Date(appointment.booked_at).toLocaleString()}</p>
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p className="text-gray-600">No appointments booked yet.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Appointments;


import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

interface Appointment {
  id: string;
  doctor_name: string;
  specialization: string;
  location: string;
  consultation_fee: number;
  status: string;
  booked_at: string;
}

const Appointments = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const { data: userData, error: userError } = await supabase.auth.getUser();
      if (userError || !userData?.user) {
        console.error('Authentication error:', userError?.message || 'User not found');
        return;
      }

      const user_id = userData.user.id;

      const { data, error } = await supabase.from('appointments').select('*').eq('user_id', user_id);
      if (error) throw error;

      setAppointments(data);
    } catch (error) {
      console.error('Error fetching appointments:', error);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">My Appointments</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        {appointments.length > 0 ? (
          <ul>
            {appointments.map((appointment) => (
              <li key={appointment.id} className="mb-4 p-4 border rounded">
                <p><strong>Doctor:</strong> {appointment.doctor_name}</p>
                <p><strong>Specialization:</strong> {appointment.specialization}</p>
                <p><strong>Location:</strong> {appointment.location}</p>
                <p><strong>Fee:</strong> ${appointment.consultation_fee}</p>
                <p><strong>Status:</strong> {appointment.status}</p>
                <p><strong>Booked At:</strong> {new Date(appointment.booked_at).toLocaleString()}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">No appointments booked yet.</p>
        )}
      </div>
    </div>
  );
};

export default Appointments;
