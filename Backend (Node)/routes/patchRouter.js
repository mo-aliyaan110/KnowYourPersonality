const Express = require('express');
const Router = new Express.Router();
const UsersData = require('../Models/PostSchema');




Router.put('/:id', async(req, res) => {
    try{     
        if(req.body.hobbies == 'horse riding'){
            req.body.personality  = 'Brave'
        }
        else if (req.body.hobbies == 'singing'){
            req.body.personality = 'Genius'
        }
        else if (req.body.hobbies == 'dancing'){
            req.body.personality = 'Creative'
        }
        
        const updatedData = await UsersData.updateOne({_id : req.params.id}, {$set : req.body}); 
        res.json(updatedData);
        
    }
    catch(err){
        res.json({message : err });
        console.log(err);
    }
})

module.exports = Router;