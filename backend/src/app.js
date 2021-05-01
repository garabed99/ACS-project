require('dotenv').config({
    path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
});
require('./db-connection');
const express = require('express');
const app = express();
const users = require('./users/users.controller');
const admin = require('./admin/admin.controller');
const auth = require('./auth/auth.controller');
const { writeInFile, readFromFile } = require('./commons/util');
const { handleError } = require('./commons/middlewares/error-handler.middleware');
const asyncHandler = require('express-async-handler');
const { jwtMiddleware } = require('./commons/middlewares/auth.middleware');
const cors = require('cors');

app.use(cors());
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// app.use(jwtMiddleware.unless({
//     path: [
//         '/auth/login',
//         { url: '/users', methods: ['POST'] }
//     ]
// }));

app.use('/admin', admin);
app.use('/users', users);
app.use('/auth', auth);

app.get('/', (req, res) => {
    res.send("Hello World!");
})

app.use(handleError);

module.exports = app;