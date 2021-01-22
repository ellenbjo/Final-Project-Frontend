import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


export const StartPage = () => {

  return (
    <StartPageContainer>
      <h1>HEADLINE</h1>
      <Link to='/products'>
        <h2>Shop Products</h2>
      </Link>
    </StartPageContainer>
  )
}

const StartPageContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url('https://res.cloudinary.com/dztqyanvb/image/upload/v1611324894/Startpage/pexels-karolina-grabowska-4203098_2_dbvqam.jpg');
  height: 800px;
  background-repeat: no-repeat;
  background-position: center;
`