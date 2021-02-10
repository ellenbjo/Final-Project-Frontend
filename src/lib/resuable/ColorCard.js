import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const ColorCard = ({ text, path, paragraph, color }) => {
  return (
    <CustomCard color={color}>
      <Link to={path}>
      <Border>
        
          <LinkText>{text}</LinkText>
          <LinkParagraph>{paragraph}</LinkParagraph>
        
      </Border>
      </Link>
    </CustomCard>
  )
}

const CustomCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 720px;
  background: ${({ color }) => `${color}`};
  a{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80%;
    width: 80%;
  }
  @media (min-width: 700px){
    width: 50%;
    flex-grow: 1;
  }
  @media (min-width: 1024px){
    width: 25%;
    flex-grow: 1;
  }
`

const LinkText = styled.h3`
  font-size: 50px;
  padding: 5px 20px;
  font-weight: lighter;
  color: whitesmoke;
`

const LinkParagraph = styled.p`
  font-size: 45px;
  font-family: 'Source Serif Pro', serif;
  color: whitesmoke;
  margin-top: 0;
`

const Border = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: 0.3px solid whitesmoke;
  height: 100%;
  width: 100%;
`