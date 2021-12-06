import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';

import connectDB from './config/db';
import { notFound, errorHandler } from './middleware/errorMiddleware';

import userRoutes from './routes/userRoutes';
import chatRoutes from './routes/chatRoutes';
import messageRoutes from './routes/messageRoutes';

dotenv.config();
connectDB();

const app = express();

if (process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}

app.use(express.json());
app.use('/api/chat', chatRoutes);
app.use('/api/user', userRoutes);
app.use('/api/message', messageRoutes);