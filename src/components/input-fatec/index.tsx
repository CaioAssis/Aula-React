import styles from './InputFatec.module.css'

interface PHolder{
    placeholder: string
}

function InputFatec({placeholder}: PHolder) {
    return (
        <input type="text" placeholder={placeholder} className={styles.inputFatec}/>
    )
}

export default InputFatec