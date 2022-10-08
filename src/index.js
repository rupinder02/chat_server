const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const { server: serverConfig } = require('./config/develop.js');
const bodyParser = require('body-parser');
const cors = require('cors');
const { connectToDb } = require('./utils/dbInit');
const userRouter = require('./routes/user');
require('./utils/socket.js')(io);

app.use(bodyParser.json());
app.use(cors());
app.use('/user', userRouter);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

server.listen(serverConfig.port, async () => {
    await connectToDb();
});
