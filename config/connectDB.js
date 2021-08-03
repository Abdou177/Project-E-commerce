//import mongoose
const mongoose = require('mongoose');
// import dotevn 
require('dotenv').config({path:"./config/.env"});
// connect to database
const connectDB = async () => {
    try {
      await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex :true
      });
      console.log('MongoDB connected...');
    } catch (error) {
        console.log('MongoDB not  connected...');
    }
  };
module.exports =connectDB;