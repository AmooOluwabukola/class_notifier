-- Students Table
CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    telegram_id INT UNIQUE NOT NULL,
    program_id INT NOT NULL,
    department_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Programs Table
CREATE TABLE programs (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) UNIQUE NOT NULL
);

-- Departments Table
CREATE TABLE departments (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) UNIQUE NOT NULL,
    program_id INT REFERENCES programs(id)
);

-- Courses Table
CREATE TABLE courses (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    department_id INT REFERENCES departments(id)
);

-- Lecturers Table
CREATE TABLE lecturers (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    telegram_id INT  UNIQUE NOT NULL
);

-- Course-Lecturer Relationship Table
CREATE TABLE course_lecturers (
    id SERIAL PRIMARY KEY,
    course_id INT REFERENCES courses(id),
    lecturer_id INT REFERENCES lecturers(id),
    schedule_day VARCHAR(50) NOT NULL,
    schedule_time TIME NOT NULL
);

-- Student Courses Table
CREATE TABLE student_courses (
    id SERIAL PRIMARY KEY,
    student_id INT REFERENCES students(id),
    course_id INT REFERENCES courses(id),
    lecturer_id INT REFERENCES lecturers(id)
);

-- Class Notifications Table
CREATE TABLE class_notifications (
    id SERIAL PRIMARY KEY,
    student_id INT REFERENCES students(id),
    course_id INT REFERENCES courses(id),
    lecturer_id INT REFERENCES lecturers(id),
    notification_time TIMESTAMP,
    status VARCHAR(20) CHECK (status IN ('Pending', 'Sent'))
);


