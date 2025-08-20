const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { vilidateSignupData } = require("../utils/validation");

// Create User
router.post("/signup", async (req, res) => {
  try {
    // validationof data
    vilidateSignupData(req);
    // Encrypr the password
    const { firstName, lastName, emailId, password } = req.body;
    const passwordHash = await bcrypt.hash(password, 10);
    // const {name,email} = req.body;
    const user = new User({
      firstName,
      lastName,
      emailId,
      password: passwordHash,
    });
   const savedUser = await user.save();
    const token = await savedUser.getJWT();
    res.cookie("token" , token, {
      expires : new Date(Date.now() + 2 *3600000)
      
    })
    res.status(201).json({ message: "User Added Successfully", data: savedUser });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

 // User Login through email & password
  router.post("/login" , async (req,res) => {
      try{
        const {emailId , password} = req.body;
        co
      }catch(error){
        
      }
  })
// Get All Users
router.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json({ message: "Featch All Users", data: users });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
