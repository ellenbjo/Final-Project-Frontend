import React from 'react'
import styled from 'styled-components'

export const Loader = () => {
  return (
    <LoaderContainer>
      <LoadingText>Loading...</LoadingText>
    </LoaderContainer>
  )
}

const LoaderContainer = styled.div`
  color: #555555;
  text-align: center;
`

const LoadingText = styled.div`
  font-size: 18px;
`
