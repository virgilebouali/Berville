const express = require('express');
const router = express.Router();
const mainController = require('./controllers/mainController.js');

// controllers

router.get('/', mainController.index);
router.get('/maison', mainController.homes);
router.get('/reserver', mainController.reserver);




module.exports = router;
