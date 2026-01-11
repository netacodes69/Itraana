ITRAANA ✨

Timeless Attars · Pure Essence · Quiet Luxury

ITRAANA is a full-stack luxury attar e-commerce platform inspired by Indian perfumery heritage and modern minimal design.
The project blends storytelling, craftsmanship, and technology to deliver a refined digital commerce experience.

🌿 Brand Philosophy

“Attars are not fragrances. They are memories distilled.”

At ITRAANA, luxury is intentional and restrained.
Every attar is crafted with patience, tradition, and precision — and the digital experience reflects the same values.

🧩 Project Overview

This repository contains:

🎨 Frontend – Premium UI/UX, product discovery, cart & account experience

⚙️ Backend – Secure APIs for authentication, users, orders, wishlist & products

✨ Key Features
🖥️ Frontend

Luxury-inspired minimal UI

Immersive hero & storytelling sections

Product collection grid

Wishlist (♡) support

Add-to-cart functionality

Slide-in Login / Create Account drawer

User account dashboard

Testimonials & brand narrative

Fully responsive design

⚙️ Backend

Secure user authentication (JWT)

Password hashing with bcrypt

User profile management

Wishlist persistence

Cart & order handling

RESTful API architecture

Scalable MongoDB data models

🧱 Tech Stack
Frontend

React + Vite

Tailwind CSS

Context API (Auth & Cart)

Lucide Icons

Backend

Node.js

Express.js

MongoDB + Mongoose

JWT Authentication

📂 Repository Structure
itraana/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── data/
│   │   ├── pages/
│   │   └── main.tsx
│   └── package.json
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── db.js
│   │   ├── models/
│   │   │   ├── User.js
│   │   │   ├── Product.js
│   │   │   └── Order.js
│   │   ├── routes/
│   │   │   ├── auth.routes.js
│   │   │   ├── user.routes.js
│   │   │   ├── product.routes.js
│   │   │   └── order.routes.js
│   │   ├── controllers/
│   │   └── server.js
│   └── package.json
│
└── README.md

bcrypt

dotenv, cors
