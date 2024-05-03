import Layout from "../../components/layout"
import { Text } from "@chakra-ui/react"
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
                <Text margin='5px' fontSize='30'>
                    Home
                </Text>
                <Text margin='5px' fontSize='25'>
                    Aulas React:
                </Text>
                <Text margin='5px' fontSize='20'>
                    Sistema de registro de tarefas de usuários.
                </Text>
            </div>
        </Layout>
    )
}

export default Home