

//Link and Navlink are used in react instead of a Tags they will not reload the entire
// DOM but only components that need updating Navlink will apply active class to current  activelink
import { Link } from 'react-router-dom'
import Searchbar from './Searchbar'
import { useTheme } from '../Hooks/useTheme'

// styles
import './Navbar.css'



export default function Navbar() {

  const { color } = useTheme()


  return (
    <div className="navbar" style= {{background: color}}>
      <nav>
        <Link to="/" className="brand">
          <h1>Cooking Ninja</h1>
        </Link>
        <Searchbar />
        <Link to="/create">Create Recipe</Link>
      </nav>
    </div>
  )
}