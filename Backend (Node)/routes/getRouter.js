const Express = require('express');
const Router = new Express.Router();
const UsersData = require('../Models/PostSchema');

// get all users
Router.get('/', async(req, res) => {
    try{
        const allUsers = await UsersData.find();
        res.json(allUsers);
    }
    catch(err){
        res.json({message : err});
    }
})
// get particular user
Router.get('/:id', async (req, res) => {
    try{
        
        const aUserData = await UsersData.findById(req.params.id);
        res.json(aUserData);
    }
    catch(err){
        res.json({err : err});
        console.log(err);
    }
});


module.exports = Router;