const express = require("express");
const Router = express.Router();

const {
  validate,
  validationUser
} = require("../../middlewares/checkValidator");

const User = require("../../models/User");
const Photo = require("../../models/Photo");

//@ Route POST api/user
//@ Description Create user
//@ Public
Router.post("/", validationUser(), validate, async (req, res) => {
  try {
    const { name, lastName, birthYear, birthLocation } = req.body;

    const userExist = await User.findOne({ name, lastName });

    //check if user exists
    if (userExist)
      return res.status(400).json({ message: "User already exists" });

    // create new User
    const newUser = new User({ name, lastName, birthYear, birthLocation });

    //save the new user
    const user = await newUser.save();
    res.json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

//@ Route put api/user/:id
//@ Description put user
//@ Public
Router.put("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    //find user by id and update
    const editedUser = await User.findOneAndUpdate(
      { _id: id },
      { $set: req.body },
      { new: true }
    );
    res.json(editedUser);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

//@ Route DELETE api/user/:id
//@ Description delete  user
//@ Public
Router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  // delete the user and it s photos !
  try {
    
    const deletedUser = await User.findByIdAndDelete({ _id: id });
    if (!deletedUser)
      return res.status(400).json({ message: "User dosent exist" });

        //Delete User photos 
    await Photo.deleteMany({user : id })
    res.json(deletedUser);
  
  } catch (error) {
    res.status(500).json(error.message);
  }
});

//@ Route GET api/user
//@ Description Get all users
//@ Public
Router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

module.exports = Router;
