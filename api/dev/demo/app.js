const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
require("dotenv").config();

const dbURI = process.env.ATLAS_URI;
mongoose.connect(
  dbURI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("Connected to Database")
);

const app = express();

//Routes
const users = require("./routes/users");
const cars = require("./routes/cars");

//Middleware
app.use(logger("dev")); //for logging
app.use(express.json());

//Routes
app.use("/users", users);

//Catch 404 Errors and forward them to error handler function
app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

//Error Handler Function
app.use((err, req, res, next) => {
  const error = app.get("env") === "development" ? err : {};
  const status = err.status || 500; //server error

  //Response to client
  res.status(status).json({
    error: {
      message: error.message,
    },
  });

  //Response to ourselves/ Terminal
  console.error(err);
});

//Start the server
const port = app.get("port") || 3000;
app.listen(port, () => console.log(`Server is listening on port ${port}`));
