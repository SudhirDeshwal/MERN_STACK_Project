const express = require('express');
const connectDB = require('./config/connectDB');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
require('dotenv').config()


//imported routes
const users = require('./routes/users');

//app
const app = express()
app.use(express.json());

//middleware
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cookieParser());


//connect to db
connectDB();

//Routes middleware
app.use('/api', users);


//Port Settings
const port  = process.env.PORT || 8000;

app.listen(port ,() => {

    console.log(`Sudhir your server started at port : ${port}`);
});