// styles
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useTheme} from '../../Hooks/useTheme'
import { projectFirestore } from '../../Firebase/config'
import './Recipe.css'

export default function Recipe() {
  const [recipe,setRecipe] = useState(null)
  const[isPending, setIsPending] = useState(false)
  const [error, setError] = useState(false)

  const  { id }= useParams()
  const { mode } = useTheme()

 useEffect(() => {
    setIsPending(true)
  // unsub function is returned from onSnapshot and is used to cleanup useeffect
  // onSnapshot allows reat time updats in the dom
    const unsub = projectFirestore.collection('recipes').doc(id).onSnapshot((doc)=> {
      if (doc) {
        setIsPending(false)
        setRecipe(doc.data())
      } else {
        setIsPending(false)
        setError("Could not find recipe")
      }
  })

  return () => {
    unsub()
  }

 }, [id])

const handleClick = () => {
  projectFirestore.collection('recipes').doc(id).update({
    title: "new title"
  })
}


  return (
    <div className={`recipe ${mode}`}>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {recipe && (
        <>
          <h2 className='page-title'>{recipe.title}</h2>
          <p>Takes {recipe.cookingTime}</p>
          <ul>
            {recipe.ingredients.map(ing => <li>{ing}</li>)}
          </ul>
          <p className="method">{recipe.method}</p>
          <button onClick={handleClick}>Update me</button>
        </>
      )}
    </div>
  )
}