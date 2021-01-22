import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

import { AuthenticationLinks } from '../components/AuthenticationLinks'
import { Form, FormContainer, Label } from '../lib/Form'

export const Login = () => {

  return (
    <FormContainer>
      <AuthenticationLinks />
      <Form>
        <Label>
          Email
          <input 
            type="text"
          />
        </Label>
        <Label>
          Password
          <input 
            type="password"
          />
        </Label>
      </Form>
    </FormContainer>
  )
}