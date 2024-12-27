import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import userRoutes from './routes/userRoutes.js';


const app = express();



// Middleware
app.use(express.json())
app.use(cors())
app.use(morgan("dev"))

app.use("/api/users", userRoutes)

app.get('/', (req, res)=>{
    res.send("App is running")
})


export default app