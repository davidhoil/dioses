const God = require('../models/gods');

//PARTES DEL CRUD: CREATE
function createGod(req,res){
    const body = req.body;
    God.create(body).then(god=>{
        res.status(201).json(god);
    });

}

//PARTES DEL CRUD: READ
async function getGod(req,res){
    const id = req.params.id;
    const god = await God.findByPk(id);
    res.status(200).json(god);
}

async function getGods(req,res){
    const gods = await God.findAll();
    res.status(200).json(gods);
}

//PARTES DEL CRUD: UPDATE
async function updateGod(req,res){
    const id = req.params.id;
    const god = req.body;

    await God.update(god,{where:{id}});
    const god_updated = await God.findByPk(id);
    res.status(200).json(god_updated);
}

//PARTES DEL CRUD DELETE
async function deleteGod(req,res){
    const id = req.params.id;
    const deleted = God.destroy(
        {where: {id} }
    );
    res.status(200).json(deleted);
}

module.exports = {
    createGod,
    getGod,
    getGods,
    updateGod,
    deleteGod
}