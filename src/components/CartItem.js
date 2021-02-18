import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import { ReactComponent as Plus } from '../svg:s/plus.svg'
import { ReactComponent as Minus } from '../svg:s/minus.svg'
import { cart } from '../reducers/cart'

export const CartItem = ({ product, products }) => {
  const dispatch = useDispatch()

  const increaseQuantity = () => {
    dispatch(cart.actions.addProduct(product))
  }

  const reduceQuantity = () => {
    dispatch(cart.actions.removeProduct(product))
  }

  return (
    <CartProduct products={products}>
      <ImageWrapper>
        <ProductImage src={product.imageUrl} alt={product.name} />
      </ImageWrapper>
      <ProductInfo>
        <p>{product.name}</p>
        <p>{product.price} kr</p>
        <div>
          <QuantityButton type="button" onClick={increaseQuantity}>
            <Plus width="15" height="15" fill="#555555" />
          </QuantityButton>
          <span>{product.quantity}</span>
          <QuantityButton type="button" onClick={reduceQuantity}>
            <Minus width="15" height="15" fill="#555555" />
          </QuantityButton>
        </div>
      </ProductInfo>
    </CartProduct>
  )
}

const CartProduct = styled.div`
  background: whitesmoke;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  height: 85vh;
  padding-top: 20px;
  margin-bottom: 20px;
  @media (min-width: 700px) {
    flex-direction: row;
    width: 80%;
    height: 75vh;
    margin-left: 20px;
    margin-right: 20px;
    padding-top: 0;
    align-items: normal;
  }
  @media (min-width: 1024px) {
    min-width: 33%;
    width: 33%;
    width: ${({ products }) => products.length === 1 ? '43%' : '33%'};
    height: 40vh;
    margin-left: 0;
    margin-right: 0;
  }
`

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 90%;
  @media (min-width: 700px) {
    width: 60%;
  }
  @media (min-width: 1024px) {
    width: 60%;
  }
`

const ProductImage = styled.img`
  width: 100%;
  height: 60vh;
  object-fit: contain;
  @media (min-width: 700px) {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 16px;
  div {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    font-size: 27px;
    padding-bottom: 10px;
  }
  @media (min-width: 700px) {
    align-items: baseline;
    justify-content: center;
    margin-left: 10px;
    padding: 10px;
  }
`

const QuantityButton = styled.button`
  background: whitesmoke;
  border: none;
  &:focus {
    outline: dotted #91a5a1 0.5px;
  }
`
