const User = require("../models/users");

module.exports = {
    SignUp: async (req, res, next) => {
        console.log("UserController.signUp() called!", req.value.body);
        
        const {email, password } = req.value.body;

        const newUser = new User({ email, password });

        await newUser.save()

        res.json({user:"created"})

    },

    signin: async (req, res, next) => {
        // generate token
        console.log("UsersController.signIn() called!");
    },

    signin: async (req, res, next) => {
        console.log("UsersController.secret() called!");
    }

}