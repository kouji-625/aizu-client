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




