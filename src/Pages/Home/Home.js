// styles
import './Home.css'

import {useFetch} from '../../Hooks/useFetch'
import RecipeList from '../../Components/RecipeList'

export default function Home() {

  const {data, isPending, error} = useFetch('http://localhost:3000/recipes')


  return (
    <div className="home">
      {error && <p className="error">{error}</p>}
      {isPending && <p>Loading ...</p>}
      {data && <RecipeList recipes={data}/>}
    </div>
  )
}