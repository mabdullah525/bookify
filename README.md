📚 Bookify — Online Book Listing & Ordering App

Bookify is a modern web application that allows users to list their books for sale and order books listed by others.
Built using React, Firebase, and Tailwind CSS, it offers a fast, responsive, and user-friendly experience.

🚀 Live Demo
https://bookify-firebase.netlify.app


🖼️ Features

✅ User Authentication

Sign up / Login using Email & Password or Google Sign-In (Firebase Auth)

✅ Book Management

Add new books with title, price, ISBN, and cover image (uploaded via Cloudinary)

View all listed books in an elegant card layout

✅ Order System

Users can place orders directly from a book’s detail page

Book owners can view orders placed for their books

✅ Responsive Design

Styled using Tailwind CSS

Works seamlessly on desktop and mobile devices

✅ Dynamic Routing


🛠️ Tech Stack

| Category      | Technology                  |
| ------------- | --------------------------- |
| Frontend      | React (Vite)                |
| Styling       | Tailwind CSS                |
| Backend       | Firebase (Auth + Firestore) |
| Image Hosting | Cloudinary                  |
| Routing       | React Router DOM            |
| Deployment    | Netlify                     |


📂 Folder Structure

Bookify/
│
├── src/
│   ├── Components/
│   │   ├── Navbar.jsx
│   │   └── Card.jsx
│   │
│   ├── Context/
│   │   └── firebase.jsx
│   │
│   ├── Pages/
│   │   ├── Home.jsx
│   │   ├── List.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── Detail.jsx
│   │   ├── ViewOrder.jsx
│   │   └── ViewOrderDetail.jsx
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── package.json
└── tailwind.config.js

⚙️ Setup Instructions

1️⃣ Clone Repository

git clone https://github.com/yourusername/bookify.git
cd bookify

2️⃣ Install Dependencies
npm install

3️⃣ Setup Environment Variables
Create a file named .env in the project root and add:

VITE_CLOUDINARY_CLOUD_NAME=your_cloud_name
VITE_CLOUDINARY_UPLOAD_PRESET=your_preset_name

Firebase configuration is already included inside firebase.jsx.

5️⃣ Build for Production
npm run dev

🧠 Key Concepts Used

Firebase Authentication: Secure user login system

Firestore Database: Real-time data handling for books & orders

Cloudinary Integration: Fast image upload and storage

React Context API: For global Firebase access

Tailwind Utility Classes: Clean and modern UI



Built with React Router v6

Includes pages for Home, Login, Register, Orders, and Book Details
