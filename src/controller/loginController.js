import express from "express"
import db from '../service/loginService.js' // lugar onde tem a query pra saber se os dados passados ja estão no banco e assim permirtir o login

const router = express.Router() //extanciando o metodo/função router do express para a variavel router 

router.post('/', async (request, response) => {
    const {email, senha} = request.body //pegando esses dados do corpo da requisição

    try{

        const user = await db.Login(email, senha) // verificando se os dados ja estão no banco

        if(email === '' || senha === ''){ // verificando se os dados estão vazios
            response.status(409).send({mensagem:"Preencha todos os campos"})
        }else{
            if(user.length > 0){ //se o dados estiverem corretos e no banco ele entra
                response.status(200).send({mensagem:"Login realizado"})
            } else{ // se não, não entra
                response.status(400).send({mensagem:"Usuario não encontrado"})
            }
        }
    }catch(error){ // deu ruim pego aqui
        response.status(500).send({erro:`${error}`})
    }
})

export default router