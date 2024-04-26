const express = require('express');
const router = express.Router();
const countController = require('../controllers/countController');

// Route to get count
router.get('/', countController.getData);

module.exports = router;
