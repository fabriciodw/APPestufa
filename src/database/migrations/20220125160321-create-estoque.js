'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('estoques', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      material_name: {
        type: Sequelize.STRING,
        allowNull: false,          
      },
      quantidade:{
        type: Sequelize.INTEGER,
        allowNull: false,
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
    return queryInterface.dropTable('estoques');
  }
};