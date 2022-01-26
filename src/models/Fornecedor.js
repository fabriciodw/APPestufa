const { Model, DataTypes } = require('sequelize');
  class Fornecedor extends Model{
    static init(sequelize){
      super.init({
        name: DataTypes.STRING
      },{
        sequelize
      })
    }
    static associate(models){       
      //this.hasMany(models.Material, { foreignKey: 'fornecedor_id', as: 'fornecedores' })
      this.hasMany(models.Compra, { foreignKey: 'fornecedor_id', as: 'forncompra' })        
    }
  }
    
 module.exports =  Fornecedor;
