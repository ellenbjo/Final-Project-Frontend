import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import { cart } from '../reducers/cart'
import { Button } from '../lib/reusable/Button'
import { Loader } from '../components/Loader'

export const ProductDetailPage = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const { productId } = useParams()
  const [isLoading, setIsLoading] = useState(false)
  const [product, setProduct] = useState([])
  const [addedToCart, setAddedToCart] = useState(false)
  const [error, setError] = useState('')

  const fetchProductDetails = (id) => {
    const URL = `https://ellen-final-project.herokuapp.com/products/${id}`

    fetch(URL)
      .then((response) => response.json())
      .then((json) => {
        setIsLoading(false)
        setProduct(json)
      })
      .catch((err) => {
        setIsLoading(false)
        setError(err)
      })
  }

  useEffect(() => {
    setIsLoading(true)
    fetchProductDetails(productId)
  }, [productId])

  const handleAddToCart = () => {
    dispatch(cart.actions.addProduct({
      id: product._id,
      name: product.name,
      imageUrl: product.imageUrl,
      price: product.price
    }))
    setAddedToCart(true)
  }

  const handleGoToProducts = () => {
    history.push('/products')
  }

  return (
    <ProductPageContainer>
      <ProductDetailsCard>
        <ProductImage src={product.imageUrl} alt={product.name} />
        <InfoWrapper>
          {isLoading && <Loader />}
          <Border>
            <h3>{product.name}</h3>
            <p>{product.price} kr</p>
            <p>Designer: {product.designerName}</p>
            <p>Dimensions: {product.dimensions}</p>
            {addedToCart && 
              <p>Product is added to cart!</p>}
            <ButtonWrapper>
              <Button type="button" text="Add to cart" onButtonClick={handleAddToCart} />
              <Button type="button" text="Continue shopping" onButtonClick={handleGoToProducts} />
            </ButtonWrapper>
          </Border>
        </InfoWrapper>
        {error && 
          <p>No product details were found. Please try loading the page again.</p>}
      </ProductDetailsCard>
    </ProductPageContainer>
  )
}

const ProductPageContainer = styled.section`
  padding-top: 30px;
  padding-bottom: 50px;
  background: #e8eae6;
  @media (min-width: 700px){
    display: flex;
    justify-content: center;
  }
`

const ProductDetailsCard = styled.div`
  background: whitesmoke;  
  display: flex; 
  flex-direction: column; 
  align-items: center;
  @media (min-width: 700px){
    flex-direction: row;
    width: 95%;
  }
  @media (min-width: 1024px){
    width: 60%;
  }
  @media (min-width: 1500px){
    width: 50%;
  }
`

const InfoWrapper = styled.div`
  width: 90%;
  @media (min-width: 700px){
    background: #cdd0cb;
    padding: 40px;
    width: 50%;
    height: 100%;
    color: white;
  }
`

const Border = styled.div`
  border: none;
  h3{
    font-size: 18px;
    letter-spacing: 1.5px;
  }
  p{
    font-size: 16px;
    letter-spacing: 1.5px;
  }
  @media (min-width: 700px){
    border: 0.5px solid whitesmoke;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 40px;
  }
`

const ProductImage = styled.img`
  width: 90%;
  object-fit: cover;
  @media (min-width: 700px){
    width: 50%; 
    padding: 20px;
  }
`

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
  @media (min-width: 700px){
    padding-top: 40px;
    align-items: center;
  }
  @media (min-width: 1024px){
    padding-top: 60px;
  }
`
