module.exports = {

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
