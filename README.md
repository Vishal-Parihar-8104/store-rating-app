# ⭐ Store Rating App

A full-stack web application that allows users to **rate stores (1–5 stars)**, browse ratings, and manage access based on **user roles** (Admin, Store Owner, Customer).  
This project is built as part of a **FullStack Intern Coding Challenge**.

---

## 📌 Features
- 🔐 **Authentication System** (JWT-based login & signup)
- 👥 **Role-based Access Control**
  - **Admin** → Manage users & stores
  - **Store Owners** → Manage their own store & view ratings
  - **Customers** → Browse stores & submit ratings
- ⭐ **Store Rating System** (1–5 stars)
- 📊 **Dashboard for Store Owners/Admins**
- 🔎 **Search & Filter Stores**
- 🎨 **Responsive UI with TailwindCSS**

---

## 🛠️ Tech Stack

### Frontend
- ⚛️ React.js (Vite)
- 🎨 Tailwind CSS
- 🌐 Axios (API calls)

### Backend
- 🚀 Express.js (Node.js)
- 🛢️ PostgreSQL / MySQL
- 🔐 JWT (Authentication)
- 🧩 Sequelize / Prisma (ORM)

---

## 📂 Folder Structure

### Frontend (`/frontend`)
frontend/
│── src/
│ ├── assets/ # Static images/icons
│ ├── components/ # Reusable UI Components
│ ├── pages/ # Page-level components (Screens)
│ ├── context/ # React Context (Auth, User, etc.)
│ ├── hooks/ # Custom Hooks
│ ├── services/ # API Calls
│ ├── utils/ # Helpers
│ ├── App.jsx
│ ├── main.jsx
│ └── index.css # Tailwind entry
│
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── vite.config.js

backend/
│── src/
│ ├── config/ # DB & JWT config
│ ├── controllers/ # Business logic
│ ├── middleware/ # Auth & Role checks
│ ├── models/ # Database models
│ ├── routes/ # API routes
│ ├── server.js # Entry point
│ └── app.js
│
├── package.json
└── .env

🧑‍💻 Contributors

Vishal Kumar Parihar – FullStack Developer
