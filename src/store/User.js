import {create} from 'zustand'


export const useUserStore = create((set) =>({
    user: '',

    buscaUsuario: (busca) => set((state) =>({
        user: busca,      
    })),

    nome: '',

    buscaNome: (busca) => set((state) =>({
        nome: busca,      
    })),

    numrepo: 0,

    buscaNumRepo: (busca) => set((state) =>({
        numrepo: busca,      
    })),


    descricao: '',

    buscaDescricao: (busca) => set((state) =>({
        descricao: busca,      
    })),


    imagem: '',

    buscaImagem: (busca) => set((state) =>({
        imagem: busca,      
    })),


    informacao: '',

    NFbusca: (status) => set((state) =>({
        informacao: status,
    })),
    
}))