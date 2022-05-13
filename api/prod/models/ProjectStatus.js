const mongoose = require("mongoose");

const projectStatus = new mongoose.Schema({
  //find out more about id field. It is autogenerated for each object


  //list of projects referenced from Project model
//   projects: {
//     type: String(List),
//     required: true,
//   },

  //reference from Status model
  status: {
    type: String,
    required: true,
  },
  
  //reference from ProjectPriority model
  priority: {
    type: String,
    required: true,
  },
  
//reference form PercentComplete model
  percentComplete: {
    type: String,
    required: true,
  },

  price: {
    type: String,
    required: true,
  },

  remarks: {
    type: String,
    required: true,
  }

});

module.exports = mongoose.model("ProjectStatus", projectStatus);