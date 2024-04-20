import { createBrowserRouter } from 'react-router-dom'
import Sobre from './pages/sobre'
import Home from './pages/home'
import NotFound from './pages/404'
import Tasks from './pages/tasks'
import Formulario from './pages/form'

const routes = createBrowserRouter([
  {path: '/home', element: <Home />, errorElement: <NotFound/>}, // errorElement só precisa estar na raiz
  {path: '/sobre', element:<Sobre />},
  {path: '/formulario', element:<Formulario />},
  {path: '/tarefa', element:<Tasks />}
])

export default routes //prof usou router
