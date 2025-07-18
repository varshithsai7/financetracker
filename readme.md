# Finance Tracker

A full-stack Finance Tracker application to help users manage their income, expenses, and overall financial health. Built with a React frontend and Node.js/Express backend, with MongoDB for data storage.

---

## Features
- User registration and authentication
- Add, edit, and delete transactions (income/expense)
- View transaction history
- Dashboard with financial summaries
- Responsive UI

---

## Tech Stack
- **Frontend:** React (JavaScript)
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Other:** Mongoose, JWT, bcrypt

---

## Getting Started

### Prerequisites
- Node.js (v14+ recommended)
- npm or yarn
- MongoDB instance (local or cloud)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/financetracker.git
   cd financetracker
   ```

2. **Install server dependencies:**
   ```bash
   npm install
   ```

3. **Install client dependencies:**
   ```bash
   cd client
   npm install
   cd ..
   ```

4. **Configure environment variables:**
   - Create a `.env` file in the root directory and add your MongoDB URI and JWT secret:
     ```env
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret
     PORT=5000
     ```

5. **Start the backend server:**
   ```bash
   npm start
   ```

6. **Start the frontend app:**
   ```bash
   cd client
   npm start
   ```

---

## Usage
- Register a new account or log in.
- Add income or expense transactions.
- View your transaction history and dashboard summary.

---

## API Endpoints

### User
- `POST /api/users/register` — Register a new user
- `POST /api/users/login` — Login and receive JWT

### Transactions
- `GET /api/transactions` — Get all transactions for the user
- `POST /api/transactions` — Add a new transaction
- `PUT /api/transactions/:id` — Update a transaction
- `DELETE /api/transactions/:id` — Delete a transaction

---

## Folder Structure
```
financetracker/
├── client/           # React frontend
├── config/           # Database connection
├── controllers/      # Express route controllers
├── models/           # Mongoose models
├── routes/           # Express routes
├── server.js         # Entry point for backend
└── readme.md         # Project documentation
```

---

## Contributing
Contributions are welcome! Please open issues or submit pull requests for improvements and bug fixes.

---

## License
This project is for educational purpose

---
.
