// const result= await client.search({
//     index: 'game-of-thrones',
//     query: {
//       match: { quote: 'winter' }
//     }
//   })

// winston logger

const winston = require('winston');

const logger = winston.createLogger({
    level: 0,
    format: '',
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'error.log'})
    ]
});

logger.log({
    level: 'error',
    message: 'This is a test message'
})
