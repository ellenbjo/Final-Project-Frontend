import React, { useState } from 'react'

import { AuthenticationLinks } from 'components/AuthenticationLinks'
import { Form, FormContainer, Label } from '../lib/Form'

export const Signup = () => {

  return (
    <FormContainer>
      <AuthenticationLinks />
      <Form>
        <Label>
          Name
          <input 
            type="text"
          />
        </Label>
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
        <Label>
          Street
          <input 
            type="text"
          />
        </Label>
        <Label>
          Postal code
          <input 
            type="text"
          />
        </Label>
        <Label>
          City
          <input 
            type="text"
          />
        </Label>
        <Label>
          Phone number
          <input 
            type="text"
          />
        </Label>
      </Form>
    </FormContainer>

  )

}