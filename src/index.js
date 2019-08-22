const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

const server = require('http').Server(app);
const io = require('socket.io')(server);

mongoose.connect('mongodb+srv://backend:backend@cluster0-krrbh.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

app.use((req, res, next) => {
    req.io = io;

    return next();
});

app.use(cors());
app.use(express.json());
app.use(require('./routes'));


server.listen(3000, () =>{
    console.log('Server started on port 3000');
})