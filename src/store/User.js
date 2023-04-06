import {create} from 'zustand'


export const useUserStore = create((set) =>({
    user: '',
    nome: '',
    numrepo: 0,
    bio: '',
    imagem: '',
    informacao: '',


    resultBuscas: (busca) => set((state) =>({
        user: busca[0],
        nome: busca[1],
        numrepo: busca[2],
        bio: busca[3],
        imagem: busca[4],
        informacao: 'found'
    })),
    
    NFbusca: (busca) => set((state) =>({
        informacao: 'not found'
    })),
    
}))