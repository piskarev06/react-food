import React, { useState, useEffect } from 'react'
import { getAllCategories } from '../api'

import { Preloader } from '../components/ui/Preloader'
import { CategoryList } from '../components/CategoryList'

export const Home = () => {
  const [catalog, setCatalog] = useState([])

  useEffect(() => {
    getAllCategories().then((data) => {
      setCatalog(data.categories)
      console.log(data, data.categories)
    })
  }, [])

  return <>{!catalog.length ? <Preloader /> : <CategoryList catalog={catalog} />}</>
}
