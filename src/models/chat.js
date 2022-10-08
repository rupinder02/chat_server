const { Schema, default: mongoose } = require('mongoose');
const user = require('./user');

const chatSchema = new Schema(
    {
        senderId: { type: mongoose.Types.ObjectId, ref: user },
        receiverId: { type: mongoose.Types.ObjectId, ref: user },
        message: { type: String },
    },
    { timestamps: true }
);

const chat = mongoose.model('chat', chatSchema);
module.exports = chat;
