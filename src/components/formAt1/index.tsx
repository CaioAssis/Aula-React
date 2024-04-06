import ButtonFatec from '../button-fatec'
import InputFatec from '../input-fatec'



function FormAt1(){
    return(
        <>
            <form>
                <div><InputFatec/></div>
                <div><InputFatec/></div>
                <div><ButtonFatec type='submit' label='Fatec: Enviar mensagem'/></div>
            </form>
        </>
    )
}

export default FormAt1