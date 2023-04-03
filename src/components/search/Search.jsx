import { Input_button, Input_text } from "./SearchStyles";

function Search() {

    return (
      <>
        <Input_text type="text" placeholder="@usuario"/>
        <Input_button type="button" value="Buscar" />
      </>
    )
  }
  
  export default Search;
  