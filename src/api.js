import { API_URL } from './config'

export const getMealById = async (mealId) => {
  const res = await fetch(API_URL + 'lookup.php?i=' + mealId)
  return await res.json()
}

export const getAllCategories = async () => {
  const res = await fetch(API_URL + 'categories.php')
  return await res.json()
}

export const getFilteredCategory = async (catName) => {
  const res = await fetch(API_URL + 'filter.php?c=' + catName)
  return await res.json()
}
