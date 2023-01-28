import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import connectDB from '../backend/config/db.js';
import postRoutes from './routes/postRoutes.js';
import dalleRoutes from './routes/dalleRoutes.js';


const PORT = process.env.PORT || 8888;
dotenv.config();
connectDB()

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

//use middleware
app.use('/api/v1/post', postRoutes)
app.use('/api/v1/dalle', dalleRoutes)

app.listen(PORT, () => {
    console.log(`Listening to http://localhost:${PORT}`) 
})

app.get('/', (req, res) => {
    res.status(200).send("Route is OK")
})

