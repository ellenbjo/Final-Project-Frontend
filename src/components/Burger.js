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
  left: 2rem;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  padding: 0;
  z-index: 10;
  top: 4.5%;
  position: absolute;
  @media (min-width: 700px){
    top: 3.5%;
  }
  @media (min-width: 1024px){
    display: none;
  }
  &:focus {
    outline: none;
  }
  div {
    background: #555555;
    width: 2rem;
    height: 0.25rem;
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
`