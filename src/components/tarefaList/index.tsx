import { Box, Button, Spacer } from '@chakra-ui/react'

interface Props{
    label: string
    status: boolean
}

function TarefaList({label, status} : Props){
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
            {label}
            <Spacer />
            <Button bg={bg} textColor='white'>{stat}</Button>
            <Button bg='#9e001c' textColor='white'>Excluir</Button>
        </Box>
    )
}

export default TarefaList