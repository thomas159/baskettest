import React from 'react'
import styled from 'styled-components'
import * as palette from './Variables'

const Wrap = styled.div`
  width: 100%;
  height: 100%:
  background: ${palette.purple};
  color: #fff;
`

const Basket = ({basket}) => (
  <Wrap>Basket: {basket.length}</Wrap>
)

export default Basket