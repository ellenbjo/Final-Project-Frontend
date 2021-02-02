import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { ImageCard } from '../lib/resuable/ImageCard'
import { ColorCard } from '../lib/resuable/ColorCard'

export const StartPage = () => {
  return (
    <StartPageContainer>
      <HeroSection>
        <div>
          <h1>
            NEW ARRIVALS
          </h1>
          <p>Carefully selected products.</p>
          <Link to='/products'>
            <h2>Shop Products</h2>
          </Link>
        </div>
      </HeroSection>
      <SecondSection>
        <ImageCard text="test3" path="/products" imageUrl="https://res.cloudinary.com/dztqyanvb/image/upload/v1612278091/products/pexels-elika-margaretha-4898516_xuavth.jpg" />
        <ColorCard text="Sign up today" paragraph="Get 20% off" path="/signup" />
        <ImageCard text="test" path="/products" imageUrl="https://res.cloudinary.com/dztqyanvb/image/upload/v1611155887/products/pexels-cottonbro-4277097_wig5hy.jpg" />
      </SecondSection>
    </StartPageContainer>
  )
}

const StartPageContainer = styled.section`
  width: 100%;
`

const HeroSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url('https://res.cloudinary.com/dztqyanvb/image/upload/v1612278470/Startpage/pexels-cottonbro-4277099_ajoh7f.jpg');
  height: 800px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  color: whitesmoke;
  div{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  h1{
    font-size: 40px;
    font-weight: lighter;
    //text-shadow: 1.5px 1.5px #cdd0cb;
  }
  h2{
    font-size: 50px;
    border: 0.3px solid whitesmoke;
    padding: 10px;
    color: whitesmoke;
    font-weight: lighter;
    //text-shadow: 1.5px 1.5px #cdd0cb;
  }
  p{
    font-size: 20px;
  }
`
const SecondSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media (min-width: 1024px){
    flex-direction: row;
    padding-top: 50px;
  }
`
