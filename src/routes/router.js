const express = require('express');
const router = express.Router();



const { createUser} = require('../controllers/user');

//user route
router.post('/user', createUser);

module.exports = router;