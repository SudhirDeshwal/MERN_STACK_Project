const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const expressValidator = require('express-validator');
require('dotenv').config()


//imported routes
const connectDB = require('./config/connectDB');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');

//app
const app = express()
app.use(express.json());

//middleware
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cookieParser());
app.use(expressValidator());


//connect to db
connectDB();

//Routes middleware
app.use('/api', authRoutes);
app.use('/api', userRoutes);


//Port Settings
const port  = process.env.PORT || 8000;

app.listen(port ,() => {

    console.log(`Sudhir your server started at port : ${port}`);
});