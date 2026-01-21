import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";



const connectDB = async() => {
    try {
        const connection = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`Mongo DB connected successfully. DB host: ${connection.host}`)
    } catch (error) {
        console.log("Error connecting to the Database: ", error);
        process.exit(1)
        
    }
}

export default connectDB