const { server } = require('../config/develop.js');
const { default: mongoose } = require('mongoose');

const connectToDb = async () => {
    try {
        return mongoose.connect(server.mongoUri);
    } catch (err) {
        throw new Error(err);
    }
};

module.exports = {
    connectToDb,
};
