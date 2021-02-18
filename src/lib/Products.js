import styled from 'styled-components'

export const ProductsPageContainer = styled.section`
  display: flex; 
  flex-direction: column;
  align-items: center;
  background: #e8eae6;
`

export const PageHeader = styled.div`
  width: 90%;
  display: flex;
  justify-content: flex-start;
  h2 {
    font-size: 20px;
  }
  @media (min-width: 1024px) {
    width: 60%;
  }
`

export const AllProductsContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  @media (min-width: 1200px) {
    width: 80%;
  }
  @media (min-width: 1500px) {
    width: 70%;
  }
`

export const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 60vh;
  margin: 10px;
  @media (min-width: 700px) {
    width: 30%;
    margin: 8px;
  }
  @media (min-width: 1024px) {
    width: 25%;
  }
`

export const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all .5s ease;
  :hover {
    transform: scale(1.05);
  }
`

export const ImageWrapper = styled.div`
  height: 80%;
  width: 100%;
  overflow: hidden; 
  @media (min-width: 700px) {
    height: 400px;
  }
  @media (min-width: 1600px) {
    height: 460px;
  }
`

export const ProductText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: whitesmoke;
  height: 20%;
  padding: 0 10px 0 10px;
  h3 {
    font-size: 18px;
    margin-bottom: 8px;
  }
  p {
    font-size: 16px;
    align-self: flex-end;
  }
  @media (min-width: 700px) {
    h3 {
      font-size: 18px;
    }
    p {
      font-size: 16px;
    }
  }
`
