const { ClassNotification } = require('../models/notification');

// Send a notification
const sendNotification = async (req, res) => {
    try {
        const { message, course_id, lecturer_id } = req.body;
        const notification = await ClassNotification.create({ message, course_id, lecturer_id });
        return res.status(201).json({ message: "Notification sent successfully", notification });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

// Get all notifications
const getAllNotifications = async (req, res) => {
    try {
        const notifications = await ClassNotification.findAll();
        return res.status(200).json(notifications);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = { sendNotification, getAllNotifications };
