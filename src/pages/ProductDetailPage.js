import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import { cart } from '../reducers/cart'
import { Button } from '../lib/resuable/Button'

export const ProductDetailPage = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const { productId } = useParams()
  const [product, setProduct] = useState([])

  const fetchProductDetails = (id) => {
    const URL = `https://ellen-final-project.herokuapp.com/products/${id}`

    fetch(URL)
      .then((response) => response.json())
      .then((json) => {
        setProduct(json)
      })
      .catch((error) => console.error(error))
  }

  useEffect(() => {
    fetchProductDetails(productId)
  }, [productId])

  const handleAddToCart = () => {
    dispatch(cart.actions.addProduct({
      id: product._id,
      name: product.name,
      imageUrl: product.imageUrl,
      price: product.price
    }))
  }

  const handleGoToProducts = () => {
    history.push('/products')
  }

  return (
    <ProductPageContainer>
      <ProductWrapper>
        <ProductImage src={product.imageUrl} alt={product.name} />
        <InfoWrapper>
          <h3>{product.name}</h3>
          <p>{product.price} kr</p>
          <p>Dimensions: {product.dimensions}</p>
          <Button type="button" text="Add to cart" onButtonClick={handleAddToCart} />
          <Button type="button" text="Continue shopping" onButtonClick={handleGoToProducts} />
        </InfoWrapper>
      </ProductWrapper>
    </ProductPageContainer>
  )
}

const ProductPageContainer = styled.section`
  padding-top: 30px;
  padding-bottom: 50px;
  background: #e8eae6;
  @media (min-width: 1024px){
    display: flex;
    justify-content: center;
  }
`

const ProductWrapper = styled.div`
  background: white;  
  display: flex; 
  flex-direction: column; 
  align-items: center;
  @media (min-width: 700px){
    flex-direction: row;
  }
  @media (min-width: 1024px){
    width: 70%;
  }
`

const InfoWrapper = styled.div`
  width: 90%;
`

const ProductImage = styled.img`
  width: 90%;
  object-fit: cover;
  @media (min-width: 700px){
    width: 40%; 
    padding: 20px;
  }
  @media (min-width: 1024px){
    width: 30%;
  }
`