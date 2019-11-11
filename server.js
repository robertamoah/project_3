const express = require("express");

const morgan = require("morgan");

var bodyParser = require('body-parser')

const mongoose = require("mongoose");


const app = express();




app.use(bodyParser.urlencoded({ extended: false }))


//mongo Local connection
mongoose.connect("mongodb://localhost/Users")





// Middlewares
app.use(morgan("dev"));
// app.use(bodyParser.json());


// Routes

require("./routes/users")(app)



const port = process.env.Port || 3021;




app.listen(port, () =>{
    console.log(`Server Listening at Port ${port}`)
})
