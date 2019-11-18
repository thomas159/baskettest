import React from 'react'
import styled from 'styled-components'
import Basket from '../reusable/Basket'

const Wrap =  styled.div`
  display: flex;
  background: rgba(0,0,0,0.8);

`

const Cell = styled.div`
  flex: 75%;
  &:nth-child(2) {
    flex: 25;
  }
`
const Header = ({basket}) => (
  <Wrap>
    <Cell></Cell>
    <Cell><Basket basket={basket} /></Cell>

  </Wrap>
)

export default Header