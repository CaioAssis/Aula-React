import Navegacao from "../../components/navegacao"
//useNavigate -> exemplo professor
/*
const navigate = useNavigate

<Navegacao/>
            <h1 onClick={() => {
                navigate('/sobre') }}>Home</h1>
*/

function Home(){
    return(
        <>
            <Navegacao/>
            
            <h1>Home</h1>
            <p>Aulas React:</p>
            <p>Sistema de registro de tarefas de usuários.</p>
        </>
    )
}

export default Home