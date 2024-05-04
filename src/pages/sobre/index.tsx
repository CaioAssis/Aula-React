import Layout from "../../components/layout"
import { Text } from "@chakra-ui/react"

export default function Sobre(){ // mesmo que export default no fim
    return(
        <Layout>
            <div>
                <Text margin='5px' fontSize='30'>
                    Sobre
                </Text>
                <Text margin='5px' fontSize='25'>
                    Caio Alessandro Brito de Assis
                </Text>
                <Text margin='5px' fontSize='20'>
                    Aluno de Análise e Desenvolvimento de Sistemas, da Fatec Indaiatuba.
                </Text>
            </div>
        </Layout>

    )
}