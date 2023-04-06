import { DivContentNF, Paragraph, Title } from "./ContentStyles";
import img from '../../assets/gitfind_NF.svg'

function ContentNF() {
    
    return (
      <DivContentNF> 
        <img src={img} alt="" />   
        <Title>GitHub não encontrado</Title>
        <Paragraph>Verifique se o nome do usuario da busca foi digitado corretamente.</Paragraph>
      </DivContentNF>
    )
  }
  
  export default ContentNF;
  