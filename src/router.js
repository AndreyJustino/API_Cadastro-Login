import express from 'express'

import cadastro from './controller/cadastroController.js'
import login from './controller/loginController.js'

const router = express() //instaciando express

router.use('/cadastro', cadastro) // oq tiver no arquirvo "cadastro" vai ser executado na rota arquivo 
router.use('/login', login) // oq tiver no arquirvo "login" vai ser executado na rota login 

export default router // exportando o router pra usa la na index