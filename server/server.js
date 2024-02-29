import express from 'express'
import { Server } from 'socket.io';

const PORT = 5000;

const app = express();

const server = app.listen(PORT, () => {
    console.log(`Server is running now at ${PORT}`)
    console.log(`http://localhost/${PORT}`)
})

const io = new Server(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST']
    }
})

let peers = [];

io.on('connection', (socket) => {
    socket.emit('connection', null);
    console.log('New user connected')
    console.log(socket.id)

    socket.on('register-new-user', (data) => {
        peers.push({
            username: data.username,
            socket: data.socketId
        });
        console.log('Registered New User');
        console.log(peers);
    })
})