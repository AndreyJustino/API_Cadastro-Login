import express from 'express'

import cadastro from './controller/cadastroController.js'

const router = express()

router.use('/cadastro', cadastro)

export default router