import { useUserStore } from "../../store/User";
import Repo from "../Repo/Repo";
import { DivContent, DivContentNF, DivInfo, Imagem, Paragraph, Title } from "./ContentStyles";
import img from '../../assets/gitfind_NF.svg'


function Content() {
    const { user, nome, descricao, imagem, informacao} = useUserStore(state => state);

    if(informacao == 'not found'){
      return (
        <DivContentNF> 
          <img src={img} alt="" />   
          <Title>GitHub não encontrado</Title>
          <Paragraph>Verifique se o nome do usuario da busca foi digitado corretamente.</Paragraph>
        </DivContentNF>
      )
    }
    
    else{
      return (
        <>    
          <DivContent>
                <Imagem src={imagem} alt="icone de perfil" />
              
                <DivInfo>
                    <Title>{nome}</Title>
                    <Paragraph>@{user}</Paragraph>
                    <br/>
                    <Paragraph>{descricao}</Paragraph>
                </DivInfo>
            </DivContent>
            
            <Repo/> 
        </>
        )
      }
  }
  
  export default Content;
  