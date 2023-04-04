import create from 'zustand'

export const useUserStore = create((set) =>({
    user: '',

    buscarUser: (busca) => set((state) =>({
        user: busca
    })),
    
}))