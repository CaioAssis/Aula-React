import { Box, Button, Checkbox, Input, Spacer, Text } from "@chakra-ui/react";

function TarefaHead(){
    return(
        <>
            <Text margin='5px' fontSize='20'>
                Inserir nova tarefa
            </Text>
            <Box w='50%' display='flex' margin='5px'>
                
                <Input placeholder='Digite o título da task' w='50%'/>
                <Spacer />
                <Spacer />
                <Spacer />
                <Checkbox defaultChecked={false}>Realizada?</Checkbox>
                <Spacer />
                <Button>Inserir</Button>
            </Box>
        </>
    )
}
export default TarefaHead