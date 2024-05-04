import Layout from "../../components/layout"
import TarefaList from "../../components/tarefaList"
import TarefaHead from "../../components/tarefaHead"

import { Text } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { Tarefa } from "../../components/interfaces/tarefas"
import api from "../../helpers/axios"




function Tasks(){ // mesmo que export default no fim
    const[tarefas, setTarefas] = useState<Tarefa[]>([])

    function apagarTarefa(id: number){
        api.delete(`/task/${id}`)
        .then(resposta => {
            if(resposta.status == 204) carregarLista
            else alert('Erro ao remover!')
            carregarLista()
        })
        .catch( erro => {
            console.log(erro)
        })
    }

    async function carregarLista(){
        const resposta = await api.get('/task')
        if(resposta.status == 200){
            setTarefas(resposta.data)
        }
        return
        
    }

    function alterarStatus(tarefa: Tarefa){
        tarefa.completed = !tarefa.completed
        api.put(`/task/${tarefa.id}`, tarefa)
        .then(()=>{
            carregarLista()
        })
    }

    useEffect(()=>{
        carregarLista()
    },[]) // para atualizar toda API

    //const tarefas = carregarLista()
    //setTarefas(tarefas)

    return(
        <Layout>  
            <div>
                <Text margin='5px' fontSize='30'>
                    Lista de Tarefas
                </Text>
                <hr />
                <TarefaHead carregarLista={carregarLista}/>
                <hr />
                {
                    tarefas.map((tarefa) =>(
                        <TarefaList key={tarefa.id} tarefa={tarefa} 
                        apagarTarefa={apagarTarefa} 
                        alterarStatus={alterarStatus}/>
                    ))
                }
                <hr />
            </div> 
        </Layout>

    )
}

export default Tasks