//React Router - npm i react-router-dom
//Arquivos são .tsx
// {} no canto inferior -> select version -> workspace


import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Sobre from './pages/sobre'
import Home from './pages/home'
import NotFound from './pages/404'

const router = createBrowserRouter([
  {path: '/', element: <Home />, errorElement: <NotFound/>}, // errorElement só precisa estar na raiz
  {path: '/sobre', element:<Sobre />}
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
