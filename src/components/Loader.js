import React from 'react'
import styled from 'styled-components'

export const Loader = () => {
  return (
    <LoaderContainer>
      <Loader>Loading...</Loader>
    </LoaderContainer>
  )
}

const LoaderContainer = styled.div`
  color: #555555;
  text-align: center;
`

const Loader = styled.div`
  font-size: 18px;
`