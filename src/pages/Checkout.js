import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import { cart } from '../reducers/cart'
import { sendOrder } from '../reducers/userThunks'
import { Button } from '../lib/resuable/Button'

export const Checkout = () => {
  const dispatch = useDispatch()
  const products = useSelector((store) => store.cart.products)
  const userInfo = useSelector((store) => store.user.login)
  const accessToken = useSelector((store) => store.user.login.accessToken)
  const userId = useSelector((store) => store.user.login.userId)

  const [isChecked, setIsChecked] = useState(false)
  const onToggleCheckbox = () => setIsChecked(!isChecked)
  const [orderConfirmed, setOrderConfirmed] = useState(false)

  const handleCheckOut = (event) => {
    event.preventDefault()
    dispatch(sendOrder(
      products,
      userId,
      accessToken
    ))
    dispatch(cart.actions.clearCart())
    setOrderConfirmed(true)
  }

  return (
    <CheckoutContainer>
      <h2>Checkout</h2>
      {!orderConfirmed && 
      <>
        <p>Your order will be shipped to:</p>
        <p>Street: {userInfo.street}</p>
        <p>Postal code: {userInfo.postalCode}</p>
        <p>City: {userInfo.city}</p>
        <CheckBoxContainer>
          <label>
            Accept terms and conditions
            <input
              type="checkbox"
              checked={isChecked}
              onChange={onToggleCheckbox} />
          </label>
          {isChecked && 
            <Button 
              type="submit" 
              text="Confirm order"
              onButtonClick={handleCheckOut} />}
        </CheckBoxContainer>
      </>}
      {orderConfirmed && 
        <p> Thank you for your order, {userInfo.name}! </p>}
    </CheckoutContainer>
  )
}

const CheckoutContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const CheckBoxContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  @media (min-width: 700px){
    width: 50%;
  }
`