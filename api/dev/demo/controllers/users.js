const User = require("../models/user");
const Car = require("../models/car");

module.exports = {
  index: async (req, res, next) => {
    const users = await User.find({});
    res.status(200).json(users);
  },

  newUser: async (req, res, next) => {
    const newUser = new User(req.body);
    const user = await newUser.save();
    res.status(201).json(user);
  },

  getUser: async (req, res, next) => {
    const { userId } = req.params;
    const user = await User.findById(userId);
    res.status(200).json(user);
  },

  replaceUser: async (req, res, next) => {
    //enforce that req.body must contains all the fields
    const { userId } = req.params;
    const newUser = req.body;
    const result = await User.findByIdAndUpdate(userId, newUser);
    res.status(201).json({ success: true });
  },

  //validation difference from replace user
  updateUser: async (req, res, next) => {
    const { userId } = req.params;
    const newUser = req.body;
    const result = await User.findByIdAndUpdate(userId, newUser);
    res.status(201).json({ success: true });
  },

  getUserCars: async (req, res, next) => {
    const { userId } = req.params;
    //populate in order to receive objects with full information
    const user = await User.findById(userId).populate("cars");
    res.status(200).json(user.cars);
  },

  newUserCar: async (req, res, next) => {
    //req.body -create an instance of a new car
    const { userId } = req.params;
    //create a new car
    const newCar = new Car(req.body);
    //Get user
    const user = await User.findById(userId);
    //Assign user as a car's seller
    newCar.seller = user;
    //Save the car
    await newCar.save();
    //Add car to the user's selling array 'cars'
    user.cars.push(newCar);
    //Save User
    await user.save();
    res.status(201).json(newCar);
  },
};

/*
We can interact with mongoose in 3 different ways:
1) Callbacks
2) Promises
3) [X]Async/Await(Promises)
*/
