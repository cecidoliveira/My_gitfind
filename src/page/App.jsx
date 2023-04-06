import Header from '../components/header/Header'
import img from '../assets/github_img.svg'
import { DivContent, DivHome, Imagem } from './homeStyles'
import Search from '../components/search/Search'


function App() {
  
  return (
    <div className="App">
      <Header/>

      <DivHome>

        <Imagem src={img} alt="logo_github" />

        <DivContent>
          <Search/>
        </DivContent>
        
      </DivHome>
    </div>
  )
}

export default App
