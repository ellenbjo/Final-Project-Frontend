import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'

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

export const DesignerProducts = () => {
  const dispatch = useDispatch()
  const isLoading = useSelector((store) => store.ui.loading)
  const { id } = useParams()
  const [products, setProducts] = useState([])

  const fetchProducts = (designerId) => {
    const URL = `https://ellen-final-project.herokuapp.com/designers/${designerId}/products`

    fetch(URL)
      .then((response) => response.json())
      .then((json) => {
        dispatch(ui.actions.setLoading(false))
        setProducts(json)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    dispatch(ui.actions.setLoading(true))
    fetchProducts(id)
  }, [id])

  return (
    <ProductsPageContainer>
      <h2>PRODUCTS FROM</h2>
      <p>Here is a short text about this page.</p>
      <AllProductsContainer>
        {products.map((product) => (
          <ProductCard key={product._id}>
            <Link to={`/products/${product._id}`}>
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