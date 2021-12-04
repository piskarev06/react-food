import React from 'react'
import { Link } from 'react-router-dom'

export const MealItem = ({ strMeal, idMeal, strMealThumb }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={strMealThumb} alt={strMeal} />
      </div>
      <div className="card-content">
        <span className="card-title">{strMeal}</span>
      </div>
      <div className="card-action">
        <Link to={`/meals/${idMeal}`} className="btn">
          Watch recipe
        </Link>
      </div>
    </div>
  )
}
