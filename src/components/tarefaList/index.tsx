import { Box, Button, Center, Spacer } from '@chakra-ui/react'


//Usar um arquivo separado como interface para caso utilizar em outro lugar
interface Props{
    label: string
    status: boolean
    idTarefa: number
    apagarTarefa(id: number): void
}

function TarefaList({label, status, idTarefa, apagarTarefa} : Props){
    let stat, bg
    if(status) {
        stat = 'Completo'
        bg = 'green'
    }
    else {
        stat = 'Pendente'
        bg = '#707070'
    }

    return(
        <Box bg='lightgray' w='50%' p={2} color='black' display='flex' borderRadius='lg' gap={5} margin='5px'>
            <Center>
                {idTarefa} - {label}
            </Center>
            <Spacer />
            <Button bg={bg} textColor='white'>{stat}</Button>
            <Button bg='#9e001c' textColor='white'
            onClick={()=>apagarTarefa(idTarefa)}>Excluir</Button>
        </Box>
    )
}

export default TarefaList