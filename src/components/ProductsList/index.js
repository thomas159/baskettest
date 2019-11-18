import React from 'react'
import { connect } from "react-redux";
import{ Link } from 'react-router-dom'
import * as actionCreators from './actions'
import 'sanitize.css';
import styled from 'styled-components'
import Button from '../reusable/Button'

const Grid = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`

const Cell = styled.li`
  display: flex;
  width: 100%:
`

const Name = styled.div`
  flex: 33.333%;
`

const Price = styled.div`
  flex: 33.333%;
`

const ButtonWrap = styled.div`
  flex: 33.333%:
`

const StyledButton = styled(Link)`

`
class ProductsList extends React.Component {

  render() {
    const { products } = this.props
    return(
     <div>
       <Grid>
         {products.map( product =>
          <Cell key={product.sku}>
            <Name>{product.name}</Name>
            <Price>{product.price}</Price>
            <ButtonWrap onClick={() => this.props.addToBasket(product.sku)}><Button>Add to cart</Button></ButtonWrap>
          </Cell>
        )}
       </Grid>
       <StyledButton to="/checkout">Proceed to checkout</StyledButton>
     </div>
    )
  }
}

const mapStateToProps = state => ({
  products: state.products.products,
});

export default connect(mapStateToProps, actionCreators)(ProductsList);