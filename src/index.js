
import dotenv from "dotenv";
import  {DB_NAME} from "./constants.js";
import express from "express";
const app =express();
import connectDB from "./db/index.js";

dotenv.config({
    path:"./.env"
})

connectDB()
.then(() =>{
    app.listen(process.env.PORT || 3000, () =>{
        console.log(`server is running at port ${process.env.PORT}`);
        
    });
})
.catch((err) =>{
    console.log("mongo db connection failed !!!",err);
    
})














/*

( async () => {
    try{
       await  mongoose.connect(`${process.env.
        MONGODB_URI}/${DB_NAME}`)
        app.on("error",(error) =>{
            console.log("ERROR :",error);
            throw error
            
        })

        app.listen(process.env.PORT,() =>{
            console.log(`App is listening on port $
                {process.env.PORT}`);

            
        })
    
    }catch(error){
        console.error("ERROR: ",error);
        throw error
        
    }
}) ()

*/