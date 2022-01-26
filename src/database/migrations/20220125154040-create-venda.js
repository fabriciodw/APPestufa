'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('vendas', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      produto: {
        type: Sequelize.STRING,
        allowNull: false,          
      },
      tipo: {
        type: Sequelize.STRING,
        allowNull: false,          
      },
      quantidade: {
        type: Sequelize.INTEGER,
        allowNull: false,          
      },
      valor:{
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      data:{
        type: Sequelize.DATE,
        allowNull: false,
      },
      cliente_name: {
        type: Sequelize.STRING,
        allowNull: false,          
      },
      user_name: {
        type: Sequelize.STRING,
        allowNull: false,          
      },     
      user_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model: 'users',
          key: 'id'
        }
      },
      cliente_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model: 'clientes',
          key: 'id'
        }
      },  
      created_at:{
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at:{
        type: Sequelize.DATE,
        allowNull: false,
      }
     });

  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('vendas');
  }
};