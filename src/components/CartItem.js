import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

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
    <ProductArticle>
      <ProductImage src={product.imageUrl} alt={product.name} />
      <ProductInfo>
        <p>{product.name}</p>
        <p>{product.price} kr</p>
        <div>
          <button type="button" onClick={increaseQuantity}>+</button>
          <span>{product.quantity}</span>
          <button type="button" onClick={reduceQuantity}>-</button>
        </div>
      </ProductInfo>
    </ProductArticle>
  )
}

const ProductArticle = styled.li`
  display: flex;
  justify-content: center; 
  width: 100%;
  border: 1px black solid;
  margin-bottom: 10px;
  @media (min-width: 1024px){
    width: 60%;
    justify-content: space-between;
    align-items: center;
  } 
`
const ProductInfo = styled.div`

  @media (min-width: 1024px){
    display: flex;
    justify-content: space-between;
    width: 75%;
  }
`

const ProductImage = styled.img`
  width: 50%;
  @media (min-width: 700px){
    width: 30%;
  }
  @media (min-width: 1024px){
    width: 10%;
  }
`