import { Box, Button, Center, Spacer } from '@chakra-ui/react'
import { Tarefa } from '../interfaces/tarefas'


//Usar um arquivo separado como interface para caso utilizar em outro lugar
interface Props{
    /*label: string
    status: boolean
    idTarefa: number*/
    tarefa: Tarefa
    apagarTarefa(id: number): void
    alterarStatus (tarefa: Tarefa): void
}

function TarefaList({tarefa, apagarTarefa, alterarStatus} : Props){
    let stat, bg
    if(tarefa.completed) {
        stat = 'Realizado'
        bg = 'green'
    }
    else {
        stat = 'Pendente'
        bg = '#707070'
    }

    return(
        <Box bg='lightgray' w='50%' p={2} color='black' display='flex' borderRadius='lg' gap={5} margin='5px'>
            <Center>
                {tarefa.id} - {tarefa.title}
            </Center>
            
            <Spacer />

            <Button bg={bg} 
            textColor='white'
            onClick={() => alterarStatus(tarefa)}>
                {stat}
            </Button>

            <Button bg='#9e001c' textColor='white'
            onClick={()=>apagarTarefa(tarefa.id)}>
                Excluir
            </Button>
        </Box>
    )
}

export default TarefaList