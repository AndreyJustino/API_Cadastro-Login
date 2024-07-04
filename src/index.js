import express from 'express' // framework pra criar api
import router from './router.js' // arquivos com rotas/endereço da api
import cors from 'cors' // biblioteca pra permitir que a api seja acessada de outros dominios

const api = express() //instaciando o express

api.use(cors()) //ativando o cors

api.use(express.json()) // so recebo e envio dado no formato json

api.use('/',router) // as rotas do arquivo 'rota' serão executada na '/'

api.listen(3000, () => { // onde a api vai rota
  console.log('Servidor iniciado')
})