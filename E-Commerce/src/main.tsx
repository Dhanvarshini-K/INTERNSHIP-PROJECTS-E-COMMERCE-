import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import ShopContextProvider from './components/Page_Content/Context/shopContext.tsx'
import { Provider } from 'react-redux'
import store from './components/Page_Content/Redux/store.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ShopContextProvider>
        <Provider store={store} >
        <App />
        </Provider>
      </ShopContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
