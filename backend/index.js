import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import bookroute from './Routes/bookroute.js'
import cors from 'cors'
const app = express()
//for cors(cross origin resource sharing) policy
app.use(cors())
app.use(express.json()); // allows Express to read JSON body from request
dotenv.config();
const PORT = process.env.PORT || 3000
const MONGO_URI = process.env.MONGO_URI
//connect mongodb to the backend
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("✅ MongoDB connected"))
    .catch(err => console.log("❌ Error: ", err));
//To handle all book crud operations route
app.use('/book',bookroute)
app.listen(PORT, () => {
    console.log("App is listening at port number 3000")
})