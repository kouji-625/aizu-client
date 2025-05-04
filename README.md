# Aizu Tourism Web App 

A full-stack web application to promote tourism in Aizu, Japan. Users can explore hot springs and events through a responsive single-page application (SPA). Built with React, Node.js, and MongoDB, deployed on Vercel (frontend) and Render (backend).

会津の観光振興を目指し、温泉やイベント情報を直感的なUIで提供。音楽業界の経験を活かし、ユーザー視点の設計を重視。

![Demo Screenshot](https://github.com/yourusername/aizu-project/issues/1/screenshot.png)

 Features
- Browse hot springs and events with a responsive SPA.
- REST API for tourism data (e.g., `GET /api/onsen`).
- MongoDB for structured tourism data management.

Tech Stack
- **Frontend**:  react@19.1.0 (SPA, Context API), vite@6.3.4 (HMR, Fast Refresh), Tailwind CSS
- **Backend**: Node.js, Express (REST API), MongoDB Atlas (Mongoose)
- **Deployment**: Vercel (frontend), Render (backend)
- **Tools**: Git, GitHub, npm

Live Demo
- Frontend: [Vercel](https://client-drab-iota.vercel.app/)
- API: [Render](https://aizu-server.onrender.com)

Installation
To run the Aizu Tourism Web App locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/aizu-project.git
   cd aizu-project

2.Install dependencies:
    For the frontend:
      cd client
      npm install
    For the backend:
      cd  backend
      npm install

3.Set up environment variables:
    Create a .env file in backend/ based on .env.example.
    Add MongoDB Atlas connection string and Nodemailer credentials (optional for email notifications).
    Example .env:      
    MONGODB_URI=mongodb+srv://<user>:<password>@cluster0.mongodb.net/aizu_db
    PORT=5000
    EMAIL_USER=uru3022mys@gmail.com
    EMAIL_PASS=your_app_password
    ALLOWED_ORIGINS=http://localhost:5173,https://client-drab-iota.vercel.app
    **Note**: Email notifications via Nodemailer are optional. If `EMAIL_USER` and `EMAIL_PASS` are not set, the reservation system still saves data to MongoDB Atlas.

 MongoDB Atlas: Free account at mongodb.com.
 Nodemailer: Gmail app password for email notifications (optional).
Create a .env file in client/ based on .env.example
    VITE_API_URL=http://localhost:5000

4.Run the application:
    Start the backend (runs on localhost:5000):
    cd backend
    npm start
    Start the frontend (runs on localhost:5173):
    cd  client
    npm run dev

Note: Requires a MongoDB Atlas connection string. The frontend connects to http://localhost:5000 by default. For testing without a local backend, set VITE_API_URL=https://aizu-server.onrender.com in client/.env. Open localhost:5173 to view the app. Email notifications require Nodemailer credentials (optional).

Purpose
   Inspired by my music industry background, this project supports Aizu tourism with an accessible platform. It reflects my transition to IT, with plans for Web3 features (e.g., NFT-based event tickets)

Future Improvements
    Add JWT authentication for user accounts.
    Implement unit tests with Jest.
    Explore Web3 (NFT minting with Solidity).