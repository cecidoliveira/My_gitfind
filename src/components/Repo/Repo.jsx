import ItemList from "./ItemLst";
import { DivList, DivRepo, DivTitleRepo, Paragraph, Title } from "./RepoStyles";
import { useUserStore } from "../../store/User";


function Repo() {
  const { numrepo } = useUserStore(state => state);

    return (
    <DivRepo>
          <DivTitleRepo>
            <Title>Repositórios</Title>
            <Paragraph>{numrepo}</Paragraph>
          </DivTitleRepo>

            <DivList>
              <ItemList/>
            </DivList>
    </DivRepo>
    )
  }
  
  export default Repo;