import React, { useState, useEffect } from 'react'
import { getAllCategories } from '../api'

import { Preloader } from '../components/ui/Preloader'
import { CategoryList } from '../components/CategoryList'
import { Search } from '../components/Search'
import { useLocation, useNavigate } from 'react-router-dom'

export const Home = () => {
  const [catalog, setCatalog] = useState([])
  const [filteredCatalog, setFilteredCatalog] = useState([])

  const { pathname, search } = useLocation()

  const navigate = useNavigate()

  const handleSearch = (str) => {
    setFilteredCatalog(
      catalog.filter((el) => el.strCategory.toLowerCase().includes(str.toLowerCase())),
    )
    navigate({
      pathname,
      search: `?search=${str}`,
    })
  }

  useEffect(() => {
    getAllCategories().then((data) => {
      setCatalog(data.categories)
      setFilteredCatalog(
        search
          ? data.categories.filter((el) =>
              el.strCategory.toLowerCase().includes(search.split('=')[1].toLowerCase()),
            )
          : null,
      )
    })
  }, [search])

  return (
    <>
      <Search cb={handleSearch} />
      {!catalog.length ? <Preloader /> : <CategoryList catalog={filteredCatalog || catalog} />}
    </>
  )
}
