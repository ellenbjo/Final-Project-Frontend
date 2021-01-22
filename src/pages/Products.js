import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Products = () => {
  const [products, setProducts] = useState([])

  const fetchProducts = () => {
    const URL = 'http://localhost:8081/products'

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

//reuse this components and put in lib
//same flex-box design for designers
const ProductsPageContainer = styled.section`
  display: flex; 
  flex-direction: column;
  align-items: center;
`

const AllProductsContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  @media (min-width: 700px){
    width: 100%;
  }
  @media (min-width: 1024px){
    width: 70%;
  }
`

const ProductCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  margin: 10px;
  @media (min-width: 700px){
    width: 30%;
    margin: 10px;
  }
  @media (min-width: 1024px){
    width: 25%;
  }
`

const ProductImage = styled.img`
  width: 100%;
  height: 80%;
  object-fit: cover;
`
