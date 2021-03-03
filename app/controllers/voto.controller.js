const Voto = require ('../models/voto.model');

exports.create = async(req, res) =>{
    const voto = await Voto.create(req.body);

    if(voto){
        res.status(200).send({message:'Voto cadastrado com sucesso'})
    }else{
        res.status(500).send({message:'Erro ao cadastrar Voto'});
    }
}


exports.getAll = async(req, res) =>{
     
    const voto = await Voto.getAll();
    res.status(200).send(voto)

}