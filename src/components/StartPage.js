import React, { useState, useEffect } from 'react'


export const StartPage = () => {
  const [products, setProducts] = useState([])

  const fetchMovies = () => {
    URL = 'http://localhost:8081/products'

    fetch(URL)
      .then((response) => response.json())
      .then((json) => {
        setProducts(json)
      })
      .catch((error) => console.error(error))
  }

  useEffect(() => {
    fetchMovies()
  }, [])

  return (
    <div>
      <p>Hello</p>
      {products.map((product) => (
        <div>
          <p>{product.name}</p>
          <img src={product.imageUrl} alt={product.name} />
        </div>
      ))}
    </div>
  )
}

