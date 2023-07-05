const Data = require('../models/dataModel');

const getvoiture = (req, res) => {
    Data.find()
    .then(data => res.status(200).json(data))
    .catch(err => res.status(404).json(err))
}

const showvoiture = (req, res) => {
    Data.findOne({_id: req.params.id})
    .then(data => res.status(200).json(data))
    .catch(err => res.status(404).json(err))
}

const addvoiture = (req, res) => {
    const datas = new Data(req.body);

    datas.save()
        .then(() => res.status(201).json({message: 'voiture ajoutée'}))
        .catch(error => res.status(404).json({error}));
}

const updatevoiture = (req, res) => {
    Data.updateOne({
        _id: req.params.id
    }, {
        $set : {
            "name": req.body.name,
            "description": req.body.description
        }
    })
        .then(() => res.status(201).json({message: "voiture modifiée"}))
        .catch(err => console.error(err))
}

const deletevoiture = (req, res) => {
    Data.deleteOne({
        _id: req.params.id
    })
        .then(() => res.status(201).json({message: "voiture supprimée"}))
        .catch(err => console.error(err))
}



module.exports = {getvoiture, addvoiture, updatevoiture, deletevoiture, showvoiture};