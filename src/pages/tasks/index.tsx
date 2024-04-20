import Layout from "../../components/layout"
import Navegacao from "../../components/navegacao"
import TarefaList from "../../components/tarefaList"

function Tasks(){ // mesmo que export default no fim
    return(
        <Layout>  
            <div>         
                <h1>Tarefas</h1>
                <TarefaList label="Tarefa 1" status={true}/>
                <TarefaList label="Tarefa 2" status={true}/>
                <TarefaList label="Tarefa 3" status={true}/>
                <TarefaList label="Tarefa 4" status={false}/>
                <TarefaList label="Tarefa 5" status={false}/>
                <TarefaList label="Tarefa 6" status={false}/>
                <TarefaList label="Tarefa 7" status={false}/>
                <TarefaList label="Tarefa 8" status={false}/>
            </div> 
        </Layout>

    )
}

export default Tasks