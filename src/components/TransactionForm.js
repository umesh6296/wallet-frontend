import React, { useState } from "react";
import api from "../services/api";

function TransactionForm() {
  const [amount, setAmount] = useState("");

  const submit = () => {
    api.post("/transaction", {
      userId: 1,
      amount: amount,
      type: "CREDIT"
    })
    .then(() => alert("Transaction Sent"))
    .catch(err => alert("Error"));
  };

  return (
    <div>
      <h2>Make Transaction</h2>
      <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={e => setAmount(e.target.value)}
      />
      <button onClick={submit}>Make Transaction</button>
    </div>
  );
}

export default TransactionForm;
