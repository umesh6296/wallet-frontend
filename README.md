##  FRONTEND README (`wallet-frontend/README.md`)

```md
# Digital Wallet – Frontend (React)

##  Overview
This is the React frontend for the Digital Wallet application.
It allows users to view wallet balance, make transactions, and view transaction history.

---

##  Architecture
- React
- Axios
- REST API integration
- Component-based design

---

##  Project Structure


src/
├── components/
│ ├── Wallet.js
│ ├── TransactionForm.js
│ └── TransactionHistory.js
├── services/
│ └── api.js
└── App.js


---

##  Setup Instructions

### 1️ Prerequisites
- Node.js (v16+)
- npm

### 2️ Install Dependencies
```bash
npm install

3️ Start Application
npm start


Frontend runs on:

http://localhost:3000

### Backend Integration

Backend base URL:

http://localhost:8080

## Status

Frontend is fully integrated with backend APIs.


---

#  PART 5: Short Design Explanation (INTERVIEW READY)

###  Add this in **both README or submission text**

```md
##  Design Decisions

- Backend follows layered architecture (Controller → Service → Repository) for clean separation of concerns.
- RESTful APIs are used for frontend-backend communication.
- React frontend is component-based for reusability and maintainability.
- Axios is used for API calls for cleaner HTTP handling.
- CORS is configured globally to allow secure frontend access.
- MySQL is used for persistent storage of wallet and transactions.
