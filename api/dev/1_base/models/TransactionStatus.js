const mongoose = require("mongoose");

const transactionStatus = new mongoose.Schema({
  //find out more about id field. It is autogenerated for each object

  details: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("TransactionStatus", transactionStatus);