const express = require("express");
const router = express.Router();
const User = require("../models/User");

// Create User 
router.post("/signup" , async(req,res) => {
    try {
        const {name,email} = req.body;
        const user = new User({name ,email});
        await user.save();
        res.status(201).json({message: "User Added Successfully" , data: user});
    }
    catch (error) {

        res.status(400).json({message : error.message})
        
    }

});


// Get All Users
router.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json({message: "Featch All Users" , data : users});
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


module.exports = router;