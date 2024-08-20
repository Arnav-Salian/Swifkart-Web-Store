import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {HelmetProvider} from 'react-helmet-async'

import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

import productsReducer from './features/productsSlice.js'

const store = configureStore({
  reducer:{
    products: productsReducer,
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </HelmetProvider>
  </React.StrictMode>,
)
