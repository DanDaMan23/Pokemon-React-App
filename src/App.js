import "./App.css"
import Header from "./components/header/header"
import Pokemons from "./components/pages/pokemons/pokemons"

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Pokemons />
    </div>
  )
}

export default App
