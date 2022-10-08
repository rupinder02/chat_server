const { describe, it } = require('mocha');
const { expect } = require('chai');
const { connectToDb } = require('../utils/dbInit');
const user = require('./user');
const { faker } = require('@faker-js/faker');

describe('user test cases', () => {
    before(async () => {
        await connectToDb();
    });

    it('creates a user successfully', async () => {
        const userData = {
            name: faker.name.firstName(),
            about: faker.name.firstName(),
            phone: { number: faker.phone.number('##########') },
        };
        const userToSave = new user(userData);
        const savedUser = await userToSave.save();
        expect(savedUser.name).to.be.equal(userData.name);
    });
});
