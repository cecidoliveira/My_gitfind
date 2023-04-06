import Header from '../components/header/Header'
import img from '../assets/github_img.svg'
import { DivContent, DivHome, Imagem } from './homeStyles'
import Search from '../components/search/Search'
import Content from '../components/info/Content'
import { useUserStore } from '../store/User'



function App() {
  const { informacao } = useUserStore(state => state);

  return (
    <div className="App">
      <Header/>

      <DivHome>

        <Imagem src={img} alt="logo_github" />

        <DivContent>
          <Search/>
          {informacao != '' ? <Content/>: <></>}
        </DivContent>
        

      </DivHome>
    </div>
  )
}

export default App
