import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { Header, Content } from './containers'
import themeReducer from './reducers/themeReducer'
import './index.css'


const store = createStore(themeReducer);

class Index extends Component {

  render () {
    return (
      <div>
        <Header />
        <Content />
      </div>
    )
  }
}

ReactDOM.render(
  <Provider store={store}>
    <Index />
  </Provider>,
  document.getElementById('root')
)

