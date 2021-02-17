import React from 'react'
import styled from 'styled-components'

import { PageHeader, ProductsPageContainer } from '../lib/Products'

export const About = () => {
  return (
    <AboutContainer>
      <PageHeader>
        <h2>About CLAY</h2>
      </PageHeader>
      <TextContainer>
        <p>This fictional web shop was built for my final project during the Technigo Frontend Bootcamp. The front-end is built in React and Redux, navigation using React Router and styling using styled components. The back-end is built in Node.js, Mongoose and with a MongoDB database.
        </p>
        <p>Enjoy your visit!</p>
        <p>/Ellen</p>
      </TextContainer>
    </AboutContainer>
  )
}

const AboutContainer = styled(ProductsPageContainer)`

`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  word-wrap: break-word;
  padding: 50px;
  @media (min-width: 700px) {
    width: 60%;
  }
  @media (min-width: 1024px) {
    width: 30%;
  }
`
