import React from 'react'
import moment from 'moment'
import styled from 'styled-components'

export const OrderItem = ({ order }) => {
  return (
    <OrderListItem>
      <p>
        <Bold>Order:</Bold>
        {moment(order.createdAt).format('YYYY-MM-DD')}
      </p>
      {order.products.map((product) => (
        <p key={product._id}>
          {product.quantity} {product.name}
        </p>
      ))}
    </OrderListItem>
  )
}

const OrderListItem = styled.li`
  border-top: 0.5px solid whitesmoke;
`

const Bold = styled.span`
  font-weight: bolder;
`
