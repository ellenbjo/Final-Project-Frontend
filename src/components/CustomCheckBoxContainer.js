import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

export const CustomCheckBoxContainer = () => {
  const [checked, setChecked] = useState(false)

  const handleOnChange = event => {
    setChecked(event.target.checked)
  }

  const Checkbox = ({checked, ...props}) => (
    <Container>
      <HiddenCheckBox checked={checked} {...props} />
      <StyledCheckbox checked={checked}>
        <Icon viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      </StyledCheckbox>
    </Container>
  )

  return (
    <div>
      <label>
        <Checkbox checked={checked} onChange={handleOnChange}/>
      </label>
    </div>
  )
}

const Icon = styled.svg`
  fill: none; 
  stroke: white;
  stroke-width: 2px;
`

const HiddenCheckBox = styled.input.attrs({type:'checkbox'})`
  border: 0;
  clip: rect(0 0 0 0 );
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

const Container = styled.div`
  display: inline-block;
  vertical-align: middle;
`

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 3px;
  cursor: pointer;
  background: ${props => (props.checked ? '#f39422' : 'lightgrey')};
  border: ${props => (props.checked ? '#537ec5 0.5px solid' : '#010038 0.5px solid')};
  transition: all 150ms;
  ${Icon} { /* displays depending on if the state variable is checked or not*/
    visibility: ${(props) => (props.checked ? 'visible' : 'hidden')}
  }
  ${HiddenCheckBox}:focus + & {
    outline: 2px dotted #555555;
  }
`