const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User')
const Material = require('../models/Material')
const Compras = require('../models/Compra');
const Fornecedor = require('../models/Fornecedor');
const Venda = require('../models/Venda');
const Cliente = require('../models/Cliente');
const Consumo = require('../models/Consumo')




const connection = new Sequelize(dbConfig);

//importar as conecçoes
User.init(connection)
Material.init(connection)
Compras.init(connection)
Fornecedor.init(connection)
Venda.init(connection)
Cliente.init(connection)
Consumo.init(connection)

//importar as associações
User.associate(connection.models)
Material.associate(connection.models)
Fornecedor.associate(connection.models)
Compras.associate(connection.models)
Venda.associate(connection.models)
Consumo.associate(connection.models)
//Cliente.associate(connection.models)

module.exports = connection;