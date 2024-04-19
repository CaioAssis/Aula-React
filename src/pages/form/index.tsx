import FormAt1 from "../../components/formAt1"
import Navegacao from "../../components/navegacao"
import Topo from "../../components/topo" //para teste do navBar do Chakra

function Formulario(){ // mesmo que export default no fim
    return(
        <>
            <Navegacao/>
            <Topo/>
            
            <FormAt1/>
        </>

    )
}

export default Formulario