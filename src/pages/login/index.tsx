import { Input } from "@chakra-ui/input"
import Layout from "../../components/layout"
import { Button } from "@chakra-ui/button"
import { useState } from "react"
import api from "../../helpers/axios"

function Login() {
    const [userData, setUserData] = useState({ ///////////////ATUALIZAR NO PI
        email:"",
        password:""
    })
    function handleLogin() {
        api.post('/auth/login', userData, {withCredentials: true})
        .then((resposta) => {
            if(resposta.status == 200) {
                console.log(resposta)
                alert('Login efetuado com sucesso!')
                localStorage.setItem('login', 'true')
            }
            else alert('Erro ao Logar!')
        })
        .catch((erro) => {
            console.log(erro)
        })
    }

    return (
        <>
            <Layout>
                <h1>Login</h1>
                <form >
                    <Input type="e-mail" placeholder="E-mail"
                    onChange={(e) => setUserData({...userData, email: e.target.value})}/>
                    <Input type="password" placeholder="Senha"
                    onChange={(e) => setUserData({...userData, password: e.target.value})}/>

                    <Button onClick={handleLogin}>Acessar</Button>
                </form>
            </Layout>
        </>
    )
}

export default Login