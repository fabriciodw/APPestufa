const { Model, DataTypes } = require('sequelize');
  class Cliente extends Model{
    static init(sequelize){
      super.init({
        name: DataTypes.STRING,
        cidade: DataTypes.STRING
      },{
        sequelize
      })
    }
    static associate(models){       
      //this.hasMany(models.Material, { foreignKey: 'fornecedor_id', as: 'fornecedores' })
      this.hasMany(models.Venda, { foreignKey: 'cliente_id', as: 'clietevenda' })        
    }
  }
    
 module.exports =  Cliente;
