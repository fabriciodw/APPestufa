const { Model, DataTypes} = require('sequelize');

  class Estoque extends Model {  
    static init(sequelize){
      super.init({
        material: DataTypes.STRING,
        quantidade: DataTypes.INTEGER,
        valor: DataTypes.DOUBLE
      },{
        sequelize,
      })
    }
  }

  module.exports= Estoque;
