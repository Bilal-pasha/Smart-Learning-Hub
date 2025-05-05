
# 🎓 Smart Learning Hub

A modern platform for intelligent, scalable, and interactive education.

![Backend](https://img.shields.io/badge/Backend-NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)
![Database](https://img.shields.io/badge/Database-PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Frontend](https://img.shields.io/badge/Frontend-React-61DAFB?style=for-the-badge&logo=react&logoColor=black)

---

## 🚀 Overview

**Smart Learning Hub** is a full-stack web application built for students, instructors, and administrators to manage and engage with educational content. It offers course management, quizzes, progress tracking, and a user-friendly dashboard interface.

---

## 🧰 Tech Stack

| Layer       | Technology               |
|-------------|--------------------------|
| **Frontend**| React, Tailwind CSS      |
| **Backend** | NestJS (TypeScript)      |
| **Database**| PostgreSQL               |
| **ORM**     | TypeORM                  |
| **API**     | RESTful                  |

---

## 📁 Project Structure

```
smart-learning-hub/
├── client/              # React frontend
│   └── src/
├── server/              # NestJS backend
│   └── src/
│       ├── modules/
│       ├── controllers/
│       └── services/
├── .env                 # Environment variables
└── README.md
```

---

## ⚙️ Getting Started

### 🔑 Prerequisites

- Node.js (v16+)
- npm or yarn
- PostgreSQL (installed & running)

---

### 📦 Installation

1. **Clone the repository**

```bash
git clone https://github.com/your-username/smart-learning-hub.git
cd smart-learning-hub
```

2. **Setup environment variables**

Create `.env` files for both frontend and backend:

#### `server/.env`

```env
DATABASE_URL=postgresql://username:password@localhost:5432/dbname
PORT=5000
```

#### `client/.env`

```env
REACT_APP_API_URL=http://localhost:5000
```

3. **Install dependencies**

```bash
# Backend
cd server
npm install

# Frontend
cd ../client
npm install
```

---

### 🏃 Run the App

```bash
# Start backend
cd server
npm run start:dev

# Start frontend
cd ../client
npm start
```

---

## 🧪 Testing

```bash
# Backend tests
cd server
npm run test

# Frontend tests
cd client
npm test
```

---

## ✨ Key Features

- 🔐 Authentication with role-based access (Admin, Instructor, Student)
- 📘 Course, module & quiz creation
- 📊 Real-time progress tracking
- 🖥️ Admin dashboard for management
- 📥 Notifications (optional feature)

---

## 🚢 Deployment

This app can be deployed using:

- **Docker & Docker Compose**
- **Vercel**, **Render**, or **Heroku**

---

## 🤝 Contributing

We welcome contributions! Follow these steps:

```bash
git checkout -b feature/YourFeature
git commit -m "Add your feature"
git push origin feature/YourFeature
```

Then open a Pull Request 🙌

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 👤 Author

**Bilal Pasha**  
[GitHub](https://github.com/Bilal-pasha)
