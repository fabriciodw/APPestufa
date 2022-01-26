const Fornecedor = require('../models/Fornecedor');

module.exports = {
        
    async listar(req, res){
        const response = await Fornecedor.findAll();
        if(response === null){
            return res.send(JSON.stringify('error'));
        }else{     
        return res.send(response);
        }
    },
    async cadastro(req, res){
        const response = await Fornecedor.create(
            {name: req.body.name}
            )         
        return res.send(response);        
    },
}