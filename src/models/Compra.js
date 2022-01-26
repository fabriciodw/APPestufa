const {  Model, DataTypes } = require('sequelize');


class Compra extends Model{
  static init(sequelize){
      super.init({
        //material_id: DataTypes.STRING,
        quantidade: DataTypes.INTEGER,
        data: DataTypes.DATE,
        valor: DataTypes.DOUBLE,
        observacao: DataTypes.STRING,
        user_name: DataTypes.STRING,
        forncedor_name: DataTypes.STRING,
        material_name: DataTypes.STRING

      }, {
        sequelize,      
      })  
  }
  static associate(models){ 
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'usercompras' }) 
    this.belongsTo(models.Material, { foreignKey: 'material_id', as: 'compramateriais' })
    this.belongsTo(models.Fornecedor, { foreignKey: 'fornecedor_id', as: 'forncompra' })         
  }
}
module.exports = Compra;
