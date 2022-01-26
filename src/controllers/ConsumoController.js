const Consumo = require('../models/Consumo');
//const Op = Sequelize.Op; 

module.exports = {
    
    
    async listar(req, res){
        const response = await Consumo.findAll()
        if(response === null){
            return res.send(JSON.stringify('error'));
        }else{     
        return res.send(response);
        }
    },
    async cadastro(req, res){
        const{ material_name, user_name, quantidade, data, user_id, material_id} = req.body;
        const response = await Consumo.create(
            {material_name, user_name, quantidade, data, user_id, material_id}
            )         
        return res.send(response);        
    },

    //teste de listagems
    async listarConsumos(req, res){             
        const con = await Etiqueta.findAll({
            attributes: ['produto_name','quantidade'],
            // where: { produto_name: req.body.produto },
            include: { 
                association: 'enderecos',
                attributes: ['hack'],
                where: {
                        hack: {
                        [Op.ne]: ['Vazio']
                }   }
            }
        })
        return res.json(eti)  

        
    },





}