import { Link } from "react-router-dom";
import styles from './navegacao.module.css'

function Navegacao(){
    return(
        <div className={styles.navegacao}>
            <div className={styles.nav}><Link to='/'>Home</Link></div>
            <div className={styles.nav}><Link to='/sobre'>Sobre</Link></div>
            <div className={styles.nav}><Link to='/form'>Formulário</Link></div>
            <div className={styles.nav}><Link to='/tarefa'>Tarefas</Link></div>
        </div>
    )
}

export default Navegacao