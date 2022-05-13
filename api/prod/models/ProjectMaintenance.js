const mongoose = require("mongoose");

const projectMaintainance = new mongoose.Schema({
  //find out more about id field. It is autogenerated for each object

  //will be referenced to from Project model
  projectid: {
    type: String,
    required: true,
  },

  startDate: {
    type: Date,
    required: true,
  },
  
  endDate: {
    type: Date,
    required: true,
  },
  
  //referenced from Employee employee model to allot employee to maintain the project
  employeedid: {
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

module.exports = mongoose.model("ProjectMaintainance", projectMaintainance);