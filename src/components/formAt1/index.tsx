import ButtonFatec from '../button-fatec'
import InputFatec from '../input-fatec'



function FormAt1(){
    return(
        <>
            <form>
                <div><InputFatec placeholder='Nome'/></div>
                <div><InputFatec placeholder='E-mail'/></div>
                <div><InputFatec placeholder='Telefone'/></div>
                <div><ButtonFatec type='submit' label='Fatec: Enviar mensagem'/></div>
            </form>
        </>
    )
}

export default FormAt1