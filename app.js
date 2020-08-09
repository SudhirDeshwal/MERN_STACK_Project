const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const expressValidator = require('express-validator');
require('dotenv').config()
const request = require('request');
var cors = require('cors')


//imported routes
const connectDB = require('./config/connectDB');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const categoryRoutes = require('./routes/category');
const productRoutes = require('./routes/product');
const brainTreeRoutes = require('./routes/braintree');

//app
const app = express()
app.use(express.json());
app.use(cors())



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
app.use('/api', categoryRoutes);
app.use('/api', productRoutes);
app.use('/api', brainTreeRoutes);


//Port Settings
const port  = process.env.PORT || 4000;

app.listen(port ,() => {

    console.log(`Sudhir your server started at port : ${port}`);
});