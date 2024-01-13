import connectDB from "./db/db.js";
// require('dotenv').config({path: './env'})
import dotenv from "dotenv";



dotenv.config({
    path:'./env'
})

connectDB()
.then(
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at Port: ${process.env.PORT}`);
    })
)
.catch((err) => {
    console.log("MONGO DB connection failed", err);
})




