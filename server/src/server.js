import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import { Server } from 'socket.io';
import { createServer } from 'http';

import connectDB from './config/db';
import { notFound, errorHandler } from './middleware/errorMiddleware';

import userRoutes from './routes/userRoutes';
import chatRoutes from './routes/chatRoutes';
import messageRoutes from './routes/messageRoutes';

dotenv.config();
connectDB();

const app = express();

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app.use(express.json());
app.use('/api/chat', chatRoutes);
app.use('/api/user', userRoutes);
app.use('/api/message', messageRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT;

const httpServer = createServer(app);
const io = new Server(httpServer, {
    pingTimeout: 60000,
    cors: {
        origin: 'http://localhost:3000',
        // credentials: true,
    },
});

io.on('connection', (socket) => {
    console.log('Connected to socket.io');
    socket.on('setup', (userData) => {
        socket.join(userData._id);
        socket.emit('connected');
    });

    socket.on('join chat', (room) => {
        socket.join(room);
        console.log('User Joined Room: ' + room);
    });
    socket.on('typing', (room) => socket.in(room).emit('typing'));
    socket.on('stop typing', (room) => socket.in(room).emit('stop typing'));

    socket.on('new message', (newMessageReceived) => {
        var chat = newMessageReceived.chat;

        if (!chat.users) return console.log('chat.users not defined');

        chat.users.forEach((user) => {
            if (user._id == newMessageReceived.sender._id) return;

            socket.in(user._id).emit('message received', newMessageReceived);
        });
    });

    socket.off('setup', () => {
        console.log('USER DISCONNECTED');
        socket.leave(userData._id);
    });
});

httpServer.listen(PORT);