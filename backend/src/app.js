import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import propertyRoutes from './routes/propertyRoutes.js';


const app = express();



// Middleware
app.use(express.json())
app.use(cors())
app.use(morgan("dev"))


app.get('/', (req, res)=>{
    res.send("App is running")
})

app.use("/api/properties", propertyRoutes)

export default app