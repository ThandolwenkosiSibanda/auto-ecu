

import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
export const supabase = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL || "https://kgwvpwawyyigpkbqyaog.supabase.co",
  process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtnd3Zwd2F3eXlpZ3BrYnF5YW9nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk3OTczNTcsImV4cCI6MjA1NTM3MzM1N30.nadYGUfi-N_WgZvwJLb8K7AM85sQWe0V76ZkGYMeWJs")
        