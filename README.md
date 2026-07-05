# BreathEase

BreathEase is a full-stack meditation and wellness web application designed to help users relax, reflect, and build mindful habits. It includes guided meditation, breathing exercises, calming books, yoga stretching, nature sounds, sleep stories, journaling, affirmations, and user authentication.

## Features

- User signup and login
- Guided meditation sessions
- Breathing exercises
- Yoga and stretching routines
- Calming book recommendations
- Nature sounds and relaxing media
- Sleep stories
- Journal and affirmation section
- MongoDB-backed user data
- Responsive React frontend

## Tech Stack

### Frontend

- React
- React Router
- Axios
- Howler.js
- CSS

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT authentication
- bcrypt / bcryptjs
- dotenv
- CORS

## Project Structure

```txt
BreathEase/
|-- backend/
|   |-- models/
|   |-- routes/
|   `-- server.js
|-- frontend/
|   |-- public/
|   |-- src/
|   |   |-- assets/
|   |   |-- components/
|   |   `-- styles/
|   |-- package.json
|   `-- package-lock.json
|-- package.json
|-- .gitignore
|-- .gitattributes
`-- README.md
```

## Installation

Clone the repository:

```bash
git clone https://github.com/Sruthysuji13/BreathEase.git
cd BreathEase
```

Install backend dependencies:

```bash
npm install
```

Install frontend dependencies:

```bash
cd frontend
npm install
```

## Environment Variables

Create a `.env` file in the root or backend configuration location used by the server.

Add:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000
```

## Running the Project

Start the backend server from the root folder:

```bash
npm start
```

For development with nodemon:

```bash
npm run dev
```

Start the frontend:

```bash
cd frontend
npm start
```

The frontend will run at:

```txt
http://localhost:3000
```

The backend will run at:

```txt
http://localhost:5000
```

## API Routes

### Authentication

```txt
POST /api/auth/signup
POST /api/auth/login
```

### Journal

```txt
GET /api/journal
POST /api/journal
```

## Git LFS Notice

This project uses Git LFS for large video files, including meditation and nature media assets.

After cloning, install Git LFS if needed:

```bash
git lfs install
git lfs pull
```

## Build

To create a production build of the frontend:

```bash
cd frontend
npm run build
```

## Repository

GitHub: [Sruthysuji13/BreathEase](https://github.com/Sruthysuji13/BreathEase)

## Author

Developed by **Sruthy Suji**
