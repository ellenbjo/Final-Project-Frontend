import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { ui } from '../reducers/ui'
import { ProductsPageContainer, AllProductsContainer } from '../lib/Products'
import { Loader } from '../components/Loader'

export const Designers = () => {
  const dispatch = useDispatch()
  const isLoading = useSelector((store) => store.ui.loading)
  const [designers, setDesigners] = useState([])

  const fetchDesigners = () => {
    const URL = 'https://ellen-final-project.herokuapp.com/designers'

    fetch(URL)
      .then((response) => response.json())
      .then((json) => {
        dispatch(ui.actions.setLoading(false))
        setDesigners(json)
      })
      .catch((error) => console.log(error))
  }

  useEffect(() => {
    dispatch(ui.actions.setLoading(true))
    fetchDesigners()
  }, [])

  return (
    <DesignersPageContainer>
      <h2>All Designers</h2>
      <p>A short text about this page</p>
      <AllDesignersContainer>
        {designers.map((designer) => (
          <Link to={`designers/${designer._id}/products`}>
            <DesignerCard key={designer._id} imgUrl={designer.imageUrl}>
              <div>
                <h3>{designer.name}</h3>
              </div>
            </DesignerCard>
          </Link>
        ))}
      </AllDesignersContainer>
      {isLoading && <Loader />}
    </DesignersPageContainer>
  )
}

const DesignersPageContainer = styled(ProductsPageContainer)`

`

const AllDesignersContainer = styled(AllProductsContainer)`
  a{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 700px){
      width: 45%;
      margin: 10px;
    }
  }
`

const DesignerCard = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background-image: ${({ imgUrl }) => `url(${imgUrl})`};
  height: 300px;
  justify-content: center;
  h3{
    color: #555555;
    font-size: 25px;
  }
  @media (min-width: 700px){
    background-position: center;
  }
`