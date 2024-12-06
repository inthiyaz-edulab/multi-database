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