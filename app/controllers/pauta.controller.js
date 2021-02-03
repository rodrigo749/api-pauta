const Pauta = require ('../models/pauta.model');

exports.create = async(req, res) =>{
    const pauta = await Pauta.create(req.body);

    if(pauta){
        res.status(200).send({message:'Pauta cadastrada com sucesso'})
    }else{
        res.status(500).send({message:'Erro ao cadastrar Pauta'});
    }
}


exports.getAll = async(req, res) =>{
     
    const pauta = await Pauta.getAll();
    res.status(200).send(pauta)

}