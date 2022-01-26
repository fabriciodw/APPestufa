const Compras = require('../models/Venda');

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
        const{ produto, quantidade, tipo, data, valor, cliente_name, user_name, user_id, cliente_id } = req.body;
        const response = await Compras.create(
            { produto, quantidade, tipo, data, valor, cliente_name, user_name, user_id, cliente_id }
            )         
        return res.send(response);        
    },
}