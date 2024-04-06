interface PHolder{
    placeholder: string
}

function InputFatec({placeholder}: PHolder) {
    return (
        <input type="text" placeholder={placeholder}></input>
    )
}

export default InputFatec