import env from 'dotenv';
env.config();
import cookieParser from 'cookie-parser';
import ServiceRouter from './src/Serices/routes.js'; 
import express from 'express';
import userRouter from './src/user/routes.js';
import connectUsingMongoose from './config/mongooseConfig.js';
import cors from 'cors';
const app = express();
app.use(cors({
    origin: 'http://localhost:3000', // or wherever your frontend runs
    credentials: true
}));
import bodyParser from 'body-parser';
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use('/api/user', userRouter);
app.use('/api/service', ServiceRouter);
app.get('/', (req, res) => {
  res.send('Welcome to the backend server!');
});
app.listen(4000,()=>{
    console.log('Server is running on port 4000');
    connectUsingMongoose();
})