import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import {
  ProductsPageContainer,
  AllProductsContainer,
  ProductCard,
  ProductImage
} from '../lib/Products'

export const Products = () => {
  const [products, setProducts] = useState([])

  const fetchProducts = () => {
    const URL = 'https://ellen-final-project.herokuapp.com/products'

    fetch(URL)
      .then((response) => response.json())
      .then((json) => {
        setProducts(json)
        console.log(json)
      })
      .catch((error) => console.error(error))
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <ProductsPageContainer>
      <h2>ALL PRODUCTS</h2>
      <p>Here is a short text about this page.</p>
      <AllProductsContainer>
        {products.map((product) => (
          <ProductCard key={product._id}>
            <Link to={`products/${product._id}`}>
              <ProductImage src={product.imageUrl} alt={product.name} />
              <p>{product.name}</p>
              <p>{product.price} kr</p>
            </Link>
          </ProductCard>
        ))}
      </AllProductsContainer>
    </ProductsPageContainer>
  )
}


