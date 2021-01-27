import React from 'react'
import styled from 'styled-components'

export const Button = ({ text, onButtonClick, type }) => {
  return (
    <CustomButton onClick={onButtonClick} type={type}>
      {text}
    </CustomButton>
  )
}

const CustomButton = styled.button`
  //remove default styling
  font-family: inherit; 
  font-size: 100%; 
  line-height: 1.15; 
  margin-top: 10px;
  text-transform: none;
  overflow: visible;
  -webkit-appearance: button;
  //custom styling
  background: #555555; 
  color: whitesmoke;
  border: 0;
  padding: 8px;
  width: 100%;
  @media (min-width: 700px){
    width: 70%;
  }
  @media (min-width: 1024px){
    width: 40%;
  } 
`