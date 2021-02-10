import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { cart } from '../reducers/cart'
import { user } from '../reducers/user'
import { userLogin } from '../reducers/userThunks'
import { LoginSignupLinks } from '../components/LoginSignupLinks'
import {
  Form,
  FormContainer,
  Label,
  InputField,
  LoggedIn
} from '../lib/Form'
import { Button } from '../lib/resuable/Button'
import { Loader } from '../components/Loader'

export const Login = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const isLoading = useSelector((store) => store.ui.loading)
  const errorMessage = useSelector((store) => store.user.login.errorMessage)
  const accessToken = useSelector((store) => store.user.login.accessToken)
  const name = useSelector((store) => store.user.login.name)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (event) => {
    event.preventDefault()
    dispatch(userLogin(email, password))
    setEmail('')
    setPassword('')
  }

  const handleGoToProducts = () => {
    history.push('/products')
  }

  const handleLogout = () => {
    dispatch(user.actions.setLogOut())
    dispatch(cart.actions.clearCart())
    history.push('/')
  }

  useEffect(() => {
    dispatch((user.actions.setErrorMessage('')))
  }, [dispatch])

  return (
    <FormContainer>
      <LoginSignupLinks />
      {accessToken &&
        <LoggedIn>
          <h3>Welcome {name}!</h3>
          <div>
            <Button type="button" onButtonClick={handleGoToProducts} text="Go to shop" />
            <Button type="button" onButtonClick={handleLogout} text="Log out" />
          </div>
        </LoggedIn>}
      {!accessToken && 
        <Form onSubmit={handleLogin}>
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
              value={password}
              required
              onChange={(event) => setPassword(event.target.value)} />
          </Label>
          <Button type="submit" text="Login" />
          {isLoading && <Loader />}
          {errorMessage && <p>Wrong Email/Password. Please try again.</p>}
        </Form>}
    </FormContainer>
  )
}


