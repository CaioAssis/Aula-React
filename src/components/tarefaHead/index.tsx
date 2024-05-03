import { Box, Button, Checkbox, Input, Spacer, Text } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { Tarefa } from "../interfaces/tarefas";
import api from "../../helpers/axios";


interface FormTarefaProps {
    carregarLista(): void
    //tarefas: Tarefa[]
    //setTarefas(tarefas: Tarefa[]): void

}

function TarefaHead({carregarLista}: FormTarefaProps){

    function AdicionarTarefa(){
        if(nomeTarefa != ''){
            const novaTarefa = { //const novaTarefa:interfaceTarefa = {
                title: nomeTarefa,
                completed: statusTarefa
            }
            api.post('/task', novaTarefa)
            .then(() => {
                setNomeTarefa('')
                carregarLista()
            })
        }
    }

    const [nomeTarefa, setNomeTarefa] = useState('')
    const [statusTarefa, setStatusTarefa] = useState(false)

    const inputTarefa = useRef<HTMLInputElement>(null)
    useEffect(() => {
        if(inputTarefa.current) inputTarefa.current.focus()
    }, [])

    return(
        <>
            <Text margin='5px' fontSize='20'>
                Inserir nova tarefa
            </Text>
            <Box w='50%' display='flex' margin='5px'>
                
                <Input ref={inputTarefa} placeholder='Digite o título da task' w='50%' 
                onChange={(evento) => setNomeTarefa(evento.target.value)}/>
                <Spacer />
                <Spacer />
                <Spacer />
                <Checkbox defaultChecked={false} onChange={(evento) => {
                    if (evento.target.checked) setStatusTarefa(true)
                    else setStatusTarefa(false)
                }}>Realizada?</Checkbox>
                <Spacer />
                <Button onClick={AdicionarTarefa}>Inserir</Button>
            </Box>
        </>
    )
}
export default TarefaHead