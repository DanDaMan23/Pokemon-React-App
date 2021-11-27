import "./App.css"
import Header from "./components/header/header"
import Pokemons from "./components/pages/pokemons/pokemons"
import { Provider } from "react-redux"
import store from "./store/store"

const App = () => {
  return (
    <Provider store={store}>
      <div className='App'>
        <Header />
        <Pokemons />
      </div>
    </Provider>
  )
}

export default App
