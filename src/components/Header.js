import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Header = () => {
  return (
    <CustomHeader>
      <Link to='/'>
        <h2>COMPANY NAME</h2>
      </Link>
      <List>
        <Link to='/login'>
          <LinkText>Log in</LinkText>
        </Link>
        <Link to='/login'>
          <LinkText>Cart</LinkText>
        </Link>
      </List>
    </CustomHeader>
  )
}

const CustomHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`
const List = styled.ul`
  display: flex;
`
const LinkText = styled.li`
  margin-right: 20px;
`