const express = require("express");
//const router = express.Router();
const router = require('express-promise-router')();

const UsersController = require('../controllers/users')
const {validateParam,schemas} = require('../helpers/routeHelpers')

router.route("/")
  .get(UsersController.index)
  .post(UsersController.newUser);

router.route('/:userId')
    .get(validateParam(schemas.idSchema),UsersController.getUser)
    .put(UsersController.replaceUser)
    .patch(UsersController.updateUser);
    // .delete()

router.route('/:userId/cars')
    .get(UsersController.getUserCars)
    .post(UsersController.newUserCar);

module.exports = router;
