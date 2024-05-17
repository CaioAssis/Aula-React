import { Input } from "@chakra-ui/input"
import Layout from "../../components/layout"
import { Button } from "@chakra-ui/button"
import { useState } from "react"
import api from "../../helpers/axios"

function cadastro() {
    const [userData, setUserData] = useState({ ///////////////ATUALIZAR NO PI
        name:"",
        email:"",
        password:""
    })
    function handleRegister() {
        api.post('/auth/register', userData)
        .then((resposta) => {
            console.log(resposta)
        })
        .catch((erro) => {
            console.log(erro)
        })
    }

    return (
        <>
            <Layout>
                <h1>Cadastre-se</h1>
                <form >
                    <Input type="text" placeholder="Nome"
                    onChange={(e) => setUserData({...userData, name: e.target.value})}/>
                    <Input type="e-mail" placeholder="E-mail"
                    onChange={(e) => setUserData({...userData, email: e.target.value})}/>
                    <Input type="password" placeholder="Senha"
                    onChange={(e) => setUserData({...userData, password: e.target.value})}/>

                    <Button onClick={handleRegister}>Cadastrar</Button>
                </form>
            </Layout>
        </>
    )
}

export default cadastro