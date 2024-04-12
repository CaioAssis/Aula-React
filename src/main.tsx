//React Router - npm i react-router-dom
//Arquivos são .tsx

import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Sobre from './pages/sobre'
import Home from './pages/home'

const router = createBrowserRouter([
  {path: '/', element: <Home />},
  {path: '/sobre', element:<Sobre />}
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
