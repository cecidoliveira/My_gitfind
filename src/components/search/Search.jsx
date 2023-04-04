import { useState } from "react";
import { useUserStore } from "../../store/User";
import { Input_button, Input_text } from "./SearchStyles";

function Search() {
    const [isBusca, setBusca] = useState('');
    const { buscarUser } = useUserStore(state => state);

    return (
      <>
        <Input_text type="text" placeholder="@usuario" onChange={(event) => setBusca(event.target.value)}/>
        <Input_button type="button" value="Buscar" onClick={()=> buscarUser(isBusca)}/>
      </>
    )
  }
  
  export default Search;
  