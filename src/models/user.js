const { Schema, default: mongoose } = require('mongoose');   // odm for mongodb

const phoneSchema = new Schema({
    countryCode: { type: String, default: '+91' },
    number: { type: String, required: true },
});

const userSchema = new Schema(
    {
        name: { type: String },
        about: { type: String },
        phone: { type: phoneSchema, required: true, unique: true },
        profilePic: { type: String },
        otp: { type: String },
        isVerified: { type: Boolean, default: false }
    },
    { timestamps: true }
);

const user = mongoose.model('user', userSchema);

module.exports = user;
