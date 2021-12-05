import React from 'react'

import { CategoryItem } from './CategoryItem'

export const CategoryList = ({ catalog = [] }) => {
  if (!catalog.length) {
    return <h3>Nothing Found</h3>
  }

  return (
    <div className="list">
      {catalog.map((el) => (
        <CategoryItem key={el.idCategory} {...el} />
      ))}
    </div>
  )
}
