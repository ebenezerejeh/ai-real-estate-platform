import dotenv from 'dotenv';
import app from './app.js';
import connectDB from './config/db.js';

//load environment variables from .env
dotenv.config()
connectDB()



const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
    console.log(`Server is running on localhost Port ${PORT}`)
})