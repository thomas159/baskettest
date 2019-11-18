import React from 'react'
import { hot } from 'react-hot-loader'
import Main from './components/Main'
import 'sanitize.css';

class App extends React.Component {
  render() {
    return(
      <Main />
    )
  }
}

export default hot(module)(App)