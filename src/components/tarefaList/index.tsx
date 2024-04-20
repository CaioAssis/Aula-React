import { Box, Button, Spacer } from '@chakra-ui/react'

interface Props{
    label: string
    status: boolean
}

function TarefaList({label, status} : Props){
    let stat
    if(status) stat = 'Completo'
    else stat = 'Pendente'
    return(
        <Box bg='gray' w='50%' p={2} color='black' display='flex' borderRadius='lg' gap={5} margin='5px'>
            {label}
            <Spacer />
            <Button>{stat}</Button>
            <Button>Excluir</Button>
        </Box>
    )
}

export default TarefaList