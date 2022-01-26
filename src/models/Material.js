'use strict';
const { Model, DataTypes} = require('sequelize');

class Material extends Model{
  static init(sequelize){
      super.init({
          name: DataTypes.STRING,
          user_name: DataTypes.STRING
          //user_id: DataTypes.INTEGER,
          //fornecedor_id: DataTypes.INTEGER
      }, {
          sequelize
      })
  }
  static associate(models){ 
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'usuarios' })     
    this.hasMany(models.Compra, { foreignKey: 'material_id', as: 'compramateriais' })
    this.hasMany(models.Consumo, { foreignKey: 'material_id', as: 'consumomateriais' })          
  }
}

module.exports = Material;