import dotenv from "dotenv"
import { app } from "./app.js"
import connectDB from "./db/DB.js"

dotenv.config({
    path: './env'
})
const port = process.env.PORT


connectDB()
.then(() => {
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`); 
    })
    app.on("error",(error) => {
        console.log("Error: ", error);
        
    })
})
.catch((error) => {
    console.log("Mongo DB connection error :", error);
    
})