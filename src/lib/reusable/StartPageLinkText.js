import React from 'react'
import styled from 'styled-components'

export const StartPageLinkText = ({ text }) => {
  return (
    <LinkText>{text}</LinkText>
  )
}

const LinkText = styled.h3`
  font-size: 20px;
  border: 0.3px solid whitesmoke;
  padding: 17px 24px;
  font-weight: lighter;
  color: whitesmoke;
  transition: ease 0.5s;
  :hover{
    background: rgba(46, 49, 49, 0.3);
  }
`