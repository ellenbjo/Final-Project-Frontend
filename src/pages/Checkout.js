import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Fade from 'react-reveal'
import styled from 'styled-components'

import { cart } from '../reducers/cart'
import { sendOrder } from '../reducers/orderThunk'
import { Button } from '../lib/reusable/Button'
import { ReactComponent as Box } from '../svg:s/box.svg'

export const Checkout = () => {
  const dispatch = useDispatch()
  const products = useSelector((store) => store.cart.products)
  const userInfo = useSelector((store) => store.user.login)
  const accessToken = useSelector((store) => store.user.login.accessToken)
  const userId = useSelector((store) => store.user.login.userId)
  const [orderConfirmed, setOrderConfirmed] = useState(false)
  const [checked, setChecked] = useState(false)

  const handleOnChange = (event) => {
    setChecked(event.target.checked)
  }

  const Checkbox = ({...props}) => (
    <Container>
      <HiddenCheckBox checked={checked} {...props} />
      <StyledCheckbox checked={checked}>
        <Icon viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      </StyledCheckbox>
    </Container>
  )

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
      {!orderConfirmed && products.length > 0 &&
        <>
          <p>Your order will be shipped to:</p>
          <p>Street: {userInfo.street}</p>
          <p>Postal code: {userInfo.postalCode}</p>
          <p>City: {userInfo.city}</p>
          <CheckBoxContainer>
            <Label>
              Accept terms and conditions
              <Checkbox checked={checked} onChange={handleOnChange} />
            </Label>
            {checked && 
              <Fade bottom>
                <Button
                  type="submit" 
                  text="Confirm order"
                  onButtonClick={handleCheckOut} />
              </Fade>}
          </CheckBoxContainer>
        </>}
      {products.length === 0 && !checked &&
        <p>Your cart is empty. Please add a product to continue to the checkout.</p>}
      {orderConfirmed && 
        <>
          <Box width="50" height="50" fill="#555555" />
          <p>Thank you {userInfo.name}!</p>
          <p>{userInfo.statusMessage}</p>
        </>}
    </CheckoutContainer>
  )
}

const Icon = styled.svg`
  fill: none; 
  stroke: white;
  stroke-width: 2px;
`

const HiddenCheckBox = styled.input.attrs({ type:'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0 );
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

const Container = styled.span`
  display: inline-block;
  vertical-align: middle;
`

const StyledCheckbox = styled.span`
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 3px;
  cursor: pointer;
  border: 0.5px solid #555555;
  background: ${({checked}) => checked ? '#91a5a1' : 'lightgrey'};
  transition: all 150ms;
  ${Icon} {
    visibility: ${({checked}) => checked ? 'visible' : 'hidden'};
  }
  ${HiddenCheckBox}:focus + & {
    outline: 2px dotted #555555;
  }
`

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
  div {
    :last-of-type {
      width: 80%;
      display: flex;
      justify-content: center;
      @media (min-width: 700px) {
        width: 50%;
      }
      @media (min-width: 1024px) {
        width: 40%;
      }
    }
  }
`

const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  span {
    :first-child {
      padding: 8px;
    }
  }
`
