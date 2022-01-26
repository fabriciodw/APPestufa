'use strict';
const { Model, DataTypes} = require('sequelize');

class Consumo extends Model{
  static init(sequelize){
      super.init({
          material_name: DataTypes.STRING,
          user_name: DataTypes.STRING,
          quantidade: DataTypes.INTEGER,
          data: DataTypes.DATE         
      }, {
          sequelize
      })
  }
  static associate(models){ 
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'userconsumo' })   
    this.belongsTo(models.Material, { foreignKey: 'material_id', as: 'consumomateriais' })         
  }
}

module.exports = Consumo;