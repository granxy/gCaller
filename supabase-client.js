import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
export const supabase = createClient(
  'https://vwjwuvoljtymfwuwztto.supabase.co',
  'sb_publishable_E4H5CUbyjfBO870oBCRy4w_bXmtZPRD',
  { auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true } }
);
