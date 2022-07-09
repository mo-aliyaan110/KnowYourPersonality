const Express = require('express');
const Router = new Express.Router();
const UsersData = require('../Models/PostSchema');


Router.delete('/:id', async (req, res) => {
    try{
        
        const deletedData = await UsersData.deleteOne({_id : req.params.id});
        res.json("Deleted");
    }
    catch(err){
        res.json({message : err});
        console.log(err);
    }
});

module.exports = Router;
