import express from 'express'

import cadastro from './controller/cadastroController.js'
import login from './controller/loginController.js'

const router = express()

router.use('/cadastro', cadastro)
router.use('/login', login)

export default router