import { createClient } from "@supabase/supabase-js";

const supabaseUrl : any = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey: any = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

const supabase = createClient(supabaseUrl, supabaseAnonKey)

export default supabase