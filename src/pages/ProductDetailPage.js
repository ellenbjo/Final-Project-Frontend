import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import { cart } from '../reducers/cart'
import { ui } from '../reducers/ui'
import { Button } from '../lib/reusable/Button'
import { Loader } from '../components/Loader'

export const ProductDetailPage = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const { productId } = useParams()
  const isLoading = useSelector((store) => store.ui.loading)
  const [product, setProduct] = useState([])
  const [addedToCart, setAddedToCart] = useState(false)
  const [error, setError] = useState('')

  const fetchProductDetails = (id) => {
    const URL = `https://ellen-final-project.herokuapp.com/products/${id}`

    fetch(URL)
      .then((response) => response.json())
      .then((json) => {
        dispatch(ui.actions.setLoading(false))
        setProduct(json)
      })
      .catch((err) => {
        dispatch(ui.actions.setLoading(false))
        setError(err)
      })
  }

  useEffect(() => {
    dispatch(ui.actions.setLoading(true))
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
      {isLoading ? ( <Loader /> ) : (
        <ProductDetailsCard>
          <ProductImage src={product.imageUrl} alt={product.name} />
          <ProductInfoWrapper>
            <Border>
              <ProductName>{product.name}</ProductName>
              <ProductText>{product.price} kr</ProductText>
              <div>
                <ProductText>Designer:</ProductText>
                <ProductText>{product.designerName}</ProductText>
              </div>
              <div>
                <ProductText>Dimensions:</ProductText> 
                <ProductText>{product.dimensions}</ProductText>
              </div>
              {addedToCart && 
                <p>Product is added to cart!</p>}
              <ButtonWrapper>
                <Button type="button" text="Add to cart" onButtonClick={handleAddToCart} />
                <Button type="button" text="Continue shopping" onButtonClick={handleGoToProducts} />
              </ButtonWrapper>
            </Border>
          </ProductInfoWrapper>
          {error && 
            <p>No product details were found. Please try loading the page again.</p>}
        </ProductDetailsCard>
      )}
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
  @media (min-width: 700px) {
    flex-direction: row;
    width: 95%;
  }
  @media (min-width: 1024px) {
    width: 60%;
  }
  @media (min-width: 1500px) {
    width: 50%;
  }
`

const ProductInfoWrapper = styled.div`
  width: 90%;
  @media (min-width: 700px) {
    background: #cdd0cb;
    padding: 40px;
    width: 70%;
    height: 100%;
    color: white;
  }
`

const Border = styled.div`
  border: none;
  @media (min-width: 700px) {
    border: 0.5px solid whitesmoke;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 40px;
  }
`

const ProductName = styled.h3`
  font-size: 18px;
  letter-spacing: 1.5px;
`

const ProductText = styled.p`
  font-size: 16px;
  letter-spacing: 1.5px;
`

const ProductImage = styled.img`
  width: 90%;
  max-height: 80vh;
  object-fit: cover;
  @media (min-width: 700px) {
    width: 50%; 
    padding: 20px;
  }
`

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
  @media (min-width: 700px) {
    padding-top: 40px;
    align-items: center;
  }
  @media (min-width: 1024px) {
    padding-top: 60px;
  }
`
