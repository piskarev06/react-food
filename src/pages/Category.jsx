import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import { getFilteredCategory } from '../api'
import { Preloader } from '../components/ui/Preloader'
import { MealList } from '../components/MealList'

export const Category = () => {
  const { name } = useParams()
  const [meals, setMeals] = useState([])
  const navigate = useNavigate()
  console.log(navigate)

  useEffect(() => {
    getFilteredCategory(name).then((data) => setMeals(data.meals))
  }, [name])

  return <>{!meals.length ? <Preloader /> : <MealList meals={meals} />}</>
}
