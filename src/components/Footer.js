import React from 'react'
import styled from 'styled-components'

export const Footer = () => {
  return (
    <CustomFooter>
      <p>Made by Ellen Björkman</p>
    </CustomFooter>
  )
}

const CustomFooter = styled.footer`
  text-align: center;
  background: #cdd0cb;
  height: 100px;
`