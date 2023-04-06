import ItemList from "./ItemLst";
import { DivList, DivRepo, Title } from "./RepoStyles";

function Repo() {
   
    return (
    <DivRepo>
          <Title>Repositórios</Title>

            <DivList>
                <ItemList/>
            </DivList>
    </DivRepo>
    )
  }
  
  export default Repo;