const express = require('express');
const { sendNotification, getAllNotifications } = require('../controllers/notification');

const router = express.Router();

router.post('/send', sendNotification);
router.get('/notifications', getAllNotifications);

module.exports = router;
