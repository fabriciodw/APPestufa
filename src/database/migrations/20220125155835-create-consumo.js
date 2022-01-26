'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('consumos', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      material_name:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      user_name:{
        type: Sequelize.STRING,
        allowNull: false,
      },        
      quantidade:{
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      data:{
        type: Sequelize.DATE,
        allowNull: false,
      } ,     
      user_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model: 'users',
          key: 'id'
        }
      },
      material_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model: 'materials',
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
    return queryInterface.dropTable('consumos');
  }
};