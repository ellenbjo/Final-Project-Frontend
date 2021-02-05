import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

import { user } from '../reducers/user'
import { userLogin } from '../reducers/userThunks'
import { LoginSignupLinks } from '../components/LoginSignupLinks'
import {
  Form,
  FormContainer,
  Label,
  InputField
} from '../lib/Form'
import { Button } from '../lib/resuable/Button'

export const Login = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  //const errorMessage = useSelector((store) => store.user.login.errorMessage)
  const accessToken = useSelector((store) => store.user.login.accessToken)
  const name = useSelector((store) => store.user.login.name)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (event) => {
    event.preventDefault()
    dispatch(userLogin(email, password))
    setEmail('')
    setPassword('')
    //history.push('/')
  }

  const handleGoToProducts = () => {
    history.push('/products')
  }

  const handleLogout = () => {
    dispatch(user.actions.setLogOut())
    //dispatch(cart.actions.clearCart())
    history.push('/')
  }

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
            value={email}
            onChange={(event) => setEmail(event.target.value)} />
        </Label>
        <Label>
          Password
          <InputField
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)} />
        </Label>
        <Button type="submit" text="Login" />
      </Form>}
    </FormContainer>
  )
}

const LoggedIn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  div{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70%;
    @media (min-width: 1024px){
      width: 40%;
    }
  }
`
