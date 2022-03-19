import "./App.css"
import Header from "./components/header/header"
import Pokemons from "./components/pages/pokemons/pokemons"
import PokemonTypes from "./components/pages/pokemonTypes/pokemonTypes"
import { Provider } from "react-redux"
import { Routes, Route } from "react-router-dom"
import store from "./store/store"
import HomePage from "./components/pages/homePage/homePage"
import PokemonPage from "./components/pages/pokemons/pokemonPage"
import ModalSpinner from "./components/modalSpinner/modalSpinner"
import Footer from "./components/footer/footer"

const App = () => {
  return (
    <Provider store={store}>
      <div className='App'>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/pokemons' element={<Pokemons />} />
          <Route path='/types' element={<div>Types</div>} />
          <Route path='/pokemon/:pokemonId' element={<PokemonPage />} />
          <Route path='/types' element={<PokemonTypes />} />
        </Routes>
        <Footer />
      </div>
      <ModalSpinner />
    </Provider>
  )
}

export default App
