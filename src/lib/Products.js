import styled from 'styled-components'

//reuse this components and put in lib
//same flex-box design for designers
export const ProductsPageContainer = styled.section`
  display: flex; 
  flex-direction: column;
  align-items: center;
`

export const AllProductsContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  @media (min-width: 700px){
    width: 100%;
  }
  @media (min-width: 1024px){
    width: 70%;
  }
`

export const ProductCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  margin: 10px;
  @media (min-width: 700px){
    width: 30%;
    margin: 10px;
  }
  @media (min-width: 1024px){
    width: 25%;
  }
`

export const ProductImage = styled.img`
  width: 100%;
  height: 80%;
  object-fit: cover;
`