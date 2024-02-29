import express from 'express'
import { Server } from 'socket.io';

let peers = [];
const PORT = 5000;
const app = express();

const server = app.listen(PORT, () => {
    console.log(`Express server is running now at ${PORT}`)
})

const io = new Server(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST']
    }
})

io.on('connection', (socket) => {
    socket.emit('connection', null);
    console.log(socket.id)

    socket.on('register-new-user', (data) => {
        peers.push({
            username: data.username,
            socketId: data.socketId
        });
        console.log("Active Users: ", peers);

        io.sockets.emit('broadcast', {
            event: 'ACTIVE_USERS',
            activeUsers: peers
        })
    })

    socket.on('disconnect', () => {
        console.log("User disconnected")
        peers = peers.filter(peer => peer.socketId !== socket.id)
        io.sockets.emit('broadcast', {
            event: 'ACTIVE_USERS',
            activeUsers: peers
        })
    })
})