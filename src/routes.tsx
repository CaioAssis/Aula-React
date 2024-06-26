import { createBrowserRouter } from 'react-router-dom'
import Sobre from './pages/sobre'
import Home from './pages/home'
import NotFound from './pages/404'
import Tasks from './pages/tasks'
import Formulario from './pages/form'
import Cadastro from './pages/cadastro'
import Login from './pages/login'

const routes = createBrowserRouter([
  {path: '/', element: <Home />, errorElement: <NotFound/>},
  {path: '/home', element: <Home />}, // errorElement só precisa estar na raiz
  {path: '/sobre', element:<Sobre />},
  {path: '/formulario', element:<Formulario />},
  {path: '/tarefa', element:<Tasks />},
  {path: '/cadastro', element: <Cadastro/>},
  {path: '/login', element: <Login/>}
])

export default routes //prof usou router
