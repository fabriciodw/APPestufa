const Material = require('../models/Material');

module.exports = {
    
    
    async listar(req, res){
        const response = await Material.findAll()
        if(response === null){
            return res.send(JSON.stringify('error'));
        }else{     
        return res.send(response);
        }
    },
    async cadastro(req, res){
        const response = await Material.create(
            {name: req.body.name, user_id: req.body.user_id, user_name: req.body.user_name}
            )         
        return res.send(response);        
    },
}