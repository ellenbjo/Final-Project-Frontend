import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { ImageCard } from '../lib/reusable/ImageCard'
import { ColorCard } from '../lib/reusable/ColorCard'
import { StartPageLinkText} from '../lib/reusable/StartPageLinkText'

export const StartPage = () => {
  return (
    <StartPageContainer>
      <HeroSection>
        <HeroTextContainer>
          <HeroHeadline>NEW ARRIVALS</HeroHeadline>
          <HeroText>Carefully selected designs</HeroText>
          <Link to="/products">
            <StartPageLinkText text="Shop products" />
          </Link>
        </HeroTextContainer>
      </HeroSection>
      <SecondSection>
        <ImageCard text="Shop vases" path="/products" imageUrl="https://res.cloudinary.com/dztqyanvb/image/upload/v1612278091/products/pexels-elika-margaretha-4898516_xuavth.jpg" />
        <ColorCard text="Sign up today" paragraph="Get 20% off" path="/signup" color="#cdd0cb" />
        <ColorCard text="Spring inspiration" paragraph="" path="/products" color="#a59195" />
        <ImageCard text="Designers" path="/designers" imageUrl="https://res.cloudinary.com/dztqyanvb/image/upload/v1611155887/products/pexels-cottonbro-4277097_wig5hy.jpg" />
      </SecondSection>
    </StartPageContainer>
  )
}

const StartPageContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: #e8eae6;
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
`

const HeroTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const HeroHeadline = styled.h1`
  font-size: 40px;
  font-weight: lighter;
  letter-spacing: 1px;
  margin-bottom: 0; 
`

const HeroText = styled.p`
  font-size: 20px;
`

const SecondSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1700px;
  div {
    :nth-of-type(3) {
        display: none;
    }
  }
  @media (min-width: 700px) {
    flex-direction: row;
    flex-wrap: wrap;
    padding-top: 20px;
    div {
      :nth-of-type(3) {
          display: flex;
      }
    }
  }
  @media (min-width: 1024px) {
    align-self: center;
    div{
      :nth-of-type(3) {
          display: none;
      }
    }
  }
`
