const mongoose = require('mongoose')

const role = new mongoose.Schema({
    //find out more about id field. It is autogenerated for each object

    description:{
        type:String,
        required:true,
    },
    details:{
        type:String,
        required:true,
    }
})

module.exports= mongoose.model('Role', role);