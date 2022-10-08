const { faker } = require('@faker-js/faker');

const generateOTP = () => {
    return faker.random.numeric(4);
}

module.exports = generateOTP;