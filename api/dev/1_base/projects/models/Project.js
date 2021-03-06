const mongoose = require("mongoose");

const project = new mongoose.Schema({
  //find out more about id field. It is autogenerated for each object

  name: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },
  //referenced from client model
  clientid: {
    type: String,
    required: true,
  },
  //referenced from ProjectStage projectStage model
  projectstageid: {
    type: String,
    required: true,
  },

  //referenced from ProjectPriority projectPriority model
  projectpriorityid: {
    type: String,
    required: true,
  },
  //complete list of employees for alloting employees to a project -from Employee model
//   employees: {
//     type: String(List),
//     required: true,
//   },
  acquisitionDate: {
    type: Date,
    required: true,
  },
  dueDate: {
    type: String,
    required: true,
  },
  //will be referenced to in ProjectStatus Model using dto
  projectStatus: {
    type: String,
    required: true,
  },

});

module.exports = mongoose.model("Project", project);
