import express from 'express'
import db from '../service/cadastroService.js' // lugar onde tem a query sql q vai coloca os dados do usuario no banco

const router = express.Router() //instanciando o metodo/função router do express para a variavel router 

router.post('/' , async (request, response) => { // vai executa essa função na rota raiz com o metodo post
    const {nome, email, senha} = request.body // vai pegar esses valores do corpo da requisição
    try{
        const user = await db.Duplicato(email) // vai verificar se o email ja esta cadastrado ou não no banco

        if(nome === '' || email === '' || senha === ''){ // verifica se os dados estão vazio

            response.status(422).send({mensagem:"Preencha todos os campos"})            

        } else if(user.length > 0){ // verifica se ja existe o email

            response.status(409).send({mensagem: "Usuario já cadastrado"})

        } else { //cadastra caso esteja tudo certo
            
            await db.Cadastrar(nome, email, senha)

            response.status(200).send({mensagem:"usuario cadastro"})
        }

    }catch(error){ // se der ruim pega aqui
        response.status(500).send({erro: `${error}`})
    }
})

export default router
