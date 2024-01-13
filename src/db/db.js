import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB = async () => {
const DB_URL = process.env.MONGODB_URL;

    try{
     const connectionInstance =  await mongoose.connect(`${DB_URL}/${DB_NAME}`)
        console.log(`\n MongoDb  connected !! DB Host: ${connectionInstance.connection.host}`);

    }catch(error){
       console.log("MONGODB connection FAILED", error); 
       process.exit(1) 
    }

  

}

export default connectDB;