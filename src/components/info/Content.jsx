import { useUserStore } from "../../store/User";
import { DivContent, DivInfo, Imagem, Paragraph, Title } from "./ContentStyles";



function Content() {
    const { user } = useUserStore(state => state);
   
    return (
      <>    
            
            <DivContent>
                <Imagem src="https://github.com/cecidoliveira.png" alt="icone de perfil" />
                
                <DivInfo>
                    <Title>{user}</Title>
                    <Paragraph>@{user}</Paragraph>
                    <br/>
                    <Paragraph>descrição</Paragraph>
                </DivInfo>

            </DivContent>

            <DivContent>
                <Title>Repositorios</Title>
            </DivContent>

      </>
    )
  }
  
  export default Content;
  