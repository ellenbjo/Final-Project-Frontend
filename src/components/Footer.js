import React from 'react'
import styled from 'styled-components'

export const Footer = () => {
  return (
    <CustomFooter>
      <p>Here is a footer</p>
    </CustomFooter>
  )
}

const CustomFooter = styled.footer`
  border: 1px solid black;
`