import Layout from "../../components/layout"
import Navegacao from "../../components/navegacao"
import TarefaList from "../../components/tarefaList"
import TarefaHead from "../../components/tarefaHead"

import { Text } from "@chakra-ui/react"

function Tasks(){ // mesmo que export default no fim
    return(
        <Layout>  
            <div>
                <Text margin='5px' fontSize='30'>
                    Lista de Tarefas
                </Text>
                <hr />
                <TarefaHead />
                <hr />
                <TarefaList label="Tarefa 1" status={true}/>
                <TarefaList label="Tarefa 2" status={true}/>
                <TarefaList label="Tarefa 3" status={true}/>
                <TarefaList label="Tarefa 4" status={false}/>
                <TarefaList label="Tarefa 5" status={false}/>
                <TarefaList label="Tarefa 6" status={true}/>
                <TarefaList label="Tarefa 7" status={false}/>
                <TarefaList label="Tarefa 8" status={false}/>
                <hr />
            </div> 
        </Layout>

    )
}

export default Tasks