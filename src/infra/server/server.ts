import express, { Application } from 'express';
import cors from 'cors'; 
import libraryRouter from '../../routes/libraryRouter';
import connectToMongoDB from '../database/mongoConnect';
import userRouter from '../../routes/userRouter';
import { config } from '../../config/environment';

const app: Application = express();

app.use(express.json()); 
app.use(cors());

const PORT = config.port

connectToMongoDB();

app.use(libraryRouter);
app.use(userRouter);

export default app;
export { PORT };