const express = require('express');
const router = express.Router();
const auth = require('./auth.service');
const asyncHandler = require('express-async-handler');

router.post('/login', asyncHandler(async (req, res) => {
    const { username, password } = req.body;
    const token = await auth.login(username, password);
    res.json({ token });
}))

module.exports = router;