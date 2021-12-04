import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'

export const Category = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  console.log(navigate)
  return (
    <>
      <h1>Category number {id}</h1>
      <button onClick={() => navigate('/')} className="btn">
        Go back
      </button>
    </>
  )
}
