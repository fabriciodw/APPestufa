const User = require('../models/User');

module.exports = {
    async login(req, res){
        const response = await User.findOne({
            where:{name: req.body.name, password: req.body.password}
        })
        if(response === null){
            return res.send(JSON.stringify('error'));
        }else{     
        return res.send(response);
        }
    },
    
    async listar(req, res){
        const response = await User.findAll()
        if(response === null){
            return res.send(JSON.stringify('error'));
        }else{     
        return res.send(response);
        }
    },
    async cadastro(req, res){
        const response = await User.create(
            {name: req.body.name, password: req.body.password}
            )         
        return res.send(response);        
    },
}