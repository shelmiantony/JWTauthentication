# MERN Stack JWT Authentication

A full-stack authentication application built using the MERN stack (MongoDB, Express.js, React.js, and Node.js). This application provides user registration, login, logout, and protected profile access using JWT authentication with HTTP-only cookies.

## 🚀 Live Demo

- **Frontend:** https://jw-tauthentication.vercel.app/
- **Backend API:** https://jwtauthentication-sp99.onrender.com
- **Health Check:** https://jwtauthentication-sp99.onrender.com/api/health

## ✨ Features

- User registration with username, email, and password.
- Secure password hashing using bcryptjs.
- User login with JWT authentication.
- JWT stored in an HTTP-only cookie.
- Protected profile page.
- User logout and cookie clearing.
- Authentication state management using React Context API.
- Automatic authentication check when the application loads.
- Role-based authorization middleware for protected admin routes.
- Responsive user interface using Material UI.

## 🛠️ Tech Stack

### Frontend

- React 19
- Vite
- React Router DOM
- Material UI
- Axios
- React Hook Form
- Context API

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Token (JWT)
- bcryptjs
- Cookie Parser
- CORS
- dotenv

### Deployment

- Frontend: Vercel
- Backend: Render
- Database: MongoDB Atlas

## 📁 Project Structure

```text
MERN-JWT/
│
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── .env
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   └── ...
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
├── .gitignore
└── README.md
```

## 🔐 Authentication Flow

1. **Registration:** The user submits registration details. The backend validates the details, hashes the password using bcryptjs, and stores the user in MongoDB.

2. **Login:** The backend verifies the email and password. On successful authentication, it generates a JWT and stores it in an HTTP-only cookie.

3. **Protected Routes:** Authentication middleware reads the JWT from the cookie, verifies it, and identifies the authenticated user.

4. **Profile:** The frontend requests the protected profile endpoint to retrieve the authenticated user's information.

5. **Refresh:** React Context API checks the user's authentication status when the application loads by calling the profile API.

6. **Logout:** The backend clears the JWT cookie and the frontend updates the authentication state.

## 🔗 API Endpoints

Base URL:

```text
https://jwtauthentication-sp99.onrender.com/api
```

| Method | Endpoint          | Description                    |
| ------ | ----------------- | ------------------------------ |
| POST   | `/users/register` | Register a new user            |
| POST   | `/users/login`    | Login user                     |
| POST   | `/users/logout`   | Logout user                    |
| GET    | `/users/profile`  | Get authenticated user profile |
| GET    | `/health`         | Check backend status           |

Protected endpoints require a valid authentication cookie.

## ⚙️ Installation and Setup

### 1. Clone the repository

```bash
git clone https://github.com/shelmiantony/JWTauthentication
cd MERN-JWT
```

### 2. Backend setup

```bash
cd backend
npm install
```

Create a `.env` file inside the backend folder:

```env
PORT=8000
NODE_ENV=development
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLIENT_URL=http://localhost:5173
```

Start the backend:

```bash
node server.js
```

Backend runs at:

```text
http://localhost:8000
```

### 3. Frontend setup

Open another terminal:

```bash
cd frontend
npm install
```

Create a `.env` file inside the frontend folder:

```env
VITE_API_URL=http://localhost:8000/api
```

Start the frontend:

```bash
npm run dev
```

Frontend runs at:

```text
http://localhost:5173
```

## 🌍 Deployment

The application is deployed using:

- **MongoDB Atlas:** Cloud database hosting.
- **Render:** Express.js backend hosting.
- **Vercel:** React frontend hosting.

Environment variables are configured separately for local development and production.

## 🔒 Security

- Passwords are hashed before storing them in the database.
- JWT is stored in an HTTP-only cookie to prevent direct JavaScript access.
- Protected API endpoints verify JWT authentication.
- Role-based middleware controls access to authorized routes.
- Environment variables are used for sensitive configuration.

## 📌 Future Improvements

- Forgot password and password reset.
- Email verification.
- Refresh token implementation.
- Improved role-based access control.
- Automated testing.
- Rate limiting and additional security protections.

## 👩‍💻 Author

**Shelmi K.A.**

MERN Stack Developer | React.js Developer

---

⭐ If you find this project useful, feel free to explore the repository and share your feedback!
