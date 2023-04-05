import { DivHeader, Imagem, Title } from "./HeaderStyles"
import img from '../../assets/gitfind_logo.svg'

function Header() {

  return (
    <DivHeader>
        <Imagem src={img}alt="logo" />
        <Title>GitFind</Title>
    </DivHeader>
  )
}

export default Header
