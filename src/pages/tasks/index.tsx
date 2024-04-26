import Layout from "../../components/layout"
import TarefaList from "../../components/tarefaList"
import TarefaHead from "../../components/tarefaHead"

import { Text } from "@chakra-ui/react"
import { useState } from "react"
import { Tarefa } from "../../components/interfaces/tarefas"




function Tasks(){ // mesmo que export default no fim
    const [tarefas, setTarefas] = useState<Tarefa[]>([
        {id: 1, nome: "Tarefa 1", concluida: false},
        {id: 2, nome: "Tarefa 2", concluida: true},
        {id: 3, nome: "Tarefa 3", concluida: false}
    ])

    function apagarTarefa(id: number){
        const tarefasAtualizadas = tarefas.filter((tarefa) => tarefa.id !== id)
        setTarefas(tarefasAtualizadas)
    }

    return(
        <Layout>  
            <div>
                <Text margin='5px' fontSize='30'>
                    Lista de Tarefas
                </Text>
                <hr />
                <TarefaHead tarefas={tarefas} setTarefas={setTarefas}/>
                <hr />
                {
                    tarefas.map((tarefa) =>(
                        <TarefaList label={tarefa.nome} status={tarefa.concluida} idTarefa={tarefa.id}
                        apagarTarefa={apagarTarefa} />
                    ))
                }
                <hr />
            </div> 
        </Layout>

    )
}

export default Tasks