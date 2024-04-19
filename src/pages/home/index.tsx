import { Grid, GridItem } from "@chakra-ui/react"
import Navegacao from "../../components/navegacao"
import Rodape from "../../components/rodape"
//useNavigate -> exemplo professor
/*
const navigate = useNavigate

<Navegacao/>
            <h1 onClick={() => {
                navigate('/sobre') }}>Home</h1>
*/

function Home(){
    return(
        <Grid className='grid' templateColumns='1fr' templateRows='64px auto 64px'>
            <GridItem colSpan={1} rowSpan={1}>
                <Navegacao/>
            </GridItem>
            
            <GridItem colSpan={1} rowSpan={1}>
                <h1>Home</h1>
                <p>Aulas React:</p>
                <p>Sistema de registro de tarefas de usuários.</p>
            </GridItem>

            <GridItem colSpan={1} rowSpan={1}>
                <Rodape />
            </GridItem>
        </Grid>
    )
}

export default Home