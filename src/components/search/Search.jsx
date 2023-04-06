import { useState } from "react";
import { useUserStore } from "../../store/User";
import { Input_button, Input_text } from "./SearchStyles";
import Content from '../info/Content'
import ContentNF from '../info/ContentNF'

function Search() {
    const [isBusca, setBusca] = useState('');
    const [isNotfound, setNotfound] = useState('');
    const { buscarUser } = useUserStore(state => state);

    function handleVerificaUser(){
        buscarUser(isBusca)
        
        fetch(`https://api.github.com/users/${isBusca}`)
          .then(response=> response.json())
          .then(data => {
            const message = data.message;
            setNotfound(message)
          })
          .catch(error => console.error(error));
    } 

    return (
      <>
        <Input_text type="text" placeholder="@usuario" onChange={(event) => setBusca(event.target.value)}/>
        <Input_button type="button" value="Buscar" onClick={handleVerificaUser}/>
        {isNotfound === 'Not Found' ? <ContentNF/> : isNotfound === undefined ? <Content/> : null} 
      </>
    )
  }
  
  export default Search;
  