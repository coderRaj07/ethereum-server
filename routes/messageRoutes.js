const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messageController');

// POST /api/message - Set message on the blockchain
router.post('/message', messageController.setMessage);

// GET /api/message - Get message from the blockchain
router.get('/message', messageController.getMessage);

module.exports = router;
