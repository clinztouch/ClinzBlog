# ClinzBlog
# 📘 Clinz Blog — Full-Stack Node.js Application

A fully functional Blog Application built with **Node.js**, **Express**, **MongoDB**, and **EJS**.
Includes an **Admin Dashboard** for managing posts, categories, and pages.
Designed with a clean MVC structure and easily deployable on **Render**.

---

##  Features

### 🌐 Frontend

* Clean and responsive UI
* View all blog posts
* Single post page
* About / Contact pages
* Search functionality (if implemented)

### 🔐 Admin Panel

* Admin authentication (login/logout)
* Create posts
* Edit posts
* Delete posts
* Manage categories (optional)
* Dashboard overview
* Secure session handling

### 🗄 Backend

* Express routing with controllers
* MongoDB via Mongoose
* EJS templates with layouts
* Method-override for PUT/DELETE
* Cookie-based sessions with `connect-mongo`
* Environment variable configuration

---

## 🏗 Tech Stack

**Frontend:**

* HTML5 / CSS3
* EJS
* JavaScript

**Backend:**

* Node.js
* Express
* Mongoose (MongoDB)
* Express-session
* connect-mongo
* method-override
* dotenv

**Deployment:**

* Render
* MongoDB Atlas

---

## 📁 Folder Structure

```
📦 YourProject
├── 📂 public
│   ├── css
│   ├── js
│   └── images
├── 📂 server
│   ├── config
│   │   └── db.js
│   ├── controllers
│   ├── helpers
│   ├── models
│   ├── routes
│   │   ├── main.js
│   │   └── admin.js
│   └── views
│       ├── layouts
│       ├── partials
│       ├── admin
│       └── pages
├── .env
├── package.json
└── server.js / app.js
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repo

```bash
git clone https://github.com/yourusername/your-repo.git
cd your-repo
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Create your `.env` file

```
MONGODB_URI=your-mongodb-connection-string
SESSION_SECRET=your-secret
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=yourpass
```

### 4️⃣ Run the server

```bash
npm start
```

The app will run at:
 **[http://localhost:5000](http://localhost:5000)**

---

## 🛠 Available Scripts

| Script        | Description                               |
| ------------- | ----------------------------------------- |
| `npm start`   | Starts the server                         |
| `npm run dev` | Starts server with nodemon (if installed) |

---

##  API / Route Overview

### Public Routes

| Method | Route       | Description      |
| ------ | ----------- | ---------------- |
| GET    | `/`         | Home page        |
| GET    | `/post/:id` | Single post page |
| GET    | `/about`    | About page       |
| GET    | `/contact`  | Contact page     |

### Admin Routes

| Method | Route                   | Description     |
| ------ | ----------------------- | --------------- |
| GET    | `/admin`                | Admin dashboard |
| GET    | `/admin/posts`          | List posts      |
| GET    | `/admin/posts/add`      | Add post page   |
| POST   | `/admin/posts/add`      | Create post     |
| GET    | `/admin/posts/edit/:id` | Edit post       |
| PUT    | `/admin/posts/edit/:id` | Update post     |
| DELETE | `/admin/posts/:id`      | Delete post     |

---

## ☁️ Deployment (Render)

1. Push your project to GitHub
2. Create a **Render Web Service**
3. Set **Build Command**:

   ```
   npm install
   ```
4. Set **Start Command**:

   ```
   npm start
   ```
5. Add your environment variables (same from `.env`)
6. Deploy 

---

## 📝 Future Improvements

* Rich text editor (Quill / TinyMCE)
* Image uploads (Cloudinary)
* Pagination
* Comments system
* Admin roles

---

## 📄 License

This project is licensed under the **MIT License**.
