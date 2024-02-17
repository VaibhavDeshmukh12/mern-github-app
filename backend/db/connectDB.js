import mongoose from "mongoose";

export default async function connectDB(){
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("CONNECTED TO MONGODB");
    } catch (error) {
        console.log('Error conneting to mongodb: ',error.message);
    }
}