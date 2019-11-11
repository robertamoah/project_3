const mongoose = require("mongoose");

const Schema = mongoose.Schema;


//Create Schema
const userSchema = new Schema({
    email:String,
    password:String
});



// Create a model
const User = mongoose.model("users", userSchema);



// Export the model
module.exports = User;