
const { Model, DataTypes} = require('sequelize');
  class Venda extends Model {
    static init(sequelize){
      super.init({
        produto: DataTypes.STRING,
        quantidade: DataTypes.INTEGER,
        tipo: DataTypes.STRING,  
        data: DataTypes.DATE,      
        valor: DataTypes.DOUBLE,
        cliente_name: DataTypes.STRING,
        user_name: DataTypes.STRING,
      },{
        sequelize
      })
    }
    static associate(models){       
      this.belongsTo(models.User, { foreignKey: 'user_id', as: 'uservenda'  })
      this.belongsTo(models.Cliente, { foreignKey: 'cliente_id', as: 'clietevenda' })        
    }
  } 
 
module.exports = Venda;