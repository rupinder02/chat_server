const { describe, it } = require('mocha'); // get describe and it from mocha module
const { expect } = require('chai'); // get expect function from chai module
const { connectToDb } = require('../utils/dbInit');
const chat = require('./chat');
const { faker } = require('@faker-js/faker'); // to create random data for test cases
const user = require('./user'); 

describe('Chat test cases', () => {
    before(async () => {   // before hook for connecting to db
        await connectToDb();
    });

    it('creates a chat message record successfully', async () => {
        const userData1 = {
            name: faker.name.firstName(),
            about: faker.name.firstName(),
            phone: { number: faker.phone.number('##########') },
        };
        let userToSave1 = new user(userData1);
        let savedUser1 = await userToSave1.save();
        expect(savedUser1.name).to.be.equal(userData1.name);

        const userData2 = {
            name: faker.name.firstName(),
            about: faker.name.firstName(),
            phone: { number: faker.phone.number('##########') },
        };
        let userToSave2 = new user(userData2);
        let savedUser2 = await userToSave2.save();
        expect(savedUser2.name).to.be.equal(userData2.name);

        const chatData = {
            senderId: savedUser1._id,
            receiverId: savedUser2._id,
            message: faker.name.jobDescriptor(),
        };
        const chatToSave = new chat(chatData);
        const savedChat = await chatToSave.save();
        expect(savedChat.message).to.be.equal(chatData.message);
    });
});