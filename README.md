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

📂 src ┣ 📂 auth # Authentication Module (JWT) ┣ 📂 books # Book Management Module ┣ 📂 common # Shared Interceptors & Filters ┣ 📂 users # User Management ┣ 📂 database # JSON Files for Data Storage ┣ 📜 main.ts # Application Entry Point ┗ 📜 app.module.ts # Root Module
