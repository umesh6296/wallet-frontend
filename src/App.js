import React, { useState } from 'react';
import Wallet from "./components/Wallet";
import TransactionForm from "./components/TransactionForm";
import TransactionHistory from "./components/TransactionHistory";

function App() {
  const [amount, setAmount] = useState('');
  useEffect(() => {
    connectSocket((data) => {
      alert(`Transaction ${data.txId} → ${data.status}`);
    });
  }, []);

  const makeTransaction = async () => {
    await fetch('http://localhost:8080/transaction', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userId: 1,
        amount: Number(amount),
        type: 'CREDIT'
      })
    });
    alert('Transaction sent');
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Digital Wallet</h1>
      <Wallet />
      <TransactionForm />
      <TransactionHistory />
      
    </div>
  );
}

export default App;
