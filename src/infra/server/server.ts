import express, { Application } from 'express';
import cors from 'cors'; 
import libraryRouter from '../../routes/libraryRouter';
import connectToMongoDB from '../database/mongoConnect';
import userRouter from '../../routes/userRouter';

const app: Application = express();

connectToMongoDB();

app.use(express.json()); 
app.use(cors());


app.use(libraryRouter);
app.use(userRouter);

export default app;