/*
  # Hospital Management System Schema

  1. New Tables
    - `doctors`
      - Basic doctor information
      - Credentials and availability
    - `appointments`
      - Appointment scheduling
      - Status tracking
      - Payment information

  2. Security
    - Enable RLS on all tables
    - Policies for authenticated users
*/

-- Create doctors table
CREATE TABLE IF NOT EXISTS doctors (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  specialization text NOT NULL,
  location text NOT NULL,
  experience integer NOT NULL,
  rating numeric(2,1) NOT NULL DEFAULT 0.0,
  image_url text NOT NULL,
  consultation_fee numeric(10,2) NOT NULL,
  available_slots text[] NOT NULL DEFAULT '{}',
  created_at timestamptz DEFAULT now()
);

-- Create appointments table
CREATE TABLE IF NOT EXISTS appointments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  patient_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  doctor_id uuid REFERENCES doctors(id) ON DELETE CASCADE,
  appointment_date timestamptz NOT NULL,
  status text NOT NULL DEFAULT 'upcoming',
  consultation_fee numeric(10,2) NOT NULL,
  created_at timestamptz DEFAULT now(),
  CONSTRAINT valid_status CHECK (status IN ('upcoming', 'completed', 'cancelled'))
);

-- Enable RLS
ALTER TABLE doctors ENABLE ROW LEVEL SECURITY;
ALTER TABLE appointments ENABLE ROW LEVEL SECURITY;

-- Policies for doctors table
CREATE POLICY "Anyone can view doctors"
  ON doctors
  FOR SELECT
  TO public
  USING (true);

-- Policies for appointments table
CREATE POLICY "Patients can view their own appointments"
  ON appointments
  FOR SELECT
  TO authenticated
  USING (auth.uid() = patient_id);

CREATE POLICY "Patients can create appointments"
  ON appointments
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = patient_id);

-- Insert sample doctors
INSERT INTO doctors (name, specialization, location, experience, rating, image_url, consultation_fee, available_slots) VALUES
('Dr. Sarah Johnson', 'Cardiology', 'New York', 15, 4.8, 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800', 150.00, ARRAY['2025-03-15 09:00:00', '2025-03-15 10:00:00', '2025-03-15 11:00:00']),
('Dr. Michael Chen', 'Neurology', 'Los Angeles', 12, 4.7, 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=800', 180.00, ARRAY['2025-03-16 14:00:00', '2025-03-16 15:00:00', '2025-03-16 16:00:00']),
('Dr. Emily Brown', 'Pediatrics', 'Chicago', 8, 4.9, 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=800', 120.00, ARRAY['2025-03-17 11:00:00', '2025-03-17 13:00:00', '2025-03-17 15:00:00']);