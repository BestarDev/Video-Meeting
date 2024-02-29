import socketClient from 'socket.io-client'
import { setActiveUsers } from '../../store/slices/userSlice';
import { store } from '../../store';

const SERVER = 'http://localhost:300';

let socket;

export const connectWithWebSocket = () => {
    socket = socketClient(SERVER);

    socket.on('connection', () => {
        console.log("Your Socket Id: ", socket.id);
    })

    socket.on('broadcast', (data) => {
        if(data.event === 'ACTIVE_USERS'){
            const activeUsers = data.activeUsers.filter(activeUser => activeUser.socketId !== socket.id)
            console.log("Users List : ", activeUsers);
            store.dispatch(setActiveUsers(data.activeUsers))
        }
    })
}

export const registerNewUser = (username) => {
    socket.emit('register-new-user', {
        username: username,
        socketId: socket.id
    })
}