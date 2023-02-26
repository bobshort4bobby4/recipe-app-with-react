import { Link } from 'react-router-dom'
import { useTheme } from '../Hooks/useTheme'
import Trashcan from '../assets/Trashcan.svg'
import { projectFirestore } from '../Firebase/config'

// styles
import './RecipeList.css'

export default function RecipeList({ recipes }) {


  const { mode } = useTheme()

  if(recipes.length === 0) {
    return <div className="error">No Recipes to Load...</div>
  }


  const handleClick= (id)=> {
    projectFirestore.collection('recipes').doc(id).delete()
  }
  
  return (
    <div className="recipe-list">
      {recipes.map(recipe => (
        <div key={recipe.id} className={`card ${mode}`}>
          <h3>{recipe.title}</h3>
          <p>{recipe.cookingTime}  to make.</p>
          {/* substring takes a portion of a string */}
          <div>{recipe.method.substring(0, 100)}...</div> 
          <Link to={`/recipes/${recipe.id}`}>Cook This</Link>
          {/*put onclick in function because it is using parameter and dont need it called always */}
          <img src={Trashcan} className="delete" onClick={() => handleClick(recipe.id)}/>
        </div>
      ))}
    </div>
  )
}