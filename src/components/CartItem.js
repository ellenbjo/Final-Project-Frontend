import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import { ReactComponent as Plus } from '../svg:s/plus.svg'
import { ReactComponent as Minus } from '../svg:s/minus.svg'
import { cart } from '../reducers/cart'

export const CartItem = ({ product }) => {
  const dispatch = useDispatch()

  const increaseQuantity = () => {
    dispatch(cart.actions.addProduct(product))
  }

  const reduceQuantity = () => {
    dispatch(cart.actions.removeProduct(product))
  }

  return (
    <CartProduct>
      <ImageWrapper>
        <ProductImage src={product.imageUrl} alt={product.name} />
      </ImageWrapper>
      <ProductInfo>
        <p>{product.name}</p>
        <p>{product.price} kr</p>
        <p>
          <div>
            <QuantityButton type="button" onClick={increaseQuantity}>
              <Plus width="15" height="20" fill="whitesmoke" />
            </QuantityButton>
            <span>{product.quantity}</span>
            <QuantityButton type="button" onClick={reduceQuantity}>
              <Minus width="15" height="20" fill="whitesmoke" />
            </QuantityButton>
          </div>
        </p>
      </ProductInfo>
    </CartProduct>
  )
}

const CartProduct = styled.div`
  background: whitesmoke;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  padding-top: 20px;
  margin-bottom: 20px;
  @media (min-width: 700px){
    flex-direction: row;
    height: 300px;
    width: 40%;
    margin-left: 20px;
    margin-right: 20px;
    padding-top: 0;
    align-items: normal;
  }
  @media (min-width: 1024px){
    width: 33%;
    height: 300px;
    margin-left: 0;
    margin-right: 0;
  }
  @media (min-width: 1500px){
    width: 40%;
  }
`

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 90%;
  @media (min-width: 700px){
    width: 50%;
  }
  @media (min-width: 700px){
    width: 60%;
  }
`

const ProductImage = styled.img`
  width: 80%;
  object-fit: cover;
  @media (min-width: 700px){
    width: 100%;
    height: 100%;
  }
`

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  div{
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    font-size: 30px;
  }
  @media (min-width: 700px){
    align-items: baseline;
    justify-content: center;
    margin-left: 10px;
  }
`

const QuantityButton = styled.button`
  background: #cdd0cb;
  border: none;
`