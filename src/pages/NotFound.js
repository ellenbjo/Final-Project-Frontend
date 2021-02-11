import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

import { Button } from '../lib/reusable/Button'

export const NotFound = () => {
  const history = useHistory()

  const handleGoToStart = () => {
    history.push('/')
  }

  return (
    <NotFoundContainer>
      <h2>NOT FOUND</h2>
      <p>Sorry, the page you are looking for could not be found.</p>
      <Button
        type="button"
        text="Go to start page"
        onButtonClick={handleGoToStart} />
    </NotFoundContainer>
  )
}

const NotFoundContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  button {
    width: 80%;
    @media (min-width: 700px){
      width: 50%;
    }
    @media (min-width: 1024px){
      width: 20%;
    }
  }
`