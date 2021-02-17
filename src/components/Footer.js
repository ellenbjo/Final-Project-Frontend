import React from 'react'
import styled from 'styled-components'

export const Footer = () => {
  return (
    <CustomFooter>
      <ListContainer>
        <List>
          <a
            target="_blank"
            href="https://portfolio-ellen.netlify.app/"
            rel="noopener noreferrer">
            <li>
              Portfolio
            </li>
          </a>
          <a
            target="_blank"
            href="https://github.com/ellenbjo"
            rel="noopener noreferrer">
            <li>
              Github
            </li>
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/ellen-bj%C3%B6rkman-86947a104/"
            rel="noopener noreferrer">
            <li>
              Linkedin
            </li>
          </a>
        </List>
        <p>Made by Ellen Björkman</p>
      </ListContainer>
    </CustomFooter>
  )
}

const CustomFooter = styled.footer`
  display: flex;
  background: #91A5A1;
  margin-top: 20px;
  padding-bottom: 100px;
  @media (min-width: 1024px) {
    justify-content: center;
  }
`

const ListContainer = styled.div`
  padding: 20px;
  font-size: 17px;
  opacity: 0.8;  
  @media (min-width: 1024px) {
    padding-left: 0;
    width: 60%;
  }
`

const List = styled.ul`
  padding-left: 0;
  a {
    :hover {
      text-decoration: underline;
    }
  }
`
