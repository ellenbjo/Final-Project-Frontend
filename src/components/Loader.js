import React from 'react'
import styled from 'styled-components'

export const Loader = () => {

  return (
    <LoaderContainer>
      <h2>Loading...</h2>
    </LoaderContainer>
  )
}

const LoaderContainer = styled.div`
  color: #555555;
`