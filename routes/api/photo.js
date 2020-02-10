const express = require("express");
const Router = express.Router();

const {
  validate,
  validationPhoto
} = require("../../middlewares/checkValidator");

const Photo = require("../../models/Photo");
const User = require("../../models/User");

//@ Route POST api/photo/:id
//@ Description Create photo by user id
//@ Public
Router.post("/:id", validationPhoto(), validate, async (req, res) => {
  const { id } = req.params;
  const { title, path } = req.body;

  try {
    // const photoExist = await Photo.findOne({ path, user: id });
    const userExist = await User.findById(id);

    //check if user dosent exists
    if (!userExist)
      return res.status(400).json({ message: "User dosent exists" });

    //check if photo exists
    // if (photoExist)
    //   return res.status(400).json({ message: "Photo already exists" });

    // create new Photo
    const newPhoto = new Photo({ title, path, user: id });

    //save the new photo
    const photo = await newPhoto.save();
    res.json(photo);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

//@ Route DELETE api/photo/:id
//@ Description delete  photo by id
//@ Public
Router.delete("/:_id", async (req, res) => {
  const _id = req.params;

  try {
    const deletedPhoto = await Photo.findByIdAndDelete(_id);

    if (!deletedPhoto)
      return res.status(400).json({ message: "Photo dosent exist" });
    res.json(deletedPhoto);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

//@ Route GET api/photo
//@ Description Get all photos
//@ Public
Router.get("/", async (req, res) => {
  try {
    const photos = await Photo.find();
    res.json(photos);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

module.exports = Router;
