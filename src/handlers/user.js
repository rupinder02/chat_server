const user = require('../models/user');
const  responseMsgs = require('../config/responseMsgs.json');
const sendSms = require('../utils/sendSms');
const generateOTP = require('../utils/generateOTP');

const getOtp = async (req, res) => {
    try {
        const otp = await generateOTP(); 
        const userData = await user.find({ "phone.number": req.body.phone.number });
        if(!userData.length){
            await user.create({
                otp,
                ...req.body
            });
        } else {
            await user.updateOne({ "phone.number": req.body.phone.number }, { $set: { otp }});
        }
        await sendSms({ to: req.body.phone.countryCode + req.body.phone.number
        , message: `Your one time password is ${otp}`});
        res.send('Otp sent successfully');
    } catch(err) {
        res.json({ error: err.message });
    }
}

const profile = async (req, res) => {
    try {
        const userData = await user.find({ "phone": req.body.phone });
        if(!userData.length){
            throw new Error("No user exists with this phone");
        }
        const userToSave = new user(req.body);
        await userToSave.save();
        res.send(responseMsgs.user.success);
    } catch(err){
        res.json({ error: err.message });
    }
};

const signin = async (req, res) => {
    try {
        const userData = await user.find({ "phone.number" : req.body.phone.number, otp: req.body.otp });
        if(!userData.length){
            throw new Error('Invalid otp');
        } else if(!userData[0].isVerified) {
            await user.updateOne({ "phone.number": req.body.phone.number }, { $set: { isVerified: true }});
        }
        res.send('signin successfully');
    } catch(err) {
        res.json({
            status: 'Bad Request',
            statusCode: 400,
            error: err.message
        })
    }
}

module.exports = {
    profile,
    getOtp,
    signin
}