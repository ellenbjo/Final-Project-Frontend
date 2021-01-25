import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

export const ProductDetailPage = () => {
  const { productId } = useParams()
  const [id, setId] = useState('')
  const [product, setProduct] = useState([])

  const fetchProductDetails = (id) => {
    const URL = `https://ellen-final-project.herokuapp.com/products/${id}`

    fetch(URL)
      .then((response) => response.json())
      .then((json) => {
        setProduct(json)
        setId(json._id)
        console.log(json)
      })
      .catch((error) => console.error(error))
  }

  useEffect(() => {
    fetchProductDetails(productId)
  }, [productId])

  return (
    <ProductPageContainer>
      <ProductWrapper>
        <ProductImage src={product.imageUrl} alt={product.name} />
        <div>
          <h3>{product.name}</h3>
          <p>{product.price} kr</p>
        </div>
      </ProductWrapper>
    </ProductPageContainer>
  )
}

const ProductPageContainer = styled.section`
  padding-top: 30px;
  background: #e5dfd3;
  @media (min-width: 1024px){
    display: flex;
    justify-content: center;
  }
`

const ProductWrapper = styled.div`
  background: white;  
  display: flex; 
  flex-direction: column; 
  align-items: center;
  @media (min-width: 700px){
    flex-direction: row;
  }
  @media (min-width: 1024px){
    width: 70%;
  }
`

const ProductImage = styled.img`
  width: 90%;
  object-fit: cover;
  @media (min-width: 700px){
    width: 40%; 
    padding: 20px;
  }
  @media (min-width: 1024px){
    width: 30%;
  }
`