import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { cart } from '../reducers/cart'
import { user } from '../reducers/user'
import { userSignup } from '../reducers/userThunks'
import { LoginSignupLinks } from '../components/LoginSignupLinks'
import {
  Form,
  FormContainer,
  Label,
  InputField,
  LoggedIn
} from '../lib/Form'
import { Button } from '../lib/reusable/Button'
import { Loader } from '../components/Loader'

export const Signup = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const isLoading = useSelector((store) => store.ui.loading)
  const errorMessage = useSelector((store) => store.user.login.errorMessage)
  const accessToken = useSelector((store) => store.user.login.accessToken)
  const userName = useSelector((store) => store.user.login.name)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [street, setStreet] = useState('')
  const [postalCode, setPostalCode] = useState('')
  const [city, setCity] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')

  const handleSignup = (event) => {
    event.preventDefault()
    dispatch(userSignup(
      name,
      email,
      password,
      street,
      postalCode,
      city,
      phoneNumber
    ))
  }

  useEffect(() => {
    dispatch((user.actions.setErrorMessage('')))
  }, [dispatch])

  const handleGoToProducts = () => {
    history.push('/products')
  }

  const handleLogout = () => {
    dispatch(user.actions.setLogOut())
    dispatch(cart.actions.clearCart())
    history.push('/')
  }

  return (
    <FormContainer>
      <LoginSignupLinks />
      {accessToken &&
        <LoggedIn>
          <h3>Welcome {userName}!</h3>
          <div>
            <Button type="button" onButtonClick={handleGoToProducts} text="Go to shop" />
            <Button type="button" onButtonClick={handleLogout} text="Log out" />
          </div>
        </LoggedIn>}
      {!accessToken && 
        <Form onSubmit={handleSignup}>
          <Label>
            Name
            <InputField
              value={name}
              required
              onChange={(event) => setName(event.target.value)} />
          </Label>
          <Label>
            Email
            <InputField
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)} />
          </Label>
          <Label>
            Password
            <InputField
              type="password"
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)} />
          </Label>
          <Label>
            Street
            <InputField
              value={street}
              required
              onChange={(event) => setStreet(event.target.value)} />
          </Label>
          <Label>
            Postal code
            <InputField
              value={postalCode}
              required
              onChange={(event) => setPostalCode(event.target.value)} />
          </Label>
          <Label>
            City
            <InputField
              type="text"
              value={city}
              required
              onChange={(event) => setCity(event.target.value)} />
          </Label>
          <Label>
            Phone number
            <InputField
              value={phoneNumber}
              required
              onChange={(event) => setPhoneNumber(event.target.value)} />
          </Label>
          <Button type="submit" text="Sign up" />
          {isLoading && <Loader />}
          {errorMessage && <p>Please fill in the required fields.</p>}
        </Form>}
    </FormContainer>
  )
}

