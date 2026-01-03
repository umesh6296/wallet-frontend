---

# ✅ FRONTEND README (FINAL)

📄 **`wallet-frontend/README.md`**

```md
# Digital Wallet – Frontend (React)

## Overview
This is the React frontend for the Digital Wallet application.
It allows users to perform wallet transactions, view real-time
transaction status updates, wallet balance, and transaction history.

The frontend is fully integrated with a Kafka-powered backend
and receives real-time updates via WebSocket.

---

## Problems Covered

### Problem 1: Digital Wallet UI
- Wallet balance display
- Transaction creation (credit/debit)
- Transaction history list

### Problem 2: Real-Time Transaction Status
- Pending transactions
- Live status updates (SUCCESS / FAILURE)
- WebSocket-based notifications

---

## Architecture

- React (Functional Components)
- Axios for REST API calls
- WebSocket (STOMP client)
- Component-based UI design

---

## Project Structure

src/
├── components/
│ ├── Wallet.js
│ ├── TransactionForm.js
│ └── TransactionHistory.js
├── services/
│ ├── api.js
│ └── socket.js
├── App.js
└── index.js

yaml
Copy code

---

## Setup Instructions

### 1️⃣ Prerequisites
- Node.js (v16+)
- npm

---

### 2️⃣ Install Dependencies

```bash
npm install
3️⃣ Start Frontend
bash
Copy code
npm start
Frontend runs on:

arduino
Copy code
http://localhost:3000
Backend Integration
Base URL:

arduino
Copy code
http://localhost:8080
WebSocket Endpoint:

bash
Copy code
ws://localhost:8080/ws
Subscribed Topic:

bash
Copy code
/topic/transaction-status
Features
Wallet balance auto-refresh

Asynchronous transaction processing

Real-time transaction status alerts

Clean and modular UI components

Design Decisions
React functional components for simplicity

Separation of concerns using services folder

Axios for clean HTTP handling

WebSocket for real-time updates

Reusable UI components

Status
✅ Frontend fully integrated with backend
✅ Real-time updates working
✅ Production-ready structure