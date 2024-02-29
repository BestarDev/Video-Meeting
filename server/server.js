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

io.on('connection', (client) => {
    client.emit('connection', null);
    console.log('New user connected')
    console.log(client.id)
})