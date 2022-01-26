const Compras = require('../models/Compra');

module.exports = {
    
    
    async listar(req, res){
        const response = await Compras.findAll()
        if(response === null){
            return res.send(JSON.stringify('error'));
        }else{     
        return res.send(response);
        }
    },
    async cadastro(req, res){
        const{ quantidade,valor,observacao, user_name, fornecedor_name, material_name, user_id, fornecedor_id, material_id} = req.body;
        const response = await Compras.create(
            { quantidade, valor, observacao,  user_name, fornecedor_name, material_name, user_id, fornecedor_id, material_id}
        )         
        return res.send(response);        
    },
    
}