const { Model, DataTypes } = require('sequelize');
  class User extends Model {
    static init(sequelize){
      super.init({
        name: DataTypes.STRING,
        password: DataTypes.STRING
      },{
        sequelize
      })
    }
    static associate(models){ 
      this.hasMany(models.Material, { foreignKey: 'user_id', as: 'usuarios' })
      this.hasMany(models.Compra, { foreignKey: 'user_id', as: 'usercompras' })
      this.hasMany(models.Venda, { foreignKey: 'user_id', as: 'uservenda' }) 
      //this.hasmany(models.Consumo, { foreignKey: 'user_id', as: 'userconsumo' })                  
    }
  }  
module.exports = User;