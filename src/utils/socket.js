module.exports = (io) => {
    const chat = require('../models/chat');
    const socketMap = {};
    const reverseSocketMap = {};

    io.on('connection', (socket) => {
        // By using this event we are registering the users in our socketmap
        socket.on('join', ({ userId }) => {
            socketMap[userId] = socket.id;
            reverseSocketMap[socket.id] = userId;
        });

        // Receiving message from senderId and emitting to receiverId
        socket.on('message', async ({ senderId, receiverId, msg }) => {
            socket.to(socketMap[receiverId]).emit('message', msg);
            const chatToSave = new chat({ senderId, receiverId, message: msg });
            await chatToSave.save();
        });

        socket.on('disconnect', () => {
            delete socketMap[reverseSocketMap[socket.id]];
            delete reverseSocketMap[socket.id];
        });
    });
};
