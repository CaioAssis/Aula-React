import FormAt1 from "../../components/formAt1"
import Layout from "../../components/layout"
import Navegacao from "../../components/navegacao"
import Rodape from "../../components/rodape"
import Topo from "../../components/topo" //para teste do navBar do Chakra

function Formulario(){ // mesmo que export default no fim
    return(
        <Layout>
            <div>
                <FormAt1/>
            </div>
        </Layout>

    )
}

export default Formulario