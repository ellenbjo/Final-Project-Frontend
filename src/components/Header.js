import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

export const Header = () => {
  const accessToken = useSelector((store) => store.user.login.accessToken)

  return (
    <CustomHeader>
      <Link to='/'>
        <CompanyName>COMPANY NAME</CompanyName>
      </Link>
      <List>
        {accessToken &&
          <Link to='/users/profile'>
            <LinkText>My Page</LinkText>
          </Link>}
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
  background: #e8eae6;
`
const List = styled.ul`
  display: flex;
`
const LinkText = styled.li`
  margin-right: 20px;
`
const CompanyName = styled.h2`
  color: #7c9473;
  font-weight: semi-bold;
`