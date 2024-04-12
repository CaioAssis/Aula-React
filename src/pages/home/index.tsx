import { Link } from "react-router-dom"


function Home(){
    return(
        <>
            <h1>Home</h1>
            <Link to='/sobre'>Ir para Sobre</Link>
        </>
    )
}

export default Home