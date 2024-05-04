//React Router - npm i react-router-dom
//Arquivos são .tsx
// {} no canto inferior -> select version -> workspace

//Chakra UI -> npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion
//Chakra template <- template de componentes feitos com Chakra
//npm i react-icons
//npm i axios   <- facilita consumir APIs


import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider} from 'react-router-dom'
import routes from './routes'
import { ChakraProvider } from '@chakra-ui/react'
import './App.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={routes} />
    </ChakraProvider>
  </React.StrictMode>
)
