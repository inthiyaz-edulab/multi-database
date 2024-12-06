# Multi-Database Management Application
### Overview
This application allows users to:

- Register and log in using a secure authentication system.
- Create and manage multiple PostgreSQL databases dynamically.
- Execute SQL queries on specific databases.
- View a list of databases they have created.
- The backend is built with Node.js and Express, and the frontend is built with React.

### Features
1. User authentication (Register/Login).
2. Role-based database management:
- Create new databases.
- List all created databases.
- Execute SQL queries on a specific database.
3. Secure backend APIs using JWT tokens.
4. ostgreSQL as the database system.
## Technologies Used
### Backend
- Node.js (Server-side runtime)
- Express.js (Framework for APIs)
- pg (PostgreSQL client for Node.js)
- bcrypt (Password hashing)
- jsonwebtoken (JWT-based authentication)
- dotenv (Environment variable management)
### Frontend
- React.js (Frontend framework)
- Axios (HTTP client for API requests)
- React Router (Routing for the React app)


## Project Structure
### Backend Structure

backend/
├── src/
│   ├── config/
│   │   └── db.js          # Database connection and initialization
│   ├── controllers/
│   │   ├── authController.js       # Handles user registration/login
│   │   └── databaseController.js   # Handles database creation, listing, and querying
│   ├── middlewares/
│   │   └── authMiddleware.js       # JWT authentication middleware
│   ├── routes/
│   │   ├── authRoutes.js           # Auth-related API endpoints
│   │   └── databaseRoutes.js       # Database-related API endpoints
│   └── app.js                      # Main server file
├── .env                             # Environment variables
└── package.json                     # Backend dependencies
### Frontend Structure

frontend/
├── src/
│   ├── components/
│   │   ├── Login.js          # Login form
│   │   ├── Register.js       # Registration form
│   │   ├── Dashboard.js      # Main dashboard for database management
│   │   └── DatabaseManager.js # Create, list, and query databases
│   ├── services/
│   │   └── api.js            # Axios configuration for API requests
│   ├── App.js                # Main app component
│   └── index.js              # React entry point
├── .env                       # Frontend environment variables
└── package.json               # Frontend dependencies


## Getting Started
1. Backend Setup
### Prerequisites
- Node.js (v14+)
- PostgreSQL (v12+)
### Steps
1. Clone the repository:

```git clone <repository-url>
cd backend
2. Install dependencies:

```npm install
3. Create a .env file in the backend directory and add the following:

```DB_USER=<your_database_user>
DB_PASSWORD=<your_database_password>
DB_HOST=localhost
DB_PORT=5432
DB_NAME=<your_main_database_name>
JWT_SECRET=<your_jwt_secret>
PORT=5000

4. Start the PostgreSQL server and create the main database (if not already created):

```CREATE DATABASE <your_main_database_name>;
5. Start the backend server:

```npm start
6. The backend will run at `http://localhost:5000`