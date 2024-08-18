import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://ciactrgalirstcupusif.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNpYWN0cmdhbGlyc3RjdXB1c2lmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjEyOTAzMTQsImV4cCI6MjAzNjg2NjMxNH0.nTKLmsCsp39Q366esHJXBRC2RtfJBX-nn_J8ldsIl14";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
