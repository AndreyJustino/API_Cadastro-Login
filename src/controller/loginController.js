import express from "express"
import db from '../service/loginService.js'

const router = express.Router()

router.post('/', async (request, response) => {
    const {email, senha} = request.body

    try{

        const user = await db.Login(email, senha)

        if(email === '' || senha === ''){
            response.status(409).send({mensagem:"Preencha todos os campos"})
        }else{
            if(user.length > 0){
                response.status(200).send({mensagem:"Login realizado"})
            } else{
                response.status(400).send({mensagem:"Usuario não encontrado"})
            }
        }
    }catch(error){
        response.status(500).send({erro:`${error}`})
    }
})

export default router