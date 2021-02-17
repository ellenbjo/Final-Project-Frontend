import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Fade from 'react-reveal'

import {
  ProductsPageContainer,
  AllProductsContainer,
  ProductCard,
  ProductImage,
  ImageWrapper,
  ProductText
} from '../lib/Products'
import { Loader } from '../components/Loader'

export const DesignerProducts = () => {
  const { id } = useParams()
  const [isLoading, setIsLoading] = useState(false)
  const [products, setProducts] = useState([])
  const [error, setError] = useState('')

  const fetchProducts = (designerId) => {
    const URL = `https://ellen-final-project.herokuapp.com/designers/${designerId}/products`

    fetch(URL)
      .then((response) => response.json())
      .then((json) => {
        setIsLoading(false)
        setProducts(json)
      })
      .catch((err) => {
        setIsLoading(false)
        setError(err)
      })
  }

  useEffect(() => {
    setIsLoading(true)
    fetchProducts(id)
  }, [id])

  return (
    <ProductsPageContainer>
      <AllProductsContainer>
        {products.map((product) => (
          <ProductCard key={product._id}>
            <Fade bottom>
              <Link to={`/products/${product._id}`}>
                <ImageWrapper>
                  <ProductImage src={product.imageUrl} alt={product.name} />
                </ImageWrapper>
                <ProductText>
                  <h3>{product.name}</h3>
                  <p>{product.price} kr</p>
                </ProductText>
              </Link>
            </Fade>
          </ProductCard>
        ))}
        {error && <p>No Products were found. Please try to load the page again.</p>}
      </AllProductsContainer>
      {isLoading && <Loader />}
    </ProductsPageContainer>
  )
}
