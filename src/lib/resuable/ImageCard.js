import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const ImageCard = ({ text, path, imageUrl }) => {
  return (
    <CustomCard imageUrl={imageUrl}>
      <Link to={path}>
        <h3>{text}</h3>
      </Link>
    </CustomCard>
  )
}

const CustomCard = styled.div`
  background-image: ${({imageUrl}) => `url(${imageUrl})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 720px;
  @media (min-width: 700px){
    width: 50%;
    flex-grow: 1;
  }
  @media (min-width: 1024px){
    width: 25%;
    flex-grow: 1;
  }
  h3{
    font-size: 50px;
    border: 0.3px solid whitesmoke;
    padding: 5px 20px;
    font-weight: lighter;
    color: whitesmoke;
  }
`