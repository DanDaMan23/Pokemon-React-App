import "./App.css"
import Header from "./components/header/header"
import Pokemons from "./components/pages/pokemons/pokemons"
import { Provider } from "react-redux"
import { Routes, Route } from "react-router-dom"
import store from "./store/store"
import HomePage from "./components/pages/homePage/homePage"
import PokemonStatsTemplate from "./components/templates/pokemonStatsTemplate"

const App = () => {
  return (
    <Provider store={store}>
      <div className='App'>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/pokemons' element={<Pokemons />} />
          <Route path='/types' element={<div>Types</div>} />
          <Route
            path='/pokemon/:pokemonId'
            element={<PokemonStatsTemplate />}
          />
        </Routes>
      </div>
    </Provider>
  )
}

export default App
