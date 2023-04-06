import { useState } from "react";
import { Input_button, Input_text } from "./SearchStyles";
import { useUserStore } from "../../store/User";
import Content from "../info/Content";


function Search() {

    const [isUsuario, setUsuario] = useState('');
    const { resultBuscas, NFbusca } = useUserStore(state => state);

    function GetInfo() {
  
      fetch(`https://api.github.com/users/${isUsuario}`)
      .then(response=> response.json())
      .then(data => {
        
          if(data.message == 'Not Found'){
            console.log('usuario não encontrado')
            NFbusca()
          }
        
          else{
              const nome = data.name;
              const imagem = data.avatar_url;
              const numrepo = data.public_repos;
              const bio = data.bio;
              
              resultBuscas([isUsuario, nome, numrepo, bio, imagem])
              
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
  