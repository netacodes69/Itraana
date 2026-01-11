# ITRAANA ✨  
Timeless Attars · Pure Essence · Quiet Luxury

ITRAANA is a full-stack luxury attar (perfume oil) e-commerce platform inspired by India’s rich perfumery heritage and expressed through modern, minimal design. The project focuses on storytelling, craftsmanship, and a refined digital commerce experience.

---

## 🌿 Brand Philosophy

“Attars are not fragrances. They are memories distilled.”

At ITRAANA, every creation is crafted with patience, restraint, and respect for tradition. The digital experience mirrors this philosophy — intentional, calm, and quietly luxurious.

---

## 🧩 Project Overview

This repository contains both:

• **Frontend** – A premium UI for product discovery, cart, wishlist, authentication, and user account  
• **Backend** – Secure REST APIs handling authentication, users, products, orders, and wishlists  

---

## ✨ Features

### 🎨 Frontend
- Luxury-inspired minimal UI
- Immersive hero and storytelling sections
- Product collection with wishlist & cart
- Add-to-cart functionality
- Slide-in login & create account drawer
- User account dashboard
- Recent orders & wishlist management
- Testimonials section
- Fully responsive layout

### ⚙️ Backend
- Secure user authentication (JWT)
- Password hashing using bcrypt
- User profile management
- Wishlist & cart persistence
- Order creation & history
- RESTful API architecture
- Scalable MongoDB models

---

## 🧱 Tech Stack

### Frontend
- React + Vite
- Tailwind CSS
- Context API (Auth & Cart)
- Lucide Icons

### Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- bcrypt
- dotenv, cors

---

## 📂 Repository Structure
itraana/
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ ├── context/
│ │ ├── data/
│ │ ├── pages/
│ │ └── main.tsx
│ └── package.json
│
├── backend/
│ ├── src/
│ │ ├── config/
│ │ │ └── db.js
│ │ ├── models/
│ │ │ ├── User.js
│ │ │ ├── Product.js
│ │ │ └── Order.js
│ │ ├── routes/
│ │ │ ├── auth.routes.js
│ │ │ ├── user.routes.js
│ │ │ ├── product.routes.js
│ │ │ └── order.routes.js
│ │ ├── controllers/
│ │ └── server.js
│ └── package.json
│
└── README.md


---

🔐 Authentication Flow

User opens auth drawer via profile icon

Login or Create Account

JWT issued on successful authentication

Auth state managed on frontend via Context API

Protected routes for account, wishlist, and orders

🛒 Order & Wishlist Flow

User adds products to wishlist or cart

Data is stored and synced with backend

Orders appear in “My Account → Recent Orders”

Wishlist items can be moved to cart

🧠 Design Principles

Quiet luxury over loud UI

Content-first storytelling

Minimal interactions, maximum clarity

Inspired by luxury fashion and fragrance brands

🔮 Future Enhancements

Payment gateway integration

Admin dashboard

Order tracking

Email notifications

Product reviews

Inventory management



Made with 🤍 by Utkarsh & Hardyansh

