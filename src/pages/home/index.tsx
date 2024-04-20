import Layout from "../../components/layout"
//useNavigate -> exemplo professor
/*
const navigate = useNavigate

<Navegacao/>
            <h1 onClick={() => {
                navigate('/sobre') }}>Home</h1>
*/

function Home(){
    return(
        <Layout>
            <div>
                <h1>Home</h1>
                <p>Aulas React:</p>
                <p>Sistema de registro de tarefas de usuários.</p>
            </div>
        </Layout>
    )
}

export default Home