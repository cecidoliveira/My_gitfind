import Header from '../components/header/Header'
import img from '../assets/github_img.svg'
import { DivContent, DivHome, Imagem } from './homeStyles'
import Search from '../components/search/Search'
import Content from '../components/section/Content'
import ContentNF from '../components/section/ContentNF'

function App() {
  
  return (
    <div className="App">
      <Header/>

      <DivHome>

        <Imagem src={img} alt="logo_github" />

        <DivContent>
          <Search/>

          {/*<Content/>
          <ContentNF/> */}
        </DivContent>
        
      </DivHome>
    </div>
  )
}

export default App
