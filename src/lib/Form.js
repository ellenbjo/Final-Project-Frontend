import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  background: #cdd0cb;
  width: 80%;
  padding: 20px;
  @media (min-width: 700px){
    align-items: center;
    width: 60%;
  }
  @media (min-width: 1024px){
    align-items: center;
    width: 30%;
  }
`
export const FormContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #e8eae6;
`

export const Label = styled.label`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  @media (min-width: 700px){
    width: 70%;
  }
`

export const InputField = styled.input`
  border: none;
  height: 30px;
  outline: none;
`

export const LoggedIn = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 80%;
div{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  @media (min-width: 1024px){
    width: 40%;
  }
}
`