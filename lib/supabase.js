import 'react-native-url-polyfill/auto'
import * as SecureStore from 'expo-secure-store'
import { createClient } from '@supabase/supabase-js'

const ExpoSecureStoreAdapter = {
  getItem: (key) => {
    return SecureStore.getItemAsync(key)
  },
  setItem: (key, value) => {
    SecureStore.setItemAsync(key, value)
  },
  removeItem: (key) => {
    SecureStore.deleteItemAsync(key)
  },
}

const supabaseUrl = "https://mqeikorufqcarucjgtjy.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1xZWlrb3J1ZnFjYXJ1Y2pndGp5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODc4NjA1MTQsImV4cCI6MjAwMzQzNjUxNH0.kqOv-I5YjrkhpfrIcRCZaVrL_rUjNPH3gnoOT7-HqEA"
const supabaseServiceRole = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1xZWlrb3J1ZnFjYXJ1Y2pndGp5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4Nzg2MDUxNCwiZXhwIjoyMDAzNDM2NTE0fQ.m8deCp0Yb5QtuOr1kr0FDTS2Hqk6cZ3BHFYIgNGIk6c"

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: ExpoSecureStoreAdapter,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})

const adminClient = createClient(supabaseUrl, supabaseServiceRole, {
  auth: {
    storage: ExpoSecureStoreAdapter,
    autoRefreshToken: false,
    persistSession: true
  }
})

export const supabaseAdmin = adminClient.auth.admin