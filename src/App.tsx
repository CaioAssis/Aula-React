import './App.css'
import ButtonFatec from './components/button-fatec'
import InputFatec from './components/input-fatec'


//const App = () => {}
function App(){
  return (
    <>
      <p> Olá mundo!</p>
      <ButtonFatec type = 'button' label = "Botão 1"/>
      <ButtonFatec type = 'button' label = "Botão 2"/>
      <p> Paragrafo 2</p>
      <InputFatec />
    </>
  )
}

export default App
