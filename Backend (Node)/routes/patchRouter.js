const Express = require('express');
const Router = new Express.Router();
const UsersData = require('../Models/PostSchema');

Router.patch('/:id', async(req, res) => {
    try{
        const patchedName = await UsersData.updateOne({_id : req.params.id}, {$set : {name : req.body.name}});
        res.json(patchedName);
    }
    catch(err){
        res.json({message : err });
        console.log(err);
    }
})

module.exports = Router;