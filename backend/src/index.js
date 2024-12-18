import dotenv from 'dotenv';
import app from './app.js';

//load environment variables from .env
dotenv.config()


const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
    console.log(`Server is running on localhost Port ${PORT}`)
})