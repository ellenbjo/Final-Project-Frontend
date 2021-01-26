import React from 'react'

export const CartItem = ({ product }) => {

  return (
    <li>
      <div>
        <img src={product.imageUrl} alt={product.name}/>
        <p>{product.name}</p>
        <p>{product.price} kr</p>
      </div>
      <div>
        <button>+</button>
        <span>{product.quantity}</span>
        <button>-</button>
      </div>
    </li>
  )
}