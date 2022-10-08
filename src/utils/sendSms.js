require('dotenv').config();
const client = require('twilio')(process.env.accountSid, process.env.authToken);

const sendSms = async ({ to, message }) => {
  try {
    return await client.messages.create({
      from: '+19897488914',
      to,
      body: message
    });
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = sendSms;
