# Aizu Tourism Web App (Frontend)

A full-stack web application to promote tourism in Aizu, Japan. Users can explore hot springs and events through a responsive single-page application (SPA). Built with React, Node.js, and MongoDB, deployed on Vercel (frontend) and Render (backend).

会津の観光振興を目指し、温泉やイベント情報を直感的なUIで提供。ユーザー視点の設計を重視。

![Demo Screenshot](https://github.com/yourusername/aizu-project/issues/1/screenshot.png)

 Features
Responsive SPA with React 19.1.0 (Context API).
- Reservation form integrated with backend API.

Tech Stack
- React 19.1.0 (SPA, Context API)
- Vite 6.3.4 (HMR, Fast Refresh)
- Deployed on Vercel

Live Demo
- Frontend: [Vercel](https://client-drab-iota.vercel.app/)
- API: [Render](https://aizu-server.onrender.com)

Installation
To run the Aizu Tourism Web App locally, follow these steps:

1. **Clone the repository**:
   ```bash
   mkdir aizu
   cd aizu
   git clone https://github.com/kouji-625/aizu-client
   cd aizu-client

2. **Install dependencies**:
    npm install

3. **Set up environment variables**:
    Create a .env file based on .env.example:
    VITE_API_URL=http://localhost:5000

**Note**: For local testing, set VITE_API_URL=http://localhost:5000 and run the backend (aizu-backend)
    locally.For testing without a local backend, set VITE_API_URL=https://aizu-server.onrender.com.

4. **Run the application**:
    npm run dev
    
    Open http://localhost:5173 to view the app.
    
**Note**: Requires the backend (aizu-backend) for reservations (MongoDB Atlas). See aizu-backend for setup.
         Alternatively, use VITE_API_URL=https://aizu-server.onrender.com to connect to the deployed backend.

Purpose
     Supports Aizu tourism with an accessible frontend, reflecting my IT transition from the music industry.

Future Improvements
    Add JWT authentication for user accounts.
    Implement unit tests with Jest.
    Explore Web3 (NFT minting with Solidity).




```markdown
# Aizu Tourism Web App (Backend) 🌄

The backend of a full-stack web application to promote tourism in Aizu, Japan. Built with Node.js, Express, and MongoDB Atlas, deployed on Render. Provides REST API for the frontend (`aizu-client`).

**日本語**: 会津の観光振興を支えるREST API。予約システムとメール通知を提供。

## 🚀 Features
- REST API for rooms and reservations (`GET /api/rooms`, `POST /api/reservations`).
- MongoDB Atlas for data storage.
- Email notifications via Nodemailer.

## 🛠️ Tech Stack
- Node.js, Express (REST API)
- MongoDB Atlas (MongoClient)
- Nodemailer, express-validator
- Deployed on Render

## 🔗 Live Demo
- API: [Render](https://aizu-server.onrender.com)

## 📦 Installation
To run the backend locally, follow these steps:

1. **Clone the repository**:
   ```bash
   mkdir aizu
   cd aizu
   git clone https://github.com/kouji-625/aizu-server
   cd aizu-server

2. **Install dependencies**:
    npm install

3. **Set up environment variables**:
    Create a .env file based on .env.example:
    MONGODB_URI=mongodb+srv://<user>:<password>@cluster0.mongodb.net/aizu_db
    PORT=5000
    EMAIL_USER=your_email@gmail.com
    EMAIL_PASS=your_gmail_app_password
    ALLOWED_ORIGINS=http://localhost:5173,https://client-drab-iota.vercel.app

    MongoDB Atlas: Free account at mongodb.com. Set up a cluster and provide the connection string in MONGODB_URI.
    Nodemailer: Gmail app password for email notifications (optional). Generate an app password at Google Account Security under "2-Step Verification" > "App passwords". If not set, the reservation system works without email notifications.

4. **Run the application**:
    npm start

    Runs on http://localhost:5000.

    **Note**: Requires a MongoDB Atlas connection string for reservations. The frontend (aizu-client) connects to this backend at http://localhost:5000 (local) or https://aizu-server.onrender.com (production). See aizu-client for frontend setup.

Purpose
    Provides a robust backend for Aizu tourism, with plans for Web3 integration.

Future Improvements
    Add JWT authentication.
    Implement unit tests with Jest.