# 📚 Library Management System

This is a **NestJS-based Library Management System** that provides APIs for managing books and users. The project **simulates a database using Node.js `fs` (File System) module**, storing and retrieving data from JSON files.  
Additionally, the application **implements authentication using JWT** for secure access control.

## 🚀 Features

- 🔑 **User Authentication** (Signup, Login, JWT-based Authorization)
- 👤 **User Profile Retrieval**
- 📌 **Book Management** (Add, Remove, View Books)
- 🔐 **Role-Based Access Control (RBAC)**
- 📂 **File-Based Storage** (No Database, Uses JSON Files)
- ⚡ **Custom Exception Handling & Interceptors**
- ✅ **Input Validation & Error Handling**

## 🛠️ Tech Stack

- **NestJS** - Backend Framework
- **TypeScript** - Typed JavaScript
- **JWT (JSON Web Token)** - Authentication
- **fs (File System) Module** - Data Storage in JSON Files

## 🗂️ Project Structure
```perl
ecommerce-project/
├── 📂database/ #  Databse Storage Folder
├── 📂src/ # Main dirctoray folder
    ├── auth # Authentication Module (JWT) 
    ├── books # Book Management Module
    ├── common  # Shared Interceptors & Filters
    ├──  users # User Management
    ├── 📜 main.ts # Application Entry Point
    ├── 📜 app.module.ts # Root Module
    
```

## 🛑 Simulated Database (Using JSON)
This project **does not use a real database** like MySQL or MongoDB. Instead, it uses the **fs module** to read and write data in JSON files.

- **Users Data:** Stored in `database/users.json`
- **Books Data:** Stored in `database/books.json`

Example of `users.json`:

```json
{
  "userId123": {
    "username": "JohnDoe",
    "password": "hashedPassword",
    "email": "johndoe@example.com",
    "role": "Librarian"
  }
}
```

## 🔑 Authentication (JWT)

# Authentication is handled using JSON Web Tokens (JWT).
Users must log in to receive a JWT token, which is required for accessing protected routes.


# 🟢 Authentication

- POST /auth/signup → Register a new user
- POST	/auth/login	Login and receive a JWT token
- GET	/auth/profile	Get logged-in user's profile

# 📚 Book Management Routes

- POST	/book/add	Add a new book (Librarian Only)
- GET	/book/viewAllBooks	View all books
- GET	/book/chooseBook/:bookId	Get a specific book
- DELETE	/book/remove/:bookId	Remove a book (Librarian Only)

📌 Note: Protected routes require a Bearer Token in the Authorization header.
Example: Authorization: Bearer <your_token>


# 🛡️ Exception Handling & Interceptors

- Global Exception Filter ensures consistent error responses.
- Response Interceptor formats API responses in a structured manner.

```json
{
  "statusCode": 200,
  "message": "Book found",
  "data": {
    "bookTitle": "Oliver Twist",
    "description": "something about street kids",
    "bookYear": "1995"
  }
}
```









