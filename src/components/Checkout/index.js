import React from 'react'
import { connect } from "react-redux";
import * as actionCreators from './actions'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
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
  flex: 33.33%;
`

const Price = styled.div`
  flex: 33.333%;
`

const Remove = styled(Button)`
 flex: 33.333%;
`

class Checkout extends React.Component {
  render() {
    const { basket, products, removeFromBasket } = this.props
    return(
     <div>
     <Link to="/">Continue shopping</Link>
      <Grid>
        {products.filter(product => basket.includes(product.sku)).map(product =>
          <Cell key={product.sku}>
            <Name>{product.name}</Name>
            <Price>{product.price}</Price>
            <Remove
              key={product.sku}
              onClick={() => removeFromBasket(product.sku)}>Remove</Remove>
          </Cell>
        )}
      </Grid>

     </div>
    )
  }
}

const mapStateToProps = state => ({
  products: state.products.products,
  basket: state.basket
});

export default connect(mapStateToProps, actionCreators)(Checkout);