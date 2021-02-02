import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { userLogin } from '../reducers/userThunks'
import { AuthenticationLinks } from '../components/AuthenticationLinks'
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
  const errorMessage = useSelector((store) => store.user.login.errorMessage)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (event) => {
    event.preventDefault()
    dispatch(userLogin(email, password))
    setEmail('')
    setPassword('')
    history.push('/')
  }

  return (
    <FormContainer>
      <AuthenticationLinks />
      <Form onSubmit={handleLogin}>
        <Label>
          Email
          <InputField
            type='email'
            value={email}
            onChange={(event) => setEmail(event.target.value)} />
        </Label>
        <Label>
          Password
          <InputField
            type='password'
            value={password}
            onChange={(event) => setPassword(event.target.value)} />
        </Label>
        <Button type='submit' text="Login"/>
      </Form>
    </FormContainer>
  )
}
