# 📝 EJS Todo App

A full-stack Todo application built with **Node.js**, **Express**, **MongoDB**, and **EJS** templating engine. Features user authentication with secure password hashing and session management.

---

## ✨ Features

- 🔐 User Registration & Login
- 🔒 Password hashing with bcryptjs
- 📝 Add, View & Delete Todos
- 🛡️ Protected routes with session-based authentication
- 🎨 Clean and responsive UI

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| Node.js | Runtime environment |
| Express.js | Web framework |
| MongoDB | Database |
| Mongoose | MongoDB ODM |
| EJS | Templating engine |
| bcryptjs | Password hashing |
| express-session | Session management |
| dotenv | Environment variables |

---

## 📁 Project Structure

```
ejs-todo-app/
├── app.js
├── package.json
├── .env
├── models/
│   ├── User.js
│   └── Todo.js
├── routes/
│   ├── authRoutes.js
│   └── todoRoutes.js
├── middleware/
│   └── authMiddleware.js
├── public/
│   └── css/
│       └── styles.css
└── views/
    ├── partials/
    │   ├── header.ejs
    │   └── footer.ejs
    ├── login.ejs
    ├── register.ejs
    └── dashboard.ejs
```

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/AdityaSinghs2707/ejs-todo-app.git
cd ejs-todo-app
```

### 2. Install dependencies
```bash
npm install
```

### 3. Create `.env` file in root folder
```
MONGO_URI=mongodb://localhost:27017/todo-app
SESSION_SECRET=your-secret-key
PORT=3000
```

### 4. Run the app
```bash
# Development mode
npm run dev

# Production mode
npm start
```

### 5. Open in browser
```
http://localhost:3000
```

---

## 📸 Pages

- **/** → Login Page
- **/register** → Register Page
- **/dashboard** → Todo Dashboard (protected)
- **/logout** → Logout

---

## ⚙️ Environment Variables

| Variable | Description |
|----------|-------------|
| `MONGO_URI` | MongoDB connection string |
| `SESSION_SECRET` | Secret key for sessions |
| `PORT` | Port number (default: 3000) |

---

## 👤 Author

**Aditya Singh**  
GitHub: [@AdityaSinghs2707](https://github.com/AdityaSinghs2707)
