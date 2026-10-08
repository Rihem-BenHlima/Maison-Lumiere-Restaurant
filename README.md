# 🍽️ Maison Lumière

A fine dining restaurant website with a table reservation form. ✨

## 🎓 About the Project

This is an **academic project** built for learning purposes. It is a full-stack web application for a fictional French fine dining restaurant, *Maison Lumière*. 🇫🇷 The restaurant, its menu, and its contact details are made up.

The goal is to practise building a complete web app with a separate frontend, backend, and database. 🧠

**What the website includes:**

- 🏠 A hero section introducing the restaurant
- 📖 An "About" section telling the restaurant's story
- 🍷 A menu section presenting the dishes
- 🖼️ A photo gallery
- 📅 A reservation form that sends the booking to the backend, which stores it in MySQL
- 📍 A footer with contact information
- 📱 A responsive layout with scroll animations

**What it demonstrates:**

- 🔗 Connecting a React frontend to a REST API
- 🗄️ Saving data in a MySQL database
- ✅ Basic form handling and validation

## 🧱 Tech Stack

- 🎨 **Frontend**: React + TypeScript + Vite + Tailwind CSS
- ⚙️ **Backend**: Node.js + Express
- 🗄️ **Database**: MySQL

## 📁 Project Structure

```
project/
├── frontend/   🎨 React website (port 5173)
└── backend/    ⚙️ Express API + MySQL (port 4000)
```

## ✅ Requirements

- 🟢 [Node.js](https://nodejs.org) 18 or newer
- 🐬 [MySQL](https://dev.mysql.com/downloads/) 8 or newer, installed and running

## 📦 Install Packages

Install the dependencies for both parts:

```bash
cd frontend
npm install

cd ../backend
npm install
```

## 🔐 Configure the Environment

Copy the example files to create your own `.env` files (skip this if they already exist):

```bash
cd backend
cp .env.example .env

cd ../frontend
cp .env.example .env
```

On Windows PowerShell, use `Copy-Item .env.example .env` instead of `cp`.

Then edit `backend/.env` and put in your own local MySQL settings:

```env
PORT=4000
CORS_ORIGIN=http://localhost:5173

DB_HOST=localhost
DB_PORT=3306
DB_USER=your_mysql_user
DB_PASSWORD=your_mysql_password
DB_NAME=restaurant_db
```

⚠️ The values that ship in `.env` are **mock placeholders**. The site cannot save reservations until you replace them with real credentials for your own MySQL server. Never commit your `.env` files. They are already git-ignored. 🙈

The frontend reads the API address from `frontend/.env`:

```env
VITE_API_URL=http://localhost:4000
```

## 🗄️ Set Up the Database

With MySQL running and your credentials in `backend/.env`:

```bash
cd backend
npm run db:init
```

This creates the `restaurant_db` database and the `reservations` table from `backend/schema.sql`. 🧱

## 🚀 Run the App

Open **two terminals**.

**1️⃣ Backend**

```bash
cd backend
npm run dev
```

The API starts at http://localhost:4000 🟢

**2️⃣ Frontend**

```bash
cd frontend
npm run dev
```

Open http://localhost:5173 in your browser. 🌐

## 🧰 Useful Commands

| Where | Command | What it does |
| --- | --- | --- |
| 🎨 `frontend` | `npm run dev` | Start the dev server |
| 🎨 `frontend` | `npm run build` | Create a production build |
| 🎨 `frontend` | `npm run preview` | Preview the production build |
| 🎨 `frontend` | `npm run typecheck` | Check TypeScript types |
| 🎨 `frontend` | `npm run lint` | Lint the code |
| ⚙️ `backend` | `npm run dev` | Start the API with auto-reload |
| ⚙️ `backend` | `npm start` | Start the API |
| ⚙️ `backend` | `npm run db:init` | Create the database and tables |

## 🔌 API

| Method | Endpoint | Description |
| --- | --- | --- |
| `GET` | `/api/health` | Health check ❤️ |
| `POST` | `/api/reservations` | Save a reservation 📅 |

Example request body for `POST /api/reservations`:

```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "phone": "+216 20 123 456",
  "party_size": 2,
  "reservation_date": "2026-12-24",
  "reservation_time": "19:00",
  "special_requests": "Window seat, please"
}
```

## 🛠️ Troubleshooting

- 🔴 **`'vite' is not recognized`**: dependencies are missing. Run `npm install` inside `frontend`.
- 🔴 **Reservation form shows an error**: check that MySQL is running, the credentials in `backend/.env` are correct, and `npm run db:init` has been run.
- 🔴 **Port already in use**: change `PORT` in `backend/.env` (and `VITE_API_URL` in `frontend/.env` to match).
