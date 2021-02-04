import React from 'react'
import styled from 'styled-components'

export const Footer = () => {
  return (
    <CustomFooter>
      <div>
        <ul>
          <a
            tagret="_blank"
            href="https://portfolio-ellen.netlify.app/"
            rel="noopener noreferrer">
            <li>
            Portfolio
            </li>
          </a>
          <a
            tagret="_blank"
            href="https://github.com/ellenbjo"
            rel="noopener noreferrer">
          Github
          </a>
        </ul>
        <p>Made by Ellen Björkman</p>
      </div>
    </CustomFooter>
  )
}

const CustomFooter = styled.footer`
  display: flex;
  background: #91A5A1;
  height: 200px;
`