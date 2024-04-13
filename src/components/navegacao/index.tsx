import { Link } from "react-router-dom";
import styles from './navegacao.module.css'

function Navegacao(){
    return(
        <div className={styles.navegacao}>
            <Link to='/' className={styles.nav}><div>Home</div></Link>
            <Link to='/sobre' className={styles.nav}><div>Sobre</div></Link>
            <Link to='/form' className={styles.nav}><div>Formulário</div></Link>
            <Link to='/tarefa' className={styles.nav}><div>Tarefas</div></Link>
        </div>
    )
}

export default Navegacao