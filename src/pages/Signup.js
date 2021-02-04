import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { userSignup } from '../reducers/userThunks'
import { LoginSignupLinks } from '../components/LoginSignupLinks'
import {
  Form,
  FormContainer,
  Label,
  InputField
} from '../lib/Form'
import { Button } from '../lib/resuable/Button'

export const Signup = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const errorMessage = useSelector((store) => store.user.login.errorMessage)

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
    history.push('/')
  }

  return (
    <FormContainer>
      <LoginSignupLinks />
      <Form onSubmit={handleSignup}>
        <Label>
          Name
          <InputField
            value={name}
            onChange={(event) => setName(event.target.value)} />
        </Label>
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
        <Label>
          Street
          <InputField
            value={street}
            onChange={(event) => setStreet(event.target.value)} />
        </Label>
        <Label>
          Postal code
          <InputField
            value={postalCode}
            onChange={(event) => setPostalCode(event.target.value)} />
        </Label>
        <Label>
          City
          <InputField
            value={city}
            onChange={(event) => setCity(event.target.value)} />
        </Label>
        <Label>
          Phone number
          <InputField
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)} />
        </Label>
        <Button type="submit" text="Sign up" />
      </Form>
    </FormContainer>

  )
}

