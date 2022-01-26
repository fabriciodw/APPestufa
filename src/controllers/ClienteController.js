const Cliente = require('../models/Cliente');

module.exports = {
        
    async listar(req, res){
        const response = await Cliente.findAll()
        if(response === null){
            return res.send(JSON.stringify('error'));
        }else{     
        return res.send(response);
        }
    },
    async cadastro(req, res){
        const response = await Cliente.create(
            {name: req.body.name, cidade: req.body.cidade}
            )         
        return res.send(response);        
    },
}