import express from 'express'
import db from '../service/cadastroService.js'

const router = express.Router()

router.post('/' , async (request, response) => {
    const {nome, email, senha} = request.body
    try{
        const user = await db.Duplicato(email)

        if(nome === '' || email === '' || senha === ''){

            response.status(422).send({mensagem:"Preencha todos os campos"})            

        } else if(user.length > 0){

            response.status(409).send({mensagem: "Usuario já cadastrado"})

        } else {
            
            await db.Cadastrar(nome, email, senha)

            response.status(200).send({mensagem:"usuario cadastro"})
        }

    }catch(error){
        response.status(500).send({erro: `${error}`})
    }
})

export default router