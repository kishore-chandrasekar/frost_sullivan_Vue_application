
const Registration = require("../models/Registration");
const jwt = require('jsonwebtoken');

const bcrypt = require('bcrypt');


const isValidPassword = async function(password,DbPassword) {
    try {
        console.log(password,DbPassword);
      return await bcrypt.compare(password,DbPassword);
    } catch (error) {
      throw new Error(error);
    }
  };
exports.NewUser = async (req, res) => {
    try {
        const { fullName, email, username, password } = req.body;
        console.log(fullName, email, username, password);
        const user = new Registration({ fullName, email, username, password });
        await user.save();
        res.status(201).send('User registered successfully');
    } catch (error) {
       
        const keys = Object.keys(error?.keyValue)[0]
        if(error.keyValue){
          res.status(500).send(keys + " already exists");
        }else{
          res.status(500).send("Something went wrong ");
        }
    }
};
// Import your configuration

exports.login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await Registration.findOne({ username });
        if (user && await isValidPassword(password,user.password)) {
            const token = jwt.sign({ username: user.username }, "Kis@123", { expiresIn: '1h' });
            res.json({ token });
          } else {
            res.status(401).send('Invalid credentials');
          }
    } catch (error) {
        console.error(error);
        res.status(500).send('Error logging in');
    }
};