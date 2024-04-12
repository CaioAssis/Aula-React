import { Link } from "react-router-dom"


function NotFound(){
    return(
        <>
            <h1>404</h1>
            <p>Página não Encontrada</p>
            <Link to='/'>Voltar para Home</Link>
        </>
    )
}

export default NotFound