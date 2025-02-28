# Telegram Class Notifier - Server

## Overview
This is the backend server for the Telegram Class Notifier application, which helps students in a distance learning program receive timely notifications about their classes.

## Technologies Used
- Node.js
- Express.js
- PostgreSQL
- pg (PostgreSQL client for Node.js)
- dotenv (Environment variable management)

## Setup Instructions

### Prerequisites
Ensure you have the following installed:
- Node.js 
- PostgreSQL (latest version)

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/AmooOluwabukola/class_notifier.git
   cd your-repo-folder
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file in the root directory and add the following:
   ```env
   DB_USER=your_db_user
   DB_HOST=your_db_host
   DB_NAME=your_db_name
   DB_PASSWORD=your_db_password
   DB_PORT=5432
   BOT_TOKEN=your_telegram_bot_token
   ```
4. Start the server:
   ```sh
   npm start
   ```

## API Endpoints

### Student Endpoints
- **Register Student**: `POST /api/students`
- **Get All Students**: `GET /api/students`
- **Get Student by ID**: `GET /api/students/:id`
- **Update Student**: `PUT /api/students/:id`
- **Delete Student**: `DELETE /api/students/:id`

### Course Endpoints
- **Create Course**: `POST /api/courses`
- **Get All Courses**: `GET /api/courses`
- **Get Course by ID**: `GET /api/courses/:id`
- **Update Course**: `PUT /api/courses/:id`
- **Delete Course**: `DELETE /api/courses/:id`

### Lecturer Endpoints
- **Create Lecturer**: `POST /api/lecturers`
- **Get All Lecturers**: `GET /api/lecturers`
- **Get Lecturer by ID**: `GET /api/lecturers/:id`
- **Update Lecturer**: `PUT /api/lecturers/:id`
- **Delete Lecturer**: `DELETE /api/lecturers/:id`

### Notification Endpoints
- **Create Notification**: `POST /api/notifications`
- **Get All Notifications**: `GET /api/notifications`
- **Get Notification by ID**: `GET /api/notifications/:id`
- **Update Notification**: `PUT /api/notifications/:id`
- **Delete Notification**: `DELETE /api/notifications/:id`


## Deployment
1. Ensure your PostgreSQL database is set up.
2. Use a cloud platform (e.g., Heroku, AWS, DigitalOcean) to host the server.
3. Set environment variables in the production environment.

## Contributing
Feel free to fork the repo, create a branch, and submit a pull request.


