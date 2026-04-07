import mongoose from "mongoose";

// Mongoose is a library used with Node.js.

// Helps you interact with MongoDB databases easily
// Lets you define schemas (structure of data)
// Adds validation, relationships, and cleaner queries

// Async is used when tasks take time:

// API calls 🌐
// Database queries 🗄️
// File reading 📂

const  connectDB= async()=>
    {
        try{
           const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}`)
           console.log(`MongoDB connected ${connectionInstance.connection.host}`);
        }
        catch(error)
        {
           console.log("MongoDb connection failed",error);
           process.exit(1);
        }
    } 

export default connectDB;