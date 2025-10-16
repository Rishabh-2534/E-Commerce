import mongoose from "mongoose";
const connectDB = async()=>{
    try{
        // Check if MONGO_URI is defined
        if (!process.env.MONGO_URI) {
            throw new Error("MONGO_URI environment variable is not defined. Please create a .env file with MONGO_URI=mongodb://localhost:27017/your_database_name");
        }
        
        console.log("Attempting to connect to MongoDB...");
        console.log("MONGO_URI:", process.env.MONGO_URI);
        
        // Try alternative connection string format
        const altUri = process.env.MONGO_URI.replace('/learning', '/?retryWrites=true&w=majority');
        console.log("Alternative URI:", altUri);
        console.log("Cluster region: AWS Mumbai (ap-south-1)");
        console.log("Cluster version: 8.0.14");
        
        const conn= await mongoose.connect(altUri,{
        maxPoolSize:10,
        serverSelectionTimeoutMS:30000, // Increased timeout
        connectTimeoutMS: 30000,
        socketTimeoutMS: 30000,
        retryWrites: true,
        w: 'majority'
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    }catch(error){
        console.error("Error connecting to database:");
        console.error("Error message:", error.message);
        console.error("Full error:", error);
        process.exit(1); // Exit the process if database connection fails
    }
}
export default connectDB;