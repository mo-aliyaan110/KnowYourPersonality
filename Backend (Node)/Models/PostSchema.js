const mongoose = require('mongoose');
const PostSchema = mongoose.Schema({
    personality : {
        type : String,
        
    },
    name : {
        type : String,
        required : true
        
    },
    dateofbirth : {
        type : String,
        required : true
        
    },
    hobbies : {
        type : String,
        required : true
    }
});

module.exports = mongoose.model('UsersData', PostSchema);