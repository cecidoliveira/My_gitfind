import create from 'zustand'

export const useUserStore = create((set) =>({
    user: 'usuario',

    buscarUser: (busca) =>set((state) =>({
        user: busca
    })),
    
}))