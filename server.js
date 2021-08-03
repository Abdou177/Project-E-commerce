// import express
const express = require('express');
 const cors=require("cors"),
// instantiating express
 app =express();
// require dotevn
require('dotenv').config({path:"./config/.env"});
// port initialization
const port =process.env.PORT || 5000;
// middleware
app.use(express.json())
app.use(cors())
//require connectDB
const connectDB = require('./config/connectDB.js');
// connect to data base  app.post('/user/all', function(req, res){ Controller.Create});
connectDB();
//routes
app.use('/users', require('./routes/userRouter'));

app.use('/products',require('./routes/productRouter'));
app.use('/category',require('./routes/categoryRouter'))
// launch server
app.listen(port,(error)=>{
    error?console.log(error)
    :console.log(`the server is running on port ${port}`)
});