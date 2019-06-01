import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore';
import './styles/styles.scss'
import 'materialize-css/dist/css/materialize.min.css'


import App from './components/App'

const store = configureStore();

const jsx = (
  // The provider knows how to read state from the redux store.
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));
