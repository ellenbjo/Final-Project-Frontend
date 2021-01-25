import React, {useState, useEffect} from 'react'
import { useDispatch } from 'react-redux'

import { userLogin } from '../reducers/userThunks'
import { AuthenticationLinks } from '../components/AuthenticationLinks'
import { Form, FormContainer, Label } from '../lib/Form'

export const Login = () => {
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (event) => {
    event.preventDefault()
    dispatch(userLogin(email, password))
    setEmail('')
    setPassword('')
  }

  return (
    <FormContainer>
      <AuthenticationLinks />
      <Form onSubmit={handleLogin}>
        <Label>
          Email
          <input
            type='email'
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </Label>
        <Label>
          Password
          <input
            type='password'
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </Label>
        <button type='submit'>
          Log in
        </button>
      </Form>
    </FormContainer>
  )
}