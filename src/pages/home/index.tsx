import { Link, useNavigate } from "react-router-dom"
//useNavigate -> exemplo professor

function Home(){
    const navigate = useNavigate()
    return(
        <>
            <h1 onClick={() => {
                navigate('/sobre') }}>Home</h1>
            <Link to='/sobre'>Ir para Sobre</Link>
        </>
    )
}

export default Home