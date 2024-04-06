import ButtonFatec from '../button-fatec'
import InputFatec from '../input-fatec'
import styles from './formAt1.module.css'



function FormAt1(){
    return(
        <>
            <form>
                <p className={styles.head}>Entre em Contato</p>
                <hr />
                <div className={styles.campo}><InputFatec placeholder='Nome'/></div>
                <div className={styles.campo}><InputFatec placeholder='E-mail'/></div>
                <div className={styles.campo}><InputFatec placeholder='Telefone'/></div>
                <hr />
                <div className={styles.campoBotao}><ButtonFatec type='button' label='Fatec: Enviar mensagem'/></div>
            </form>
        </>
    )
}

export default FormAt1