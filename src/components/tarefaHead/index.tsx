import { Box, Button, Checkbox, Input, Spacer, Text } from "@chakra-ui/react";
import { useState } from "react";


interface FormTarefaProps {
    tarefas: Tarefa[]
    setTarefas: any
}

function TarefaHead({tarefas, setTarefas}: FormTarefaProps){

    function AdicionarTarefa(){
        if(tarefas.length > 0){
            const ultimoId = tarefas[tarefas.length-1].id
            const novaTarefa = {
                id: ultimoId +1,
                nome: nomeTarefa,
                concluida: false
            }

            setTarefas([...tarefas, novaTarefa])
        }
    }

    const [nomeTarefa, setNomeTarefa] = useState('')
    return(
        <>
            <Text margin='5px' fontSize='20'>
                Inserir nova tarefa
            </Text>
            <Box w='50%' display='flex' margin='5px'>
                
                <Input placeholder='Digite o título da task' w='50%' 
                onChange={(evento) => setNomeTarefa(evento.target.value)}/>
                <Spacer />
                <Spacer />
                <Spacer />
                <Checkbox defaultChecked={false}>Realizada?</Checkbox>
                <Spacer />
                <Button onClick={AdicionarTarefa}>Inserir</Button>
            </Box>
        </>
    )
}
export default TarefaHead