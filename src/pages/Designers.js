import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Designers = () => {
  const [designers, setDesigners] = useState([])

  const fetchDesigners = () => {
    const URL = 'https://ellen-final-project.herokuapp.com/designers'

    fetch(URL)
      .then((response) => response.json())
      .then((json) => {
        setDesigners(json)
        console.log(json)
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
          <ProductContainer key={designer._id}>
            {console.log(`${designer._id}`)}
            <Link to={`designers/${designer._id}/products`}>
              <p>{designer.name}</p>
            </Link>
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