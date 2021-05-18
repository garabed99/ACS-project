const express = require('express');
const router = express.Router();
const auth = require('./auth.service');
const asyncHandler = require('express-async-handler');

router.post('/login', asyncHandler(async (req, res) => {
    //username_email
    const { username_email, password } = req.body;
    console.log()
    const response = await auth.login(username_email, password);
    res.json(response);
    console.log(response)
}))

module.exports = router;