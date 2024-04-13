import { createBrowserRouter } from 'react-router-dom'
import Sobre from './pages/sobre'
import Home from './pages/home'
import NotFound from './pages/404'

const routes = createBrowserRouter([
  {path: '/', element: <Home />, errorElement: <NotFound/>}, // errorElement só precisa estar na raiz
  {path: '/sobre', element:<Sobre />}
])

export default routes //prof usou router
