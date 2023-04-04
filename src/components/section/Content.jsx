import { useUserStore } from "../../store/User";
import { DivContent, DivInfo, Imagem, Paragraph, Title } from "./ContentStyles";


function Content() {
    const { user } = useUserStore(state => state);

    // const handleGetData = async () =>{
    //     let buser = await fetch(`https://api.github.com/users/cecidoliveira`)
    //     console.log(buser)
    // } 
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
  