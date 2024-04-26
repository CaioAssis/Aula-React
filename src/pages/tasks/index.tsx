import Layout from "../../components/layout"
import TarefaList from "../../components/tarefaList"
import TarefaHead from "../../components/tarefaHead"

import { Text } from "@chakra-ui/react"
import { useState } from "react"

interface Tarefa {
    id: number
    nome: string
    concluida: boolean
}


function Tasks(){ // mesmo que export default no fim
    const [tarefas, setTarefas] = useState<Tarefa[]>([
        {id: 1, nome: "Tarefa 1", concluida: false},
        {id: 2, nome: "Tarefa 2", concluida: true},
        {id: 3, nome: "Tarefa 3", concluida: false}
    ])
    return(
        <Layout>  
            <div>
                <Text margin='5px' fontSize='30'>
                    Lista de Tarefas
                </Text>
                <hr />
                <TarefaHead />
                <hr />
                {
                    tarefas.map((tarefa) =>(
                        <TarefaList label={tarefa.nome} status={true} idTarefa={1}/>
                    ))
                }
                <hr />
            </div> 
        </Layout>

    )
}

export default Tasks