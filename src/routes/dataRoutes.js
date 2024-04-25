const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');

// Route to add new data
router.post('/', dataController.addData);

// Route to update existing data
router.put('/:id', dataController.updateData);

module.exports = router;
