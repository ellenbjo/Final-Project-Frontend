import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal'
import styled from 'styled-components'

import { ui } from '../reducers/ui'
import { 
  ProductsPageContainer,
  AllProductsContainer,
  PageHeader
} from '../lib/Products'
import { Loader } from '../components/Loader'

export const Designers = () => {
  const dispatch = useDispatch()
  const isLoading = useSelector((store) => store.ui.loading)
  const [designers, setDesigners] = useState([])
  const [error, setError] = useState('')

  const fetchDesigners = () => {
    const URL = 'https://ellen-final-project.herokuapp.com/designers'

    fetch(URL)
      .then((response) => response.json())
      .then((json) => {
        dispatch(ui.actions.setLoading(false))
        setDesigners(json)
      })
      .catch((err) => {
        dispatch(ui.actions.setLoading(false))
        setError(err)
      })
  }

  useEffect(() => {
    dispatch(ui.actions.setLoading(true))
    fetchDesigners()
  }, [])

  return (
    <DesignersPageContainer>
      <PageHeader>
        <h2>All Designers</h2>
      </PageHeader>
      <AllDesignersContainer>
        {designers.map((designer) => (
          <Link key={designer._id} to={`designers/${designer._id}/products`}>
            <Fade bottom>
              <DesignerCard key={designer._id} imgUrl={designer.imageUrl}>
                <TextBox>
                  <h3>{designer.name}</h3>
                </TextBox>
              </DesignerCard>
            </Fade>
          </Link>
        ))}
        {error && <p>No Designers were found. Please try to load the page again.</p>}
      </AllDesignersContainer>
      {isLoading && <Loader />}
    </DesignersPageContainer>
  )
}

const DesignersPageContainer = styled(ProductsPageContainer)`

`

const AllDesignersContainer = styled(AllProductsContainer)`
  @media (min-width: 1024px){
    width: 60%;
  }
  div{
    width: 100%;
  }
  a{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 10px;
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
    font-size: 20px;
  }
  @media (min-width: 700px){
    background-position: center;
  }
`

const TextBox = styled.span`
  color: whitesmoke;
  border: 0.5px solid whitesmoke;
  text-align: center;
  width: 40%;
  min-width: fit-content;
  padding: 0px 20px;
  transition: ease 0.5s;
  :hover{
    background: rgba(46, 49, 49, 0.3);
  }
`