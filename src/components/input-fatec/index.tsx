import styles from './InputFatec.module.css'

interface PHolder{
    placeholder: string
    defaultValue: string
    type: "text" | "checkbox" | "number"
}

function InputFatec({placeholder, defaultValue, type}: PHolder) {
    return (
        <input type={type} placeholder={placeholder} className={styles.inputFatec} defaultValue={defaultValue}/>
    )
}

export default InputFatec