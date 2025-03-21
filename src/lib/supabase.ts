import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || supabaseUrl === 'your-project-url') {
  throw new Error(
    'Please click the "Connect to Supabase" button in the top right corner to configure your Supabase project.'
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);