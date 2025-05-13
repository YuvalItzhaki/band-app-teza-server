# 🎸 Band App Generator – Backend

This is the backend server for the **Band App Generator** app. It receives form data (band name, description, year, and optional API key), processes the request, stores it in MongoDB, and returns generated results (text and optionally image) along with statistics.

---

## 📦 Tech Stack

- **Node.js**
- **Express**
- **MongoDB** (with Mongoose)
- **CORS**
- **dotenv**

---

## 🚀 Getting Started

### ✅ Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community) (or use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))

---

### 📁 Installation

1. **Clone the repository:**

   bash
   git clone https://github.com/YuvalItzhaki/band-app-teza-server.git
   cd band-app-teza-server
   npm install

### Set up .env

Create a file named .env in the root directory and add:

PORT=5001
MONGO_URI=mongodb://localhost:27017/bandform
If using MongoDB Atlas, replace MONGO_URI with your Atlas connection string.

### Start MongoDB

bash
mongod

### Run the server

bash
npm run dev

### License

MIT
