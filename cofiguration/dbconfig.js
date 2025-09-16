import mongoose from "mongoose";
const connectDB = async()=>{
    try{
        const conn= await mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser:true,
        maxPoolSize:10,
        serverSelectionTimeoutMS:5000,
        });
        console.log("MongoDB Connected");
    }catch(error){
        console.log("error connection to database");
        
    }
}
export default connectDB;