const Express = require('express');
const Router = new Express.Router();
const UsersData = require('../Models/PostSchema');


Router.post('/', async(req, res) => {
    
        const addedData = new UsersData({
            personality : undefined,
            name : req.body.name,
            dateofbirth : req.body.dateofbirth,
            hobbies : req.body.hobbies,

        })

    try{
        if(addedData.hobbies == 'horse riding'){
            addedData.personality  = 'Brave'
        }
        else if (addedData.hobbies == 'singing'){
            addedData.personality = 'Genius'
        }
        else if (addedData.hobbies == 'dancing'){
            addedData.personality = 'Creative'
        }
        const finalResult = await addedData.save();
        res.send(finalResult);
    }      
    catch(err){
        res.json({message : err });
        console.log(err);
    }

});

module.exports = Router;