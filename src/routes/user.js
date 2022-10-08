const express = require('express');
const { SigningKeyContext } = require('twilio/lib/rest/api/v2010/account/signingKey');
const router = express.Router();
const { profile, getOtp, signin } = require('../handlers/user');

router.post('/getOtp', (req, res) => {
    return getOtp(req, res);
})

router.post('/profile', (req, res) => {
    return profile(req, res);
});

router.post('/signin', (req, res) => {
    return signin(req, res);
})

module.exports = router;