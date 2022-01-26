const express = require('express');
const UserController = require('./controllers/UserController');
const MaterialController = require('./controllers/MaterialController');
const CompraController = require('./controllers/CompraController');
const FornecedorController = require ('./controllers/FornecedorController')
const VendaController = require('./controllers/VendaController')
const ClienteController = require('./controllers/ClienteController')
const ConsumoController = require('./controllers/ConsumoController')

const routes = express.Router();

//usuários
routes.get('/user/listar', UserController.listar)
routes.post('/login', UserController.login)
routes.post('/user/cadastro', UserController.cadastro)

//material
routes.post('/material/cadastro', MaterialController.cadastro)
routes.get('/material/listar', MaterialController.listar)

//compras
routes.get('/compra/listar', CompraController.listar)
routes.post('/compra/cadastro', CompraController.cadastro)

//Fornecedor
routes.post('/fornecedor/cadastro', FornecedorController.cadastro)
routes.get('/fornecedor/listar', FornecedorController.listar)

//vendas
routes.get('/venda/listar', VendaController.listar)
routes.post('/venda/cadastro', VendaController.cadastro)

//clientes
routes.get('/cliente/listar', ClienteController.listar)
routes.post('/cliente/cadastro', ClienteController.cadastro)

//consumo
routes.get('/consumo/listar', ConsumoController.listar)
routes.post('/consumo/cadastro', ConsumoController.cadastro)

module.exports = routes;