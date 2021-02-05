import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { ui } from '../reducers/ui'
import {
  ProductsPageContainer,
  AllProductsContainer,
  ProductCard,
  ProductImage,
  ImageWrapper,
  ProductText
} from '../lib/Products'
import { Loader } from '../components/Loader'

export const Products = () => {
  const dispatch = useDispatch()
  const isLoading = useSelector((store) => store.ui.loading)
  const [products, setProducts] = useState([])

  const fetchProducts = () => {
    const URL = 'https://ellen-final-project.herokuapp.com/products'

    fetch(URL)
      .then((response) => response.json())
      .then((json) => {
        dispatch(ui.actions.setLoading(false))
        setProducts(json)
      })
      .catch((error) => console.error(error))
  }

  useEffect(() => {
    dispatch(ui.actions.setLoading(true))
    fetchProducts()
  }, [setProducts])

  return (
    <ProductsPageContainer>
      <h2>ALL PRODUCTS</h2>
      <p>Here is a short text about this page.</p>
      <AllProductsContainer>
        {products.map((product) => (
          <ProductCard key={product._id}>
            <Link to={`products/${product._id}`}>
              <ImageWrapper>
                <ProductImage src={product.imageUrl} alt={product.name} />
              </ImageWrapper>
              <ProductText>
                <h3>{product.name.toUpperCase()}</h3>
                <p>{product.price} kr</p>
              </ProductText>
            </Link>
          </ProductCard>
        ))}
      </AllProductsContainer>
      {isLoading && <Loader />}
    </ProductsPageContainer>
  )
}
