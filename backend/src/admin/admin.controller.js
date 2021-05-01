const express = require('express');
const router = express.Router();
const admin = require('./admin.service');
const asyncHandler = require('express-async-handler');
const { ADMIN_ROLE } = require('../commons/util');

router.patch('/unlock-user/:id',asyncHandler(async (req, res) =>{
    const {id} = req.params;
    if(req.user.role !== ADMIN_ROLE) {
        throw new Error('Not authorized!')
    }

    await admin.unlock(id);
    res.status(200).send({message:'User has successfully been unlocked!'});
}))


router.patch('/lock-user/:id', asyncHandler(async (req, res) => {
    const {id} = req.params;
    if(req.user.role !== ADMIN_ROLE) {
        throw new Error('Not authorized!')
    }
    
    await admin.lock(id);
    res.status(200).send({message:'User has successfully been locked!'});
}))

module.exports = router;