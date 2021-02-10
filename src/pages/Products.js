import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal'

import { ui } from '../reducers/ui'
import {
  ProductsPageContainer,
  PageHeader,
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
  const [error, setError] = useState('')

  const fetchProducts = () => {
    const URL = 'https://ellen-final-project.herokuapp.com/products'

    fetch(URL)
      .then((response) => response.json())
      .then((json) => {
        dispatch(ui.actions.setLoading(false))
        setProducts(json)
      })
      .catch((err) => {
        dispatch(ui.actions.setLoading(false))
        setError(err)
      })
  }

  useEffect(() => {
    dispatch(ui.actions.setLoading(true))
    fetchProducts()
  }, [setProducts])

  return (
    <ProductsPageContainer>
      <PageHeader>
        <h2>All Products</h2>
      </PageHeader>
      <AllProductsContainer>
        {products.map((product) => (
          <ProductCard key={product._id}>
            <Fade bottom>
              <Link to={`products/${product._id}`}>
                <ImageWrapper>
                  <ProductImage src={product.imageUrl} alt={product.name} />
                </ImageWrapper>
                <ProductText>
                  {console.log(product.name)}
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
