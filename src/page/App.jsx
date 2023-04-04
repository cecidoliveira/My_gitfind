import Header from '../components/header/header'
import img from '../assets/github_img.svg'
import { DivContent, DivHome, Imagem } from './homeStyles'
import Search from '../components/search/Search'
import Content from '../components/section/Content'

function App() {

  return (
    <div className="App">
      <Header/>

      <DivHome>

        <Imagem src={img} alt="logo_github" />

        <DivContent>
          <Search/>
          <Content/>
        </DivContent>
        
      </DivHome>
    </div>
  )
}

export default App
