import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import Fade from 'react-reveal'

import { ui } from '../reducers/ui'
import {
  ProductsPageContainer,
  AllProductsContainer,
  ProductCard,
  ProductImage,
  ImageWrapper,
  ProductText,
  PageHeader
} from '../lib/Products'
import { Loader } from '../components/Loader'

export const DesignerProducts = () => {
  const dispatch = useDispatch()
  const isLoading = useSelector((store) => store.ui.loading)
  const { id } = useParams()
  const [products, setProducts] = useState([])

  const fetchProducts = (designerId) => {
    const URL = `https://ellen-final-project.herokuapp.com/designers/${designerId}/products`

    fetch(URL)
      .then((response) => response.json())
      .then((json) => {
        dispatch(ui.actions.setLoading(false))
        setProducts(json)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    dispatch(ui.actions.setLoading(true))
    fetchProducts(id)
  }, [id])

  return (
    <ProductsPageContainer>
      <PageHeader>
        <h2>PRODUCTS FROM</h2>
      </PageHeader>
      <AllProductsContainer>
        {products.map((product) => (
          <ProductCard key={product._id}>
            <Fade bottom>
              <Link to={`/products/${product._id}`}>
                <ImageWrapper>
                  <ProductImage src={product.imageUrl} alt={product.name} />
                </ImageWrapper>
                <ProductText>
                  <h3>{product.name}</h3>
                  <p>{product.price} kr</p>
                </ProductText>
              </Link>
            </Fade>
          </ProductCard>
        ))}
      </AllProductsContainer>
      {isLoading && <Loader />}
    </ProductsPageContainer>
  )
}