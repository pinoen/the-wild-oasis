
import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = 'https://xvcjrmdztxtrrudzavok.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh2Y2pybWR6dHh0cnJ1ZHphdm9rIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTAxMjU1NDYsImV4cCI6MjAwNTcwMTU0Nn0.5qWseqnU9VEuGYJ70JO8fCQhpLg96fsa3Cypivpjp80'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase