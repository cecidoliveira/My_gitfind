import { useState } from "react";
import { Input_button, Input_text } from "./SearchStyles";
import { useUserStore } from "../../store/User";



function Search() {

    const [isUsuario, setUsuario] = useState('');
    const { NFbusca, buscaUsuario, buscaNome, buscaImagem, buscaNumRepo, buscaDescricao} = useUserStore(state => state);

      async function GetInfo() {
  
        await fetch(`https://api.github.com/users/${isUsuario}`)
                .then(response=> response.json())
                .then(data => {
          
                if(data.message == 'Not Found'){
                  console.log('usuario não encontrado')
                  NFbusca('not found')
                }
              
                else{
                    buscaUsuario(isUsuario)
                    buscaNome(data.name)
                    buscaImagem(data.avatar_url)
                    buscaNumRepo(data.public_repos)
                    buscaDescricao(data.bio)
                    NFbusca('found')
                }  
      })
      .catch(error => console.error(error));
   }

    return (
      <>
        <Input_text type="text" placeholder="@usuario" onChange={(event) => setUsuario(event.target.value)}/>
        <Input_button type="button" value="Buscar" onClick={()=> GetInfo()}/>
        
      </>
    )
  }
  
  export default Search;
  