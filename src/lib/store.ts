import {create} from 'zustand'
import {persist} from 'zustand/middleware'
import {User} from '@supabase/supabase-js'

interface UserStore {
    user: User | null
    setUser: (user: User| null) => void
}

export const useUserStore = create<UserStore>((set)=>({
    user: null,
    setUser: (user: User | null) => set({user})
}))
