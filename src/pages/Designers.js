import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

export const Designers = () => {
  const [designers, setDesigners] = useState([])

  const fetchDesigners = () => {
    const URL = 'http://localhost:8081/designers'

    fetch(URL)
      .then((response) => response.json())
      .then((json) => {
        setDesigners(json)
      })
      .catch((error) => console.log(error))
  }

  useEffect(()=> {
    fetchDesigners()
  }, [])

  return (
    <div>
      <AllProductsContainer>
        {designers.map((designer) => (
          <ProductContainer>
            <p>{designer.name}</p>
          </ProductContainer>
        ))}
      </AllProductsContainer>
    </div>
  )
}


const AllProductsContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
`

const ProductContainer = styled.div`
  width: 30%;
  border: black solid 1px;
`