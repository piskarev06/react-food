import React from 'react'

import { MealItem } from './MealItem'

export const MealList = ({ meals }) => {
  return (
    <div className="list">
      {meals.map((el) => (
        <MealItem key={el.idMeal} {...el} />
      ))}
    </div>
  )
}
