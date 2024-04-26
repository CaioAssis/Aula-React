import Layout from "../../components/layout"
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
                <TarefaList label="Tarefa 1" status={true} idTarefa={1}/>
                <TarefaList label="Tarefa 2" status={true} idTarefa={2}/>
                <TarefaList label="Tarefa 3" status={true} idTarefa={3}/>
                <TarefaList label="Tarefa 4" status={false} idTarefa={4}/>
                <TarefaList label="Tarefa 5" status={false} idTarefa={5}/>
                <TarefaList label="Tarefa 6" status={true} idTarefa={6}/>
                <TarefaList label="Tarefa 7" status={false} idTarefa={7}/>
                <TarefaList label="Tarefa 8" status={false} idTarefa={8}/>
                <hr />
            </div> 
        </Layout>

    )
}

export default Tasks