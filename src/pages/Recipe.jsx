import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router'

import { getMealById } from '../api'
import { Preloader } from '../components/ui/Preloader'

export const Recipe = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [recipe, setRecipe] = useState({})

  useEffect(() => {
    getMealById(id).then((data) => setRecipe(data.meals[0]))
  }, [id])

  return (
    <>
      {!recipe.idMeal ? (
        <Preloader />
      ) : (
        <div className="recipe">
          <img src={recipe.strMealThumb} alt={recipe.strMeal} />
          <h1>{recipe.strMeal}</h1>
          <h6>Category: {recipe.strCategory}</h6>
          {recipe.strArea ? <h6>Aria: {recipe.strArea}</h6> : null}
          <p>{recipe.strInstructions}</p>

          <table className="centered">
            <thead>
              <tr>
                <th>ingredient</th>
                <th>Measure</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(recipe).map((el) => {
                if (el.includes('Ingredient') && recipe[el]) {
                  return (
                    <tr key={el}>
                      <td>{recipe[el]}</td>
                      <td>{recipe[`strMeasure${el.slice(13)}`]}</td>
                    </tr>
                  )
                }
                return null
              })}
            </tbody>
          </table>

          {recipe.strYoutube ? (
            <div className="row">
              <h5 style={{ margin: '2rem 0 1.5rem' }}>Video Recipe</h5>
              <iframe
                allowFullScreen
                title={id}
                src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(-11)}`}
              />
            </div>
          ) : null}
        </div>
      )}

      <button onClick={() => navigate(-1)} className="btn">
        Go Back
      </button>
    </>
  )
}
