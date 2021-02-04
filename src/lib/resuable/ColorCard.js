import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const ColorCard = ({ text, path, paragraph, color }) => {
  return (
    <CustomCard color={color}>
      <div>
        <Link to={path}>
          <h3>{text}</h3>
          <p>{paragraph}</p>
        </Link>
      </div>
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
  @media (min-width: 700px){
    width: 50%;
    flex-grow: 1;
  }
  @media (min-width: 1024px){
    width: 25%;
    flex-grow: 1;
  }
  div{
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    border: 0.3px solid whitesmoke;
    height: 80%;
    width: 80%;
  }
  h3{
    font-size: 50px;
    padding: 5px 20px;
    font-weight: lighter;
    color: whitesmoke;
  }
  p{
    font-size: 45px;
    font-family: 'Source Serif Pro', serif;
    color: whitesmoke;
  }
`