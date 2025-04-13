import connectDB from './src/config/db.js';
import express from 'express'
import dotenv from 'dotenv'
import userRoutes from './src/routes/user.routes.js'

dotenv.config()

//inialization and configuration 
dotenv.config()
const app = express()

//database connection 
connectDB()

//middlewares
app.use (express.json())
app.use (express.urlencoded({extend: true}))

//routes
app.use ('/api/v1/user', userRoutes)
app.use ('/api/v1/product', productRoutes)
app.use ('/api/v1/payment',paymentRoutes)
app.use ('/api/v1/order',orderRoutes)
app.use ('/api/v1/cart',cartRoutes)

//start the server 
const port = process.env.port || 5001

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})
