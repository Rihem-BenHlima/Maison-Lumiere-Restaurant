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
├── frontend/   🎨 React website
└── backend/    ⚙️ Express API + MySQL
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

**2️⃣ Frontend**

```bash
cd frontend
npm run dev
```

## 🛠️ Troubleshooting

- 🔴 **`'vite' is not recognized`**: dependencies are missing. Run `npm install` inside `frontend`.
- 🔴 **Reservation form shows an error**: check that MySQL is running, the credentials in `backend/.env` are correct, and `npm run db:init` has been run.
- 🔴 **Port already in use**: change `PORT` in `backend/.env` (and `VITE_API_URL` in `frontend/.env` to match).
