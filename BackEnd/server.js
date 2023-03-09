import * as dotenv from 'dotenv'
dotenv.config()
import express from 'express';
import bodyParser from 'body-parser';
import connectDB from './config/connectDB';
// import mongoose from 'mongoose';
// import Task from '../BackEnd/models//taskModel';
import route from './routers/taskRouter';
import cors from 'cors'



const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(cors({
    origin: ["https://task-app.onrender.com"],
}))

app.use("/api/tasks", route)

const PORT = process.env.PORT || 3000


//MiddleWare
// const logger = (req, res, next) => {
//     console.log("MiddleWare ran")
//     next()
// }


app.get('/', (req, res) => {
    res.send('Welcome')
})





const startServer = async () => {
    try {
        await connectDB()

        app.listen(PORT, () => {
            console.log(`listening on port ${PORT}`)
        })
    } catch (error) {
        console.log(error)
    }
}

startServer()
