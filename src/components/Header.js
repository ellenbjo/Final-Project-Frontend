import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

export const Header = () => {
  const accessToken = useSelector((store) => store.user.login.accessToken)

  return (
    <CustomHeader>
      <Link to='/'>
        <h2>COMPANY NAME</h2>
      </Link>
      <List>
        <Link to='/users/profile'>
          <LinkText>My Page</LinkText>
        </Link>
        {!accessToken &&
        <Link to='/login'>
          <LinkText>Log in</LinkText>
        </Link>}
        <Link to='/cart'>
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