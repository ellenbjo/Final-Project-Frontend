import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { userSignup } from '../reducers/userThunks'
import { AuthenticationLinks } from 'components/AuthenticationLinks'
import { Form, FormContainer, Label } from '../lib/Form'

export const Signup = () => {
  const dispatch = useDispatch()

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

  return (
    <FormContainer>
      <AuthenticationLinks />
      <Form onSubmit={handleSignup}>
        <Label>
          Name
          <input 
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </Label>
        <Label>
          Email
          <input 
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </Label>
        <Label>
          Password
          <input 
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </Label>
        <Label>
          Street
          <input 
            value={street}
            onChange={(event) => setStreet(event.target.value)}
          />
        </Label>
        <Label>
          Postal code
          <input
            value={postalCode}
            onChange={(event) => setPostalCode(event.target.value)}
          />
        </Label>
        <Label>
          City
          <input 
            value={city}
            onChange={(event) => setCity(event.target.value)}
          />
        </Label>
        <Label>
          Phone number
          <input 
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
          />
        </Label>
        <button type='submit'>
          Sign up
        </button>
      </Form>
    </FormContainer>

  )

}