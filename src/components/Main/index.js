import React from 'react'
import { connect } from "react-redux";
import * as actionCreators from './actions'
import 'sanitize.css';
import Container from '../reusable/Container'
import * as palette from '../reusable/variables'
import { BrowserRouter as Router, Route, Switch, browserHistory  } from 'react-router-dom'
import ProductsList from '../ProductsList'
import styled from 'styled-components'
import Header from '../Header'
import Checkout from '../Checkout'

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  background: ${palette.lightBlue}
`
class Main extends React.Component {

  componentDidMount() {
    this.props.fetchProducts()
  }

  render() {
    const { basket, products } = this.props
    return(
     <Wrap>
      <Router>
       <Header basket={basket}/>
       <Container>
       <Switch location={location}>
         <Route exact path="/" >
         <ProductsList />
         </Route>
         <Route exact path="/checkout" >
          <Checkout />
         </Route>
       </Switch>
       </Container>
       </Router>
     </Wrap>
    )
  }
}

const mapStateToProps = state => ({
  products: state.products.products,
  basket: state.basket
});

export default connect(mapStateToProps, actionCreators)(Main);