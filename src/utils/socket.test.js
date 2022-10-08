const { createServer } = require('http');
const { Server } = require('socket.io');
const Client = require('socket.io-client');
const { expect } = require('chai');
const { server: serverConfig } = require('../config/develop');
const { faker } = require('@faker-js/faker');
const { connectToDb } = require('./dbInit');

describe('Socket tests', () => {
    let io, clientSocket1, clientSocket2;

    before(async () => {
        await connectToDb();
    });

    before((done) => {
        const httpServer = createServer();
        io = new Server(httpServer);
        require('./socket')(io);

        httpServer.listen(serverConfig.port, () => {
            clientSocket1 = new Client(`http://localhost:${serverConfig.port}`);
            clientSocket2 = new Client(`http://localhost:${serverConfig.port}`);

            clientSocket1.on('connect', () => {});

            clientSocket2.on('connect', () => {
                done();
            });
        });
    });

    after(() => {
        io.close();
        clientSocket1.close();
        clientSocket2.close();
    });

    it('client2 should successfully be able to listen to message sent by client1', (done) => {
        const ObjectId1 = faker.database.mongodbObjectId();
        const ObjectId2 = faker.database.mongodbObjectId();
        const msg = faker.name.firstName();

        clientSocket1.emit('join', { userId: ObjectId1 });
        clientSocket2.emit('join', { userId: ObjectId2 });

        setTimeout(() => {
            clientSocket1.emit('message', {
                senderId: ObjectId1,
                receiverId: ObjectId2,
                msg,
            });
        }, 1000);

        clientSocket2.on('message', (data) => {
            expect(data).to.be.equal(msg);
            done();
        });
    });
});
