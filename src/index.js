import React from 'react'
import {createRoot} from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import Store from './Features/Store/Store'
import {Provider} from 'react-redux'
import App from './App'
import './index.css'
const Container = document.getElementById('root')
const Root = createRoot(Container)
Root.render(
<BrowserRouter>
   <Provider store={Store}>
      <App/>
   </Provider>
</BrowserRouter>
)