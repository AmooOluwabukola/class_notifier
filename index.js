const express = require('express');
const cors = require('cors');
const axios = require('axios');
const { connectDB } = require('./config/db');
const { syncModels } = require('./models');
const studentRoutes = require("./routes/student");
const courseRoutes = require('./routes/course');
const lecturerRoutes = require('./routes/lecturer');
const notificationRoutes = require('./routes/notification');
const departmentRoutes = require('./routes/department');
const programRoutes = require('./routes/program');
const bot = require('./config/bot');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(cors());

// Routes
app.use("/api/students", studentRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/lecturers', lecturerRoutes);
app.use('/api/notifications', notificationRoutes);
app.use('/api/departments', departmentRoutes);
app.use('/api/programs', programRoutes);

// Telegram Webhook Endpoint
app.post('/webhook', (req, res) => {
    console.log("Webhook received:", req.body);
    bot.handleUpdate(req.body);
    res.sendStatus(200);
});

// Root endpoint
app.get("/", (req, res) => {
    res.send("Telegram Class Notifier API is running!");
    console.log("Telegram Class Notifier API is running");
});

// Database connection & sync models
connectDB()
// .then(() => syncModels());

// Start Express server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    setWebhook(); // Call webhook setup function
});

// Set up Telegram Webhook
async function setWebhook() {
    try {
        const response = await axios.post(
            `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/setWebhook`,
            { url: process.env.WEBHOOK_URL }
        );
        console.log("Webhook response:", response.data);
    } catch (error) {
        console.error("Failed to set webhook:", error.response?.data || error.message);
    }
}
