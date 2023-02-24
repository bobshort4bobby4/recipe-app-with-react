//styles
import './App.css'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
// pages
import Navbar from './Components/Navbar'
import Home from './Pages/Home/Home'
import Create from './Pages/Create/Create'
import Search from './Pages/Search/Search'
import Recipe from './Pages/Recipe/Recipe'
import ThemeSelector from './Components/ThemeSelector'
import { useTheme } from './Hooks/useTheme'

function App() {
  const {mode} = useTheme()
  return (
    <div className={`App ${mode}`}>
      <BrowserRouter>
      <Navbar />
      <ThemeSelector />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/create">
            <Create />

          </Route>
          <Route path="/search">
            <Search />
            
          </Route>
          <Route path="/recipes/:id">

            <Recipe />
          </Route>
        </Switch>
      
      
      
      </BrowserRouter>
    </div>
  );
}

export default App
