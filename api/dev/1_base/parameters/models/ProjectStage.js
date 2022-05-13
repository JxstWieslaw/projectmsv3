const mongoose = require('mongoose')

const projectStage = new mongoose.Schema({
    //find out more about id field. It is autogenerated for each object
    details:{
        type:String,
        required:true,
    }
})

module.exports = mongoose.model('ProjectStage', projectStage);