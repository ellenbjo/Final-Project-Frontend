import React from 'react'
import styled from 'styled-components'

export const Burger = ({ open, setOpen }) => {
  return (
    <BurgerMenu open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </BurgerMenu>
  )
}

const BurgerMenu = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 1.5rem;
  height: 1.5rem;
  background: transparent;
  border: none;
  padding: 0;
  z-index: 10;
  margin-left: 20px;
  margin-right: 15px;
  &:focus {
    outline: none;
  }
  div {
    background: #555555;
    width: 1.5rem;
    height: 0.15rem;
    border-radius: 10px;
    transition: all 0.3s linear;
    transform-origin: 1px;
    //animates the burger in to an X
    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }
    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
  @media (min-width: 1024px){
    display: none;
  }
`