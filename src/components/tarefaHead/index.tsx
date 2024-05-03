import { Box, Button, Checkbox, Input, Spacer, Text } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { Tarefa } from "../interfaces/tarefas";


interface FormTarefaProps {
    tarefas: Tarefa[]
    setTarefas(tarefas: Tarefa[]): void
}

function TarefaHead({tarefas, setTarefas}: FormTarefaProps){

    function AdicionarTarefa(){
        if(tarefas.length > 0){
            const ultimoId = tarefas[tarefas.length-1].id
            const novaTarefa = {
                id: ultimoId +1,
                title: nomeTarefa,
                completed: statusTarefa
            }

            setTarefas([...tarefas, novaTarefa])
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