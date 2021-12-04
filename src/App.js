import "./App.css"
import Header from "./components/header/header"
import Pokemons from "./components/pages/pokemons/pokemons"
import { Provider } from "react-redux"
import { Routes, Route } from "react-router-dom"
import store from "./store/store"

const App = () => {
  return (
    <Provider store={store}>
      <div className='App'>
        <Header />
        <Routes>
          <Route path='/' element={<div>Home Page</div>} />
          <Route path='/pokemons' element={<Pokemons />} />
          <Route path='/types' element={<div>Types</div>} />
        </Routes>
      </div>
    </Provider>
  )
}

export default App
